import { useState } from "react";
import axios, { AxiosResponse } from "axios";
import { Todo } from "../types/Todo";

const apiUrl = "http://localhost:5000/todos";
const errorMessage = "サーバーとの通信に失敗しました。";

export const useFetchHelper = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const getData = async () => {
    setLoading(true);
    try {
      const response: AxiosResponse<Todo[]> = await axios.get<Todo[]>(
        `${apiUrl}`
      );
      return response.data;
    } catch (error: any) {
      console.log(`GET RequestError: ${error.message}`);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const postData = async (postData: Todo) => {
    setLoading(true);
    try {
      const response: AxiosResponse<Todo> = await axios.post<Todo>(
        apiUrl,
        postData
      );
      return response.data;
    } catch (error: any) {
      console.log(`POST RequestError: ${error.message}`);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const putData = async (taskId: string, putData: Todo) => {
    setLoading(true);
    try {
      const response: AxiosResponse = await axios.put(
        `${apiUrl}/${taskId}`,
        putData
      );
      return response.data;
    } catch (error: any) {
      console.log(`PUT RequestError: ${error.message}`);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const deleteData = async (taskId: string) => {
    setLoading(true);
    try {
      const response: AxiosResponse = await axios.delete(`${apiUrl}/${taskId}`);
      return response.data;
    } catch (error: any) {
      console.log(`DELETE RequestError: ${error.message}`);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  };
  return { loading, getData, postData, putData, deleteData };
};
