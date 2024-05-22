const string =
  "Once you have installed the Socket.IO server library, you can now init the server. The complete list of options can be found below. It is the name of the path that is captured on the server side. The server and the client values must match unless you are using a path-rewriting proxy in between. This value is used in the heartbeat mechanism, which periodically checks if the connection is still alive between the server and the client. Note: the default value might be a bit low if you need to send big files in your application. Please increase it if that's the case. This is the delay in milliseconds before an uncompleted transport upgrade is cancelled. This defines how many bytes a single message can be, before closing the socket. You may increase or decrease this value depending on your needs.";

export function generateParagraphUsingLoremIpsum() {
  const words = string.split(" ");
  const paragraph = [];

  for (let i = 0; i < 150; i++) {
    paragraph.push(words[Math.floor(Math.random() * words.length)]);
  }
  return paragraph.join(" ").toLowerCase();
}

export async function generateParagraph() {
  try {
    const response = await fetch("http://metaphorpsum.com/paragraphs/10");

    if (!response.ok) {
      throw new Error();
    }

    const data = await response.text();
    const paragraph = data.split(`\n`).join(" ");

    return paragraph;
  } catch (e) {
    console.log(e);
    const paragraph = generateParagraphUsingLoremIpsum();
    return paragraph;
  }
}
