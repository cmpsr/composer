# ANALYTICS

## Philosophy

To be analytic provider agnostic while mirroring itself into the React ecosystem. Since Segment is also trying to do the same thing, their API makes sense as a good base.

## How it works

React app is wrapped in `<AnalyticsProvider>` which passes `context` down with functions to track user activities. When these functions are called, it will loop through all valid analytics providers and call their equivalent api.

## API

**identify**: Let the provider know who the logged in user is
**group**: If there are multiple portals, this helps separate them. This is advanced.
**page**: Track a new page, can be added to Next's router
**track**: Track an even such as a button click
**user**: Returns the auto assigned id
**reset**: Clear the _identity_

More information can be found on [Segment](https://segment.com/docs/connections/sources/catalog/libraries/website/javascript/)

## Supported Providers

- GTag
- Segment
- GA (will deprecated july 2023)

## Setup

### Compile

To compile this library please run `npm run libbuild`

### Add Provider

Wrap the root of your React app in `<AnalyticsProvider><YOUR APP /></AnalyticsProvider>`.

Here are the props you can pass in to enable these providers.

```typescript
export interface IAnalyticsProvider {
  segment?: ISegmentConfig;
  gtag?: IGTagConfig;
  ga?: IGAConfig;
}
```

### Use Function

```typescript
import useAnalytics from 'useAnalytics';

const { track } = useAnalytics();
track('Hello World');
```

## TODO

Add tests
