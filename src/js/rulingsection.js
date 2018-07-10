
class RulingSection {

  constructor() {
    this.rulingContainer = document.getElementById('prev-rulings');
    this.util = new Util();
    this.util.fetchJson('/api/rulings.json').then(this.renderRulings.bind(this));
  }

  renderRulings(data) {
    data.items.forEach(item => {
      // title
      let title = document.createElement('h2');
      title.setAttribute('class', 'ruling__title');
      title.innerHTML = item.name;

      // summary
      let summary = document.createElement('p');
      summary.setAttribute('class', 'ruling__summary');
      summary.innerHTML = item.summary;

      // report link
      let link = document.createElement('a');
      link.setAttribute('class', 'ruling__link');
      link.setAttribute('href', item.url);
      link.innerHTML = 'View Full Report';

      // ended
      let ended = document.createElement('div');
      ended.setAttribute('class', 'ruling__ended');
      ended.innerHTML = item.ended;

      // section
      let section = document.createElement('div');
      section.setAttribute('class', 'ruling__section');
      section.innerHTML = "in " + item.section;

      // ended and section wrapper
      let info = document.createElement('div');
      info.setAttribute('class', 'ruling__info');
      info.appendChild(ended);
      info.appendChild(section);

      // info and link wrapper
      let infoLink = document.createElement('div');
      infoLink.setAttribute('class', 'ruling__info-link');
      infoLink.appendChild(link);
      infoLink.appendChild(info);

      // all content wrapper
      let content = document.createElement('div');
      content.setAttribute('class', 'ruling__content');
      content.appendChild(title);
      content.appendChild(summary);
      content.appendChild(infoLink);

      // positive reputation
      let up = document.createElement('img');
      up.setAttribute('src', 'images/up.svg');
      up.setAttribute('class', 'reputation-bar__up');
      let positive = document.createElement('div');
      positive.setAttribute('class', 'reputation-bar__positive p-' + item.reputation);
      positive.innerHTML = item.reputation + "%";
      positive.appendChild(up);

      // negative reputation
      let down = document.createElement('img');
      down.setAttribute('src', 'images/down.svg');
      down.setAttribute('class', 'reputation-bar__down');
      const negativeValue = 100 - item.reputation;
      let negative = document.createElement('div');
      negative.setAttribute('class', 'reputation-bar__negative p-' + negativeValue);
      negative.innerHTML = negativeValue + "%";
      negative.appendChild(down);

      // reputation bar
      let reputationBar = document.createElement('div');
      reputationBar.setAttribute('class', 'reputation-bar');
      reputationBar.appendChild(positive);
      reputationBar.appendChild(negative);

      // ruling element
      let ruling = document.createElement('div');
      ruling.setAttribute('class', 'ruling');
      ruling.setAttribute('style', "background-image:url('" + item.picture + "');");
      ruling.appendChild(content);
      ruling.appendChild(reputationBar);

      this.rulingContainer.appendChild(ruling);
    });
  }
}
