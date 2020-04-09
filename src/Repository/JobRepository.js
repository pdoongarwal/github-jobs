import apiClient from "./BaseRepository";

export const fetchJobList = (jobFilter = {}) =>
  apiClient.get("positions.json", {
    params: {
      description: jobFilter.description,
      location: jobFilter.location,
      lat: jobFilter.lat,
      long: jobFilter.long,
      full_time: jobFilter.isFullTime,
      search: jobFilter.searchTerm,
      page: jobFilter.page,
    },
  });

export const fetchJobDetails = (jobId, markdown) =>
  apiClient.get(`positions/${jobId}.json`, {
    params: {
      markdown,
    },
  });
