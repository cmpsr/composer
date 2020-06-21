"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FirestoreDb = void 0;

var _firestore = require("@google-cloud/firestore");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class FirestoreDb {
  constructor(config) {
    this.db = new _firestore.Firestore(config);
  }

  async getItem(id, from) {
    const doc = await this.db.collection(from).doc(id.toString()).get();
    return !doc.data()._deleted ? _objectSpread({
      id: doc.id
    }, this.removeHiddenFields(doc.data())) : undefined;
  }

  async getData(from, modifiers) {
    let query = this.prepareQuery(from, modifiers === null || modifiers === void 0 ? void 0 : modifiers.conditions);
    query = this.addOrderBy(query, modifiers === null || modifiers === void 0 ? void 0 : modifiers.orderBy);

    if (modifiers === null || modifiers === void 0 ? void 0 : modifiers.limit) {
      const {
        page,
        count
      } = modifiers.limit;
      query = query.startAt(page * count).limit(count);
    }

    const snapshot = await query.get();
    const data = [];
    snapshot.forEach(doc => {
      data.push(_objectSpread({
        id: doc.id
      }, this.removeHiddenFields(doc.data())));
    });
    return data;
  }

  async save(obj, to, primaryCredentialField) {
    const collection = this.db.collection(to);
    let doc;

    if (primaryCredentialField && obj.hasOwnProperty(primaryCredentialField)) {
      doc = collection.doc(obj[primaryCredentialField]);
    } else {
      // if no id provided use an auto generated id
      doc = collection.doc();
    }

    await doc.set(this.addNotDeleted(this.addCreatedAt(obj)));
    const savedObject = await doc.get();
    return _objectSpread({
      id: savedObject.id
    }, this.removeHiddenFields(savedObject.data()));
  }

  async update(id, values, to) {
    const doc = this.db.collection(to).doc(id.toString());
    await doc.update(this.addUpdatedAt(values));
    const updatedObject = await doc.get();
    return _objectSpread({
      id: updatedObject.id
    }, this.removeHiddenFields(updatedObject.data()));
  }

  async delete(id, from) {
    return this.update(id, {
      _deleted: true
    }, from);
  }

  async hardDelete(id, from) {
    const doc = this.db.collection(from).doc(id.toString());
    return doc.delete();
  }

  listen(from, modifiers, callback) {
    let query = this.prepareQuery(from, modifiers.conditions);
    query = this.addOrderBy(query, modifiers.orderBy);
    return query.onSnapshot(snapshot => {
      callback(snapshot.docChanges());
    });
  }

  prepareQuery(from, conditions) {
    const collection = this.db.collection(from);
    let query = collection.where('_deleted', '==', false);

    if (conditions) {
      conditions.forEach(condition => {
        query = query.where(condition.field, condition.operator, condition.value);
      });
    }

    return query;
  }

  addOrderBy(query, orderBy) {
    if (!orderBy || orderBy.length < 1) return query;
    let orderedQuery = query;
    orderBy.forEach(order => {
      orderedQuery = orderedQuery.orderBy(order.field, order.order || 'asc');
    });
    return orderedQuery;
  }

  addNotDeleted(obj) {
    return _objectSpread(_objectSpread({}, obj), {}, {
      _deleted: false
    });
  }

  addCreatedAt(obj) {
    if (obj.hasOwnProperty('_createdAt') || obj.hasOwnProperty('createdAt')) {
      return obj;
    }

    return _objectSpread(_objectSpread({}, obj), {}, {
      _createdAt: _firestore.FieldValue.serverTimestamp()
    });
  }

  addUpdatedAt(obj) {
    if (obj.hasOwnProperty('_updatedAt') || obj.hasOwnProperty('updatedAt')) {
      return obj;
    }

    return _objectSpread(_objectSpread({}, obj), {}, {
      _updatedAt: _firestore.FieldValue.serverTimestamp()
    });
  }

  removeHiddenFields(obj) {
    var newObj = _objectSpread({}, obj);

    delete newObj['_createdAt'];
    delete newObj['_deleted'];
    return newObj;
  }

}

exports.FirestoreDb = FirestoreDb;