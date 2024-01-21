export class FailedFetchingData extends Error {
  constructor() {
    super('Failed fetching data.');
  }
}
