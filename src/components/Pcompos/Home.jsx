import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import Codeforces from "./Codeforces";
import Leetcode from "./Leetcode";
import Atcoder from "./Atcoder";
import Codechef from "./Codechef";
import All from "./All";
// import { ModeToggle } from "../mode-toggle";
// import { useTheme } from "../theme-provider";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "../ui/dropdown-menu";
// import { Button } from "../ui/button";
// import { Moon, Sun } from "lucide-react";

const Home = () => {
  const [selectedPlatform, setSelectedPlatform] = useState("all");
  // const { setTheme } = useTheme();

  const platformComponents = {
    all: <All />,
    codeforces: <Codeforces />,
    leetcode: <Leetcode />,
    atcoder: <Atcoder />,
    codechef: <Codechef />,
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-200">
      {/* Header with Dark Theme Support */}
      <header className="bg-white dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700 shadow-md py-4 px-6 flex justify-center items-center">
        <div className="flex items-center space-x-3">
          <img
            src="logo.webp"
            alt="Contest Tracker Logo"
            className="h-8 w-auto"
          />
          <h1 className="text-xl font-semibold font-mono text-gray-900 dark:text-gray-200">
            Contest Tracker
          </h1>
        </div>
        {/* <ModeToggle /> */}
      </header>

      {/* Main Content Area */}
      <div className="flex justify-center min-h-screen px-6 py-10">
        <div className="w-full max-w-4xl bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
          {/* Platform Selection */}
          <div className="mb-6 flex flex-col items-center">
            <h2 className="text-xl font-medium text-gray-800 dark:text-gray-200 mb-2">
              Select Platform
            </h2>
            <Select
              value={selectedPlatform}
              onValueChange={setSelectedPlatform}
            >
              <SelectTrigger className="w-[200px] text-base font-medium border border-gray-300 dark:border-gray-600 shadow-sm bg-white dark:bg-gray-700 hover:shadow-md transition-all">
                <SelectValue placeholder="Select Platform" />
              </SelectTrigger>
              <SelectContent className="rounded-lg shadow-md border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700">
                <SelectItem value="all">🌐 All Platforms</SelectItem>
                <SelectItem value="codeforces">
                  <img
                    src="codeforces.png"
                    alt="Codeforces"
                    className="w-5 h-5 inline-block mr-2"
                  />{" "}
                  Codeforces
                </SelectItem>
                <SelectItem value="atcoder">
                  <img
                    src="atcoder.webp"
                    alt="Atcoder"
                    className="w-5 h-5 inline-block mr-2"
                  />{" "}
                  Atcoder
                </SelectItem>
                <SelectItem value="codechef">
                  <img
                    src="codechef.jpg"
                    alt="Codechef"
                    className="w-5 h-5 inline-block mr-2"
                  />{" "}
                  Codechef
                </SelectItem>
                <SelectItem value="leetcode">
                  <img
                    src="leetcode.png"
                    alt="Leetcode"
                    className="w-5 h-5 inline-block mr-2"
                  />{" "}
                  Leetcode
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Content Section */}
          <div className="w-full">{platformComponents[selectedPlatform]}</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
