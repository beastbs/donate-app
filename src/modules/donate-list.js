import { Settings as Current } from "../core/constants/settings";

export class DonateList {
  #donates;
  #donateItemsHTML;

  static TextObject = {
    DonatesList: "Список донатов",
  };

  constructor(donates) {
    this.#donates = donates;
  }

  #renderDonatesItems(container) {
    this.#donateItemsHTML.innerHTML = ``;
    this.#donates.forEach(donate => {
      const donateItemHTML = document.createElement("div");
      donateItemHTML.className = "donate-item";
      const creationTime = donate.date;
      donateItemHTML.innerHTML = `${creationTime} - <b>${donate.amount}${Current.currency}</b>`;

      container.append(donateItemHTML);
    });
  }

  updateDonates(updatedDonates) {
    this.#donates = updatedDonates;
    this.#renderDonatesItems(this.#donateItemsHTML);
  }

  render() {
    const donatesContainer = document.createElement("div");
    donatesContainer.className = "donates-container";

    const donatesText = document.createElement("h2");
    donatesText.className = "donates-conatiner__title";
    donatesText.textContent = DonateList.TextObject.DonatesList;

    this.#donateItemsHTML = document.createElement("div");
    this.#donateItemsHTML.className = "donates-container__donates";

    donatesContainer.append(donatesText, this.#donateItemsHTML);
    this.#renderDonatesItems(this.#donateItemsHTML);

    return donatesContainer;
  }
}
