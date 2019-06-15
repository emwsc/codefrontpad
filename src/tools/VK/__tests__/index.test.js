import VK from "..";

describe("Test VK tool", () => {
  it("Correct wall post parsing", () => {
    const wallPostText = `Привет! Следующий митап PiterJS #38 пройдет 20 июня в офисе компании Nexign. Поговорим про интернационализацию, типизацию Rest API и внедрение проверок eslint в legacy проекты. Регистрируйся и приходи послушать: http://amp.gs/dEDE`;
    const vk = new VK();
    const parseResults = vk.parseWallPostText(wallPostText);
    expect(parseResults.name).toBe("PiterJS #38");
  });
});
