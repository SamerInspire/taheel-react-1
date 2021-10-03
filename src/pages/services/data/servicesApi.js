import { APIRequest } from "src/api/APIRequest";

const getMyTasksFun = async (userEmail) => {
  const url = 'taheel-apis-utilities-GetGetExternalUserTasks-v2';
  const queryParams = { userEmail, taskStatus: 0 };
  const response = await APIRequest({ url, queryParams });
  return response;
};

const CancelTCRequest = async (externalUserTaskID, licenceNumber) => {
  const url = 'taheel-apis-services-continueFinalLicense-v2';
  const queryParams = { externalUserTaskID, cancel: true, center: { licenceNumber } };
  const response = await APIRequest({ url, queryParams });
  return response;
}
export { getMyTasksFun, CancelTCRequest }