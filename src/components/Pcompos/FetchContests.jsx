import { pastContestsActions } from "@/store/pastContestsSlice";
import { upcomingContestsActions } from "@/store/upcomingContestsSlice";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const API_KEY = import.meta.env.VITE_CLIST_API_KEY;
const USERNAME = import.meta.env.VITE_CLIST_USERNAME;
const API_URL = import.meta.env.VITE_CLIST_URL;

const FetchContests = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUpcomingContests = async () => {
      const response = await fetch(
        `${API_URL}?username=${USERNAME}&api_key=${API_KEY}&resource__in=leetcode.com,codeforces.com,codechef.com,atcoder.jp&upcoming=true&limit=100`
      );

      const data = await response.json();

      dispatch(upcomingContestsActions.addContests(data.objects));

      const now = new Date().toISOString();
      const pastLimit = new Date();
      pastLimit.setDate(pastLimit.getDate() - 60);
      const pastLimitISO = pastLimit.toISOString();

      const resources = [
        "leetcode.com",
        "codeforces.com",
        "codechef.com",
        "atcoder.jp",
      ];

      const responses = await Promise.all(
        resources.map((resource) =>
          fetch(
            `${API_URL}?username=${USERNAME}&api_key=${API_KEY}&resource=${resource}&end__lt=${now}&start__gt=${pastLimitISO}&limit=50`
          ).then((res) => res.json())
        )
      );

      let pastContests = responses.flatMap((response) => response.objects);

      pastContests.sort((a, b) => new Date(b.start) - new Date(a.start));

      dispatch(pastContestsActions.addContests(pastContests));
    };
    fetchUpcomingContests();
  }, [dispatch]);

  return <div></div>;
};

export default FetchContests;
