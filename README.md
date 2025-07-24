<b>How It Works</b> <br>
This project is a Contest Tracker that fetches and displays upcoming and recent programming contests from multiple platforms using the [Clist API](https://clist.by/).<br>

<b>Live Demo:</b> https://contest-tracker-sepia.vercel.app/<br><br>

<b>🔧 Tech Stack</b> <br>
<b>Frontend:</b> React.js, Tailwind CSS<br>
<b>State Management:</b> Redux Toolkit<br>
<b>API:</b> Clist.by<br>
<b>Deployment:</b> Vercel<br>

<b>⚙️ Functionality</b> <br>
<b>1. Fetching Upcoming Contests</b> <br>
On app load, it makes an API call to Clist to fetch <b>upcoming contests</b> across selected platforms (codeforces, leetcode, codechef, atcoder) and stores them in Redux state.<br>
<b>2. Fetching Past Contests (last 60 days)</b> <br>
The app also fetches <b>past contests</b> (filtered between current date and 60 days prior) for each platform separately and merges them into one list.<br>
<b>3. Sorting & Display</b>

<ul>
  <li>Upcoming contests are sorted by start time</li>
  <li>Past contests are sorted by most recent</li>
  <li>The data is displayed using clean UI cards</li>
</ul>

<br>

![Screenshot 2025-03-24 200826](https://github.com/user-attachments/assets/f348693f-8d69-4bfd-9b78-05af3c814df3)

![Screenshot 2025-03-24 200843](https://github.com/user-attachments/assets/9287e7c9-56c8-45e8-b1de-0ad4eb5325f8)

![Screenshot 2025-03-24 200854](https://github.com/user-attachments/assets/b0dc549c-980d-479e-a19e-405e6aae7912)

![Screenshot 2025-03-24 200938](https://github.com/user-attachments/assets/631b2f41-d470-4e51-a810-9e12e07d5b56)

## Installation

```sh
npm install
npm run dev


```
