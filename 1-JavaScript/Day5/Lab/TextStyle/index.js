'use strict';

const text = document.getElementById("PAR");

const ChangeFont = function(property){
    text.style.fontFamily = property;
}
const ChangeAlign = function (property) {
  text.style.textAlign = property;
};
const ChangeHeight = function (property) {
  text.style.lineHeight = property;
};
const ChangeLSpace = function (property) {
  text.style.letterSpacing = property;
};
const ChangeIndent = function (property) {
  text.style.textIndent = property;
};
const ChangeTransform = function (property) {
  text.style.textTransform = property;
};
const ChangeDecorate = function (property) {
  text.style.textDecoration = property;
};
const ChangeBorder = function (property) {
  text.style.textBorder = property;
};
const ChangeBorderColor = function (property) {
  text.style.Bordercolor = property;
};