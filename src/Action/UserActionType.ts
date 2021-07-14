export const USER_INFO_LOADING = "USER_INFO_LOADING";
export const USER_INFO_FAIL = "USER_INFO_FAIL";
export const USER_INFO_SUCCESS = "USER_INFO_SUCCESS";
export const USER_INFO_CLEAR = "USER_INFO_CLEAR"


export type UserType = {
  results: UserInfo[];
};



export type UserInfo = {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {
    city: string;
  };
  dob: {
    date: string;
    age:number;
  };
  picture:{
    large: string,
    medium: string,
    thumbnail: string
  }
};



export interface userInfoLoading {
  type: typeof USER_INFO_LOADING;
}

export interface userInfoFail {
  type: typeof USER_INFO_FAIL;
}

export interface userInfoSuccess {
  type: typeof USER_INFO_SUCCESS;
  payload: UserType;
}



export type userDispatchTypes =
  | userInfoLoading
  | userInfoFail
  | userInfoSuccess
