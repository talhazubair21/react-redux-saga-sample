import { useSelector } from "react-redux";

export const useAppStateSelector = <TSelected>(
  selector: (state: AppStore) => TSelected,
  equalityFn?: (left: TSelected, right: TSelected) => boolean,
): TSelected => {
  return useSelector<AppStore, TSelected>(selector, equalityFn);
};

export const buildSubStateSelector = <TSubState>(
  baseSubStateSelector: (state: AppStore) => TSubState,
) => {
  return function <TSelected>(
    subSelector: (state: TSubState) => TSelected,
    equalityFn?: (left: TSelected, right: TSelected) => boolean,
  ) {
    const selector = (state: AppStore) =>
      subSelector(baseSubStateSelector(state));
    return useSelector<AppStore, TSelected>(selector, equalityFn);
  };
};