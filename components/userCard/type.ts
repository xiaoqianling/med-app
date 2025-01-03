export enum UserRoleEnum {
  DOCTOR = 0,
  PATIENT = 1,
  ADMIN = 2,
  SYSTEM = 3
}

export const UserRoleMap = {
  [UserRoleEnum.DOCTOR]: "主治医师",
  [UserRoleEnum.PATIENT]: "患者",
  [UserRoleEnum.ADMIN]: "管理员",
  [UserRoleEnum.SYSTEM]: "系统"
};

export enum DepartmentEnum {
  NONE = 0,
  INNER = 1,
  OUTER = 2
}

export const DepartmentMap = {
  [DepartmentEnum.NONE]: "无",
  [DepartmentEnum.INNER]: "门诊内科",
  [DepartmentEnum.OUTER]: "门诊外科"
};
