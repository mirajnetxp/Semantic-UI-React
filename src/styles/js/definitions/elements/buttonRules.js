/**
 * This file began as a direct copy of the less definition file.
 * The original LESS was left above each section as it was ported to JS.
 * This helps to see the logic behind how we could port styles to JS.
 */

// /*!
//  * # Semantic UI - Button
//  * http://github.com/semantic-org/semantic-ui/
//  *
//  *
//  * Released under the MIT license
//  * http://opensource.org/licenses/MIT
//  *
//  */
// 
// /*******************************
//             Theme
// *******************************/
// 
// @type    : 'element';
// @element : 'button';
// 
// @import (multiple) '../../theme.config';
// 
// /*******************************
//             Button
// *******************************/
// 
// .ui.button {
//   cursor: pointer;
//   display: inline-block;
// 
//   min-height: 1em;
// 
//   outline: none;
//   border: none;
//   vertical-align: @verticalAlign;
//   background: @background;
//   color: @textColor;
// 
//   font-family: @fontFamily;
// 
//   margin: 0em @horizontalMargin @verticalMargin 0em;
//   padding: @verticalPadding @horizontalPadding (@verticalPadding + @shadowOffset);
// 
//   text-transform: @textTransform;
//   text-shadow: @textShadow;
//   font-weight: @fontWeight;
//   line-height: @lineHeight;
//   font-style: normal;
//   text-align: center;
//   text-decoration: none;
// 
//   border-radius: @borderRadius;
//   box-shadow: @boxShadow;
// 
//   user-select: none;
//   transition: @transition;
//   will-change: @willChange;
// 
//   -webkit-tap-highlight-color: @tapColor;
// }
// 
// 
// /*******************************
//             States
// *******************************/
// 
// /*--------------
//       Hover
// ---------------*/
// 
// .ui.button:hover {
//   background-color: @hoverBackgroundColor;
//   background-image: @hoverBackgroundImage;
//   box-shadow: @hoverBoxShadow;
//   color: @hoverColor;
// }
// 
// .ui.button:hover .icon {
//   opacity: @iconHoverOpacity;
// }
// 
// /*--------------
//       Focus
// ---------------*/
// 
// .ui.button:focus {
//   background-color: @focusBackgroundColor;
//   color: @focusColor;
//   background-image: @focusBackgroundImage !important;
//   box-shadow: @focusBoxShadow !important;
// }
// 
// .ui.button:focus .icon {
//   opacity: @iconFocusOpacity;
// }
// 
// /*--------------
//       Down
// ---------------*/
// 
// .ui.button:active,
// .ui.active.button:active {
//   background-color: @downBackgroundColor;
//   background-image: @downBackgroundImage;
//   color: @downColor;
//   box-shadow: @downBoxShadow;
// }
// 
// /*--------------
//      Active
// ---------------*/
// 
// .ui.active.button {
//   background-color: @activeBackgroundColor;
//   background-image: @activeBackgroundImage;
//   box-shadow: @activeBoxShadow;
//   color: @activeColor;
// }
// .ui.active.button:hover {
//   background-color: @activeHoverBackgroundColor;
//   background-image: @activeHoverBackgroundImage;
//   color: @activeHoverColor;
// }
// .ui.active.button:active {
//   background-color: @activeBackgroundColor;
//   background-image: @activeBackgroundImage;
// }
// 
// 
// /*--------------
//     Loading
// ---------------*/
// 
// /* Specificity hack */
// .ui.loading.loading.loading.loading.loading.loading.button {
//   position: relative;
//   cursor: default;
//   text-shadow: none !important;
//   color: transparent !important;
//   opacity: @loadingOpacity;
//   pointer-events: @loadingPointerEvents;
//   transition: @loadingTransition;
// }
// .ui.loading.button:before {
//   position: absolute;
//   content: '';
//   top: 50%;
//   left: 50%;
// 
//   margin: @loaderMargin;
//   width: @loaderSize;
//   height: @loaderSize;
// 
//   border-radius: @circularRadius;
//   border: @loaderLineWidth solid @invertedLoaderFillColor;
// }
// .ui.loading.button:after {
//   position: absolute;
//   content: '';
//   top: 50%;
//   left: 50%;
// 
//   margin: @loaderMargin;
//   width: @loaderSize;
//   height: @loaderSize;
// 
//   animation: button-spin @loaderSpeed linear;
//   animation-iteration-count: infinite;
// 
//   border-radius: @circularRadius;
// 
//   border-color: @invertedLoaderLineColor transparent transparent;
//   border-style: solid;
//   border-width: @loaderLineWidth;
// 
//   box-shadow: 0px 0px 0px 1px transparent;
// }
// .ui.labeled.icon.loading.button .icon {
//   background-color: transparent;
//   box-shadow: none;
// }
// 
// @keyframes button-spin {
//   from {
//     transform: rotate(0deg);
//   }
//   to {
//     transform: rotate(360deg);
//   }
// }
// 
// .ui.basic.loading.button:not(.inverted):before {
//   border-color: @loaderFillColor;
// }
// .ui.basic.loading.button:not(.inverted):after {
//   border-top-color: @loaderLineColor;
// }
// 
// /*-------------------
//       Disabled
// --------------------*/
// 
// .ui.buttons .disabled.button,
// .ui.disabled.button,
// .ui.button:disabled,
// .ui.disabled.button:hover,
// .ui.disabled.active.button {
//   cursor: default;
//   opacity: @disabledOpacity !important;
//   background-image: none !important;
//   box-shadow: none !important;
//   pointer-events: none !important;
// }
// 
// /* Basic Group With Disabled */
// .ui.basic.buttons .ui.disabled.button {
//   border-color: @disabledBorderColor;
// }
// 
// /*******************************
//              Types
// *******************************/
// 
// /*-------------------
//        Animated
// --------------------*/
// 
// .ui.animated.button {
//   position: relative;
//   overflow: hidden;
//   padding-right: 0em !important;
//   vertical-align: @animatedVerticalAlign;
//   z-index: @animatedZIndex;
// }
// 
// .ui.animated.button .content {
//   will-change: transform, opacity;
// }
// .ui.animated.button .visible.content {
//   position: relative;
//   margin-right: @horizontalPadding;
// }
// .ui.animated.button .hidden.content {
//   position: absolute;
//   width: 100%;
// }
// 
// /* Horizontal */
// .ui.animated.button .visible.content,
// .ui.animated.button .hidden.content {
//   transition: right @animationDuration @animationEasing 0s;
// }
// .ui.animated.button .visible.content {
//   left: auto;
//   right: 0%;
// }
// .ui.animated.button .hidden.content {
//   top: 50%;
//   left: auto;
//   right: -100%;
//   margin-top: -(@lineHeight / 2);
// }
// .ui.animated.button:focus .visible.content,
// .ui.animated.button:hover .visible.content {
//   left: auto;
//   right: 200%;
// }
// .ui.animated.button:focus .hidden.content,
// .ui.animated.button:hover .hidden.content {
//   left: auto;
//   right: 0%;
// }
// 
// /* Vertical */
// .ui.vertical.animated.button .visible.content,
// .ui.vertical.animated.button .hidden.content {
//   transition: top @animationDuration @animationEasing, transform @animationDuration @animationEasing;
// }
// .ui.vertical.animated.button .visible.content {
//   transform: translateY(0%);
//   right: auto;
// }
// .ui.vertical.animated.button .hidden.content {
//   top: -50%;
//   left: 0%;
//   right: auto;
// }
// .ui.vertical.animated.button:focus .visible.content,
// .ui.vertical.animated.button:hover .visible.content {
//   transform: translateY(200%);
//   right: auto;
// }
// .ui.vertical.animated.button:focus .hidden.content,
// .ui.vertical.animated.button:hover .hidden.content {
//   top: 50%;
//   right: auto;
// }
// 
// /* Fade */
// .ui.fade.animated.button .visible.content,
// .ui.fade.animated.button .hidden.content {
//   transition: opacity @animationDuration @animationEasing, transform @animationDuration @animationEasing;
// }
// .ui.fade.animated.button .visible.content {
//   left: auto;
//   right: auto;
//   opacity: 1;
//   transform: scale(1);
// }
// .ui.fade.animated.button .hidden.content {
//   opacity: 0;
//   left: 0%;
//   right: auto;
//   transform: scale(@fadeScaleHigh);
// }
// .ui.fade.animated.button:focus .visible.content,
// .ui.fade.animated.button:hover .visible.content {
//   left: auto;
//   right: auto;
//   opacity: 0;
//   transform: scale(@fadeScaleLow);
// }
// .ui.fade.animated.button:focus .hidden.content,
// .ui.fade.animated.button:hover .hidden.content {
//   left: 0%;
//   right: auto;
//   opacity: 1;
//   transform: scale(1);
// }
// 
// /*-------------------
//        Inverted
// --------------------*/
// 
// .ui.inverted.button {
//   box-shadow: 0px 0px 0px @invertedBorderSize @white inset !important;
//   background: transparent none;
//   color: @white;
//   text-shadow: none !important;
// }
// 
// /* Group */
// .ui.inverted.buttons .button {
//   margin: @invertedGroupButtonOffset;
// }
// .ui.inverted.buttons .button:first-child {
//   margin-left: 0em;
// }
// .ui.inverted.vertical.buttons .button {
//   margin: @invertedVerticalGroupButtonOffset;
// }
// .ui.inverted.vertical.buttons .button:first-child {
//   margin-top: 0em;
// }
// 
// /* States */
// 
// /* Hover */
// .ui.inverted.button:hover {
//   background: @white;
//   box-shadow: 0px 0px 0px @invertedBorderSize @white inset !important;
//   color: @hoverColor;
// }
// 
// /* Active / Focus */
// .ui.inverted.button:focus,
// .ui.inverted.button.active {
//   background: @white;
//   box-shadow: 0px 0px 0px @invertedBorderSize @white inset !important;
//   color: @focusColor;
// }
// 
// /* Active Focus */
// .ui.inverted.button.active:focus {
//   background: @midWhite;
//   box-shadow: 0px 0px 0px @invertedBorderSize @midWhite inset !important;
//   color: @focusColor;
// }
// 
// 
// /*-------------------
//     Labeled Button
// --------------------*/
// 
// .ui.labeled.button:not(.icon) {
//   display: inline-flex;
//   flex-direction: row;
//   background: none !important;
//   padding: 0px !important;
//   border: none !important;
//   box-shadow: none !important;
// }
// 
// .ui.labeled.button > .button {
//   margin: 0px;
// }
// .ui.labeled.button > .label {
//   display: flex;
//   align-items: @labeledLabelAlign;
//   margin: 0px 0px 0px @labeledLabelBorderOffset !important;
//   font-size: @labeledLabelFontSize;
//   padding: @labeledLabelPadding;
//   font-size: @labeledLabelFontSize;
//   border-color: @labeledLabelBorderColor;
// }
// 
// /* Tag */
// .ui.labeled.button > .tag.label:before {
//   width: @labeledTagLabelSize;
//   height: @labeledTagLabelSize;
// }
// 
// /* Right */
// .ui.labeled.button:not([class*="left labeled"]) > .button {
//   border-top-right-radius: 0px;
//   border-bottom-right-radius: 0px;
// }
// .ui.labeled.button:not([class*="left labeled"]) > .label {
//   border-top-left-radius: 0px;
//   border-bottom-left-radius: 0px;
// }
// 
// /* Left Side */
// .ui[class*="left labeled"].button > .button {
//   border-top-left-radius: 0px;
//   border-bottom-left-radius: 0px;
// }
// .ui[class*="left labeled"].button > .label {
//   border-top-right-radius: 0px;
//   border-bottom-right-radius: 0px;
// }
// 
// /*-------------------
//        Social
// --------------------*/
// 
// /* Facebook */
// .ui.facebook.button {
//   background-color: @facebookColor;
//   color: @invertedTextColor;
//   text-shadow: @invertedTextShadow;
//   background-image: @coloredBackgroundImage;
//   box-shadow: @coloredBoxShadow;
// }
// .ui.facebook.button:hover {
//   background-color: @facebookHoverColor;
//   color: @invertedTextColor;
//   text-shadow: @invertedTextShadow;
// }
// .ui.facebook.button:active {
//   background-color: @facebookDownColor;
//   color: @invertedTextColor;
//   text-shadow: @invertedTextShadow;
// }
// 
// /* Twitter */
// .ui.twitter.button {
//   background-color: @twitterColor;
//   color: @invertedTextColor;
//   text-shadow: @invertedTextShadow;
//   background-image: @coloredBackgroundImage;
//   box-shadow: @coloredBoxShadow;
// }
// .ui.twitter.button:hover {
//   background-color: @twitterHoverColor;
//   color: @invertedTextColor;
//   text-shadow: @invertedTextShadow;
// }
// .ui.twitter.button:active {
//   background-color: @twitterDownColor;
//   color: @invertedTextColor;
//   text-shadow: @invertedTextShadow;
// }
// 
// /* Google Plus */
// .ui.google.plus.button {
//   background-color: @googlePlusColor;
//   color: @invertedTextColor;
//   text-shadow: @invertedTextShadow;
//   background-image: @coloredBackgroundImage;
//   box-shadow: @coloredBoxShadow;
// }
// .ui.google.plus.button:hover {
//   background-color: @googlePlusHoverColor;
//   color: @invertedTextColor;
//   text-shadow: @invertedTextShadow;
// }
// .ui.google.plus.button:active {
//   background-color: @googlePlusDownColor;
//   color: @invertedTextColor;
//   text-shadow: @invertedTextShadow;
// }
// 
// /* Linked In */
// .ui.linkedin.button {
//   background-color: @linkedInColor;
//   color: @invertedTextColor;
//   text-shadow: @invertedTextShadow;
// }
// .ui.linkedin.button:hover {
//   background-color: @linkedInHoverColor;
//   color: @invertedTextColor;
//   text-shadow: @invertedTextShadow;
// }
// .ui.linkedin.button:active {
//   background-color: @linkedInDownColor;
//   color: @invertedTextColor;
//   text-shadow: @invertedTextShadow;
// }
// 
// /* YouTube */
// .ui.youtube.button {
//   background-color: @youtubeColor;
//   color: @invertedTextColor;
//   text-shadow: @invertedTextShadow;
//   background-image: @coloredBackgroundImage;
//   box-shadow: @coloredBoxShadow;
// }
// .ui.youtube.button:hover {
//   background-color: @youtubeHoverColor;
//   color: @invertedTextColor;
//   text-shadow: @invertedTextShadow;
// }
// .ui.youtube.button:active {
//   background-color: @youtubeDownColor;
//   color: @invertedTextColor;
//   text-shadow: @invertedTextShadow;
// }
// 
// /* Instagram */
// .ui.instagram.button {
//   background-color: @instagramColor;
//   color: @invertedTextColor;
//   text-shadow: @invertedTextShadow;
//   background-image: @coloredBackgroundImage;
//   box-shadow: @coloredBoxShadow;
// }
// .ui.instagram.button:hover {
//   background-color: @instagramHoverColor;
//   color: @invertedTextColor;
//   text-shadow: @invertedTextShadow;
// }
// .ui.instagram.button:active {
//   background-color: @instagramDownColor;
//   color: @invertedTextColor;
//   text-shadow: @invertedTextShadow;
// }
// 
// /* Pinterest */
// .ui.pinterest.button {
//   background-color: @pinterestColor;
//   color: @invertedTextColor;
//   text-shadow: @invertedTextShadow;
//   background-image: @coloredBackgroundImage;
//   box-shadow: @coloredBoxShadow;
// }
// .ui.pinterest.button:hover {
//   background-color: @pinterestHoverColor;
//   color: @invertedTextColor;
//   text-shadow: @invertedTextShadow;
// }
// .ui.pinterest.button:active {
//   background-color: @pinterestDownColor;
//   color: @invertedTextColor;
//   text-shadow: @invertedTextShadow;
// }
// 
// /* VK */
// .ui.vk.button {
//   background-color: #4D7198;
//   color: @white;
//   background-image: @coloredBackgroundImage;
//   box-shadow: @coloredBoxShadow;
// }
// .ui.vk.button:hover {
//   background-color: @vkHoverColor;
//   color: @white;
// }
// .ui.vk.button:active {
//   background-color: @vkDownColor;
//   color: @white;
// }
// 
// /*--------------
//      Icon
// ---------------*/
// 
// .ui.button > .icon:not(.button) {
//   height: @iconHeight;
//   opacity: @iconOpacity;
//   margin: @iconMargin;
//   transition: @iconTransition;
//   vertical-align: @iconVerticalAlign;
//   color: @iconColor;
// }
// 
// .ui.button:not(.icon) > .icon:not(.button):not(.dropdown) {
//   margin: @iconMargin;
// }
// .ui.button:not(.icon) > .right.icon:not(.button):not(.dropdown) {
//   margin: @rightIconMargin;
// }
// 
// /*******************************
//            Variations
// *******************************/
// 
// 
// /*-------------------
//        Floated
// --------------------*/
// 
// .ui[class*="left floated"].buttons,
// .ui[class*="left floated"].button {
//   float: left;
//   margin-left: 0em;
//   margin-right: @floatedMargin;
// }
// .ui[class*="right floated"].buttons,
// .ui[class*="right floated"].button {
//   float: right;
//   margin-right: 0em;
//   margin-left: @floatedMargin;
// }
// 
// /*-------------------
//        Compact
// --------------------*/
// 
// .ui.compact.buttons .button,
// .ui.compact.button {
//   padding: @compactVerticalPadding @compactHorizontalPadding ( @compactVerticalPadding + @shadowOffset );
// }
// .ui.compact.icon.buttons .button,
// .ui.compact.icon.button {
//   padding: @compactVerticalPadding @compactVerticalPadding ( @compactVerticalPadding + @shadowOffset );
// }
// .ui.compact.labeled.icon.buttons .button,
// .ui.compact.labeled.icon.button {
//   padding: @compactVerticalPadding (@compactHorizontalPadding + @labeledIconWidth) ( @compactVerticalPadding + @shadowOffset );
// }
// 
// /*-------------------
//         Sizes
// --------------------*/
// 
// .ui.mini.buttons .button,
// .ui.mini.buttons .or,
// .ui.mini.button {
//   font-size: @mini;
// }
// .ui.tiny.buttons .button,
// .ui.tiny.buttons .or,
// .ui.tiny.button {
//   font-size: @tiny;
// }
// .ui.small.buttons .button,
// .ui.small.buttons .or,
// .ui.small.button {
//   font-size: @small;
// }
// .ui.buttons .button,
// .ui.buttons .or,
// .ui.button {
//   font-size: @medium;
// }
// .ui.large.buttons .button,
// .ui.large.buttons .or,
// .ui.large.button {
//   font-size: @large;
// }
// .ui.big.buttons .button,
// .ui.big.buttons .or,
// .ui.big.button {
//   font-size: @big;
// }
// .ui.huge.buttons .button,
// .ui.huge.buttons .or,
// .ui.huge.button {
//   font-size: @huge;
// }
// .ui.massive.buttons .button,
// .ui.massive.buttons .or,
// .ui.massive.button {
//   font-size: @massive;
// }
// 
// /*--------------
//     Icon Only
// ---------------*/
// 
// .ui.icon.buttons .button,
// .ui.icon.button {
//   padding: @verticalPadding @verticalPadding ( @verticalPadding + @shadowOffset );
// }
// .ui.icon.buttons .button > .icon,
// .ui.icon.button > .icon {
//   opacity: @iconButtonOpacity;
//   margin: 0em !important;
//   vertical-align: top;
// }
// 
// 
// /*-------------------
//         Basic
// --------------------*/
// 
// .ui.basic.buttons .button,
// .ui.basic.button {
//   background: @basicBackground !important;
//   color: @basicTextColor !important;
//   font-weight: @basicFontWeight;
//   border-radius: @basicBorderRadius;
//   text-transform: @basicTextTransform;
//   text-shadow: none !important;
//   box-shadow: @basicBoxShadow;
// }
// .ui.basic.buttons {
//   box-shadow: @basicGroupBoxShadow;
//   border: @basicGroupBorder;
//   border-radius: @borderRadius;
// }
// .ui.basic.buttons .button {
//   border-radius: 0em;
// }
// 
// .ui.basic.buttons .button:hover,
// .ui.basic.button:hover {
//   background: @basicHoverBackground !important;
//   color: @basicHoverTextColor !important;
//   box-shadow: @basicHoverBoxShadow;
// }
// .ui.basic.buttons .button:focus,
// .ui.basic.button:focus {
//   background: @basicFocusBackground !important;
//   color: @basicFocusTextColor !important;
//   box-shadow: @basicFocusBoxShadow;
// }
// .ui.basic.buttons .button:active,
// .ui.basic.button:active {
//   background: @basicDownBackground !important;
//   color: @basicDownTextColor !important;
//   box-shadow: @basicDownBoxShadow;
// }
// .ui.basic.buttons .active.button,
// .ui.basic.active.button {
//   background: @basicActiveBackground !important;
//   box-shadow: @basicActiveBoxShadow !important;
//   color: @basicActiveTextColor !important;
// }
// .ui.basic.buttons .active.button:hover,
// .ui.basic.active.button:hover {
//   background-color: @transparentBlack;
// }
// 
// /* Vertical */
// .ui.basic.buttons .button:hover {
//   box-shadow: @basicHoverBoxShadow inset;
// }
// .ui.basic.buttons .button:active {
//   box-shadow: @basicDownBoxShadow inset;
// }
// .ui.basic.buttons .active.button {
//   box-shadow: @basicActiveBoxShadow !important;
// }
// 
// /* Standard Basic Inverted */
// .ui.basic.inverted.buttons .button,
// .ui.basic.inverted.button {
//   background-color: transparent !important;
//   color: @offWhite !important;
//   box-shadow: @basicInvertedBoxShadow !important;
// }
// .ui.basic.inverted.buttons .button:hover,
// .ui.basic.inverted.button:hover {
//   color: @white !important;
//   box-shadow: @basicInvertedHoverBoxShadow !important;
// }
// .ui.basic.inverted.buttons .button:focus,
// .ui.basic.inverted.button:focus {
//   color: @white !important;
//   box-shadow: @basicInvertedFocusBoxShadow !important;
// }
// .ui.basic.inverted.buttons .button:active,
// .ui.basic.inverted.button:active {
//   background-color: @transparentWhite !important;
//   color: @white !important;
//   box-shadow: @basicInvertedDownBoxShadow !important;
// }
// .ui.basic.inverted.buttons .active.button,
// .ui.basic.inverted.active.button {
//   background-color: @transparentWhite;
//   color: @invertedTextColor;
//   text-shadow: @invertedTextShadow;
//   box-shadow: @basicInvertedActiveBoxShadow;
// }
// .ui.basic.inverted.buttons .active.button:hover,
// .ui.basic.inverted.active.button:hover {
//   background-color: @strongTransparentWhite;
//   box-shadow: @basicInvertedHoverBoxShadow !important;
// }
// 
// 
// /* Basic Group */
// .ui.basic.buttons .button {
//   border-left: @basicGroupBorder;
//   box-shadow: none;
// }
// .ui.basic.vertical.buttons .button {
//   border-left: none;
// }
// .ui.basic.vertical.buttons .button {
//   border-left-width: 0px;
//   border-top: @basicGroupBorder;
// }
// .ui.basic.vertical.buttons .button:first-child {
//   border-top-width: 0px;
// }
// 
// 
// 
// /*--------------
//   Labeled Icon
// ---------------*/
// 
// .ui.labeled.icon.buttons .button,
// .ui.labeled.icon.button {
//   position: relative;
//   padding-left: @labeledIconPadding !important;
//   padding-right: @horizontalPadding !important;
// }
// 
// /* Left Labeled */
// .ui.labeled.icon.buttons > .button > .icon,
// .ui.labeled.icon.button > .icon {
//   position: absolute;
//   height: 100%;
//   line-height: 1;
//   border-radius: 0px;
//   border-top-left-radius: inherit;
//   border-bottom-left-radius: inherit;
//   text-align: center;
// 
//   margin: @labeledIconMargin;
//   width: @labeledIconWidth;
//   background-color: @labeledIconBackgroundColor;
//   color: @labeledIconColor;
//   box-shadow: @labeledIconLeftShadow;
// }
// 
// /* Left Labeled */
// .ui.labeled.icon.buttons > .button > .icon,
// .ui.labeled.icon.button > .icon {
//   top: 0em;
//   left: 0em;
// }
// 
// /* Right Labeled */
// .ui[class*="right labeled"].icon.button {
//   padding-right: @labeledIconPadding !important;
//   padding-left: @horizontalPadding !important;
// }
// .ui[class*="right labeled"].icon.button > .icon {
//   left: auto;
//   right: 0em;
//   border-radius: 0px;
//   border-top-right-radius: inherit;
//   border-bottom-right-radius: inherit;
//   box-shadow: @labeledIconRightShadow;
// }
// 
// 
// .ui.labeled.icon.buttons > .button > .icon:before,
// .ui.labeled.icon.button > .icon:before,
// .ui.labeled.icon.buttons > .button > .icon:after,
// .ui.labeled.icon.button > .icon:after {
//   display: block;
//   position: absolute;
//   width: 100%;
//   top: 50%;
//   text-align: center;
//   transform: translateY(-50%);
// }
// 
// .ui.labeled.icon.buttons .button > .icon {
//   border-radius: 0em;
// }
// .ui.labeled.icon.buttons .button:first-child > .icon {
//   border-top-left-radius: @borderRadius;
//   border-bottom-left-radius: @borderRadius;
// }
// .ui.labeled.icon.buttons .button:last-child > .icon {
//   border-top-right-radius: @borderRadius;
//   border-bottom-right-radius: @borderRadius;
// }
// .ui.vertical.labeled.icon.buttons .button:first-child > .icon {
//   border-radius: 0em;
//   border-top-left-radius: @borderRadius;
// }
// .ui.vertical.labeled.icon.buttons .button:last-child > .icon {
//   border-radius: 0em;
//   border-bottom-left-radius: @borderRadius;
// }
// 
// /* Fluid Labeled */
// .ui.fluid[class*="left labeled"].icon.button,
// .ui.fluid[class*="right labeled"].icon.button {
//   padding-left: @horizontalPadding !important;
//   padding-right: @horizontalPadding !important;
// }
// 
// 
// 
// 
// /*--------------
//      Toggle
// ---------------*/
// 
// /* Toggle (Modifies active state to give affordances) */
// .ui.toggle.buttons .active.button,
// .ui.buttons .button.toggle.active,
// .ui.button.toggle.active {
//   background-color: @positiveColor !important;
//   box-shadow: none !important;
//   text-shadow: @invertedTextShadow;
//   color: @invertedTextColor !important;
// }
// .ui.button.toggle.active:hover {
//   background-color: @positiveColorHover !important;
//   text-shadow: @invertedTextShadow;
//   color: @invertedTextColor !important;
// }
// 
// /*--------------
//     Circular
// ---------------*/
// 
// .ui.circular.button {
//   border-radius: 10em;
// }
// .ui.circular.button > .icon {
//   width: 1em;
//   vertical-align: baseline;
// }
// 
// 
// /*-------------------
//       Or Buttons
// --------------------*/
// 
// .ui.buttons .or {
//   position: relative;
//   width: @orGap;
//   height: @orHeight;
//   z-index: @orZIndex;
// }
// .ui.buttons .or:before {
//   position: absolute;
//   text-align: center;
//   border-radius: @circularRadius;
// 
//   content: @orText;
//   top: 50%;
//   left: 50%;
//   background-color: @orBackgroundColor;
//   text-shadow: @orTextShadow;
// 
//   margin-top: @orVerticalOffset;
//   margin-left: @orHorizontalOffset;
// 
//   width: @orCircleSize;
//   height: @orCircleSize;
// 
//   line-height: @orLineHeight;
//   color: @orTextColor;
// 
//   font-style: @orTextStyle;
//   font-weight: @orTextWeight;
// 
//   box-shadow: @orBoxShadow;
// }
// .ui.buttons .or[data-text]:before {
//   content: attr(data-text);
// }
// 
// /* Fluid Or */
// .ui.fluid.buttons .or {
//   width: 0em !important;
// }
// .ui.fluid.buttons .or:after {
//   display: none;
// }
// 
// 
// /*-------------------
//        Attached
// --------------------*/
// 
// 
// /* Singular */
// .ui.attached.button {
//   position: relative;
//   display: block;
//   margin: 0em;
//   border-radius: 0em;
//   box-shadow: @attachedBoxShadow !important;
// }
// 
// /* Top / Bottom */
// .ui.attached.top.button {
//   border-radius: @borderRadius @borderRadius 0em 0em;
// }
// .ui.attached.bottom.button {
//   border-radius: 0em 0em @borderRadius @borderRadius;
// }
// 
// /* Left / Right */
// .ui.left.attached.button {
//   display: inline-block;
//   border-left: none;
//   text-align: right;
// 
//   padding-right: @attachedHorizontalPadding;
//   border-radius: @borderRadius 0em 0em @borderRadius;
// }
// .ui.right.attached.button {
//   display: inline-block;
//   text-align: left;
//   padding-left: @attachedHorizontalPadding;
//   border-radius: 0em @borderRadius @borderRadius 0em;
// }
// 
// /* Plural */
// .ui.attached.buttons {
//   position: relative;
//   display: flex;
//   border-radius: 0em;
//   width: auto !important;
//   z-index: @attachedZIndex;
//   margin-left: @attachedOffset;
//   margin-right: @attachedOffset;
// }
// .ui.attached.buttons .button {
//   margin: 0em;
// }
// .ui.attached.buttons .button:first-child {
//   border-radius: 0em;
// }
// .ui.attached.buttons .button:last-child {
//   border-radius: 0em;
// }
// 
// /* Top / Bottom */
// .ui[class*="top attached"].buttons {
//   margin-bottom: @attachedOffset;
//   border-radius: @borderRadius @borderRadius 0em 0em;
// }
// .ui[class*="top attached"].buttons .button:first-child {
//   border-radius: @borderRadius 0em 0em 0em;
// }
// .ui[class*="top attached"].buttons .button:last-child {
//   border-radius: 0em @borderRadius 0em 0em;
// }
// 
// .ui[class*="bottom attached"].buttons {
//   margin-top: @attachedOffset;
//   border-radius: 0em 0em @borderRadius @borderRadius;
// }
// .ui[class*="bottom attached"].buttons .button:first-child {
//   border-radius: 0em 0em 0em @borderRadius;
// }
// .ui[class*="bottom attached"].buttons .button:last-child {
//   border-radius: 0em 0em @borderRadius 0em;
// }
// 
// /* Left / Right */
// .ui[class*="left attached"].buttons {
//   display: inline-flex;
//   margin-right: 0em;
//   margin-left: @attachedOffset;
//   border-radius: 0em @borderRadius @borderRadius 0em;
// }
// .ui[class*="left attached"].buttons .button:first-child {
//   margin-left: @attachedOffset;
//   border-radius: 0em @borderRadius 0em 0em;
// }
// .ui[class*="left attached"].buttons .button:last-child {
//   margin-left: @attachedOffset;
//   border-radius: 0em 0em @borderRadius 0em;
// }
// 
// .ui[class*="right attached"].buttons {
//   display: inline-flex;
//   margin-left: 0em;
//   margin-right: @attachedOffset;
//   border-radius: @borderRadius 0em 0em @borderRadius;
// }
// .ui[class*="right attached"].buttons .button:first-child {
//   margin-left: @attachedOffset;
//   border-radius: @borderRadius 0em 0em 0em;
// }
// .ui[class*="right attached"].buttons .button:last-child {
//   margin-left: @attachedOffset;
//   border-radius: 0em 0em 0em @borderRadius;
// }
// 
// /*-------------------
//         Fluid
// --------------------*/
// 
// .ui.fluid.buttons,
// .ui.fluid.button {
//   width: 100%;
// }
// .ui.fluid.button {
//   display: block;
// }
// 
// .ui.two.buttons {
//   width: 100%;
// }
// .ui.two.buttons > .button {
//   width: 50%;
// }
// 
// .ui.three.buttons {
//   width: 100%;
// }
// .ui.three.buttons > .button {
//   width: 33.333%;
// }
// 
// .ui.four.buttons {
//   width: 100%;
// }
// .ui.four.buttons > .button {
//   width: 25%;
// }
// 
// .ui.five.buttons {
//   width: 100%;
// }
// .ui.five.buttons > .button {
//   width: 20%;
// }
// 
// .ui.six.buttons {
//   width: 100%;
// }
// .ui.six.buttons > .button {
//   width: 16.666%;
// }
// 
// .ui.seven.buttons {
//   width: 100%;
// }
// .ui.seven.buttons > .button {
//   width: 14.285%;
// }
// 
// .ui.eight.buttons {
//   width: 100%;
// }
// .ui.eight.buttons > .button {
//   width: 12.500%;
// }
// 
// .ui.nine.buttons {
//   width: 100%;
// }
// .ui.nine.buttons > .button {
//   width: 11.11%;
// }
// 
// .ui.ten.buttons {
//   width: 100%;
// }
// .ui.ten.buttons > .button {
//   width: 10%;
// }
// 
// .ui.eleven.buttons {
//   width: 100%;
// }
// .ui.eleven.buttons > .button {
//   width: 9.09%;
// }
// 
// .ui.twelve.buttons {
//   width: 100%;
// }
// .ui.twelve.buttons > .button {
//   width: 8.3333%;
// }
// 
// /* Fluid Vertical Buttons */
// .ui.fluid.vertical.buttons,
// .ui.fluid.vertical.buttons > .button {
//   display: flex;
//   width: auto;
// }
// 
// .ui.two.vertical.buttons > .button {
//   height: 50%;
// }
// .ui.three.vertical.buttons > .button {
//   height: 33.333%;
// }
// .ui.four.vertical.buttons > .button {
//   height: 25%;
// }
// .ui.five.vertical.buttons > .button {
//   height: 20%;
// }
// .ui.six.vertical.buttons > .button {
//   height: 16.666%;
// }
// .ui.seven.vertical.buttons > .button {
//   height: 14.285%;
// }
// .ui.eight.vertical.buttons > .button {
//   height: 12.500%;
// }
// .ui.nine.vertical.buttons > .button {
//   height: 11.11%;
// }
// .ui.ten.vertical.buttons > .button {
//   height: 10%;
// }
// .ui.eleven.vertical.buttons > .button {
//   height: 9.09%;
// }
// .ui.twelve.vertical.buttons > .button {
//   height: 8.3333%;
// }
// 
// 
// /*-------------------
//        Colors
// --------------------*/
// 
// /*--- Black ---*/
// .ui.black.buttons .button,
// .ui.black.button {
//   background-color: @black;
//   color: @blackTextColor;
//   text-shadow: @blackTextShadow;
//   background-image: @coloredBackgroundImage;
// }
// .ui.black.button {
//   box-shadow: @coloredBoxShadow;
// }
// .ui.black.buttons .button:hover,
// .ui.black.button:hover {
//   background-color: @blackHover;
//   color: @blackTextColor;
//   text-shadow: @blackTextShadow;
// }
// .ui.black.buttons .button:focus,
// .ui.black.button:focus {
//   background-color: @blackFocus;
//   color: @blackTextColor;
//   text-shadow: @blackTextShadow;
// }
// .ui.black.buttons .button:active,
// .ui.black.button:active {
//   background-color: @blackDown;
//   color: @blackTextColor;
//   text-shadow: @blackTextShadow;
// }
// .ui.black.buttons .active.button,
// .ui.black.buttons .active.button:active,
// .ui.black.active.button,
// .ui.black.button .active.button:active {
//   background-color: @blackActive;
//   color: @blackTextColor;
//   text-shadow: @blackTextShadow;
// }
// 
// /* Basic */
// .ui.basic.black.buttons .button,
// .ui.basic.black.button {
//   box-shadow: 0px 0px 0px @basicBorderSize @black inset !important;
//   color: @black !important;
// }
// .ui.basic.black.buttons .button:hover,
// .ui.basic.black.button:hover {
//   background: transparent !important;
//   box-shadow: 0px 0px 0px @basicColoredBorderSize @blackHover inset !important;
//   color: @blackHover !important;
// }
// .ui.basic.black.buttons .button:focus,
// .ui.basic.black.button:focus {
//   background: transparent !important;
//   box-shadow: 0px 0px 0px @basicColoredBorderSize @blackFocus inset !important;
//   color: @blackHover !important;
// }
// .ui.basic.black.buttons .active.button,
// .ui.basic.black.active.button {
//   background: transparent !important;
//   box-shadow: 0px 0px 0px @basicColoredBorderSize @blackActive inset !important;
//   color: @blackDown !important;
// }
// .ui.basic.black.buttons .button:active,
// .ui.basic.black.button:active {
//   box-shadow: 0px 0px 0px @basicColoredBorderSize @blackDown inset !important;
//   color: @blackDown !important;
// }
// .ui.buttons:not(.vertical) > .basic.black.button:not(:first-child) {
//   margin-left: -@basicColoredBorderSize;
// }
// 
// /* Inverted */
// .ui.inverted.black.buttons .button,
// .ui.inverted.black.button {
//   background-color: transparent;
//   box-shadow: 0px 0px 0px @invertedBorderSize @solidBorderColor inset !important;
//   color: @invertedTextColor;
// }
// .ui.inverted.black.buttons .button:hover,
// .ui.inverted.black.button:hover,
// .ui.inverted.black.buttons .button:focus,
// .ui.inverted.black.button:focus,
// .ui.inverted.black.buttons .button.active,
// .ui.inverted.black.button.active,
// .ui.inverted.black.buttons .button:active,
// .ui.inverted.black.button:active {
//   box-shadow: none !important;
//   color: @lightBlackTextColor;
// }
// .ui.inverted.black.buttons .button:hover,
// .ui.inverted.black.button:hover {
//   background-color: @lightBlackHover;
// }
// .ui.inverted.black.buttons .button:focus,
// .ui.inverted.black.button:focus {
//   background-color: @lightBlackFocus;
// }
// .ui.inverted.black.buttons .active.button,
// .ui.inverted.black.active.button {
//   background-color: @lightBlackActive;
// }
// .ui.inverted.black.buttons .button:active,
// .ui.inverted.black.button:active {
//   background-color: @lightBlackDown;
// }
// 
// /* Inverted Basic */
// .ui.inverted.black.basic.buttons .button,
// .ui.inverted.black.buttons .basic.button,
// .ui.inverted.black.basic.button {
//   background-color: transparent;
//   box-shadow: @basicInvertedBoxShadow !important;
//   color: @white !important;
// }
// .ui.inverted.black.basic.buttons .button:hover,
// .ui.inverted.black.buttons .basic.button:hover,
// .ui.inverted.black.basic.button:hover {
//   box-shadow: 0px 0px 0px @invertedBorderSize @lightBlackHover inset !important;
//   color: @white !important;
// }
// .ui.inverted.black.basic.buttons .button:focus,
// .ui.inverted.black.basic.buttons .button:focus,
// .ui.inverted.black.basic.button:focus {
//   box-shadow: 0px 0px 0px @invertedBorderSize @lightBlackFocus inset !important;
//   color: @lightBlack !important;
// }
// .ui.inverted.black.basic.buttons .active.button,
// .ui.inverted.black.buttons .basic.active.button,
// .ui.inverted.black.basic.active.button {
//   box-shadow: 0px 0px 0px @invertedBorderSize @lightBlackActive inset !important;
//   color: @white !important;
// }
// .ui.inverted.black.basic.buttons .button:active,
// .ui.inverted.black.buttons .basic.button:active,
// .ui.inverted.black.basic.button:active {
//   box-shadow: 0px 0px 0px @invertedBorderSize @lightBlackDown inset !important;
//   color: @white !important;
// }
// 
// /*--- Grey ---*/
// .ui.grey.buttons .button,
// .ui.grey.button {
//   background-color: @grey;
//   color: @greyTextColor;
//   text-shadow: @greyTextShadow;
//   background-image: @coloredBackgroundImage;
// }
// .ui.grey.button {
//   box-shadow: @coloredBoxShadow;
// }
// .ui.grey.buttons .button:hover,
// .ui.grey.button:hover {
//   background-color: @greyHover;
//   color: @greyTextColor;
//   text-shadow: @greyTextShadow;
// }
// .ui.grey.buttons .button:focus,
// .ui.grey.button:focus {
//   background-color: @greyFocus;
//   color: @greyTextColor;
//   text-shadow: @greyTextShadow;
// }
// .ui.grey.buttons .button:active,
// .ui.grey.button:active {
//   background-color: @greyDown;
//   color: @greyTextColor;
//   text-shadow: @greyTextShadow;
// }
// .ui.grey.buttons .active.button,
// .ui.grey.buttons .active.button:active,
// .ui.grey.active.button,
// .ui.grey.button .active.button:active {
//   background-color: @greyActive;
//   color: @greyTextColor;
//   text-shadow: @greyTextShadow;
// }
// 
// /* Basic */
// .ui.basic.grey.buttons .button,
// .ui.basic.grey.button {
//   box-shadow: 0px 0px 0px @basicBorderSize @grey inset !important;
//   color: @grey !important;
// }
// .ui.basic.grey.buttons .button:hover,
// .ui.basic.grey.button:hover {
//   background: transparent !important;
//   box-shadow: 0px 0px 0px @basicColoredBorderSize @greyHover inset !important;
//   color: @greyHover !important;
// }
// .ui.basic.grey.buttons .button:focus,
// .ui.basic.grey.button:focus {
//   background: transparent !important;
//   box-shadow: 0px 0px 0px @basicColoredBorderSize @greyFocus inset !important;
//   color: @greyHover !important;
// }
// .ui.basic.grey.buttons .active.button,
// .ui.basic.grey.active.button {
//   background: transparent !important;
//   box-shadow: 0px 0px 0px @basicColoredBorderSize @greyActive inset !important;
//   color: @greyDown !important;
// }
// .ui.basic.grey.buttons .button:active,
// .ui.basic.grey.button:active {
//   box-shadow: 0px 0px 0px @basicColoredBorderSize @greyDown inset !important;
//   color: @greyDown !important;
// }
// .ui.buttons:not(.vertical) > .basic.grey.button:not(:first-child) {
//   margin-left: -@basicColoredBorderSize;
// }
// 
// /* Inverted */
// .ui.inverted.grey.buttons .button,
// .ui.inverted.grey.button {
//   background-color: transparent;
//   box-shadow: 0px 0px 0px @invertedBorderSize @solidBorderColor inset !important;
//   color: @invertedTextColor;
// }
// .ui.inverted.grey.buttons .button:hover,
// .ui.inverted.grey.button:hover,
// .ui.inverted.grey.buttons .button:focus,
// .ui.inverted.grey.button:focus,
// .ui.inverted.grey.buttons .button.active,
// .ui.inverted.grey.button.active,
// .ui.inverted.grey.buttons .button:active,
// .ui.inverted.grey.button:active {
//   box-shadow: none !important;
//   color: @lightGreyTextColor;
// }
// .ui.inverted.grey.buttons .button:hover,
// .ui.inverted.grey.button:hover {
//   background-color: @lightGreyHover;
// }
// .ui.inverted.grey.buttons .button:focus,
// .ui.inverted.grey.button:focus {
//   background-color: @lightGreyFocus;
// }
// .ui.inverted.grey.buttons .active.button,
// .ui.inverted.grey.active.button {
//   background-color: @lightGreyActive;
// }
// .ui.inverted.grey.buttons .button:active,
// .ui.inverted.grey.button:active {
//   background-color: @lightGreyDown;
// }
// 
// /* Inverted Basic */
// .ui.inverted.grey.basic.buttons .button,
// .ui.inverted.grey.buttons .basic.button,
// .ui.inverted.grey.basic.button {
//   background-color: transparent;
//   box-shadow: @basicInvertedBoxShadow !important;
//   color: @white !important;
// }
// .ui.inverted.grey.basic.buttons .button:hover,
// .ui.inverted.grey.buttons .basic.button:hover,
// .ui.inverted.grey.basic.button:hover {
//   box-shadow: 0px 0px 0px @invertedBorderSize @lightGreyHover inset !important;
//   color: @white !important;
// }
// .ui.inverted.grey.basic.buttons .button:focus,
// .ui.inverted.grey.basic.buttons .button:focus,
// .ui.inverted.grey.basic.button:focus {
//   box-shadow: 0px 0px 0px @invertedBorderSize @lightGreyFocus inset !important;
//   color: @lightGrey !important;
// }
// .ui.inverted.grey.basic.buttons .active.button,
// .ui.inverted.grey.buttons .basic.active.button,
// .ui.inverted.grey.basic.active.button {
//   box-shadow: 0px 0px 0px @invertedBorderSize @lightGreyActive inset !important;
//   color: @white !important;
// }
// .ui.inverted.grey.basic.buttons .button:active,
// .ui.inverted.grey.buttons .basic.button:active,
// .ui.inverted.grey.basic.button:active {
//   box-shadow: 0px 0px 0px @invertedBorderSize @lightGreyDown inset !important;
//   color: @white !important;
// }
// 
// 
// /*--- Brown ---*/
// .ui.brown.buttons .button,
// .ui.brown.button {
//   background-color: @brown;
//   color: @brownTextColor;
//   text-shadow: @brownTextShadow;
//   background-image: @coloredBackgroundImage;
// }
// .ui.brown.button {
//   box-shadow: @coloredBoxShadow;
// }
// .ui.brown.buttons .button:hover,
// .ui.brown.button:hover {
//   background-color: @brownHover;
//   color: @brownTextColor;
//   text-shadow: @brownTextShadow;
// }
// .ui.brown.buttons .button:focus,
// .ui.brown.button:focus {
//   background-color: @brownFocus;
//   color: @brownTextColor;
//   text-shadow: @brownTextShadow;
// }
// .ui.brown.buttons .button:active,
// .ui.brown.button:active {
//   background-color: @brownDown;
//   color: @brownTextColor;
//   text-shadow: @brownTextShadow;
// }
// .ui.brown.buttons .active.button,
// .ui.brown.buttons .active.button:active,
// .ui.brown.active.button,
// .ui.brown.button .active.button:active {
//   background-color: @brownActive;
//   color: @brownTextColor;
//   text-shadow: @brownTextShadow;
// }
// 
// /* Basic */
// .ui.basic.brown.buttons .button,
// .ui.basic.brown.button {
//   box-shadow: 0px 0px 0px @basicBorderSize @brown inset !important;
//   color: @brown !important;
// }
// .ui.basic.brown.buttons .button:hover,
// .ui.basic.brown.button:hover {
//   background: transparent !important;
//   box-shadow: 0px 0px 0px @basicColoredBorderSize @brownHover inset !important;
//   color: @brownHover !important;
// }
// .ui.basic.brown.buttons .button:focus,
// .ui.basic.brown.button:focus {
//   background: transparent !important;
//   box-shadow: 0px 0px 0px @basicColoredBorderSize @brownFocus inset !important;
//   color: @brownHover !important;
// }
// .ui.basic.brown.buttons .active.button,
// .ui.basic.brown.active.button {
//   background: transparent !important;
//   box-shadow: 0px 0px 0px @basicColoredBorderSize @brownActive inset !important;
//   color: @brownDown !important;
// }
// .ui.basic.brown.buttons .button:active,
// .ui.basic.brown.button:active {
//   box-shadow: 0px 0px 0px @basicColoredBorderSize @brownDown inset !important;
//   color: @brownDown !important;
// }
// .ui.buttons:not(.vertical) > .basic.brown.button:not(:first-child) {
//   margin-left: -@basicColoredBorderSize;
// }
// 
// /* Inverted */
// .ui.inverted.brown.buttons .button,
// .ui.inverted.brown.button {
//   background-color: transparent;
//   box-shadow: 0px 0px 0px @invertedBorderSize @lightBrown inset !important;
//   color: @lightBrown;
// }
// .ui.inverted.brown.buttons .button:hover,
// .ui.inverted.brown.button:hover,
// .ui.inverted.brown.buttons .button:focus,
// .ui.inverted.brown.button:focus,
// .ui.inverted.brown.buttons .button.active,
// .ui.inverted.brown.button.active,
// .ui.inverted.brown.buttons .button:active,
// .ui.inverted.brown.button:active {
//   box-shadow: none !important;
//   color: @lightBrownTextColor;
// }
// .ui.inverted.brown.buttons .button:hover,
// .ui.inverted.brown.button:hover {
//   background-color: @lightBrownHover;
// }
// .ui.inverted.brown.buttons .button:focus,
// .ui.inverted.brown.button:focus {
//   background-color: @lightBrownFocus;
// }
// .ui.inverted.brown.buttons .active.button,
// .ui.inverted.brown.active.button {
//   background-color: @lightBrownActive;
// }
// .ui.inverted.brown.buttons .button:active,
// .ui.inverted.brown.button:active {
//   background-color: @lightBrownDown;
// }
// 
// /* Inverted Basic */
// .ui.inverted.brown.basic.buttons .button,
// .ui.inverted.brown.buttons .basic.button,
// .ui.inverted.brown.basic.button {
//   background-color: transparent;
//   box-shadow: @basicInvertedBoxShadow !important;
//   color: @white !important;
// }
// .ui.inverted.brown.basic.buttons .button:hover,
// .ui.inverted.brown.buttons .basic.button:hover,
// .ui.inverted.brown.basic.button:hover {
//   box-shadow: 0px 0px 0px @invertedBorderSize @lightBrownHover inset !important;
//   color: @lightBrown !important;
// }
// .ui.inverted.brown.basic.buttons .button:focus,
// .ui.inverted.brown.basic.buttons .button:focus,
// .ui.inverted.brown.basic.button:focus {
//   box-shadow: 0px 0px 0px @invertedBorderSize @lightBrownFocus inset !important;
//   color: @lightBrown !important;
// }
// .ui.inverted.brown.basic.buttons .active.button,
// .ui.inverted.brown.buttons .basic.active.button,
// .ui.inverted.brown.basic.active.button {
//   box-shadow: 0px 0px 0px @invertedBorderSize @lightBrownActive inset !important;
//   color: @lightBrown !important;
// }
// .ui.inverted.brown.basic.buttons .button:active,
// .ui.inverted.brown.buttons .basic.button:active,
// .ui.inverted.brown.basic.button:active {
//   box-shadow: 0px 0px 0px @invertedBorderSize @lightBrownDown inset !important;
//   color: @lightBrown !important;
// }
// 
// /*--- Blue ---*/
// .ui.blue.buttons .button,
// .ui.blue.button {
//   background-color: @blue;
//   color: @blueTextColor;
//   text-shadow: @blueTextShadow;
//   background-image: @coloredBackgroundImage;
// }
// .ui.blue.button {
//   box-shadow: @coloredBoxShadow;
// }
// .ui.blue.buttons .button:hover,
// .ui.blue.button:hover {
//   background-color: @blueHover;
//   color: @blueTextColor;
//   text-shadow: @blueTextShadow;
// }
// .ui.blue.buttons .button:focus,
// .ui.blue.button:focus {
//   background-color: @blueFocus;
//   color: @blueTextColor;
//   text-shadow: @blueTextShadow;
// }
// .ui.blue.buttons .button:active,
// .ui.blue.button:active {
//   background-color: @blueDown;
//   color: @blueTextColor;
//   text-shadow: @blueTextShadow;
// }
// .ui.blue.buttons .active.button,
// .ui.blue.buttons .active.button:active,
// .ui.blue.active.button,
// .ui.blue.button .active.button:active {
//   background-color: @blueActive;
//   color: @blueTextColor;
//   text-shadow: @blueTextShadow;
// }
// 
// /* Basic */
// .ui.basic.blue.buttons .button,
// .ui.basic.blue.button {
//   box-shadow: 0px 0px 0px @basicBorderSize @blue inset !important;
//   color: @blue !important;
// }
// .ui.basic.blue.buttons .button:hover,
// .ui.basic.blue.button:hover {
//   background: transparent !important;
//   box-shadow: 0px 0px 0px @basicColoredBorderSize @blueHover inset !important;
//   color: @blueHover !important;
// }
// .ui.basic.blue.buttons .button:focus,
// .ui.basic.blue.button:focus {
//   background: transparent !important;
//   box-shadow: 0px 0px 0px @basicColoredBorderSize @blueFocus inset !important;
//   color: @blueHover !important;
// }
// .ui.basic.blue.buttons .active.button,
// .ui.basic.blue.active.button {
//   background: transparent !important;
//   box-shadow: 0px 0px 0px @basicColoredBorderSize @blueActive inset !important;
//   color: @blueDown !important;
// }
// .ui.basic.blue.buttons .button:active,
// .ui.basic.blue.button:active {
//   box-shadow: 0px 0px 0px @basicColoredBorderSize @blueDown inset !important;
//   color: @blueDown !important;
// }
// .ui.buttons:not(.vertical) > .basic.blue.button:not(:first-child) {
//   margin-left: -@basicColoredBorderSize;
// }
// 
// /* Inverted */
// .ui.inverted.blue.buttons .button,
// .ui.inverted.blue.button {
//   background-color: transparent;
//   box-shadow: 0px 0px 0px @invertedBorderSize @lightBlue inset !important;
//   color: @lightBlue;
// }
// .ui.inverted.blue.buttons .button:hover,
// .ui.inverted.blue.button:hover,
// .ui.inverted.blue.buttons .button:focus,
// .ui.inverted.blue.button:focus,
// .ui.inverted.blue.buttons .button.active,
// .ui.inverted.blue.button.active,
// .ui.inverted.blue.buttons .button:active,
// .ui.inverted.blue.button:active {
//   box-shadow: none !important;
//   color: @lightBlueTextColor;
// }
// .ui.inverted.blue.buttons .button:hover,
// .ui.inverted.blue.button:hover {
//   background-color: @lightBlueHover;
// }
// .ui.inverted.blue.buttons .button:focus,
// .ui.inverted.blue.button:focus {
//   background-color: @lightBlueFocus;
// }
// .ui.inverted.blue.buttons .active.button,
// .ui.inverted.blue.active.button {
//   background-color: @lightBlueActive;
// }
// .ui.inverted.blue.buttons .button:active,
// .ui.inverted.blue.button:active {
//   background-color: @lightBlueDown;
// }
// 
// /* Inverted Basic */
// .ui.inverted.blue.basic.buttons .button,
// .ui.inverted.blue.buttons .basic.button,
// .ui.inverted.blue.basic.button {
//   background-color: transparent;
//   box-shadow: @basicInvertedBoxShadow !important;
//   color: @white !important;
// }
// .ui.inverted.blue.basic.buttons .button:hover,
// .ui.inverted.blue.buttons .basic.button:hover,
// .ui.inverted.blue.basic.button:hover {
//   box-shadow: 0px 0px 0px @invertedBorderSize @lightBlueHover inset !important;
//   color: @lightBlue !important;
// }
// .ui.inverted.blue.basic.buttons .button:focus,
// .ui.inverted.blue.basic.buttons .button:focus,
// .ui.inverted.blue.basic.button:focus {
//   box-shadow: 0px 0px 0px @invertedBorderSize @lightBlueFocus inset !important;
//   color: @lightBlue !important;
// }
// .ui.inverted.blue.basic.buttons .active.button,
// .ui.inverted.blue.buttons .basic.active.button,
// .ui.inverted.blue.basic.active.button {
//   box-shadow: 0px 0px 0px @invertedBorderSize @lightBlueActive inset !important;
//   color: @lightBlue !important;
// }
// .ui.inverted.blue.basic.buttons .button:active,
// .ui.inverted.blue.buttons .basic.button:active,
// .ui.inverted.blue.basic.button:active {
//   box-shadow: 0px 0px 0px @invertedBorderSize @lightBlueDown inset !important;
//   color: @lightBlue !important;
// }
// 
// /*--- Green ---*/
// .ui.green.buttons .button,
// .ui.green.button {
//   background-color: @green;
//   color: @greenTextColor;
//   text-shadow: @greenTextShadow;
//   background-image: @coloredBackgroundImage;
// }
// .ui.green.button {
//   box-shadow: @coloredBoxShadow;
// }
// .ui.green.buttons .button:hover,
// .ui.green.button:hover {
//   background-color: @greenHover;
//   color: @greenTextColor;
//   text-shadow: @greenTextShadow;
// }
// .ui.green.buttons .button:focus,
// .ui.green.button:focus {
//   background-color: @greenFocus;
//   color: @greenTextColor;
//   text-shadow: @greenTextShadow;
// }
// .ui.green.buttons .button:active,
// .ui.green.button:active {
//   background-color: @greenDown;
//   color: @greenTextColor;
//   text-shadow: @greenTextShadow;
// }
// .ui.green.buttons .active.button,
// .ui.green.buttons .active.button:active,
// .ui.green.active.button,
// .ui.green.button .active.button:active {
//   background-color: @greenActive;
//   color: @greenTextColor;
//   text-shadow: @greenTextShadow;
// }
// 
// 
// /* Basic */
// .ui.basic.green.buttons .button,
// .ui.basic.green.button {
//   box-shadow: 0px 0px 0px @basicBorderSize @green inset !important;
//   color: @green !important;
// }
// .ui.basic.green.buttons .button:hover,
// .ui.basic.green.button:hover {
//   background: transparent !important;
//   box-shadow: 0px 0px 0px @basicColoredBorderSize @greenHover inset !important;
//   color: @greenHover !important;
// }
// .ui.basic.green.buttons .button:focus,
// .ui.basic.green.button:focus {
//   background: transparent !important;
//   box-shadow: 0px 0px 0px @basicColoredBorderSize @greenFocus inset !important;
//   color: @greenHover !important;
// }
// .ui.basic.green.buttons .active.button,
// .ui.basic.green.active.button {
//   background: transparent !important;
//   box-shadow: 0px 0px 0px @basicColoredBorderSize @greenActive inset !important;
//   color: @greenDown !important;
// }
// .ui.basic.green.buttons .button:active,
// .ui.basic.green.button:active {
//   box-shadow: 0px 0px 0px @basicColoredBorderSize @greenDown inset !important;
//   color: @greenDown !important;
// }
// .ui.buttons:not(.vertical) > .basic.green.button:not(:first-child) {
//   margin-left: -@basicColoredBorderSize;
// }
// 
// /* Inverted */
// .ui.inverted.green.buttons .button,
// .ui.inverted.green.button {
//   background-color: transparent;
//   box-shadow: 0px 0px 0px @invertedBorderSize @lightGreen inset !important;
//   color: @lightGreen;
// }
// .ui.inverted.green.buttons .button:hover,
// .ui.inverted.green.button:hover,
// .ui.inverted.green.buttons .button:focus,
// .ui.inverted.green.button:focus,
// .ui.inverted.green.buttons .button.active,
// .ui.inverted.green.button.active,
// .ui.inverted.green.buttons .button:active,
// .ui.inverted.green.button:active {
//   box-shadow: none !important;
//   color: @greenTextColor;
// }
// .ui.inverted.green.buttons .button:hover,
// .ui.inverted.green.button:hover {
//   background-color: @lightGreenHover;
// }
// .ui.inverted.green.buttons .button:focus,
// .ui.inverted.green.button:focus {
//   background-color: @lightGreenFocus;
// }
// .ui.inverted.green.buttons .active.button,
// .ui.inverted.green.active.button {
//   background-color: @lightGreenActive;
// }
// .ui.inverted.green.buttons .button:active,
// .ui.inverted.green.button:active {
//   background-color: @lightGreenDown;
// }
// 
// /* Inverted Basic */
// .ui.inverted.green.basic.buttons .button,
// .ui.inverted.green.buttons .basic.button,
// .ui.inverted.green.basic.button {
//   background-color: transparent;
//   box-shadow: @basicInvertedBoxShadow !important;
//   color: @white !important;
// }
// .ui.inverted.green.basic.buttons .button:hover,
// .ui.inverted.green.buttons .basic.button:hover,
// .ui.inverted.green.basic.button:hover {
//   box-shadow: 0px 0px 0px @invertedBorderSize @lightGreenHover inset !important;
//   color: @lightGreen !important;
// }
// .ui.inverted.green.basic.buttons .button:focus,
// .ui.inverted.green.basic.buttons .button:focus,
// .ui.inverted.green.basic.button:focus {
//   box-shadow: 0px 0px 0px @invertedBorderSize @lightGreenFocus inset !important;
//   color: @lightGreen !important;
// }
// .ui.inverted.green.basic.buttons .active.button,
// .ui.inverted.green.buttons .basic.active.button,
// .ui.inverted.green.basic.active.button {
//   box-shadow: 0px 0px 0px @invertedBorderSize @lightGreenActive inset !important;
//   color: @lightGreen !important;
// }
// .ui.inverted.green.basic.buttons .button:active,
// .ui.inverted.green.buttons .basic.button:active,
// .ui.inverted.green.basic.button:active {
//   box-shadow: 0px 0px 0px @invertedBorderSize @lightGreenDown inset !important;
//   color: @lightGreen !important;
// }
// 
// /*--- Orange ---*/
// .ui.orange.buttons .button,
// .ui.orange.button {
//   background-color: @orange;
//   color: @orangeTextColor;
//   text-shadow: @orangeTextShadow;
//   background-image: @coloredBackgroundImage;
// }
// .ui.orange.button {
//   box-shadow: @coloredBoxShadow;
// }
// .ui.orange.buttons .button:hover,
// .ui.orange.button:hover {
//   background-color: @orangeHover;
//   color: @orangeTextColor;
//   text-shadow: @orangeTextShadow;
// }
// .ui.orange.buttons .button:focus,
// .ui.orange.button:focus {
//   background-color: @orangeFocus;
//   color: @orangeTextColor;
//   text-shadow: @orangeTextShadow;
// }
// .ui.orange.buttons .button:active,
// .ui.orange.button:active {
//   background-color: @orangeDown;
//   color: @orangeTextColor;
//   text-shadow: @orangeTextShadow;
// }
// .ui.orange.buttons .active.button,
// .ui.orange.buttons .active.button:active,
// .ui.orange.active.button,
// .ui.orange.button .active.button:active {
//   background-color: @orangeActive;
//   color: @orangeTextColor;
//   text-shadow: @orangeTextShadow;
// }
// 
// /* Basic */
// .ui.basic.orange.buttons .button,
// .ui.basic.orange.button {
//   box-shadow: 0px 0px 0px @basicBorderSize @orange inset !important;
//   color: @orange !important;
// }
// .ui.basic.orange.buttons .button:hover,
// .ui.basic.orange.button:hover {
//   background: transparent !important;
//   box-shadow: 0px 0px 0px @basicColoredBorderSize @orangeHover inset !important;
//   color: @orangeHover !important;
// }
// .ui.basic.orange.buttons .button:focus,
// .ui.basic.orange.button:focus {
//   background: transparent !important;
//   box-shadow: 0px 0px 0px @basicColoredBorderSize @orangeFocus inset !important;
//   color: @orangeHover !important;
// }
// .ui.basic.orange.buttons .active.button,
// .ui.basic.orange.active.button {
//   background: transparent !important;
//   box-shadow: 0px 0px 0px @basicColoredBorderSize @orangeActive inset !important;
//   color: @orangeDown !important;
// }
// .ui.basic.orange.buttons .button:active,
// .ui.basic.orange.button:active {
//   box-shadow: 0px 0px 0px @basicColoredBorderSize @orangeDown inset !important;
//   color: @orangeDown !important;
// }
// .ui.buttons:not(.vertical) > .basic.orange.button:not(:first-child) {
//   margin-left: -@basicColoredBorderSize;
// }
// 
// /* Inverted */
// .ui.inverted.orange.buttons .button,
// .ui.inverted.orange.button {
//   background-color: transparent;
//   box-shadow: 0px 0px 0px @invertedBorderSize @lightOrange inset !important;
//   color: @lightOrange;
// }
// .ui.inverted.orange.buttons .button:hover,
// .ui.inverted.orange.button:hover,
// .ui.inverted.orange.buttons .button:focus,
// .ui.inverted.orange.button:focus,
// .ui.inverted.orange.buttons .button.active,
// .ui.inverted.orange.button.active,
// .ui.inverted.orange.buttons .button:active,
// .ui.inverted.orange.button:active {
//   box-shadow: none !important;
//   color: @lightOrangeTextColor;
// }
// .ui.inverted.orange.buttons .button:hover,
// .ui.inverted.orange.button:hover {
//   background-color: @lightOrangeHover;
// }
// .ui.inverted.orange.buttons .button:focus,
// .ui.inverted.orange.button:focus {
//   background-color: @lightOrangeFocus;
// }
// .ui.inverted.orange.buttons .active.button,
// .ui.inverted.orange.active.button {
//   background-color: @lightOrangeActive;
// }
// .ui.inverted.orange.buttons .button:active,
// .ui.inverted.orange.button:active {
//   background-color: @lightOrangeDown;
// }
// 
// /* Inverted Basic */
// .ui.inverted.orange.basic.buttons .button,
// .ui.inverted.orange.buttons .basic.button,
// .ui.inverted.orange.basic.button {
//   background-color: transparent;
//   box-shadow: @basicInvertedBoxShadow !important;
//   color: @white !important;
// }
// .ui.inverted.orange.basic.buttons .button:hover,
// .ui.inverted.orange.buttons .basic.button:hover,
// .ui.inverted.orange.basic.button:hover {
//   box-shadow: 0px 0px 0px @invertedBorderSize @lightOrangeHover inset !important;
//   color: @lightOrange !important;
// }
// .ui.inverted.orange.basic.buttons .button:focus,
// .ui.inverted.orange.basic.buttons .button:focus,
// .ui.inverted.orange.basic.button:focus {
//   box-shadow: 0px 0px 0px @invertedBorderSize @lightOrangeFocus inset !important;
//   color: @lightOrange !important;
// }
// .ui.inverted.orange.basic.buttons .active.button,
// .ui.inverted.orange.buttons .basic.active.button,
// .ui.inverted.orange.basic.active.button {
//   box-shadow: 0px 0px 0px @invertedBorderSize @lightOrangeActive inset !important;
//   color: @lightOrange !important;
// }
// .ui.inverted.orange.basic.buttons .button:active,
// .ui.inverted.orange.buttons .basic.button:active,
// .ui.inverted.orange.basic.button:active {
//   box-shadow: 0px 0px 0px @invertedBorderSize @lightOrangeDown inset !important;
//   color: @lightOrange !important;
// }
// 
// /*--- Pink ---*/
// .ui.pink.buttons .button,
// .ui.pink.button {
//   background-color: @pink;
//   color: @pinkTextColor;
//   text-shadow: @pinkTextShadow;
//   background-image: @coloredBackgroundImage;
// }
// .ui.pink.button {
//   box-shadow: @coloredBoxShadow;
// }
// .ui.pink.buttons .button:hover,
// .ui.pink.button:hover {
//   background-color: @pinkHover;
//   color: @pinkTextColor;
//   text-shadow: @pinkTextShadow;
// }
// .ui.pink.buttons .button:focus,
// .ui.pink.button:focus {
//   background-color: @pinkFocus;
//   color: @pinkTextColor;
//   text-shadow: @pinkTextShadow;
// }
// .ui.pink.buttons .button:active,
// .ui.pink.button:active {
//   background-color: @pinkDown;
//   color: @pinkTextColor;
//   text-shadow: @pinkTextShadow;
// }
// .ui.pink.buttons .active.button,
// .ui.pink.buttons .active.button:active,
// .ui.pink.active.button,
// .ui.pink.button .active.button:active {
//   background-color: @pinkActive;
//   color: @pinkTextColor;
//   text-shadow: @pinkTextShadow;
// }
// 
// /* Basic */
// .ui.basic.pink.buttons .button,
// .ui.basic.pink.button {
//   box-shadow: 0px 0px 0px @basicBorderSize @pink inset !important;
//   color: @pink !important;
// }
// .ui.basic.pink.buttons .button:hover,
// .ui.basic.pink.button:hover {
//   background: transparent !important;
//   box-shadow: 0px 0px 0px @basicColoredBorderSize @pinkHover inset !important;
//   color: @pinkHover !important;
// }
// .ui.basic.pink.buttons .button:focus,
// .ui.basic.pink.button:focus {
//   background: transparent !important;
//   box-shadow: 0px 0px 0px @basicColoredBorderSize @pinkFocus inset !important;
//   color: @pinkHover !important;
// }
// .ui.basic.pink.buttons .active.button,
// .ui.basic.pink.active.button {
//   background: transparent !important;
//   box-shadow: 0px 0px 0px @basicColoredBorderSize @pinkActive inset !important;
//   color: @pinkDown !important;
// }
// .ui.basic.pink.buttons .button:active,
// .ui.basic.pink.button:active {
//   box-shadow: 0px 0px 0px @basicColoredBorderSize @pinkDown inset !important;
//   color: @pinkDown !important;
// }
// .ui.buttons:not(.vertical) > .basic.pink.button:not(:first-child) {
//   margin-left: -@basicColoredBorderSize;
// }
// 
// /* Inverted */
// .ui.inverted.pink.buttons .button,
// .ui.inverted.pink.button {
//   background-color: transparent;
//   box-shadow: 0px 0px 0px @invertedBorderSize @lightPink inset !important;
//   color: @lightPink;
// }
// .ui.inverted.pink.buttons .button:hover,
// .ui.inverted.pink.button:hover,
// .ui.inverted.pink.buttons .button:focus,
// .ui.inverted.pink.button:focus,
// .ui.inverted.pink.buttons .button.active,
// .ui.inverted.pink.button.active,
// .ui.inverted.pink.buttons .button:active,
// .ui.inverted.pink.button:active {
//   box-shadow: none !important;
//   color: @lightPinkTextColor;
// }
// .ui.inverted.pink.buttons .button:hover,
// .ui.inverted.pink.button:hover {
//   background-color: @lightPinkHover;
// }
// .ui.inverted.pink.buttons .button:focus,
// .ui.inverted.pink.button:focus {
//   background-color: @lightPinkFocus;
// }
// .ui.inverted.pink.buttons .active.button,
// .ui.inverted.pink.active.button {
//   background-color: @lightPinkActive;
// }
// .ui.inverted.pink.buttons .button:active,
// .ui.inverted.pink.button:active {
//   background-color: @lightPinkDown;
// }
// 
// /* Inverted Basic */
// .ui.inverted.pink.basic.buttons .button,
// .ui.inverted.pink.buttons .basic.button,
// .ui.inverted.pink.basic.button {
//   background-color: transparent;
//   box-shadow: @basicInvertedBoxShadow !important;
//   color: @white !important;
// }
// .ui.inverted.pink.basic.buttons .button:hover,
// .ui.inverted.pink.buttons .basic.button:hover,
// .ui.inverted.pink.basic.button:hover {
//   box-shadow: 0px 0px 0px @invertedBorderSize @lightPinkHover inset !important;
//   color: @lightPink !important;
// }
// .ui.inverted.pink.basic.buttons .button:focus,
// .ui.inverted.pink.basic.buttons .button:focus,
// .ui.inverted.pink.basic.button:focus {
//   box-shadow: 0px 0px 0px @invertedBorderSize @lightPinkFocus inset !important;
//   color: @lightPink !important;
// }
// .ui.inverted.pink.basic.buttons .active.button,
// .ui.inverted.pink.buttons .basic.active.button,
// .ui.inverted.pink.basic.active.button {
//   box-shadow: 0px 0px 0px @invertedBorderSize @lightPinkActive inset !important;
//   color: @lightPink !important;
// }
// .ui.inverted.pink.basic.buttons .button:active,
// .ui.inverted.pink.buttons .basic.button:active,
// .ui.inverted.pink.basic.button:active {
//   box-shadow: 0px 0px 0px @invertedBorderSize @lightPinkDown inset !important;
//   color: @lightPink !important;
// }
// 
// 
// /*--- Violet ---*/
// .ui.violet.buttons .button,
// .ui.violet.button {
//   background-color: @violet;
//   color: @violetTextColor;
//   text-shadow: @violetTextShadow;
//   background-image: @coloredBackgroundImage;
// }
// .ui.violet.button {
//   box-shadow: @coloredBoxShadow;
// }
// .ui.violet.buttons .button:hover,
// .ui.violet.button:hover {
//   background-color: @violetHover;
//   color: @violetTextColor;
//   text-shadow: @violetTextShadow;
// }
// .ui.violet.buttons .button:focus,
// .ui.violet.button:focus {
//   background-color: @violetFocus;
//   color: @violetTextColor;
//   text-shadow: @violetTextShadow;
// }
// .ui.violet.buttons .button:active,
// .ui.violet.button:active {
//   background-color: @violetDown;
//   color: @violetTextColor;
//   text-shadow: @violetTextShadow;
// }
// .ui.violet.buttons .active.button,
// .ui.violet.buttons .active.button:active,
// .ui.violet.active.button,
// .ui.violet.button .active.button:active {
//   background-color: @violetActive;
//   color: @violetTextColor;
//   text-shadow: @violetTextShadow;
// }
// 
// /* Basic */
// .ui.basic.violet.buttons .button,
// .ui.basic.violet.button {
//   box-shadow: 0px 0px 0px @basicBorderSize @violet inset !important;
//   color: @violet !important;
// }
// .ui.basic.violet.buttons .button:hover,
// .ui.basic.violet.button:hover {
//   background: transparent !important;
//   box-shadow: 0px 0px 0px @basicColoredBorderSize @violetHover inset !important;
//   color: @violetHover !important;
// }
// .ui.basic.violet.buttons .button:focus,
// .ui.basic.violet.button:focus {
//   background: transparent !important;
//   box-shadow: 0px 0px 0px @basicColoredBorderSize @violetFocus inset !important;
//   color: @violetHover !important;
// }
// .ui.basic.violet.buttons .active.button,
// .ui.basic.violet.active.button {
//   background: transparent !important;
//   box-shadow: 0px 0px 0px @basicColoredBorderSize @violetActive inset !important;
//   color: @violetDown !important;
// }
// .ui.basic.violet.buttons .button:active,
// .ui.basic.violet.button:active {
//   box-shadow: 0px 0px 0px @basicColoredBorderSize @violetDown inset !important;
//   color: @violetDown !important;
// }
// .ui.buttons:not(.vertical) > .basic.violet.button:not(:first-child) {
//   margin-left: -@basicColoredBorderSize;
// }
// 
// /* Inverted */
// .ui.inverted.violet.buttons .button,
// .ui.inverted.violet.button {
//   background-color: transparent;
//   box-shadow: 0px 0px 0px @invertedBorderSize @lightViolet inset !important;
//   color: @lightViolet;
// }
// .ui.inverted.violet.buttons .button:hover,
// .ui.inverted.violet.button:hover,
// .ui.inverted.violet.buttons .button:focus,
// .ui.inverted.violet.button:focus,
// .ui.inverted.violet.buttons .button.active,
// .ui.inverted.violet.button.active,
// .ui.inverted.violet.buttons .button:active,
// .ui.inverted.violet.button:active {
//   box-shadow: none !important;
//   color: @lightVioletTextColor;
// }
// .ui.inverted.violet.buttons .button:hover,
// .ui.inverted.violet.button:hover {
//   background-color: @lightVioletHover;
// }
// .ui.inverted.violet.buttons .button:focus,
// .ui.inverted.violet.button:focus {
//   background-color: @lightVioletFocus;
// }
// .ui.inverted.violet.buttons .active.button,
// .ui.inverted.violet.active.button {
//   background-color: @lightVioletActive;
// }
// .ui.inverted.violet.buttons .button:active,
// .ui.inverted.violet.button:active {
//   background-color: @lightVioletDown;
// }
// 
// /* Inverted Basic */
// .ui.inverted.violet.basic.buttons .button,
// .ui.inverted.violet.buttons .basic.button,
// .ui.inverted.violet.basic.button {
//   background-color: transparent;
//   box-shadow: @basicInvertedBoxShadow !important;
//   color: @white !important;
// }
// .ui.inverted.violet.basic.buttons .button:hover,
// .ui.inverted.violet.buttons .basic.button:hover,
// .ui.inverted.violet.basic.button:hover {
//   box-shadow: 0px 0px 0px @invertedBorderSize @lightVioletHover inset !important;
//   color: @lightViolet !important;
// }
// .ui.inverted.violet.basic.buttons .button:focus,
// .ui.inverted.violet.basic.buttons .button:focus,
// .ui.inverted.violet.basic.button:focus {
//   box-shadow: 0px 0px 0px @invertedBorderSize @lightVioletFocus inset !important;
//   color: @lightViolet !important;
// }
// .ui.inverted.violet.basic.buttons .active.button,
// .ui.inverted.violet.buttons .basic.active.button,
// .ui.inverted.violet.basic.active.button {
//   box-shadow: 0px 0px 0px @invertedBorderSize @lightVioletActive inset !important;
//   color: @lightViolet !important;
// }
// .ui.inverted.violet.basic.buttons .button:active,
// .ui.inverted.violet.buttons .basic.button:active,
// .ui.inverted.violet.basic.button:active {
//   box-shadow: 0px 0px 0px @invertedBorderSize @lightVioletDown inset !important;
//   color: @lightViolet !important;
// }
// 
// /*--- Purple ---*/
// .ui.purple.buttons .button,
// .ui.purple.button {
//   background-color: @purple;
//   color: @purpleTextColor;
//   text-shadow: @purpleTextShadow;
//   background-image: @coloredBackgroundImage;
// }
// .ui.purple.button {
//   box-shadow: @coloredBoxShadow;
// }
// .ui.purple.buttons .button:hover,
// .ui.purple.button:hover {
//   background-color: @purpleHover;
//   color: @purpleTextColor;
//   text-shadow: @purpleTextShadow;
// }
// .ui.purple.buttons .button:focus,
// .ui.purple.button:focus {
//   background-color: @purpleFocus;
//   color: @purpleTextColor;
//   text-shadow: @purpleTextShadow;
// }
// .ui.purple.buttons .button:active,
// .ui.purple.button:active {
//   background-color: @purpleDown;
//   color: @purpleTextColor;
//   text-shadow: @purpleTextShadow;
// }
// .ui.purple.buttons .active.button,
// .ui.purple.buttons .active.button:active,
// .ui.purple.active.button,
// .ui.purple.button .active.button:active {
//   background-color: @purpleActive;
//   color: @purpleTextColor;
//   text-shadow: @purpleTextShadow;
// }
// 
// /* Basic */
// .ui.basic.purple.buttons .button,
// .ui.basic.purple.button {
//   box-shadow: 0px 0px 0px @basicBorderSize @purple inset !important;
//   color: @purple !important;
// }
// .ui.basic.purple.buttons .button:hover,
// .ui.basic.purple.button:hover {
//   background: transparent !important;
//   box-shadow: 0px 0px 0px @basicColoredBorderSize @purpleHover inset !important;
//   color: @purpleHover !important;
// }
// .ui.basic.purple.buttons .button:focus,
// .ui.basic.purple.button:focus {
//   background: transparent !important;
//   box-shadow: 0px 0px 0px @basicColoredBorderSize @purpleFocus inset !important;
//   color: @purpleHover !important;
// }
// .ui.basic.purple.buttons .active.button,
// .ui.basic.purple.active.button {
//   background: transparent !important;
//   box-shadow: 0px 0px 0px @basicColoredBorderSize @purpleActive inset !important;
//   color: @purpleDown !important;
// }
// .ui.basic.purple.buttons .button:active,
// .ui.basic.purple.button:active {
//   box-shadow: 0px 0px 0px @basicColoredBorderSize @purpleDown inset !important;
//   color: @purpleDown !important;
// }
// .ui.buttons:not(.vertical) > .basic.purple.button:not(:first-child) {
//   margin-left: -@basicColoredBorderSize;
// }
// 
// /* Inverted */
// .ui.inverted.purple.buttons .button,
// .ui.inverted.purple.button {
//   background-color: transparent;
//   box-shadow: 0px 0px 0px @invertedBorderSize @lightPurple inset !important;
//   color: @lightPurple;
// }
// .ui.inverted.purple.buttons .button:hover,
// .ui.inverted.purple.button:hover,
// .ui.inverted.purple.buttons .button:focus,
// .ui.inverted.purple.button:focus,
// .ui.inverted.purple.buttons .button.active,
// .ui.inverted.purple.button.active,
// .ui.inverted.purple.buttons .button:active,
// .ui.inverted.purple.button:active {
//   box-shadow: none !important;
//   color: @lightPurpleTextColor;
// }
// .ui.inverted.purple.buttons .button:hover,
// .ui.inverted.purple.button:hover {
//   background-color: @lightPurpleHover;
// }
// .ui.inverted.purple.buttons .button:focus,
// .ui.inverted.purple.button:focus {
//   background-color: @lightPurpleFocus;
// }
// .ui.inverted.purple.buttons .active.button,
// .ui.inverted.purple.active.button {
//   background-color: @lightPurpleActive;
// }
// .ui.inverted.purple.buttons .button:active,
// .ui.inverted.purple.button:active {
//   background-color: @lightPurpleDown;
// }
// 
// /* Inverted Basic */
// .ui.inverted.purple.basic.buttons .button,
// .ui.inverted.purple.buttons .basic.button,
// .ui.inverted.purple.basic.button {
//   background-color: transparent;
//   box-shadow: @basicInvertedBoxShadow !important;
//   color: @white !important;
// }
// .ui.inverted.purple.basic.buttons .button:hover,
// .ui.inverted.purple.buttons .basic.button:hover,
// .ui.inverted.purple.basic.button:hover {
//   box-shadow: 0px 0px 0px @invertedBorderSize @lightPurpleHover inset !important;
//   color: @lightPurple !important;
// }
// .ui.inverted.purple.basic.buttons .button:focus,
// .ui.inverted.purple.basic.buttons .button:focus,
// .ui.inverted.purple.basic.button:focus {
//   box-shadow: 0px 0px 0px @invertedBorderSize @lightPurpleFocus inset !important;
//   color: @lightPurple !important;
// }
// .ui.inverted.purple.basic.buttons .active.button,
// .ui.inverted.purple.buttons .basic.active.button,
// .ui.inverted.purple.basic.active.button {
//   box-shadow: 0px 0px 0px @invertedBorderSize @lightPurpleActive inset !important;
//   color: @lightPurple !important;
// }
// .ui.inverted.purple.basic.buttons .button:active,
// .ui.inverted.purple.buttons .basic.button:active,
// .ui.inverted.purple.basic.button:active {
//   box-shadow: 0px 0px 0px @invertedBorderSize @lightPurpleDown inset !important;
//   color: @lightPurple !important;
// }
// 
// /*--- Red ---*/
// .ui.red.buttons .button,
// .ui.red.button {
//   background-color: @red;
//   color: @redTextColor;
//   text-shadow: @redTextShadow;
//   background-image: @coloredBackgroundImage;
// }
// .ui.red.button {
//   box-shadow: @coloredBoxShadow;
// }
// .ui.red.buttons .button:hover,
// .ui.red.button:hover {
//   background-color: @redHover;
//   color: @redTextColor;
//   text-shadow: @redTextShadow;
// }
// .ui.red.buttons .button:focus,
// .ui.red.button:focus {
//   background-color: @redFocus;
//   color: @redTextColor;
//   text-shadow: @redTextShadow;
// }
// .ui.red.buttons .button:active,
// .ui.red.button:active {
//   background-color: @redDown;
//   color: @redTextColor;
//   text-shadow: @redTextShadow;
// }
// .ui.red.buttons .active.button,
// .ui.red.buttons .active.button:active,
// .ui.red.active.button,
// .ui.red.button .active.button:active {
//   background-color: @redActive;
//   color: @redTextColor;
//   text-shadow: @redTextShadow;
// }
// 
// /* Basic */
// .ui.basic.red.buttons .button,
// .ui.basic.red.button {
//   box-shadow: 0px 0px 0px @basicBorderSize @red inset !important;
//   color: @red !important;
// }
// .ui.basic.red.buttons .button:hover,
// .ui.basic.red.button:hover {
//   background: transparent !important;
//   box-shadow: 0px 0px 0px @basicColoredBorderSize @redHover inset !important;
//   color: @redHover !important;
// }
// .ui.basic.red.buttons .button:focus,
// .ui.basic.red.button:focus {
//   background: transparent !important;
//   box-shadow: 0px 0px 0px @basicColoredBorderSize @redFocus inset !important;
//   color: @redHover !important;
// }
// .ui.basic.red.buttons .active.button,
// .ui.basic.red.active.button {
//   background: transparent !important;
//   box-shadow: 0px 0px 0px @basicColoredBorderSize @redActive inset !important;
//   color: @redDown !important;
// }
// .ui.basic.red.buttons .button:active,
// .ui.basic.red.button:active {
//   box-shadow: 0px 0px 0px @basicColoredBorderSize @redDown inset !important;
//   color: @redDown !important;
// }
// .ui.buttons:not(.vertical) > .basic.red.button:not(:first-child) {
//   margin-left: -@basicColoredBorderSize;
// }
// 
// /* Inverted */
// .ui.inverted.red.buttons .button,
// .ui.inverted.red.button {
//   background-color: transparent;
//   box-shadow: 0px 0px 0px @invertedBorderSize @lightRed inset !important;
//   color: @lightRed;
// }
// .ui.inverted.red.buttons .button:hover,
// .ui.inverted.red.button:hover,
// .ui.inverted.red.buttons .button:focus,
// .ui.inverted.red.button:focus,
// .ui.inverted.red.buttons .button.active,
// .ui.inverted.red.button.active,
// .ui.inverted.red.buttons .button:active,
// .ui.inverted.red.button:active {
//   box-shadow: none !important;
//   color: @lightRedTextColor;
// }
// .ui.inverted.red.buttons .button:hover,
// .ui.inverted.red.button:hover {
//   background-color: @lightRedHover;
// }
// .ui.inverted.red.buttons .button:focus,
// .ui.inverted.red.button:focus {
//   background-color: @lightRedFocus;
// }
// .ui.inverted.red.buttons .active.button,
// .ui.inverted.red.active.button {
//   background-color: @lightRedActive;
// }
// .ui.inverted.red.buttons .button:active,
// .ui.inverted.red.button:active {
//   background-color: @lightRedDown;
// }
// 
// /* Inverted Basic */
// .ui.inverted.red.basic.buttons .button,
// .ui.inverted.red.buttons .basic.button,
// .ui.inverted.red.basic.button {
//   background-color: transparent;
//   box-shadow: @basicInvertedBoxShadow !important;
//   color: @white !important;
// }
// .ui.inverted.red.basic.buttons .button:hover,
// .ui.inverted.red.buttons .basic.button:hover,
// .ui.inverted.red.basic.button:hover {
//   box-shadow: 0px 0px 0px @invertedBorderSize @lightRedHover inset !important;
//   color: @lightRed !important;
// }
// .ui.inverted.red.basic.buttons .button:focus,
// .ui.inverted.red.basic.buttons .button:focus,
// .ui.inverted.red.basic.button:focus {
//   box-shadow: 0px 0px 0px @invertedBorderSize @lightRedFocus inset !important;
//   color: @lightRed !important;
// }
// .ui.inverted.red.basic.buttons .active.button,
// .ui.inverted.red.buttons .basic.active.button,
// .ui.inverted.red.basic.active.button {
//   box-shadow: 0px 0px 0px @invertedBorderSize @lightRedActive inset !important;
//   color: @lightRed !important;
// }
// .ui.inverted.red.basic.buttons .button:active,
// .ui.inverted.red.buttons .basic.button:active,
// .ui.inverted.red.basic.button:active {
//   box-shadow: 0px 0px 0px @invertedBorderSize @lightRedDown inset !important;
//   color: @lightRed !important;
// }
// 
// 
// /*--- Teal ---*/
// .ui.teal.buttons .button,
// .ui.teal.button {
//   background-color: @teal;
//   color: @tealTextColor;
//   text-shadow: @tealTextShadow;
//   background-image: @coloredBackgroundImage;
// }
// .ui.teal.button {
//   box-shadow: @coloredBoxShadow;
// }
// .ui.teal.buttons .button:hover,
// .ui.teal.button:hover {
//   background-color: @tealHover;
//   color: @tealTextColor;
//   text-shadow: @tealTextShadow;
// }
// .ui.teal.buttons .button:focus,
// .ui.teal.button:focus {
//   background-color: @tealFocus;
//   color: @tealTextColor;
//   text-shadow: @tealTextShadow;
// }
// .ui.teal.buttons .button:active,
// .ui.teal.button:active {
//   background-color: @tealDown;
//   color: @tealTextColor;
//   text-shadow: @tealTextShadow;
// }
// .ui.teal.buttons .active.button,
// .ui.teal.buttons .active.button:active,
// .ui.teal.active.button,
// .ui.teal.button .active.button:active {
//   background-color: @tealActive;
//   color: @tealTextColor;
//   text-shadow: @tealTextShadow;
// }
// 
// /* Basic */
// .ui.basic.teal.buttons .button,
// .ui.basic.teal.button {
//   box-shadow: 0px 0px 0px @basicBorderSize @teal inset !important;
//   color: @teal !important;
// }
// .ui.basic.teal.buttons .button:hover,
// .ui.basic.teal.button:hover {
//   background: transparent !important;
//   box-shadow: 0px 0px 0px @basicColoredBorderSize @tealHover inset !important;
//   color: @tealHover !important;
// }
// .ui.basic.teal.buttons .button:focus,
// .ui.basic.teal.button:focus {
//   background: transparent !important;
//   box-shadow: 0px 0px 0px @basicColoredBorderSize @tealFocus inset !important;
//   color: @tealHover !important;
// }
// .ui.basic.teal.buttons .active.button,
// .ui.basic.teal.active.button {
//   background: transparent !important;
//   box-shadow: 0px 0px 0px @basicColoredBorderSize @tealActive inset !important;
//   color: @tealDown !important;
// }
// .ui.basic.teal.buttons .button:active,
// .ui.basic.teal.button:active {
//   box-shadow: 0px 0px 0px @basicColoredBorderSize @tealDown inset !important;
//   color: @tealDown !important;
// }
// .ui.buttons:not(.vertical) > .basic.teal.button:not(:first-child) {
//   margin-left: -@basicColoredBorderSize;
// }
// 
// /* Inverted */
// .ui.inverted.teal.buttons .button,
// .ui.inverted.teal.button {
//   background-color: transparent;
//   box-shadow: 0px 0px 0px @invertedBorderSize @lightTeal inset !important;
//   color: @lightTeal;
// }
// .ui.inverted.teal.buttons .button:hover,
// .ui.inverted.teal.button:hover,
// .ui.inverted.teal.buttons .button:focus,
// .ui.inverted.teal.button:focus,
// .ui.inverted.teal.buttons .button.active,
// .ui.inverted.teal.button.active,
// .ui.inverted.teal.buttons .button:active,
// .ui.inverted.teal.button:active {
//   box-shadow: none !important;
//   color: @lightTealTextColor;
// }
// .ui.inverted.teal.buttons .button:hover,
// .ui.inverted.teal.button:hover {
//   background-color: @lightTealHover;
// }
// .ui.inverted.teal.buttons .button:focus,
// .ui.inverted.teal.button:focus {
//   background-color: @lightTealFocus;
// }
// .ui.inverted.teal.buttons .active.button,
// .ui.inverted.teal.active.button {
//   background-color: @lightTealActive;
// }
// .ui.inverted.teal.buttons .button:active,
// .ui.inverted.teal.button:active {
//   background-color: @lightTealDown;
// }
// 
// /* Inverted Basic */
// .ui.inverted.teal.basic.buttons .button,
// .ui.inverted.teal.buttons .basic.button,
// .ui.inverted.teal.basic.button {
//   background-color: transparent;
//   box-shadow: @basicInvertedBoxShadow !important;
//   color: @white !important;
// }
// .ui.inverted.teal.basic.buttons .button:hover,
// .ui.inverted.teal.buttons .basic.button:hover,
// .ui.inverted.teal.basic.button:hover {
//   box-shadow: 0px 0px 0px @invertedBorderSize @lightTealHover inset !important;
//   color: @lightTeal !important;
// }
// .ui.inverted.teal.basic.buttons .button:focus,
// .ui.inverted.teal.basic.buttons .button:focus,
// .ui.inverted.teal.basic.button:focus {
//   box-shadow: 0px 0px 0px @invertedBorderSize @lightTealFocus inset !important;
//   color: @lightTeal !important;
// }
// .ui.inverted.teal.basic.buttons .active.button,
// .ui.inverted.teal.buttons .basic.active.button,
// .ui.inverted.teal.basic.active.button {
//   box-shadow: 0px 0px 0px @invertedBorderSize @lightTealActive inset !important;
//   color: @lightTeal !important;
// }
// .ui.inverted.teal.basic.buttons .button:active,
// .ui.inverted.teal.buttons .basic.button:active,
// .ui.inverted.teal.basic.button:active {
//   box-shadow: 0px 0px 0px @invertedBorderSize @lightTealDown inset !important;
//   color: @lightTeal !important;
// }
// 
// 
// /*--- Olive ---*/
// .ui.olive.buttons .button,
// .ui.olive.button {
//   background-color: @olive;
//   color: @oliveTextColor;
//   text-shadow: @oliveTextShadow;
//   background-image: @coloredBackgroundImage;
// }
// .ui.olive.button {
//   box-shadow: @coloredBoxShadow;
// }
// .ui.olive.buttons .button:hover,
// .ui.olive.button:hover {
//   background-color: @oliveHover;
//   color: @oliveTextColor;
//   text-shadow: @oliveTextShadow;
// }
// .ui.olive.buttons .button:focus,
// .ui.olive.button:focus {
//   background-color: @oliveFocus;
//   color: @oliveTextColor;
//   text-shadow: @oliveTextShadow;
// }
// .ui.olive.buttons .button:active,
// .ui.olive.button:active {
//   background-color: @oliveDown;
//   color: @oliveTextColor;
//   text-shadow: @oliveTextShadow;
// }
// .ui.olive.buttons .active.button,
// .ui.olive.buttons .active.button:active,
// .ui.olive.active.button,
// .ui.olive.button .active.button:active {
//   background-color: @oliveActive;
//   color: @oliveTextColor;
//   text-shadow: @oliveTextShadow;
// }
// 
// /* Basic */
// .ui.basic.olive.buttons .button,
// .ui.basic.olive.button {
//   box-shadow: 0px 0px 0px @basicBorderSize @olive inset !important;
//   color: @olive !important;
// }
// .ui.basic.olive.buttons .button:hover,
// .ui.basic.olive.button:hover {
//   background: transparent !important;
//   box-shadow: 0px 0px 0px @basicColoredBorderSize @oliveHover inset !important;
//   color: @oliveHover !important;
// }
// .ui.basic.olive.buttons .button:focus,
// .ui.basic.olive.button:focus {
//   background: transparent !important;
//   box-shadow: 0px 0px 0px @basicColoredBorderSize @oliveFocus inset !important;
//   color: @oliveHover !important;
// }
// .ui.basic.olive.buttons .active.button,
// .ui.basic.olive.active.button {
//   background: transparent !important;
//   box-shadow: 0px 0px 0px @basicColoredBorderSize @oliveActive inset !important;
//   color: @oliveDown !important;
// }
// .ui.basic.olive.buttons .button:active,
// .ui.basic.olive.button:active {
//   box-shadow: 0px 0px 0px @basicColoredBorderSize @oliveDown inset !important;
//   color: @oliveDown !important;
// }
// .ui.buttons:not(.vertical) > .basic.olive.button:not(:first-child) {
//   margin-left: -@basicColoredBorderSize;
// }
// 
// /* Inverted */
// .ui.inverted.olive.buttons .button,
// .ui.inverted.olive.button {
//   background-color: transparent;
//   box-shadow: 0px 0px 0px @invertedBorderSize @lightOlive inset !important;
//   color: @lightOlive;
// }
// .ui.inverted.olive.buttons .button:hover,
// .ui.inverted.olive.button:hover,
// .ui.inverted.olive.buttons .button:focus,
// .ui.inverted.olive.button:focus,
// .ui.inverted.olive.buttons .button.active,
// .ui.inverted.olive.button.active,
// .ui.inverted.olive.buttons .button:active,
// .ui.inverted.olive.button:active {
//   box-shadow: none !important;
//   color: @lightOliveTextColor;
// }
// .ui.inverted.olive.buttons .button:hover,
// .ui.inverted.olive.button:hover {
//   background-color: @lightOliveHover;
// }
// .ui.inverted.olive.buttons .button:focus,
// .ui.inverted.olive.button:focus {
//   background-color: @lightOliveFocus;
// }
// .ui.inverted.olive.buttons .active.button,
// .ui.inverted.olive.active.button {
//   background-color: @lightOliveActive;
// }
// .ui.inverted.olive.buttons .button:active,
// .ui.inverted.olive.button:active {
//   background-color: @lightOliveDown;
// }
// 
// /* Inverted Basic */
// .ui.inverted.olive.basic.buttons .button,
// .ui.inverted.olive.buttons .basic.button,
// .ui.inverted.olive.basic.button {
//   background-color: transparent;
//   box-shadow: @basicInvertedBoxShadow !important;
//   color: @white !important;
// }
// .ui.inverted.olive.basic.buttons .button:hover,
// .ui.inverted.olive.buttons .basic.button:hover,
// .ui.inverted.olive.basic.button:hover {
//   box-shadow: 0px 0px 0px @invertedBorderSize @lightOliveHover inset !important;
//   color: @lightOlive !important;
// }
// .ui.inverted.olive.basic.buttons .button:focus,
// .ui.inverted.olive.basic.buttons .button:focus,
// .ui.inverted.olive.basic.button:focus {
//   box-shadow: 0px 0px 0px @invertedBorderSize @lightOliveFocus inset !important;
//   color: @lightOlive !important;
// }
// .ui.inverted.olive.basic.buttons .active.button,
// .ui.inverted.olive.buttons .basic.active.button,
// .ui.inverted.olive.basic.active.button {
//   box-shadow: 0px 0px 0px @invertedBorderSize @lightOliveActive inset !important;
//   color: @lightOlive !important;
// }
// .ui.inverted.olive.basic.buttons .button:active,
// .ui.inverted.olive.buttons .basic.button:active,
// .ui.inverted.olive.basic.button:active {
//   box-shadow: 0px 0px 0px @invertedBorderSize @lightOliveDown inset !important;
//   color: @lightOlive !important;
// }
// 
// /*--- Yellow ---*/
// .ui.yellow.buttons .button,
// .ui.yellow.button {
//   background-color: @yellow;
//   color: @yellowTextColor;
//   text-shadow: @yellowTextShadow;
//   background-image: @coloredBackgroundImage;
// }
// .ui.yellow.button {
//   box-shadow: @coloredBoxShadow;
// }
// .ui.yellow.buttons .button:hover,
// .ui.yellow.button:hover {
//   background-color: @yellowHover;
//   color: @yellowTextColor;
//   text-shadow: @yellowTextShadow;
// }
// .ui.yellow.buttons .button:focus,
// .ui.yellow.button:focus {
//   background-color: @yellowFocus;
//   color: @yellowTextColor;
//   text-shadow: @yellowTextShadow;
// }
// .ui.yellow.buttons .button:active,
// .ui.yellow.button:active {
//   background-color: @yellowDown;
//   color: @yellowTextColor;
//   text-shadow: @yellowTextShadow;
// }
// .ui.yellow.buttons .active.button,
// .ui.yellow.buttons .active.button:active,
// .ui.yellow.active.button,
// .ui.yellow.button .active.button:active {
//   background-color: @yellowActive;
//   color: @yellowTextColor;
//   text-shadow: @yellowTextShadow;
// }
// 
// /* Basic */
// .ui.basic.yellow.buttons .button,
// .ui.basic.yellow.button {
//   box-shadow: 0px 0px 0px @basicBorderSize @yellow inset !important;
//   color: @yellow !important;
// }
// .ui.basic.yellow.buttons .button:hover,
// .ui.basic.yellow.button:hover {
//   background: transparent !important;
//   box-shadow: 0px 0px 0px @basicColoredBorderSize @yellowHover inset !important;
//   color: @yellowHover !important;
// }
// .ui.basic.yellow.buttons .button:focus,
// .ui.basic.yellow.button:focus {
//   background: transparent !important;
//   box-shadow: 0px 0px 0px @basicColoredBorderSize @yellowFocus inset !important;
//   color: @yellowHover !important;
// }
// .ui.basic.yellow.buttons .active.button,
// .ui.basic.yellow.active.button {
//   background: transparent !important;
//   box-shadow: 0px 0px 0px @basicColoredBorderSize @yellowActive inset !important;
//   color: @yellowDown !important;
// }
// .ui.basic.yellow.buttons .button:active,
// .ui.basic.yellow.button:active {
//   box-shadow: 0px 0px 0px @basicColoredBorderSize @yellowDown inset !important;
//   color: @yellowDown !important;
// }
// .ui.buttons:not(.vertical) > .basic.yellow.button:not(:first-child) {
//   margin-left: -@basicColoredBorderSize;
// }
// 
// /* Inverted */
// .ui.inverted.yellow.buttons .button,
// .ui.inverted.yellow.button {
//   background-color: transparent;
//   box-shadow: 0px 0px 0px @invertedBorderSize @lightYellow inset !important;
//   color: @lightYellow;
// }
// .ui.inverted.yellow.buttons .button:hover,
// .ui.inverted.yellow.button:hover,
// .ui.inverted.yellow.buttons .button:focus,
// .ui.inverted.yellow.button:focus,
// .ui.inverted.yellow.buttons .button.active,
// .ui.inverted.yellow.button.active,
// .ui.inverted.yellow.buttons .button:active,
// .ui.inverted.yellow.button:active {
//   box-shadow: none !important;
//   color: @lightYellowTextColor;
// }
// .ui.inverted.yellow.buttons .button:hover,
// .ui.inverted.yellow.button:hover {
//   background-color: @lightYellowHover;
// }
// .ui.inverted.yellow.buttons .button:focus,
// .ui.inverted.yellow.button:focus {
//   background-color: @lightYellowFocus;
// }
// .ui.inverted.yellow.buttons .active.button,
// .ui.inverted.yellow.active.button {
//   background-color: @lightYellowActive;
// }
// .ui.inverted.yellow.buttons .button:active,
// .ui.inverted.yellow.button:active {
//   background-color: @lightYellowDown;
// }
// 
// /* Inverted Basic */
// .ui.inverted.yellow.basic.buttons .button,
// .ui.inverted.yellow.buttons .basic.button,
// .ui.inverted.yellow.basic.button {
//   background-color: transparent;
//   box-shadow: @basicInvertedBoxShadow !important;
//   color: @white !important;
// }
// .ui.inverted.yellow.basic.buttons .button:hover,
// .ui.inverted.yellow.buttons .basic.button:hover,
// .ui.inverted.yellow.basic.button:hover {
//   box-shadow: 0px 0px 0px @invertedBorderSize @lightYellowHover inset !important;
//   color: @lightYellow !important;
// }
// .ui.inverted.yellow.basic.buttons .button:focus,
// .ui.inverted.yellow.basic.buttons .button:focus,
// .ui.inverted.yellow.basic.button:focus {
//   box-shadow: 0px 0px 0px @invertedBorderSize @lightYellowFocus inset !important;
//   color: @lightYellow !important;
// }
// .ui.inverted.yellow.basic.buttons .active.button,
// .ui.inverted.yellow.buttons .basic.active.button,
// .ui.inverted.yellow.basic.active.button {
//   box-shadow: 0px 0px 0px @invertedBorderSize @lightYellowActive inset !important;
//   color: @lightYellow !important;
// }
// .ui.inverted.yellow.basic.buttons .button:active,
// .ui.inverted.yellow.buttons .basic.button:active,
// .ui.inverted.yellow.basic.button:active {
//   box-shadow: 0px 0px 0px @invertedBorderSize @lightYellowDown inset !important;
//   color: @lightYellow !important;
// }
// 
// 
// /*-------------------
//        Primary
// --------------------*/
// 
// /*--- Standard ---*/
// .ui.primary.buttons .button,
// .ui.primary.button {
//   background-color: @primaryColor;
//   color: @primaryTextColor;
//   text-shadow: @primaryTextShadow;
//   background-image: @coloredBackgroundImage;
// }
// .ui.primary.button {
//   box-shadow: @coloredBoxShadow;
// }
// .ui.primary.buttons .button:hover,
// .ui.primary.button:hover {
//   background-color: @primaryColorHover;
//   color: @primaryTextColor;
//   text-shadow: @primaryTextShadow;
// }
// .ui.primary.buttons .button:focus,
// .ui.primary.button:focus {
//   background-color: @primaryColorFocus;
//   color: @primaryTextColor;
//   text-shadow: @primaryTextShadow;
// }
// .ui.primary.buttons .button:active,
// .ui.primary.button:active {
//   background-color: @primaryColorDown;
//   color: @primaryTextColor;
//   text-shadow: @primaryTextShadow;
// }
// .ui.primary.buttons .active.button,
// .ui.primary.buttons .active.button:active,
// .ui.primary.active.button,
// .ui.primary.button .active.button:active {
//   background-color: @primaryColorActive;
//   color: @primaryTextColor;
//   text-shadow: @primaryTextShadow;
// }
// 
// /* Basic */
// .ui.basic.primary.buttons .button,
// .ui.basic.primary.button {
//   box-shadow: 0px 0px 0px @basicBorderSize @primaryColor inset !important;
//   color: @primaryColor !important;
// }
// .ui.basic.primary.buttons .button:hover,
// .ui.basic.primary.button:hover {
//   background: transparent !important;
//   box-shadow: 0px 0px 0px @basicColoredBorderSize @primaryColorHover inset !important;
//   color: @primaryColorHover !important;
// }
// .ui.basic.primary.buttons .button:focus,
// .ui.basic.primary.button:focus {
//   background: transparent !important;
//   box-shadow: 0px 0px 0px @basicColoredBorderSize @primaryColorFocus inset !important;
//   color: @primaryColorHover !important;
// }
// .ui.basic.primary.buttons .active.button,
// .ui.basic.primary.active.button {
//   background: transparent !important;
//   box-shadow: 0px 0px 0px @basicColoredBorderSize @primaryColorActive inset !important;
//   color: @primaryColorDown !important;
// }
// .ui.basic.primary.buttons .button:active,
// .ui.basic.primary.button:active {
//   box-shadow: 0px 0px 0px @basicColoredBorderSize @primaryColorDown inset !important;
//   color: @primaryColorDown !important;
// }
// .ui.buttons:not(.vertical) > .basic.primary.button:not(:first-child) {
//   margin-left: -@basicColoredBorderSize;
// }
// 
// /*-------------------
//       Secondary
// --------------------*/
// 
// /* Standard */
// .ui.secondary.buttons .button,
// .ui.secondary.button {
//   background-color: @secondaryColor;
//   color: @secondaryTextColor;
//   text-shadow: @secondaryTextShadow;
//   background-image: @coloredBackgroundImage;
// }
// .ui.secondary.button {
//   box-shadow: @coloredBoxShadow;
// }
// .ui.secondary.buttons .button:hover,
// .ui.secondary.button:hover {
//   background-color: @secondaryColorHover;
//   color: @secondaryTextColor;
//   text-shadow: @secondaryTextShadow;
// }
// .ui.secondary.buttons .button:focus,
// .ui.secondary.button:focus {
//   background-color: @secondaryColorFocus;
//   color: @secondaryTextColor;
//   text-shadow: @secondaryTextShadow;
// }
// .ui.secondary.buttons .button:active,
// .ui.secondary.button:active {
//   background-color: @secondaryColorDown;
//   color: @secondaryTextColor;
//   text-shadow: @secondaryTextShadow;
// }
// .ui.secondary.buttons .active.button,
// .ui.secondary.buttons .active.button:active,
// .ui.secondary.active.button,
// .ui.secondary.button .active.button:active {
//   background-color: @secondaryColorActive;
//   color: @secondaryTextColor;
//   text-shadow: @secondaryTextShadow;
// }
// 
// /* Basic */
// .ui.basic.secondary.buttons .button,
// .ui.basic.secondary.button {
//   box-shadow: 0px 0px 0px @basicBorderSize @secondaryColor inset !important;
//   color: @secondaryColor !important;
// }
// .ui.basic.secondary.buttons .button:hover,
// .ui.basic.secondary.button:hover {
//   background: transparent !important;
//   box-shadow: 0px 0px 0px @basicColoredBorderSize @secondaryColorHover inset !important;
//   color: @secondaryColorHover !important;
// }
// .ui.basic.secondary.buttons .button:focus,
// .ui.basic.secondary.button:focus {
//   background: transparent !important;
//   box-shadow: 0px 0px 0px @basicColoredBorderSize @secondaryColorFocus inset !important;
//   color: @secondaryColorHover !important;
// }
// .ui.basic.secondary.buttons .active.button,
// .ui.basic.secondary.active.button {
//   background: transparent !important;
//   box-shadow: 0px 0px 0px @basicColoredBorderSize @secondaryColorActive inset !important;
//   color: @secondaryColorDown !important;
// }
// .ui.basic.secondary.buttons .button:active,
// .ui.basic.secondary.button:active {
//   box-shadow: 0px 0px 0px @basicColoredBorderSize @secondaryColorDown inset !important;
//   color: @secondaryColorDown !important;
// }
// .ui.buttons:not(.vertical) > .basic.primary.button:not(:first-child) {
//   margin-left: -@basicColoredBorderSize;
// }
// 
// /*---------------
//     Positive
// ----------------*/
// 
// /* Standard */
// .ui.positive.buttons .button,
// .ui.positive.button {
//   background-color: @positiveColor;
//   color: @positiveTextColor;
//   text-shadow: @positiveTextShadow;
//   background-image: @coloredBackgroundImage;
// }
// .ui.positive.button {
//   box-shadow: @coloredBoxShadow;
// }
// .ui.positive.buttons .button:hover,
// .ui.positive.button:hover {
//   background-color: @positiveColorHover;
//   color: @positiveTextColor;
//   text-shadow: @positiveTextShadow;
// }
// .ui.positive.buttons .button:focus,
// .ui.positive.button:focus {
//   background-color: @positiveColorFocus;
//   color: @positiveTextColor;
//   text-shadow: @positiveTextShadow;
// }
// .ui.positive.buttons .button:active,
// .ui.positive.button:active {
//   background-color: @positiveColorDown;
//   color: @positiveTextColor;
//   text-shadow: @positiveTextShadow;
// }
// .ui.positive.buttons .active.button,
// .ui.positive.buttons .active.button:active,
// .ui.positive.active.button,
// .ui.positive.button .active.button:active {
//   background-color: @positiveColorActive;
//   color: @positiveTextColor;
//   text-shadow: @positiveTextShadow;
// }
// 
// /* Basic */
// .ui.basic.positive.buttons .button,
// .ui.basic.positive.button {
//   box-shadow: 0px 0px 0px @basicBorderSize @positiveColor inset !important;
//   color: @positiveColor !important;
// }
// .ui.basic.positive.buttons .button:hover,
// .ui.basic.positive.button:hover {
//   background: transparent !important;
//   box-shadow: 0px 0px 0px @basicColoredBorderSize @positiveColorHover inset !important;
//   color: @positiveColorHover !important;
// }
// .ui.basic.positive.buttons .button:focus,
// .ui.basic.positive.button:focus {
//   background: transparent !important;
//   box-shadow: 0px 0px 0px @basicColoredBorderSize @positiveColorFocus inset !important;
//   color: @positiveColorHover !important;
// }
// .ui.basic.positive.buttons .active.button,
// .ui.basic.positive.active.button {
//   background: transparent !important;
//   box-shadow: 0px 0px 0px @basicColoredBorderSize @positiveColorActive inset !important;
//   color: @positiveColorDown !important;
// }
// .ui.basic.positive.buttons .button:active,
// .ui.basic.positive.button:active {
//   box-shadow: 0px 0px 0px @basicColoredBorderSize @positiveColorDown inset !important;
//   color: @positiveColorDown !important;
// }
// .ui.buttons:not(.vertical) > .basic.primary.button:not(:first-child) {
//   margin-left: -@basicColoredBorderSize;
// }
// 
// /*---------------
//      Negative
// ----------------*/
// 
// /* Standard */
// .ui.negative.buttons .button,
// .ui.negative.button {
//   background-color: @negativeColor;
//   color: @negativeTextColor;
//   text-shadow: @negativeTextShadow;
//   background-image: @coloredBackgroundImage;
// }
// .ui.negative.button {
//   box-shadow: @coloredBoxShadow;
// }
// .ui.negative.buttons .button:hover,
// .ui.negative.button:hover {
//   background-color: @negativeColorHover;
//   color: @negativeTextColor;
//   text-shadow: @negativeTextShadow;
// }
// .ui.negative.buttons .button:focus,
// .ui.negative.button:focus {
//   background-color: @negativeColorFocus;
//   color: @negativeTextColor;
//   text-shadow: @negativeTextShadow;
// }
// .ui.negative.buttons .button:active,
// .ui.negative.button:active {
//   background-color: @negativeColorDown;
//   color: @negativeTextColor;
//   text-shadow: @negativeTextShadow;
// }
// .ui.negative.buttons .active.button,
// .ui.negative.buttons .active.button:active,
// .ui.negative.active.button,
// .ui.negative.button .active.button:active {
//   background-color: @negativeColorActive;
//   color: @negativeTextColor;
//   text-shadow: @negativeTextShadow;
// }
// 
// /* Basic */
// .ui.basic.negative.buttons .button,
// .ui.basic.negative.button {
//   box-shadow: 0px 0px 0px @basicBorderSize @negativeColor inset !important;
//   color: @negativeColor !important;
// }
// .ui.basic.negative.buttons .button:hover,
// .ui.basic.negative.button:hover {
//   background: transparent !important;
//   box-shadow: 0px 0px 0px @basicColoredBorderSize @negativeColorHover inset !important;
//   color: @negativeColorHover !important;
// }
// .ui.basic.negative.buttons .button:focus,
// .ui.basic.negative.button:focus {
//   background: transparent !important;
//   box-shadow: 0px 0px 0px @basicColoredBorderSize @negativeColorFocus inset !important;
//   color: @negativeColorHover !important;
// }
// .ui.basic.negative.buttons .active.button,
// .ui.basic.negative.active.button {
//   background: transparent !important;
//   box-shadow: 0px 0px 0px @basicColoredBorderSize @negativeColorActive inset !important;
//   color: @negativeColorDown !important;
// }
// .ui.basic.negative.buttons .button:active,
// .ui.basic.negative.button:active {
//   box-shadow: 0px 0px 0px @basicColoredBorderSize @negativeColorDown inset !important;
//   color: @negativeColorDown !important;
// }
// .ui.buttons:not(.vertical) > .basic.primary.button:not(:first-child) {
//   margin-left: -@basicColoredBorderSize;
// }
// 
// /*******************************
//             Groups
// *******************************/
// 
// .ui.buttons {
//   display: inline-flex;
//   flex-direction: row;
//   font-size: 0em;
//   vertical-align: baseline;
//   margin: @verticalMargin @horizontalMargin 0em 0em;
// }
// .ui.buttons:not(.basic):not(.inverted) {
//   box-shadow: @groupBoxShadow;
// }
// 
// /* Clearfix */
// .ui.buttons:after {
//   content: ".";
//   display: block;
//   height: 0;
//   clear: both;
//   visibility: hidden;
// }
// 
// /* Standard Group */
// .ui.buttons .button {
//   flex: 1 0 auto;
//   margin: 0em;
//   border-radius: 0em;
//   margin: @groupButtonOffset;
// }
// .ui.buttons > .ui.button:not(.basic):not(.inverted),
// .ui.buttons:not(.basic):not(.inverted) > .button {
//   box-shadow: @groupButtonBoxShadow;
// }
// 
// .ui.buttons .button:first-child {
//   border-left: none;
//   margin-left: 0em;
//   border-top-left-radius: @borderRadius;
//   border-bottom-left-radius: @borderRadius;
// }
// .ui.buttons .button:last-child {
//   border-top-right-radius: @borderRadius;
//   border-bottom-right-radius: @borderRadius;
// }
// 
// /* Vertical  Style */
// .ui.vertical.buttons {
//   display: inline-flex;
//   flex-direction: column;
// }
// .ui.vertical.buttons .button {
//   display: block;
//   float: none;
//   width: 100%;
//   margin: @verticalGroupOffset;
//   box-shadow: @verticalBoxShadow;
//   border-radius: 0em;
// }
// .ui.vertical.buttons .button:first-child {
//   border-top-left-radius: @borderRadius;
//   border-top-right-radius: @borderRadius;
// }
// .ui.vertical.buttons .button:last-child {
//   margin-bottom: 0px;
//   border-bottom-left-radius: @borderRadius;
//   border-bottom-right-radius: @borderRadius;
// }
// .ui.vertical.buttons .button:only-child {
//   border-radius: @borderRadius;
// }
// 
// .loadUIOverrides();
// 
// 