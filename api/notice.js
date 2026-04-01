let notices = {};

export default function handler(req, res) {

  if (req.method === "POST") {
    const { userId, message } = req.body;

    notices[userId] = message;

    return res.json({ success: true });
  }

  if (req.method === "GET") {
    const { userId } = req.query;

    return res.json({
      message: notices[userId] || "No Notice"
    });
  }
}
