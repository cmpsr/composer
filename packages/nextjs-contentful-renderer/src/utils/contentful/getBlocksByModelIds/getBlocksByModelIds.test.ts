// import { getRouteBySlug } from './getBlocksByModelIds';

// describe('getRouteBySlug', () => {
//   const mockQueryRoute = jest.fn();
//   mockQueryRoute.mockResolvedValue({
//     data: {
//       replica: {
//         items: [],
//       },
//       route: {
//         items: [
//           {
//             id: 'route_id',
//             variants: {
//               items: [
//                 {
//                   traffic: 1,
//                   page: {
//                     sys: { id: 'page_id' },
//                   },
//                   utmCampaign: 'utm_campaign',
//                 },
//               ],
//             },
//           },
//         ],
//       },
//     },
//   });
//   const mockApolloClientRoute: any = {
//     query: (params: Record<string, unknown>) => mockQueryRoute(params),
//   };

//   const mockQueryReplica = jest.fn();
//   mockQueryReplica.mockResolvedValue({
//     data: {
//       replica: {
//         items: [
//           {
//             id: 'replica_id',
//             domain: 'my_domain',
//             modelData: [],
//             pageTemplate: {
//               sys: { id: 'page_id' },
//             },
//             slug: '/route_slug',
//           },
//         ],
//       },
//       route: {
//         items: [],
//       },
//     },
//   });
//   const mockApolloClientReplica: any = {
//     query: (params: Record<string, unknown>) => mockQueryReplica(params),
//   };

//   const slug = '/route_slug';
//   const slugWithoutSlash = slug.slice(1);
//   const preview = true;

//   test('should query apollo to retrieve data', async () => {
//     await getRouteBySlug(mockApolloClientRoute, slug, preview);
//     expect(mockQueryRoute).toBeCalledTimes(1);
//     expect(mockQueryRoute).toBeCalledWith({
//       query: expect.anything(),
//       variables: {
//         slug,
//         domain: process.env.SITE_DOMAIN,
//         preview,
//       },
//     });
//   });

//   test('should prefix slug with a slash', async () => {
//     await getRouteBySlug(mockApolloClientRoute, slugWithoutSlash, preview);
//     expect(mockQueryRoute).toBeCalledTimes(1);
//     expect(mockQueryRoute).toBeCalledWith({
//       query: expect.anything(),
//       variables: {
//         slug,
//         domain: process.env.SITE_DOMAIN,
//         preview,
//       },
//     });
//   });

//   test('should return first route returned', async () => {
//     const route = await getRouteBySlug(mockApolloClientRoute, slug, preview);
//     expect(route).toStrictEqual({
//       id: 'route_id',
//       slug,
//       variants: [
//         {
//           traffic: 1,
//           page: 'page_id',
//           utmCampaign: 'utm_campaign',
//         },
//       ],
//     });
//   });

//   test('should query apollo to retrieve data - replica', async () => {
//     await getRouteBySlug(mockApolloClientReplica, slug, preview);
//     expect(mockQueryReplica).toBeCalledTimes(1);
//     expect(mockQueryReplica).toBeCalledWith({
//       query: expect.anything(),
//       variables: {
//         slug,
//         domain: process.env.SITE_DOMAIN,
//         preview,
//       },
//     });
//   });

//   test('should return first replica returned', async () => {
//     const replica = await getRouteBySlug(mockApolloClientReplica, slug, preview);
//     expect(replica).toStrictEqual({
//       id: 'replica_id',
//       modelData: [],
//       page: 'page_id',
//       slug: '/route_slug',
//     });
//   });
// });
