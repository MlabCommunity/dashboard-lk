import useAxios from "axios-hooks";

export const useWorkerData = () => {
  const workerData = (email: string) =>
    useAxios(
      {
        url: `/pet/shelters/workers/${email}`,
        method: "POST",
      },
      { manual: true }
    );
  return { workerData };
};
