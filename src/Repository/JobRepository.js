import apiClient from "./BaseRepository";

export const fetchJobList = (jobFilter = {}) =>
  apiClient.get("positions", {
    params: {
      description: jobFilter.description,
      location: jobFilter.location,
      lat: jobFilter.lat,
      long: jobFilter.long,
      full_time: jobFilter.isFullTime,
      page: jobFilter.page,
    },
  });
