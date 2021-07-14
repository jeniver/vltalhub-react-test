export const USER_AGE_LOADING = "USER_AGE_LOADING";
export const USER_AGE_FAIL = "USER_AGE_FAIL";
export const USER_AGE_SUCCESS = "USER_AGE_SUCCESS";

export type Age = {
  age: UserAge[];
};

export type UserAge = {
  name: string;
  age: number;
  count: number;
};

export interface userAgeLoading {
  type: typeof USER_AGE_LOADING;
}

export interface userAgeFail {
  type: typeof USER_AGE_FAIL;
}

export interface userAgeSuccess {
  type: typeof USER_AGE_SUCCESS;
  payload: Age;
}

export type userDispatchAge = userAgeLoading | userAgeSuccess | userAgeFail;
