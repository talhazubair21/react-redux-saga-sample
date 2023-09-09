declare global {
  // Main reducer
  interface AppStore {
    app: AppStoreState;
  }

  // App Reducer
  interface AppStoreState {
    users: any[];
    loading: Boolean;
  }
}

export {};
