import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../ui/button";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { FaBookmark } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import Autoplay from "embla-carousel-autoplay";
import { Badge } from "../ui/badge";
import { bookmarkedActions } from "@/store/bookmarkedSlice";

const All = () => {
  const [activeTab, setActiveTab] = useState("upcoming");
  const [bm, setBm] = useState(false);
  const dispatch = useDispatch();

  const contests = useSelector((store) => store.upcomingContests);
  const recentContests = useSelector((store) => store.pastContests);
  const bookmarkedContests = useSelector((store) => store.bookmarked);
  const coolStyle =
    "flex flex-col justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 min-h-[270px] border border-gray-300 dark:border-gray-700";

  const formatTime = (start) => {
    const startDate = new Date(start);

    const formattedDate = startDate.toLocaleString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
      timeZoneName: "short",
    });
    return formattedDate;
  };

  const renderContests = (contest_list) => {
    if (!contest_list.length) {
      return (
        <div className="flex items-center justify-center h-40 w-full bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg">
          <p className="text-gray-600 dark:text-gray-400 text-lg font-semibold">
            {bm === true
              ? "You haven't bookmarked any contests yet. Start saving your favorites!"
              : "No contests available at the moment. Check back later!"}
          </p>
        </div>
      );
    }
    return (
      <Carousel plugins={[Autoplay({ delay: 1500 })]} className="w-full py-10">
        <CarouselContent className="w-2/5 flex items-center">
          {contest_list.length > 0 ? (
            contest_list.map((contest) => (
              <CarouselItem key={contest.id} className="pl-5">
                {/* {contest.resource} */}
                <div className={coolStyle}>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {contest.event}
                  </h3>
                  <div>
                    {contest.resource === "codeforces.com" ? (
                      <p>
                        <img
                          src="codeforces.png"
                          alt="Codeforces"
                          className="w-6 h-6 inline-block mr-2"
                        />
                        Codeforces
                      </p>
                    ) : contest.resource === "leetcode.com" ? (
                      <p>
                        <img
                          src="leetcode.png"
                          alt="LeetCode"
                          className="w-6 h-6 inline-block mr-2"
                        />
                        LeetCode
                      </p>
                    ) : contest.resource === "atcoder.jp" ? (
                      <p>
                        <img
                          src="atcoder.webp"
                          alt="AtCoder"
                          className="w-6 h-6 inline-block mr-2"
                        />
                        AtCoder
                      </p>
                    ) : contest.resource === "codechef.com" ? (
                      <p>
                        <img
                          src="codechef.jpg"
                          alt="CodeChef"
                          className="w-6 h-6 inline-block mr-2"
                        />
                        CodeChef
                      </p>
                    ) : (
                      <p>
                        <img
                          src=""
                          alt="Other"
                          className="w-6 h-6 inline-block mr-2"
                        />
                        Other
                      </p>
                    )}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    📅 Starts at: {formatTime(contest.start)}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    ⏳ Duration: {(contest.duration / 3600).toFixed(2)} hours
                  </p>
                  <div className="flex items-center justify-between mt-4">
                    <Badge asChild>
                      <a
                        href={contest.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer"
                      >
                        VIEW CONTEST
                      </a>
                    </Badge>
                    <Badge asChild>
                      <Button
                        onClick={() => {
                          if (
                            bookmarkedContests.some((c) => c.id === contest.id)
                          ) {
                            dispatch(
                              bookmarkedActions.removeContest(contest.id)
                            );
                          } else {
                            dispatch(bookmarkedActions.addContest(contest));
                          }
                        }}
                        className={`px-4 py-2 rounded-lg shadow-md transition ${
                          bookmarkedContests.some((c) => c.id === contest.id)
                            ? "bg-teal-500 text-white hover:bg-teal-600"
                            : "bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-800"
                        }`}
                      >
                        {bookmarkedContests.some((c) => c.id === contest.id) ? (
                          <FaBookmark />
                        ) : (
                          <CiBookmark />
                        )}
                      </Button>
                    </Badge>
                  </div>
                </div>
              </CarouselItem>
            ))
          ) : (
            <p> No contests</p>
          )}
        </CarouselContent>
      </Carousel>
    );
  };

  return (
    <div className="flex flex-col items-center p-6 w-full mx-auto">
      <div className="flex justify-center gap-4 mb-6 bg-gray-200 dark:bg-gray-700 p-4 rounded-lg shadow-md">
        <Button
          className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
            activeTab === "upcoming"
              ? ""
              : "bg-gray-400 dark:bg-gray-600 text-gray-800 dark:text-gray-200"
          }`}
          onClick={() => setActiveTab("upcoming")}
        >
          Upcoming Contests
        </Button>
        <Button
          className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
            activeTab === "previous"
              ? ""
              : "bg-gray-400 dark:bg-gray-600 text-gray-800 dark:text-gray-200"
          }`}
          onClick={() => setActiveTab("previous")}
        >
          Previous Contests
        </Button>
        <Button
          className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
            activeTab === "bookmarked"
              ? ""
              : "bg-gray-400 dark:bg-gray-600 text-gray-800 dark:text-gray-200"
          }`}
          onClick={() => {
            setActiveTab("bookmarked");
            setBm(!bm);
          }}
        >
          Bookmarked Contests
        </Button>
      </div>
      {activeTab === "upcoming"
        ? renderContests(contests)
        : activeTab === "previous"
        ? renderContests(recentContests)
        : renderContests(bookmarkedContests)}
    </div>
  );
};

export default All;
