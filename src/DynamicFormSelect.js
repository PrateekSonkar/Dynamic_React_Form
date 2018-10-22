import React from "react";
import classnames from "classnames";
import shortid from "shortid";

export default class DynamicFormSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "none",
      classes: ["input-field", "col", "s12", "m6", "l3"],
      formfields: [
        {
          inputtype: "select",
          ukey: "firstname", // should be withoutspace
          options: [
            { value: "abc", fieldname: "No thing" },
            { value: "abc1", fieldname: "No thing 1" },
            { value: "abc2", fieldname: "No thing 2" }
          ]
        }
      ]
    };
  }

  componentWillMount() {
    var elems = document.querySelectorAll("select");
    var instances = M.FormSelect.init(elems);
  }

  renderForm = () => {
    //let formInput = this.state.formfields;
    let formUI = this.state.formfields.map(formfield => {
      return (
        <div class="review-container">
          <div class="lister-item-content">
            <div class="ipl-ratings-bar">
              <span class="rating-other-user-rating">
                <svg class="ipl-star-icon" xmlns="http://www.w3.org/2000/svg" fill="#000000" height="24" viewBox="0 0 24 24" width="24">
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                  <path d="M0 0h24v24H0z" fill="none"></path>
                </svg>
                <span>10</span><span class="point-scale">/10</span>
              </span>
            </div>
            <a href="/review/rw4314054/?ref_=tt_urv" class="title"> Review Stree Movie
</a>            <div class="display-name-date">
              <span class="display-name-link"><a href="/user/ur54076421/?ref_=tt_urv">magow-01</a></span><span class="review-date">31 August 2018</span>
            </div>
            <span class="spoiler-warning">Warning: Spoilers</span>
            <div class="actions text-muted">
              9 out of 13 found this helpful.
                        <span>
                Was this review helpful? <a href="/registration/signin?ref_=urv"> Sign in</a> to vote.
                        </span>
              <br>
                <a href="/review/rw4314054/?ref_=tt_urv">Permalink</a>
                </div><div class="ipl-expander ">
                <div class="ipl-expander__container">
                  <div class="expander-icon-wrapper spoiler-warning__control">
                    <svg class="ipl-expander__icon expander-icon " width="12" height="8" viewBox="0 0 12 8" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.197 0L6 4.304 1.803 0 0 1.85 6 8l6-6.15" fill="#2572B3" fill-rule="evenodd"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div class="content">
                <div class="text show-more__control">The quaint town of Chanderi is haunted by a unique legend. The spirit of an angry woman stalks men during a festive period. Chanderi's wonder boy and tailor extraordinaire, Vicky (Rajkummar Rao) falls in love with a mysterious girl (Shraddha Kapoor) who appears only during the four days of the festive season as well. Her disappearing act gets his friends suspicious and they start believing that she could be the Stree haunting the city for long. Horror comedies are a rare offering in Hindi cinema and in that respect, Stree serves up a lot of thrills and spills. The small-town setting aThe funniest character in the film is Pankaj Tripathi's Rudra, a bookshop owner and Mr know-it-all, who guides Vicky and his friends on how to cope with Stree and her haunting act. Tripathi's comic timing is top notch and one of the veritable highlights of the film. nd the many jibes at horror film legends are hilarious. Rajkummar's performance is just as good. He handles the many shades of comedy, horror and romance with great ease. Aparshakti Khurrana and Abhishek Banerjee as the friends offer good comedic punches too.
Shraddha Kapoor's character is a bit of an enigma. Even though the role is problematic, the actress does a fine job of maintaining an air of mystery.
Stree does fairly well with the comedy, but even with several laugh-out-loud moments. The music of the film is a definite highight.</div>

              </div>
            </div>
            <div class="clear"></div>
          </div>
      );
    });
    return formUI;
  };

  render() {
    return <div>{this.renderForm()}</div>;
  }
}
