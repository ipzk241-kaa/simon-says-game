export const addScore = (record) => {
  try {
    let arr = JSON.parse(localStorage.getItem("simon-leaderboard") || "[]");

    const existing = arr.find((r) => r.id === record.id);

    if (existing) {
      if (record.level > existing.level) {
        existing.level = record.level;
        existing.ts = record.ts;
        existing.nickname = record.nickname;
      }
    } else {
      arr.push(record);
    }

    arr.sort((a, b) => b.level - a.level || b.ts - a.ts);

    localStorage.setItem("simon-leaderboard", JSON.stringify(arr.slice(0, 100)));
  } catch (e) {
    console.error("Leaderboard error:", e);
  }
};
