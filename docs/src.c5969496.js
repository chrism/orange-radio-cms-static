(function () {
function $parcel$exportWildcard(dest, source) {
  Object.keys(source).forEach(function (key) {
    if (key === "default" || key === "__esModule") {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function get() {
        return source[key];
      }
    });
  });
  return dest;
}

// ASSET: ../node_modules/boosted/dist/js/boosted.esm.js
var $NlAe$exports = {};
var $NlAe$var$define;
// ASSET: ../node_modules/@popperjs/core/lib/index.js
var $vePw$exports = {};
// ASSET: ../node_modules/@popperjs/core/lib/enums.js
var $XHUo$exports = {};
var $XHUo$export$top = 'top';
$XHUo$exports.top = $XHUo$export$top;
var $XHUo$export$bottom = 'bottom';
$XHUo$exports.bottom = $XHUo$export$bottom;
var $XHUo$export$right = 'right';
$XHUo$exports.right = $XHUo$export$right;
var $XHUo$export$left = 'left';
$XHUo$exports.left = $XHUo$export$left;
var $XHUo$export$auto = 'auto';
$XHUo$exports.auto = $XHUo$export$auto;
var $XHUo$export$basePlacements = [$XHUo$export$top, $XHUo$export$bottom, $XHUo$export$right, $XHUo$export$left];
$XHUo$exports.basePlacements = $XHUo$export$basePlacements;
var $XHUo$export$start = 'start';
$XHUo$exports.start = $XHUo$export$start;
var $XHUo$export$end = 'end';
$XHUo$exports.end = $XHUo$export$end;
var $XHUo$export$clippingParents = 'clippingParents';
$XHUo$exports.clippingParents = $XHUo$export$clippingParents;
var $XHUo$export$viewport = 'viewport';
$XHUo$exports.viewport = $XHUo$export$viewport;
var $XHUo$export$popper = 'popper';
$XHUo$exports.popper = $XHUo$export$popper;
var $XHUo$export$reference = 'reference';
$XHUo$exports.reference = $XHUo$export$reference;
var $XHUo$export$variationPlacements = /*#__PURE__*/$XHUo$export$basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + $XHUo$export$start, placement + "-" + $XHUo$export$end]);
}, []);
$XHUo$exports.variationPlacements = $XHUo$export$variationPlacements;
var $XHUo$export$placements = /*#__PURE__*/[].concat($XHUo$export$basePlacements, [$XHUo$export$auto]).reduce(function (acc, placement) {
  return acc.concat([placement, placement + "-" + $XHUo$export$start, placement + "-" + $XHUo$export$end]);
}, []); // modifiers that need to read the DOM

$XHUo$exports.placements = $XHUo$export$placements;
var $XHUo$export$beforeRead = 'beforeRead';
$XHUo$exports.beforeRead = $XHUo$export$beforeRead;
var $XHUo$export$read = 'read';
$XHUo$exports.read = $XHUo$export$read;
var $XHUo$export$afterRead = 'afterRead'; // pure-logic modifiers

$XHUo$exports.afterRead = $XHUo$export$afterRead;
var $XHUo$export$beforeMain = 'beforeMain';
$XHUo$exports.beforeMain = $XHUo$export$beforeMain;
var $XHUo$export$main = 'main';
$XHUo$exports.main = $XHUo$export$main;
var $XHUo$export$afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

$XHUo$exports.afterMain = $XHUo$export$afterMain;
var $XHUo$export$beforeWrite = 'beforeWrite';
$XHUo$exports.beforeWrite = $XHUo$export$beforeWrite;
var $XHUo$export$write = 'write';
$XHUo$exports.write = $XHUo$export$write;
var $XHUo$export$afterWrite = 'afterWrite';
$XHUo$exports.afterWrite = $XHUo$export$afterWrite;
var $XHUo$export$modifierPhases = [$XHUo$export$beforeRead, $XHUo$export$read, $XHUo$export$afterRead, $XHUo$export$beforeMain, $XHUo$export$main, $XHUo$export$afterMain, $XHUo$export$beforeWrite, $XHUo$export$write, $XHUo$export$afterWrite];
$XHUo$exports.modifierPhases = $XHUo$export$modifierPhases;

function $B1zX$export$default(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}

function $QiNa$export$default(node) {
  if (node == null) {
    return window;
  }

  if (node.toString() !== '[object Window]') {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }

  return node;
}

function $wsKO$export$isElement(node) {
  var OwnElement = $QiNa$export$default(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}

function $wsKO$export$isHTMLElement(node) {
  var OwnElement = $QiNa$export$default(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}

function $wsKO$export$isShadowRoot(node) {
  // IE 11 has no ShadowRoot
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }

  var OwnElement = $QiNa$export$default(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}

// This modifier takes the styles prepared by the `computeStyles` modifier
// and applies them to the HTMLElements such as popper and arrow
function $D2nT$var$applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function (name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name]; // arrow is optional + virtual elements

    if (!$wsKO$export$isHTMLElement(element) || !$B1zX$export$default(element)) {
      return;
    } // Flow doesn't support to extend this property, but it's the most
    // effective way to apply styles to an HTMLElement
    // $FlowFixMe[cannot-write]


    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function (name) {
      var value = attributes[name];

      if (value === false) {
        element.removeAttribute(name);
      } else {
        element.setAttribute(name, value === true ? '' : value);
      }
    });
  });
}

function $D2nT$var$effect(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: '0',
      top: '0',
      margin: '0'
    },
    arrow: {
      position: 'absolute'
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;

  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }

  return function () {
    Object.keys(state.elements).forEach(function (name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

      var style = styleProperties.reduce(function (style, property) {
        style[property] = '';
        return style;
      }, {}); // arrow is optional + virtual elements

      if (!$wsKO$export$isHTMLElement(element) || !$B1zX$export$default(element)) {
        return;
      }

      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
} // eslint-disable-next-line import/no-unused-modules


var $D2nT$export$default = {
  name: 'applyStyles',
  enabled: true,
  phase: 'write',
  fn: $D2nT$var$applyStyles,
  effect: $D2nT$var$effect,
  requires: ['computeStyles']
};

function $QS9h$export$default(placement) {
  return placement.split('-')[0];
}

var $W8bA$var$round = Math.round;

function $W8bA$export$default(element, includeScale) {
  if (includeScale === void 0) {
    includeScale = false;
  }

  var rect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;

  if ($wsKO$export$isHTMLElement(element) && includeScale) {
    // Fallback to 1 in case both values are `0`
    scaleX = rect.width / element.offsetWidth || 1;
    scaleY = rect.height / element.offsetHeight || 1;
  }

  return {
    width: $W8bA$var$round(rect.width / scaleX),
    height: $W8bA$var$round(rect.height / scaleY),
    top: $W8bA$var$round(rect.top / scaleY),
    right: $W8bA$var$round(rect.right / scaleX),
    bottom: $W8bA$var$round(rect.bottom / scaleY),
    left: $W8bA$var$round(rect.left / scaleX),
    x: $W8bA$var$round(rect.left / scaleX),
    y: $W8bA$var$round(rect.top / scaleY)
  };
}

// Returns the layout rect of an element relative to its offsetParent. Layout
// means it doesn't take into account transforms.
function $wDsK$export$default(element) {
  var clientRect = $W8bA$export$default(element); // Use the clientRect sizes if it's not been transformed.
  // Fixes https://github.com/popperjs/popper-core/issues/1223

  var width = element.offsetWidth;
  var height = element.offsetHeight;

  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }

  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }

  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: width,
    height: height
  };
}

function $x3Ja$export$default(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (rootNode && $wsKO$export$isShadowRoot(rootNode)) {
    var next = child;

    do {
      if (next && parent.isSameNode(next)) {
        return true;
      } // $FlowFixMe[prop-missing]: need a better way to handle this...


      next = next.parentNode || next.host;
    } while (next);
  } // Give up, the result is false


  return false;
}

function $S6rb$export$default(element) {
  return $QiNa$export$default(element).getComputedStyle(element);
}

function $rK11$export$default(element) {
  return ['table', 'td', 'th'].indexOf($B1zX$export$default(element)) >= 0;
}

function $sJcE$export$default(element) {
  // $FlowFixMe[incompatible-return]: assume body is always available
  return (($wsKO$export$isElement(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
  element.document) || window.document).documentElement;
}

function $IVKl$export$default(element) {
  if ($B1zX$export$default(element) === 'html') {
    return element;
  }

  return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || ( // DOM Element detected
    $wsKO$export$isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    $sJcE$export$default(element) // fallback

  );
}

function $CUhI$var$getTrueOffsetParent(element) {
  if (!$wsKO$export$isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  $S6rb$export$default(element).position === 'fixed') {
    return null;
  }

  return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block


function $CUhI$var$getContainingBlock(element) {
  var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') !== -1;
  var isIE = navigator.userAgent.indexOf('Trident') !== -1;

  if (isIE && $wsKO$export$isHTMLElement(element)) {
    // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
    var elementCss = $S6rb$export$default(element);

    if (elementCss.position === 'fixed') {
      return null;
    }
  }

  var currentNode = $IVKl$export$default(element);

  while ($wsKO$export$isHTMLElement(currentNode) && ['html', 'body'].indexOf($B1zX$export$default(currentNode)) < 0) {
    var css = $S6rb$export$default(currentNode); // This is non-exhaustive but covers the most common CSS properties that
    // create a containing block.
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

    if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }

  return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.


function $CUhI$export$default(element) {
  var window = $QiNa$export$default(element);
  var offsetParent = $CUhI$var$getTrueOffsetParent(element);

  while (offsetParent && $rK11$export$default(offsetParent) && $S6rb$export$default(offsetParent).position === 'static') {
    offsetParent = $CUhI$var$getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && ($B1zX$export$default(offsetParent) === 'html' || $B1zX$export$default(offsetParent) === 'body' && $S6rb$export$default(offsetParent).position === 'static')) {
    return window;
  }

  return offsetParent || $CUhI$var$getContainingBlock(element) || window;
}

function $PMyK$export$default(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}

var $FuL6$export$max = Math.max;
var $FuL6$export$min = Math.min;
var $FuL6$export$round = Math.round;

function $FbIu$export$default(min, value, max) {
  return $FuL6$export$max(min, $FuL6$export$min(value, max));
}

function $a0QL$export$default() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

function $SCz0$export$default(paddingObject) {
  return Object.assign({}, $a0QL$export$default(), paddingObject);
}

function $sYkG$export$default(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

// eslint-disable-next-line import/no-unused-modules
var $zJlD$var$toPaddingObject = function toPaddingObject(padding, state) {
  padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return $SCz0$export$default(typeof padding !== 'number' ? padding : $sYkG$export$default(padding, $XHUo$export$basePlacements));
};

function $zJlD$var$arrow(_ref) {
  var _state$modifiersData$;

  var state = _ref.state,
      name = _ref.name,
      options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets = state.modifiersData.popperOffsets;
  var basePlacement = $QS9h$export$default(state.placement);
  var axis = $PMyK$export$default(basePlacement);
  var isVertical = [$XHUo$export$left, $XHUo$export$right].indexOf(basePlacement) >= 0;
  var len = isVertical ? 'height' : 'width';

  if (!arrowElement || !popperOffsets) {
    return;
  }

  var paddingObject = $zJlD$var$toPaddingObject(options.padding, state);
  var arrowRect = $wDsK$export$default(arrowElement);
  var minProp = axis === 'y' ? $XHUo$export$top : $XHUo$export$left;
  var maxProp = axis === 'y' ? $XHUo$export$bottom : $XHUo$export$right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
  var arrowOffsetParent = $CUhI$export$default(arrowElement);
  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
  // outside of the popper bounds

  var min = paddingObject[minProp];
  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset = $FbIu$export$default(min, center, max); // Prevents breaking syntax highlighting...

  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}

function $zJlD$var$effect(_ref2) {
  var state = _ref2.state,
      options = _ref2.options;
  var _options$element = options.element,
      arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;

  if (arrowElement == null) {
    return;
  } // CSS selector


  if (typeof arrowElement === 'string') {
    arrowElement = state.elements.popper.querySelector(arrowElement);

    if (!arrowElement) {
      return;
    }
  }

  if ("production" !== "production") {
    if (!$wsKO$export$isHTMLElement(arrowElement)) {
      console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', 'To use an SVG arrow, wrap it in an HTMLElement that will be used as', 'the arrow.'].join(' '));
    }
  }

  if (!$x3Ja$export$default(state.elements.popper, arrowElement)) {
    if ("production" !== "production") {
      console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', 'element.'].join(' '));
    }

    return;
  }

  state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules


var $zJlD$export$default = {
  name: 'arrow',
  enabled: true,
  phase: 'main',
  fn: $zJlD$var$arrow,
  effect: $zJlD$var$effect,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
};
// eslint-disable-next-line import/no-unused-modules
var $ebtt$var$unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.

function $ebtt$var$roundOffsetsByDPR(_ref) {
  var x = _ref.x,
      y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: $FuL6$export$round($FuL6$export$round(x * dpr) / dpr) || 0,
    y: $FuL6$export$round($FuL6$export$round(y * dpr) / dpr) || 0
  };
}

function $ebtt$export$mapToStyles(_ref2) {
  var _Object$assign2;

  var popper = _ref2.popper,
      popperRect = _ref2.popperRect,
      placement = _ref2.placement,
      offsets = _ref2.offsets,
      position = _ref2.position,
      gpuAcceleration = _ref2.gpuAcceleration,
      adaptive = _ref2.adaptive,
      roundOffsets = _ref2.roundOffsets;

  var _ref3 = roundOffsets === true ? $ebtt$var$roundOffsetsByDPR(offsets) : typeof roundOffsets === 'function' ? roundOffsets(offsets) : offsets,
      _ref3$x = _ref3.x,
      x = _ref3$x === void 0 ? 0 : _ref3$x,
      _ref3$y = _ref3.y,
      y = _ref3$y === void 0 ? 0 : _ref3$y;

  var hasX = offsets.hasOwnProperty('x');
  var hasY = offsets.hasOwnProperty('y');
  var sideX = $XHUo$export$left;
  var sideY = $XHUo$export$top;
  var win = window;

  if (adaptive) {
    var offsetParent = $CUhI$export$default(popper);
    var heightProp = 'clientHeight';
    var widthProp = 'clientWidth';

    if (offsetParent === $QiNa$export$default(popper)) {
      offsetParent = $sJcE$export$default(popper);

      if ($S6rb$export$default(offsetParent).position !== 'static') {
        heightProp = 'scrollHeight';
        widthProp = 'scrollWidth';
      }
    } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it


    offsetParent = offsetParent;

    if (placement === $XHUo$export$top) {
      sideY = $XHUo$export$bottom; // $FlowFixMe[prop-missing]

      y -= offsetParent[heightProp] - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }

    if (placement === $XHUo$export$left) {
      sideX = $XHUo$export$right; // $FlowFixMe[prop-missing]

      x -= offsetParent[widthProp] - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }

  var commonStyles = Object.assign({
    position: position
  }, adaptive && $ebtt$var$unsetSides);

  if (gpuAcceleration) {
    var _Object$assign;

    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) < 2 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }

  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}

function $ebtt$var$computeStyles(_ref4) {
  var state = _ref4.state,
      options = _ref4.options;
  var _options$gpuAccelerat = options.gpuAcceleration,
      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
      _options$adaptive = options.adaptive,
      adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
      _options$roundOffsets = options.roundOffsets,
      roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;

  if ("production" !== "production") {
    var transitionProperty = $S6rb$export$default(state.elements.popper).transitionProperty || '';

    if (adaptive && ['transform', 'top', 'right', 'bottom', 'left'].some(function (property) {
      return transitionProperty.indexOf(property) >= 0;
    })) {
      console.warn(['Popper: Detected CSS transitions on at least one of the following', 'CSS properties: "transform", "top", "right", "bottom", "left".', '\n\n', 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', 'for smooth transitions, or remove these properties from the CSS', 'transition declaration on the popper element if only transitioning', 'opacity or background-color for example.', '\n\n', 'We recommend using the popper element as a wrapper around an inner', 'element that can have any CSS property transitioned for animations.'].join(' '));
    }
  }

  var commonStyles = {
    placement: $QS9h$export$default(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration: gpuAcceleration
  };

  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, $ebtt$export$mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive: adaptive,
      roundOffsets: roundOffsets
    })));
  }

  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, $ebtt$export$mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false,
      roundOffsets: roundOffsets
    })));
  }

  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-placement': state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


var $ebtt$export$default = {
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: $ebtt$var$computeStyles,
  data: {}
};
// eslint-disable-next-line import/no-unused-modules
var $psGJ$var$passive = {
  passive: true
};

function $psGJ$var$effect(_ref) {
  var state = _ref.state,
      instance = _ref.instance,
      options = _ref.options;
  var _options$scroll = options.scroll,
      scroll = _options$scroll === void 0 ? true : _options$scroll,
      _options$resize = options.resize,
      resize = _options$resize === void 0 ? true : _options$resize;
  var window = $QiNa$export$default(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, $psGJ$var$passive);
    });
  }

  if (resize) {
    window.addEventListener('resize', instance.update, $psGJ$var$passive);
  }

  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, $psGJ$var$passive);
      });
    }

    if (resize) {
      window.removeEventListener('resize', instance.update, $psGJ$var$passive);
    }
  };
} // eslint-disable-next-line import/no-unused-modules


var $psGJ$export$default = {
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: $psGJ$var$effect,
  data: {}
};
var $M6e4$var$hash = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};

function $M6e4$export$default(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return $M6e4$var$hash[matched];
  });
}

var $lLmA$var$hash = {
  start: 'end',
  end: 'start'
};

function $lLmA$export$default(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return $lLmA$var$hash[matched];
  });
}

function $oJ75$export$default(node) {
  var win = $QiNa$export$default(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}

function $zwcJ$export$default(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  // Popper 1 is broken in this case and never had a bug report so let's assume
  // it's not an issue. I don't think anyone ever specifies width on <html>
  // anyway.
  // Browsers where the left scrollbar doesn't cause an issue report `0` for
  // this (e.g. Edge 2019, IE11, Safari)
  return $W8bA$export$default($sJcE$export$default(element)).left + $oJ75$export$default(element).scrollLeft;
}

function $E2lw$export$default(element) {
  var win = $QiNa$export$default(element);
  var html = $sJcE$export$default(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0; // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
  // can be obscured underneath it.
  // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
  // if it isn't open, so if this isn't available, the popper will be detected
  // to overflow the bottom of the screen too early.

  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height; // Uses Layout Viewport (like Chrome; Safari does not currently)
    // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
    // errors due to floating point numbers, so we need to check precision.
    // Safari returns a number <= 0, usually < -1 when pinch-zoomed
    // Feature detection fails in mobile emulation mode in Chrome.
    // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
    // 0.001
    // Fallback here: "Not Safari" userAgent

    if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }

  return {
    width: width,
    height: height,
    x: x + $zwcJ$export$default(element),
    y: y
  };
}

// Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable
function $yEje$export$default(element) {
  var _element$ownerDocumen;

  var html = $sJcE$export$default(element);
  var winScroll = $oJ75$export$default(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = $FuL6$export$max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = $FuL6$export$max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + $zwcJ$export$default(element);
  var y = -winScroll.scrollTop;

  if ($S6rb$export$default(body || html).direction === 'rtl') {
    x += $FuL6$export$max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }

  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}

function $j3Hf$export$default(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  var _getComputedStyle = $S6rb$export$default(element),
      overflow = _getComputedStyle.overflow,
      overflowX = _getComputedStyle.overflowX,
      overflowY = _getComputedStyle.overflowY;

  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

function $Qnrt$export$default(node) {
  if (['html', 'body', '#document'].indexOf($B1zX$export$default(node)) >= 0) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
  }

  if ($wsKO$export$isHTMLElement(node) && $j3Hf$export$default(node)) {
    return node;
  }

  return $Qnrt$export$default($IVKl$export$default(node));
}

/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/
function $m3DJ$export$default(element, list) {
  var _element$ownerDocumen;

  if (list === void 0) {
    list = [];
  }

  var scrollParent = $Qnrt$export$default(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = $QiNa$export$default(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], $j3Hf$export$default(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
  updatedList.concat($m3DJ$export$default($IVKl$export$default(target)));
}

function $rB0G$export$default(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

function $M7BJ$var$getInnerBoundingClientRect(element) {
  var rect = $W8bA$export$default(element);
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}

function $M7BJ$var$getClientRectFromMixedType(element, clippingParent) {
  return clippingParent === $XHUo$export$viewport ? $rB0G$export$default($E2lw$export$default(element)) : $wsKO$export$isHTMLElement(clippingParent) ? $M7BJ$var$getInnerBoundingClientRect(clippingParent) : $rB0G$export$default($yEje$export$default($sJcE$export$default(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


function $M7BJ$var$getClippingParents(element) {
  var clippingParents = $m3DJ$export$default($IVKl$export$default(element));
  var canEscapeClipping = ['absolute', 'fixed'].indexOf($S6rb$export$default(element).position) >= 0;
  var clipperElement = canEscapeClipping && $wsKO$export$isHTMLElement(element) ? $CUhI$export$default(element) : element;

  if (!$wsKO$export$isElement(clipperElement)) {
    return [];
  } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


  return clippingParents.filter(function (clippingParent) {
    return $wsKO$export$isElement(clippingParent) && $x3Ja$export$default(clippingParent, clipperElement) && $B1zX$export$default(clippingParent) !== 'body';
  });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents


function $M7BJ$export$default(element, boundary, rootBoundary) {
  var mainClippingParents = boundary === 'clippingParents' ? $M7BJ$var$getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = $M7BJ$var$getClientRectFromMixedType(element, clippingParent);
    accRect.top = $FuL6$export$max(rect.top, accRect.top);
    accRect.right = $FuL6$export$min(rect.right, accRect.right);
    accRect.bottom = $FuL6$export$min(rect.bottom, accRect.bottom);
    accRect.left = $FuL6$export$max(rect.left, accRect.left);
    return accRect;
  }, $M7BJ$var$getClientRectFromMixedType(element, firstClippingParent));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

function $auH8$export$default(placement) {
  return placement.split('-')[1];
}

function $dvfD$export$default(_ref) {
  var reference = _ref.reference,
      element = _ref.element,
      placement = _ref.placement;
  var basePlacement = placement ? $QS9h$export$default(placement) : null;
  var variation = placement ? $auH8$export$default(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;

  switch (basePlacement) {
    case $XHUo$export$top:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;

    case $XHUo$export$bottom:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;

    case $XHUo$export$right:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;

    case $XHUo$export$left:
      offsets = {
        x: reference.x - element.width,
        y: commonY
      };
      break;

    default:
      offsets = {
        x: reference.x,
        y: reference.y
      };
  }

  var mainAxis = basePlacement ? $PMyK$export$default(basePlacement) : null;

  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';

    switch (variation) {
      case $XHUo$export$start:
        offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
        break;

      case $XHUo$export$end:
        offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
        break;

      default:
    }
  }

  return offsets;
}

// eslint-disable-next-line import/no-unused-modules
function $Moke$export$default(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$placement = _options.placement,
      placement = _options$placement === void 0 ? state.placement : _options$placement,
      _options$boundary = _options.boundary,
      boundary = _options$boundary === void 0 ? $XHUo$export$clippingParents : _options$boundary,
      _options$rootBoundary = _options.rootBoundary,
      rootBoundary = _options$rootBoundary === void 0 ? $XHUo$export$viewport : _options$rootBoundary,
      _options$elementConte = _options.elementContext,
      elementContext = _options$elementConte === void 0 ? $XHUo$export$popper : _options$elementConte,
      _options$altBoundary = _options.altBoundary,
      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
      _options$padding = _options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = $SCz0$export$default(typeof padding !== 'number' ? padding : $sYkG$export$default(padding, $XHUo$export$basePlacements));
  var altContext = elementContext === $XHUo$export$popper ? $XHUo$export$reference : $XHUo$export$popper;
  var referenceElement = state.elements.reference;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = $M7BJ$export$default($wsKO$export$isElement(element) ? element : element.contextElement || $sJcE$export$default(state.elements.popper), boundary, rootBoundary);
  var referenceClientRect = $W8bA$export$default(referenceElement);
  var popperOffsets = $dvfD$export$default({
    reference: referenceClientRect,
    element: popperRect,
    strategy: 'absolute',
    placement: placement
  });
  var popperClientRect = $rB0G$export$default(Object.assign({}, popperRect, popperOffsets));
  var elementClientRect = elementContext === $XHUo$export$popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

  if (elementContext === $XHUo$export$popper && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [$XHUo$export$right, $XHUo$export$bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [$XHUo$export$top, $XHUo$export$bottom].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }

  return overflowOffsets;
}

function $HhJi$export$default(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      placement = _options.placement,
      boundary = _options.boundary,
      rootBoundary = _options.rootBoundary,
      padding = _options.padding,
      flipVariations = _options.flipVariations,
      _options$allowedAutoP = _options.allowedAutoPlacements,
      allowedAutoPlacements = _options$allowedAutoP === void 0 ? $XHUo$export$placements : _options$allowedAutoP;
  var variation = $auH8$export$default(placement);
  var placements = variation ? flipVariations ? $XHUo$export$variationPlacements : $XHUo$export$variationPlacements.filter(function (placement) {
    return $auH8$export$default(placement) === variation;
  }) : $XHUo$export$basePlacements;
  var allowedPlacements = placements.filter(function (placement) {
    return allowedAutoPlacements.indexOf(placement) >= 0;
  });

  if (allowedPlacements.length === 0) {
    allowedPlacements = placements;

    if ("production" !== "production") {
      console.error(['Popper: The `allowedAutoPlacements` option did not allow any', 'placements. Ensure the `placement` option matches the variation', 'of the allowed placements.', 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(' '));
    }
  } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


  var overflows = allowedPlacements.reduce(function (acc, placement) {
    acc[placement] = $Moke$export$default(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    })[$QS9h$export$default(placement)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}

// eslint-disable-next-line import/no-unused-modules
function $rNoN$var$getExpandedFallbackPlacements(placement) {
  if ($QS9h$export$default(placement) === $XHUo$export$auto) {
    return [];
  }

  var oppositePlacement = $M6e4$export$default(placement);
  return [$lLmA$export$default(placement), oppositePlacement, $lLmA$export$default(oppositePlacement)];
}

function $rNoN$var$flip(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;

  if (state.modifiersData[name]._skip) {
    return;
  }

  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
      specifiedFallbackPlacements = options.fallbackPlacements,
      padding = options.padding,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      _options$flipVariatio = options.flipVariations,
      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
      allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = $QS9h$export$default(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [$M6e4$export$default(preferredPlacement)] : $rNoN$var$getExpandedFallbackPlacements(preferredPlacement));
  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
    return acc.concat($QS9h$export$default(placement) === $XHUo$export$auto ? $HhJi$export$default(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      flipVariations: flipVariations,
      allowedAutoPlacements: allowedAutoPlacements
    }) : placement);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];

  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];

    var _basePlacement = $QS9h$export$default(placement);

    var isStartVariation = $auH8$export$default(placement) === $XHUo$export$start;
    var isVertical = [$XHUo$export$top, $XHUo$export$bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = $Moke$export$default(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      altBoundary: altBoundary,
      padding: padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? $XHUo$export$right : $XHUo$export$left : isStartVariation ? $XHUo$export$bottom : $XHUo$export$top;

    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = $M6e4$export$default(mainVariationSide);
    }

    var altVariationSide = $M6e4$export$default(mainVariationSide);
    var checks = [];

    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }

    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }

    if (checks.every(function (check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }

    checksMap.set(placement, checks);
  }

  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;

    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);

        if (checks) {
          return checks.slice(0, _i).every(function (check) {
            return check;
          });
        }
      });

      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };

    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);

      if (_ret === "break") break;
    }
  }

  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
} // eslint-disable-next-line import/no-unused-modules


var $rNoN$export$default = {
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: $rNoN$var$flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false
  }
};

function $jhaw$var$getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }

  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}

function $jhaw$var$isAnySideFullyClipped(overflow) {
  return [$XHUo$export$top, $XHUo$export$right, $XHUo$export$bottom, $XHUo$export$left].some(function (side) {
    return overflow[side] >= 0;
  });
}

function $jhaw$var$hide(_ref) {
  var state = _ref.state,
      name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = $Moke$export$default(state, {
    elementContext: 'reference'
  });
  var popperAltOverflow = $Moke$export$default(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = $jhaw$var$getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = $jhaw$var$getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = $jhaw$var$isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = $jhaw$var$isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets: referenceClippingOffsets,
    popperEscapeOffsets: popperEscapeOffsets,
    isReferenceHidden: isReferenceHidden,
    hasPopperEscaped: hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-reference-hidden': isReferenceHidden,
    'data-popper-escaped': hasPopperEscaped
  });
} // eslint-disable-next-line import/no-unused-modules


var $jhaw$export$default = {
  name: 'hide',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: $jhaw$var$hide
};

function $aUNc$export$distanceAndSkiddingToXY(placement, rects, offset) {
  var basePlacement = $QS9h$export$default(placement);
  var invertDistance = [$XHUo$export$left, $XHUo$export$top].indexOf(basePlacement) >= 0 ? -1 : 1;

  var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
    placement: placement
  })) : offset,
      skidding = _ref[0],
      distance = _ref[1];

  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [$XHUo$export$left, $XHUo$export$right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}

function $aUNc$var$offset(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$offset = options.offset,
      offset = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = $XHUo$export$placements.reduce(function (acc, placement) {
    acc[placement] = $aUNc$export$distanceAndSkiddingToXY(placement, state.rects, offset);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement],
      x = _data$state$placement.x,
      y = _data$state$placement.y;

  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


var $aUNc$export$default = {
  name: 'offset',
  enabled: true,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: $aUNc$var$offset
};

function $Pf8x$var$popperOffsets(_ref) {
  var state = _ref.state,
      name = _ref.name; // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step

  state.modifiersData[name] = $dvfD$export$default({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: 'absolute',
    placement: state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


var $Pf8x$export$default = {
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: $Pf8x$var$popperOffsets,
  data: {}
};

function $YGKJ$export$default(axis) {
  return axis === 'x' ? 'y' : 'x';
}

function $RwXk$var$preventOverflow(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;
  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      padding = options.padding,
      _options$tether = options.tether,
      tether = _options$tether === void 0 ? true : _options$tether,
      _options$tetherOffset = options.tetherOffset,
      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = $Moke$export$default(state, {
    boundary: boundary,
    rootBoundary: rootBoundary,
    padding: padding,
    altBoundary: altBoundary
  });
  var basePlacement = $QS9h$export$default(state.placement);
  var variation = $auH8$export$default(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = $PMyK$export$default(basePlacement);
  var altAxis = $YGKJ$export$default(mainAxis);
  var popperOffsets = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var data = {
    x: 0,
    y: 0
  };

  if (!popperOffsets) {
    return;
  }

  if (checkMainAxis || checkAltAxis) {
    var mainSide = mainAxis === 'y' ? $XHUo$export$top : $XHUo$export$left;
    var altSide = mainAxis === 'y' ? $XHUo$export$bottom : $XHUo$export$right;
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min = popperOffsets[mainAxis] + overflow[mainSide];
    var max = popperOffsets[mainAxis] - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === $XHUo$export$start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === $XHUo$export$start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
    // outside the reference bounds

    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? $wDsK$export$default(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : $a0QL$export$default();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
    // to include its full size in the calculation. If the reference is small
    // and near the edge of a boundary, the popper can overflow even if the
    // reference is not overflowing as well (e.g. virtual elements with no
    // width or height)

    var arrowLen = $FbIu$export$default(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - tetherOffsetValue : minLen - arrowLen - arrowPaddingMin - tetherOffsetValue;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + tetherOffsetValue : maxLen + arrowLen + arrowPaddingMax + tetherOffsetValue;
    var arrowOffsetParent = state.elements.arrow && $CUhI$export$default(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = state.modifiersData.offset ? state.modifiersData.offset[state.placement][mainAxis] : 0;
    var tetherMin = popperOffsets[mainAxis] + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = popperOffsets[mainAxis] + maxOffset - offsetModifierValue;

    if (checkMainAxis) {
      var preventedOffset = $FbIu$export$default(tether ? $FuL6$export$min(min, tetherMin) : min, offset, tether ? $FuL6$export$max(max, tetherMax) : max);
      popperOffsets[mainAxis] = preventedOffset;
      data[mainAxis] = preventedOffset - offset;
    }

    if (checkAltAxis) {
      var _mainSide = mainAxis === 'x' ? $XHUo$export$top : $XHUo$export$left;

      var _altSide = mainAxis === 'x' ? $XHUo$export$bottom : $XHUo$export$right;

      var _offset = popperOffsets[altAxis];

      var _min = _offset + overflow[_mainSide];

      var _max = _offset - overflow[_altSide];

      var _preventedOffset = $FbIu$export$default(tether ? $FuL6$export$min(_min, tetherMin) : _min, _offset, tether ? $FuL6$export$max(_max, tetherMax) : _max);

      popperOffsets[altAxis] = _preventedOffset;
      data[altAxis] = _preventedOffset - _offset;
    }
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


var $RwXk$export$default = {
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: $RwXk$var$preventOverflow,
  requiresIfExists: ['offset']
};

function $uy7N$export$default(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

function $Cbix$export$default(node) {
  if (node === $QiNa$export$default(node) || !$wsKO$export$isHTMLElement(node)) {
    return $oJ75$export$default(node);
  } else {
    return $uy7N$export$default(node);
  }
}

function $FCaM$var$isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = rect.width / element.offsetWidth || 1;
  var scaleY = rect.height / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
} // Returns the composite rect of an element relative to its offsetParent.
// Composite means it takes into account transforms as well as layout.


function $FCaM$export$default(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }

  var isOffsetParentAnElement = $wsKO$export$isHTMLElement(offsetParent);
  var offsetParentIsScaled = $wsKO$export$isHTMLElement(offsetParent) && $FCaM$var$isElementScaled(offsetParent);
  var documentElement = $sJcE$export$default(offsetParent);
  var rect = $W8bA$export$default(elementOrVirtualElement, offsetParentIsScaled);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if ($B1zX$export$default(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
    $j3Hf$export$default(documentElement)) {
      scroll = $Cbix$export$default(offsetParent);
    }

    if ($wsKO$export$isHTMLElement(offsetParent)) {
      offsets = $W8bA$export$default(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = $zwcJ$export$default(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

// source: https://stackoverflow.com/questions/49875255
function $mxvt$var$order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  }); // On visiting object, check for its dependencies and visit them recursively

  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);

        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }

  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}

function $mxvt$export$default(modifiers) {
  // order based on dependencies
  var orderedModifiers = $mxvt$var$order(modifiers); // order based on phase

  return $XHUo$export$modifierPhases.reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

function $mGsv$export$default(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }

    return pending;
  };
}

function $JD7L$export$default(str) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return [].concat(args).reduce(function (p, c) {
    return p.replace(/%s/, c);
  }, str);
}

var $nr2q$var$INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
var $nr2q$var$MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
var $nr2q$var$VALID_PROPERTIES = ['name', 'enabled', 'phase', 'fn', 'effect', 'requires', 'options'];

function $nr2q$export$default(modifiers) {
  modifiers.forEach(function (modifier) {
    Object.keys(modifier).forEach(function (key) {
      switch (key) {
        case 'name':
          if (typeof modifier.name !== 'string') {
            console.error($JD7L$export$default($nr2q$var$INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', "\"" + String(modifier.name) + "\""));
          }

          break;

        case 'enabled':
          if (typeof modifier.enabled !== 'boolean') {
            console.error($JD7L$export$default($nr2q$var$INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', "\"" + String(modifier.enabled) + "\""));
          }

        case 'phase':
          if ($XHUo$export$modifierPhases.indexOf(modifier.phase) < 0) {
            console.error($JD7L$export$default($nr2q$var$INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + $XHUo$export$modifierPhases.join(', '), "\"" + String(modifier.phase) + "\""));
          }

          break;

        case 'fn':
          if (typeof modifier.fn !== 'function') {
            console.error($JD7L$export$default($nr2q$var$INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', "\"" + String(modifier.fn) + "\""));
          }

          break;

        case 'effect':
          if (typeof modifier.effect !== 'function') {
            console.error($JD7L$export$default($nr2q$var$INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', "\"" + String(modifier.fn) + "\""));
          }

          break;

        case 'requires':
          if (!Array.isArray(modifier.requires)) {
            console.error($JD7L$export$default($nr2q$var$INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', "\"" + String(modifier.requires) + "\""));
          }

          break;

        case 'requiresIfExists':
          if (!Array.isArray(modifier.requiresIfExists)) {
            console.error($JD7L$export$default($nr2q$var$INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', "\"" + String(modifier.requiresIfExists) + "\""));
          }

          break;

        case 'options':
        case 'data':
          break;

        default:
          console.error("PopperJS: an invalid property has been provided to the \"" + modifier.name + "\" modifier, valid properties are " + $nr2q$var$VALID_PROPERTIES.map(function (s) {
            return "\"" + s + "\"";
          }).join(', ') + "; but \"" + key + "\" was provided.");
      }

      modifier.requires && modifier.requires.forEach(function (requirement) {
        if (modifiers.find(function (mod) {
          return mod.name === requirement;
        }) == null) {
          console.error($JD7L$export$default($nr2q$var$MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
        }
      });
    });
  });
}

function $AjzX$export$default(arr, fn) {
  var identifiers = new Set();
  return arr.filter(function (item) {
    var identifier = fn(item);

    if (!identifiers.has(identifier)) {
      identifiers.add(identifier);
      return true;
    }
  });
}

function $pDli$export$default(modifiers) {
  var merged = modifiers.reduce(function (merged, current) {
    var existing = merged[current.name];
    merged[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged;
  }, {}); // IE11 does not support Object.values

  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
}

var $rg1d$var$INVALID_ELEMENT_ERROR = 'Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.';
var $rg1d$var$INFINITE_LOOP_ERROR = 'Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.';
var $rg1d$var$DEFAULT_OPTIONS = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute'
};

function $rg1d$var$areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}

function $rg1d$export$popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }

  var _generatorOptions = generatorOptions,
      _generatorOptions$def = _generatorOptions.defaultModifiers,
      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
      _generatorOptions$def2 = _generatorOptions.defaultOptions,
      defaultOptions = _generatorOptions$def2 === void 0 ? $rg1d$var$DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }

    var state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: Object.assign({}, $rg1d$var$DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference,
        popper: popper
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state,
      setOptions: function setOptions(options) {
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options);
        state.scrollParents = {
          reference: $wsKO$export$isElement(reference) ? $m3DJ$export$default(reference) : reference.contextElement ? $m3DJ$export$default(reference.contextElement) : [],
          popper: $m3DJ$export$default(popper)
        }; // Orders the modifiers based on their dependencies and `phase`
        // properties

        var orderedModifiers = $mxvt$export$default($pDli$export$default([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

        state.orderedModifiers = orderedModifiers.filter(function (m) {
          return m.enabled;
        }); // Validate the provided modifiers so that the consumer will get warned
        // if one of the modifiers is invalid for any reason

        if ("production" !== "production") {
          var modifiers = $AjzX$export$default([].concat(orderedModifiers, state.options.modifiers), function (_ref) {
            var name = _ref.name;
            return name;
          });
          $nr2q$export$default(modifiers);

          if ($QS9h$export$default(state.options.placement) === $XHUo$export$auto) {
            var flipModifier = state.orderedModifiers.find(function (_ref2) {
              var name = _ref2.name;
              return name === 'flip';
            });

            if (!flipModifier) {
              console.error(['Popper: "auto" placements require the "flip" modifier be', 'present and enabled to work.'].join(' '));
            }
          }

          var _getComputedStyle = $S6rb$export$default(popper),
              marginTop = _getComputedStyle.marginTop,
              marginRight = _getComputedStyle.marginRight,
              marginBottom = _getComputedStyle.marginBottom,
              marginLeft = _getComputedStyle.marginLeft; // We no longer take into account `margins` on the popper, and it can
          // cause bugs with positioning, so we'll warn the consumer


          if ([marginTop, marginRight, marginBottom, marginLeft].some(function (margin) {
            return parseFloat(margin);
          })) {
            console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', 'between the popper and its reference element or boundary.', 'To replicate margin, use the `offset` modifier, as well as', 'the `padding` option in the `preventOverflow` and `flip`', 'modifiers.'].join(' '));
          }
        }

        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }

        var _state$elements = state.elements,
            reference = _state$elements.reference,
            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
        // anymore

        if (!$rg1d$var$areValidElements(reference, popper)) {
          if ("production" !== "production") {
            console.error($rg1d$var$INVALID_ELEMENT_ERROR);
          }

          return;
        } // Store the reference and popper rects to be read by modifiers


        state.rects = {
          reference: $FCaM$export$default(reference, $CUhI$export$default(popper), state.options.strategy === 'fixed'),
          popper: $wDsK$export$default(popper)
        }; // Modifiers have the ability to reset the current update cycle. The
        // most common use case for this is the `flip` modifier changing the
        // placement, which then needs to re-run all the modifiers, because the
        // logic was previously ran for the previous placement and is therefore
        // stale/incorrect

        state.reset = false;
        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
        // is filled with the initial data specified by the modifier. This means
        // it doesn't persist and is fresh on each update.
        // To ensure persistent data, use `${name}#persistent`

        state.orderedModifiers.forEach(function (modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        var __debug_loops__ = 0;

        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if ("production" !== "production") {
            __debug_loops__ += 1;

            if (__debug_loops__ > 100) {
              console.error($rg1d$var$INFINITE_LOOP_ERROR);
              break;
            }
          }

          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }

          var _state$orderedModifie = state.orderedModifiers[index],
              fn = _state$orderedModifie.fn,
              _state$orderedModifie2 = _state$orderedModifie.options,
              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
              name = _state$orderedModifie.name;

          if (typeof fn === 'function') {
            state = fn({
              state: state,
              options: _options,
              name: name,
              instance: instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: $mGsv$export$default(function () {
        return new Promise(function (resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };

    if (!$rg1d$var$areValidElements(reference, popper)) {
      if ("production" !== "production") {
        console.error($rg1d$var$INVALID_ELEMENT_ERROR);
      }

      return instance;
    }

    instance.setOptions(options).then(function (state) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state);
      }
    }); // Modifiers have the ability to execute arbitrary code before the first
    // update cycle runs. They will be executed in the same order as the update
    // cycle. This is useful when a modifier adds some persistent data that
    // other modifiers need to use, but the modifier is run after the dependent
    // one.

    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref3) {
        var name = _ref3.name,
            _ref3$options = _ref3.options,
            options = _ref3$options === void 0 ? {} : _ref3$options,
            effect = _ref3.effect;

        if (typeof effect === 'function') {
          var cleanupFn = effect({
            state: state,
            name: name,
            instance: instance,
            options: options
          });

          var noopFn = function noopFn() {};

          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }

    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function (fn) {
        return fn();
      });
      effectCleanupFns = [];
    }

    return instance;
  };
}

var $rg1d$export$createPopper = /*#__PURE__*/$rg1d$export$popperGenerator(); // eslint-disable-next-line import/no-unused-modules

var $hwU4$export$defaultModifiers = [$psGJ$export$default, $Pf8x$export$default, $ebtt$export$default, $D2nT$export$default];
var $hwU4$export$createPopper = /*#__PURE__*/$rg1d$export$popperGenerator({
  defaultModifiers: $hwU4$export$defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

var $cujj$export$defaultModifiers = [$psGJ$export$default, $Pf8x$export$default, $ebtt$export$default, $D2nT$export$default, $aUNc$export$default, $rNoN$export$default, $RwXk$export$default, $zJlD$export$default, $jhaw$export$default];
var $cujj$export$createPopper = /*#__PURE__*/$rg1d$export$popperGenerator({
  defaultModifiers: $cujj$export$defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

$parcel$exportWildcard($vePw$exports, $XHUo$exports);
$parcel$exportWildcard($vePw$exports, {}); // eslint-disable-next-line import/no-unused-modules

$vePw$exports.createPopperBase = $rg1d$export$createPopper;
$vePw$exports.detectOverflow = $Moke$export$default;
$vePw$exports.popperGenerator = $rg1d$export$popperGenerator;
$vePw$exports.createPopper = $cujj$export$createPopper;
$vePw$exports.createPopperLite = $hwU4$export$createPopper;

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): util/index.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
const $NlAe$var$MAX_UID = 1000000;
const $NlAe$var$MILLISECONDS_MULTIPLIER = 1000;
const $NlAe$var$TRANSITION_END = 'transitionend'; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

const $NlAe$var$toType = obj => {
  if (obj === null || obj === undefined) {
    return `${obj}`;
  }

  return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
};
/**
 * --------------------------------------------------------------------------
 * Public Util Api
 * --------------------------------------------------------------------------
 */


const $NlAe$var$getUID = prefix => {
  do {
    prefix += Math.floor(Math.random() * $NlAe$var$MAX_UID);
  } while (document.getElementById(prefix));

  return prefix;
};

const $NlAe$var$getSelector = element => {
  let selector = element.getAttribute('data-bs-target');

  if (!selector || selector === '#') {
    let hrefAttr = element.getAttribute('href'); // The only valid content that could double as a selector are IDs or classes,
    // so everything starting with `#` or `.`. If a "real" URL is used as the selector,
    // `document.querySelector` will rightfully complain it is invalid.
    // See https://github.com/twbs/bootstrap/issues/32273

    if (!hrefAttr || !hrefAttr.includes('#') && !hrefAttr.startsWith('.')) {
      return null;
    } // Just in case some CMS puts out a full URL with the anchor appended


    if (hrefAttr.includes('#') && !hrefAttr.startsWith('#')) {
      hrefAttr = `#${hrefAttr.split('#')[1]}`;
    }

    selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : null;
  }

  return selector;
};

const $NlAe$var$getSelectorFromElement = element => {
  const selector = $NlAe$var$getSelector(element);

  if (selector) {
    return document.querySelector(selector) ? selector : null;
  }

  return null;
};

const $NlAe$var$getElementFromSelector = element => {
  const selector = $NlAe$var$getSelector(element);
  return selector ? document.querySelector(selector) : null;
};

const $NlAe$var$getTransitionDurationFromElement = element => {
  if (!element) {
    return 0;
  } // Get transition-duration of the element


  let {
    transitionDuration,
    transitionDelay
  } = window.getComputedStyle(element);
  const floatTransitionDuration = Number.parseFloat(transitionDuration);
  const floatTransitionDelay = Number.parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

  if (!floatTransitionDuration && !floatTransitionDelay) {
    return 0;
  } // If multiple durations are defined, take the first


  transitionDuration = transitionDuration.split(',')[0];
  transitionDelay = transitionDelay.split(',')[0];
  return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * $NlAe$var$MILLISECONDS_MULTIPLIER;
};

const $NlAe$var$triggerTransitionEnd = element => {
  element.dispatchEvent(new Event($NlAe$var$TRANSITION_END));
};

const $NlAe$var$isElement = obj => {
  if (!obj || typeof obj !== 'object') {
    return false;
  }

  if (typeof obj.jquery !== 'undefined') {
    obj = obj[0];
  }

  return typeof obj.nodeType !== 'undefined';
};

const $NlAe$var$getElement = obj => {
  if ($NlAe$var$isElement(obj)) {
    // it's a jQuery object or a node element
    return obj.jquery ? obj[0] : obj;
  }

  if (typeof obj === 'string' && obj.length > 0) {
    return document.querySelector(obj);
  }

  return null;
};

const $NlAe$var$typeCheckConfig = (componentName, config, configTypes) => {
  Object.keys(configTypes).forEach(property => {
    const expectedTypes = configTypes[property];
    const value = config[property];
    const valueType = value && $NlAe$var$isElement(value) ? 'element' : $NlAe$var$toType(value);

    if (!new RegExp(expectedTypes).test(valueType)) {
      throw new TypeError(`${componentName.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`);
    }
  });
};

const $NlAe$var$isVisible = element => {
  if (!$NlAe$var$isElement(element) || element.getClientRects().length === 0) {
    return false;
  }

  return getComputedStyle(element).getPropertyValue('visibility') === 'visible';
};

const $NlAe$var$isDisabled = element => {
  if (!element || element.nodeType !== Node.ELEMENT_NODE) {
    return true;
  }

  if (element.classList.contains('disabled')) {
    return true;
  }

  if (typeof element.disabled !== 'undefined') {
    return element.disabled;
  }

  return element.hasAttribute('disabled') && element.getAttribute('disabled') !== 'false';
};

const $NlAe$var$findShadowRoot = element => {
  if (!document.documentElement.attachShadow) {
    return null;
  } // Can find the shadow root otherwise it'll return the document


  if (typeof element.getRootNode === 'function') {
    const root = element.getRootNode();
    return root instanceof ShadowRoot ? root : null;
  }

  if (element instanceof ShadowRoot) {
    return element;
  } // when we don't find a shadow root


  if (!element.parentNode) {
    return null;
  }

  return $NlAe$var$findShadowRoot(element.parentNode);
};

const $NlAe$var$noop = () => {};
/**
 * Trick to restart an element's animation
 *
 * @param {HTMLElement} element
 * @return void
 *
 * @see https://www.charistheo.io/blog/2021/02/restart-a-css-animation-with-javascript/#restarting-a-css-animation
 */


const $NlAe$var$reflow = element => {
  // eslint-disable-next-line no-unused-expressions
  element.offsetHeight;
};

const $NlAe$var$getjQuery = () => {
  const {
    jQuery
  } = window;

  if (jQuery && !document.body.hasAttribute('data-bs-no-jquery')) {
    return jQuery;
  }

  return null;
};

const $NlAe$var$DOMContentLoadedCallbacks = [];

const $NlAe$var$onDOMContentLoaded = callback => {
  if (document.readyState === 'loading') {
    // add listener on the first call when the document is in loading state
    if (!$NlAe$var$DOMContentLoadedCallbacks.length) {
      document.addEventListener('DOMContentLoaded', () => {
        $NlAe$var$DOMContentLoadedCallbacks.forEach(callback => callback());
      });
    }

    $NlAe$var$DOMContentLoadedCallbacks.push(callback);
  } else {
    callback();
  }
};

const $NlAe$var$isRTL = () => document.documentElement.dir === 'rtl';

const $NlAe$var$defineJQueryPlugin = plugin => {
  $NlAe$var$onDOMContentLoaded(() => {
    const $ = $NlAe$var$getjQuery();
    /* istanbul ignore if */

    if ($) {
      const name = plugin.NAME;
      const JQUERY_NO_CONFLICT = $.fn[name];
      $.fn[name] = plugin.jQueryInterface;
      $.fn[name].Constructor = plugin;

      $.fn[name].noConflict = () => {
        $.fn[name] = JQUERY_NO_CONFLICT;
        return plugin.jQueryInterface;
      };
    }
  });
};

const $NlAe$var$execute = callback => {
  if (typeof callback === 'function') {
    callback();
  }
};

const $NlAe$var$executeAfterTransition = (callback, transitionElement, waitForTransition = true) => {
  if (!waitForTransition) {
    $NlAe$var$execute(callback);
    return;
  }

  const durationPadding = 5;
  const emulatedDuration = $NlAe$var$getTransitionDurationFromElement(transitionElement) + durationPadding;
  let called = false;

  const handler = ({
    target
  }) => {
    if (target !== transitionElement) {
      return;
    }

    called = true;
    transitionElement.removeEventListener($NlAe$var$TRANSITION_END, handler);
    $NlAe$var$execute(callback);
  };

  transitionElement.addEventListener($NlAe$var$TRANSITION_END, handler);
  setTimeout(() => {
    if (!called) {
      $NlAe$var$triggerTransitionEnd(transitionElement);
    }
  }, emulatedDuration);
};
/**
 * Return the previous/next element of a list.
 *
 * @param {array} list    The list of elements
 * @param activeElement   The active element
 * @param shouldGetNext   Choose to get next or previous element
 * @param isCycleAllowed
 * @return {Element|elem} The proper element
 */


const $NlAe$var$getNextActiveElement = (list, activeElement, shouldGetNext, isCycleAllowed) => {
  let index = list.indexOf(activeElement); // if the element does not exist in the list return an element depending on the direction and if cycle is allowed

  if (index === -1) {
    return list[!shouldGetNext && isCycleAllowed ? list.length - 1 : 0];
  }

  const listLength = list.length;
  index += shouldGetNext ? 1 : -1;

  if (isCycleAllowed) {
    index = (index + listLength) % listLength;
  }

  return list[Math.max(0, Math.min(index, listLength - 1))];
};
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): dom/event-handler.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */


const $NlAe$var$namespaceRegex = /[^.]*(?=\..*)\.|.*/;
const $NlAe$var$stripNameRegex = /\..*/;
const $NlAe$var$stripUidRegex = /::\d+$/;
const $NlAe$var$eventRegistry = {}; // Events storage

let $NlAe$var$uidEvent = 1;
const $NlAe$var$customEvents = {
  mouseenter: 'mouseover',
  mouseleave: 'mouseout'
};
const $NlAe$var$customEventsRegex = /^(mouseenter|mouseleave)/i;
const $NlAe$var$nativeEvents = new Set(['click', 'dblclick', 'mouseup', 'mousedown', 'contextmenu', 'mousewheel', 'DOMMouseScroll', 'mouseover', 'mouseout', 'mousemove', 'selectstart', 'selectend', 'keydown', 'keypress', 'keyup', 'orientationchange', 'touchstart', 'touchmove', 'touchend', 'touchcancel', 'pointerdown', 'pointermove', 'pointerup', 'pointerleave', 'pointercancel', 'gesturestart', 'gesturechange', 'gestureend', 'focus', 'blur', 'change', 'reset', 'select', 'submit', 'focusin', 'focusout', 'load', 'unload', 'beforeunload', 'resize', 'move', 'DOMContentLoaded', 'readystatechange', 'error', 'abort', 'scroll']);
/**
 * ------------------------------------------------------------------------
 * Private methods
 * ------------------------------------------------------------------------
 */

function $NlAe$var$getUidEvent(element, uid) {
  return uid && `${uid}::${$NlAe$var$uidEvent++}` || element.uidEvent || $NlAe$var$uidEvent++;
}

function $NlAe$var$getEvent(element) {
  const uid = $NlAe$var$getUidEvent(element);
  element.uidEvent = uid;
  $NlAe$var$eventRegistry[uid] = $NlAe$var$eventRegistry[uid] || {};
  return $NlAe$var$eventRegistry[uid];
}

function $NlAe$var$bootstrapHandler(element, fn) {
  return function handler(event) {
    event.delegateTarget = element;

    if (handler.oneOff) {
      $NlAe$var$EventHandler.off(element, event.type, fn);
    }

    return fn.apply(element, [event]);
  };
}

function $NlAe$var$bootstrapDelegationHandler(element, selector, fn) {
  return function handler(event) {
    const domElements = element.querySelectorAll(selector);

    for (let {
      target
    } = event; target && target !== this; target = target.parentNode) {
      for (let i = domElements.length; i--;) {
        if (domElements[i] === target) {
          event.delegateTarget = target;

          if (handler.oneOff) {
            $NlAe$var$EventHandler.off(element, event.type, selector, fn);
          }

          return fn.apply(target, [event]);
        }
      }
    } // To please ESLint


    return null;
  };
}

function $NlAe$var$findHandler(events, handler, delegationSelector = null) {
  const uidEventList = Object.keys(events);

  for (let i = 0, len = uidEventList.length; i < len; i++) {
    const event = events[uidEventList[i]];

    if (event.originalHandler === handler && event.delegationSelector === delegationSelector) {
      return event;
    }
  }

  return null;
}

function $NlAe$var$normalizeParams(originalTypeEvent, handler, delegationFn) {
  const delegation = typeof handler === 'string';
  const originalHandler = delegation ? delegationFn : handler;
  let typeEvent = $NlAe$var$getTypeEvent(originalTypeEvent);
  const isNative = $NlAe$var$nativeEvents.has(typeEvent);

  if (!isNative) {
    typeEvent = originalTypeEvent;
  }

  return [delegation, originalHandler, typeEvent];
}

function $NlAe$var$addHandler(element, originalTypeEvent, handler, delegationFn, oneOff) {
  if (typeof originalTypeEvent !== 'string' || !element) {
    return;
  }

  if (!handler) {
    handler = delegationFn;
    delegationFn = null;
  } // in case of mouseenter or mouseleave wrap the handler within a function that checks for its DOM position
  // this prevents the handler from being dispatched the same way as mouseover or mouseout does


  if ($NlAe$var$customEventsRegex.test(originalTypeEvent)) {
    const wrapFn = fn => {
      return function (event) {
        if (!event.relatedTarget || event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget)) {
          return fn.call(this, event);
        }
      };
    };

    if (delegationFn) {
      delegationFn = wrapFn(delegationFn);
    } else {
      handler = wrapFn(handler);
    }
  }

  const [delegation, originalHandler, typeEvent] = $NlAe$var$normalizeParams(originalTypeEvent, handler, delegationFn);
  const events = $NlAe$var$getEvent(element);
  const handlers = events[typeEvent] || (events[typeEvent] = {});
  const previousFn = $NlAe$var$findHandler(handlers, originalHandler, delegation ? handler : null);

  if (previousFn) {
    previousFn.oneOff = previousFn.oneOff && oneOff;
    return;
  }

  const uid = $NlAe$var$getUidEvent(originalHandler, originalTypeEvent.replace($NlAe$var$namespaceRegex, ''));
  const fn = delegation ? $NlAe$var$bootstrapDelegationHandler(element, handler, delegationFn) : $NlAe$var$bootstrapHandler(element, handler);
  fn.delegationSelector = delegation ? handler : null;
  fn.originalHandler = originalHandler;
  fn.oneOff = oneOff;
  fn.uidEvent = uid;
  handlers[uid] = fn;
  element.addEventListener(typeEvent, fn, delegation);
}

function $NlAe$var$removeHandler(element, events, typeEvent, handler, delegationSelector) {
  const fn = $NlAe$var$findHandler(events[typeEvent], handler, delegationSelector);

  if (!fn) {
    return;
  }

  element.removeEventListener(typeEvent, fn, Boolean(delegationSelector));
  delete events[typeEvent][fn.uidEvent];
}

function $NlAe$var$removeNamespacedHandlers(element, events, typeEvent, namespace) {
  const storeElementEvent = events[typeEvent] || {};
  Object.keys(storeElementEvent).forEach(handlerKey => {
    if (handlerKey.includes(namespace)) {
      const event = storeElementEvent[handlerKey];
      $NlAe$var$removeHandler(element, events, typeEvent, event.originalHandler, event.delegationSelector);
    }
  });
}

function $NlAe$var$getTypeEvent(event) {
  // allow to get the native events from namespaced events ('click.bs.button' --> 'click')
  event = event.replace($NlAe$var$stripNameRegex, '');
  return $NlAe$var$customEvents[event] || event;
}

const $NlAe$var$EventHandler = {
  on(element, event, handler, delegationFn) {
    $NlAe$var$addHandler(element, event, handler, delegationFn, false);
  },

  one(element, event, handler, delegationFn) {
    $NlAe$var$addHandler(element, event, handler, delegationFn, true);
  },

  off(element, originalTypeEvent, handler, delegationFn) {
    if (typeof originalTypeEvent !== 'string' || !element) {
      return;
    }

    const [delegation, originalHandler, typeEvent] = $NlAe$var$normalizeParams(originalTypeEvent, handler, delegationFn);
    const inNamespace = typeEvent !== originalTypeEvent;
    const events = $NlAe$var$getEvent(element);
    const isNamespace = originalTypeEvent.startsWith('.');

    if (typeof originalHandler !== 'undefined') {
      // Simplest case: handler is passed, remove that listener ONLY.
      if (!events || !events[typeEvent]) {
        return;
      }

      $NlAe$var$removeHandler(element, events, typeEvent, originalHandler, delegation ? handler : null);
      return;
    }

    if (isNamespace) {
      Object.keys(events).forEach(elementEvent => {
        $NlAe$var$removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
      });
    }

    const storeElementEvent = events[typeEvent] || {};
    Object.keys(storeElementEvent).forEach(keyHandlers => {
      const handlerKey = keyHandlers.replace($NlAe$var$stripUidRegex, '');

      if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
        const event = storeElementEvent[keyHandlers];
        $NlAe$var$removeHandler(element, events, typeEvent, event.originalHandler, event.delegationSelector);
      }
    });
  },

  trigger(element, event, args) {
    if (typeof event !== 'string' || !element) {
      return null;
    }

    const $ = $NlAe$var$getjQuery();
    const typeEvent = $NlAe$var$getTypeEvent(event);
    const inNamespace = event !== typeEvent;
    const isNative = $NlAe$var$nativeEvents.has(typeEvent);
    let jQueryEvent;
    let bubbles = true;
    let nativeDispatch = true;
    let defaultPrevented = false;
    let evt = null;

    if (inNamespace && $) {
      jQueryEvent = $.Event(event, args);
      $(element).trigger(jQueryEvent);
      bubbles = !jQueryEvent.isPropagationStopped();
      nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
      defaultPrevented = jQueryEvent.isDefaultPrevented();
    }

    if (isNative) {
      evt = document.createEvent('HTMLEvents');
      evt.initEvent(typeEvent, bubbles, true);
    } else {
      evt = new CustomEvent(event, {
        bubbles,
        cancelable: true
      });
    } // merge custom information in our event


    if (typeof args !== 'undefined') {
      Object.keys(args).forEach(key => {
        Object.defineProperty(evt, key, {
          get() {
            return args[key];
          }

        });
      });
    }

    if (defaultPrevented) {
      evt.preventDefault();
    }

    if (nativeDispatch) {
      element.dispatchEvent(evt);
    }

    if (evt.defaultPrevented && typeof jQueryEvent !== 'undefined') {
      jQueryEvent.preventDefault();
    }

    return evt;
  }

};
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): dom/data.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const $NlAe$var$elementMap = new Map();
const $NlAe$var$Data = {
  set(element, key, instance) {
    if (!$NlAe$var$elementMap.has(element)) {
      $NlAe$var$elementMap.set(element, new Map());
    }

    const instanceMap = $NlAe$var$elementMap.get(element); // make it clear we only want one instance per element
    // can be removed later when multiple key/instances are fine to be used

    if (!instanceMap.has(key) && instanceMap.size !== 0) {
      // eslint-disable-next-line no-console
      console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(instanceMap.keys())[0]}.`);
      return;
    }

    instanceMap.set(key, instance);
  },

  get(element, key) {
    if ($NlAe$var$elementMap.has(element)) {
      return $NlAe$var$elementMap.get(element).get(key) || null;
    }

    return null;
  },

  remove(element, key) {
    if (!$NlAe$var$elementMap.has(element)) {
      return;
    }

    const instanceMap = $NlAe$var$elementMap.get(element);
    instanceMap.delete(key); // free up element references if there are no instances left for an element

    if (instanceMap.size === 0) {
      $NlAe$var$elementMap.delete(element);
    }
  }

};
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): base-component.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const $NlAe$var$VERSION = '5.1.3';

class $NlAe$var$BaseComponent {
  constructor(element) {
    element = $NlAe$var$getElement(element);

    if (!element) {
      return;
    }

    this._element = element;
    $NlAe$var$Data.set(this._element, this.constructor.DATA_KEY, this);
  }

  dispose() {
    $NlAe$var$Data.remove(this._element, this.constructor.DATA_KEY);
    $NlAe$var$EventHandler.off(this._element, this.constructor.EVENT_KEY);
    Object.getOwnPropertyNames(this).forEach(propertyName => {
      this[propertyName] = null;
    });
  }

  _queueCallback(callback, element, isAnimated = true) {
    $NlAe$var$executeAfterTransition(callback, element, isAnimated);
  }
  /** Static */


  static getInstance(element) {
    return $NlAe$var$Data.get($NlAe$var$getElement(element), this.DATA_KEY);
  }

  static getOrCreateInstance(element, config = {}) {
    return this.getInstance(element) || new this(element, typeof config === 'object' ? config : null);
  }

  static get VERSION() {
    return $NlAe$var$VERSION;
  }

  static get NAME() {
    throw new Error('You have to implement the static method "NAME", for each component!');
  }

  static get DATA_KEY() {
    return `bs.${this.NAME}`;
  }

  static get EVENT_KEY() {
    return `.${this.DATA_KEY}`;
  }

}
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): util/component-functions.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */


const $NlAe$var$enableDismissTrigger = (component, method = 'hide') => {
  const clickEvent = `click.dismiss${component.EVENT_KEY}`;
  const name = component.NAME;
  $NlAe$var$EventHandler.on(document, clickEvent, `[data-bs-dismiss="${name}"]`, function (event) {
    if (['A', 'AREA'].includes(this.tagName)) {
      event.preventDefault();
    }

    if ($NlAe$var$isDisabled(this)) {
      return;
    }

    const target = $NlAe$var$getElementFromSelector(this) || this.closest(`.${name}`);
    const instance = component.getOrCreateInstance(target); // Method argument is left, for Alert and only, as it doesn't implement the 'hide' method

    instance[method]();
  });
};
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): alert.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */


const $NlAe$var$NAME$d = 'alert';
const $NlAe$var$DATA_KEY$c = 'bs.alert';
const $NlAe$var$EVENT_KEY$c = `.${$NlAe$var$DATA_KEY$c}`;
const $NlAe$var$EVENT_CLOSE = `close${$NlAe$var$EVENT_KEY$c}`;
const $NlAe$var$EVENT_CLOSED = `closed${$NlAe$var$EVENT_KEY$c}`;
const $NlAe$var$CLASS_NAME_FADE$5 = 'fade';
const $NlAe$var$CLASS_NAME_SHOW$8 = 'show';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class $NlAe$export$Alert extends $NlAe$var$BaseComponent {
  // Getters
  static get NAME() {
    return $NlAe$var$NAME$d;
  } // Public


  close() {
    const closeEvent = $NlAe$var$EventHandler.trigger(this._element, $NlAe$var$EVENT_CLOSE);

    if (closeEvent.defaultPrevented) {
      return;
    }

    this._element.classList.remove($NlAe$var$CLASS_NAME_SHOW$8);

    const isAnimated = this._element.classList.contains($NlAe$var$CLASS_NAME_FADE$5);

    this._queueCallback(() => this._destroyElement(), this._element, isAnimated);
  } // Private


  _destroyElement() {
    this._element.remove();

    $NlAe$var$EventHandler.trigger(this._element, $NlAe$var$EVENT_CLOSED);
    this.dispose();
  } // Static


  static jQueryInterface(config) {
    return this.each(function () {
      const data = $NlAe$export$Alert.getOrCreateInstance(this);

      if (typeof config !== 'string') {
        return;
      }

      if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
        throw new TypeError(`No method named "${config}"`);
      }

      data[config](this);
    });
  }

}
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


$NlAe$var$enableDismissTrigger($NlAe$export$Alert, 'close');
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Alert to jQuery only if jQuery is present
 */

$NlAe$var$defineJQueryPlugin($NlAe$export$Alert);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): button.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const $NlAe$var$NAME$c = 'button';
const $NlAe$var$DATA_KEY$b = 'bs.button';
const $NlAe$var$EVENT_KEY$b = `.${$NlAe$var$DATA_KEY$b}`;
const $NlAe$var$DATA_API_KEY$7 = '.data-api';
const $NlAe$var$CLASS_NAME_ACTIVE$3 = 'active';
const $NlAe$var$SELECTOR_DATA_TOGGLE$5 = '[data-bs-toggle="button"]';
const $NlAe$var$EVENT_CLICK_DATA_API$6 = `click${$NlAe$var$EVENT_KEY$b}${$NlAe$var$DATA_API_KEY$7}`;
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class $NlAe$export$Button extends $NlAe$var$BaseComponent {
  // Getters
  static get NAME() {
    return $NlAe$var$NAME$c;
  } // Public


  toggle() {
    // Toggle class and sync the `aria-pressed` attribute with the return value of the `.toggle()` method
    this._element.setAttribute('aria-pressed', this._element.classList.toggle($NlAe$var$CLASS_NAME_ACTIVE$3));
  } // Static


  static jQueryInterface(config) {
    return this.each(function () {
      const data = $NlAe$export$Button.getOrCreateInstance(this);

      if (config === 'toggle') {
        data[config]();
      }
    });
  }

}
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


$NlAe$var$EventHandler.on(document, $NlAe$var$EVENT_CLICK_DATA_API$6, $NlAe$var$SELECTOR_DATA_TOGGLE$5, event => {
  event.preventDefault();
  const button = event.target.closest($NlAe$var$SELECTOR_DATA_TOGGLE$5);
  const data = $NlAe$export$Button.getOrCreateInstance(button);
  data.toggle();
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Button to jQuery only if jQuery is present
 */

$NlAe$var$defineJQueryPlugin($NlAe$export$Button);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): dom/manipulator.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

function $NlAe$var$normalizeData(val) {
  if (val === 'true') {
    return true;
  }

  if (val === 'false') {
    return false;
  }

  if (val === Number(val).toString()) {
    return Number(val);
  }

  if (val === '' || val === 'null') {
    return null;
  }

  return val;
}

function $NlAe$var$normalizeDataKey(key) {
  return key.replace(/[A-Z]/g, chr => `-${chr.toLowerCase()}`);
}

const $NlAe$var$Manipulator = {
  setDataAttribute(element, key, value) {
    element.setAttribute(`data-bs-${$NlAe$var$normalizeDataKey(key)}`, value);
  },

  removeDataAttribute(element, key) {
    element.removeAttribute(`data-bs-${$NlAe$var$normalizeDataKey(key)}`);
  },

  getDataAttributes(element) {
    if (!element) {
      return {};
    }

    const attributes = {};
    Object.keys(element.dataset).filter(key => key.startsWith('bs')).forEach(key => {
      let pureKey = key.replace(/^bs/, '');
      pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length);
      attributes[pureKey] = $NlAe$var$normalizeData(element.dataset[key]);
    });
    return attributes;
  },

  getDataAttribute(element, key) {
    return $NlAe$var$normalizeData(element.getAttribute(`data-bs-${$NlAe$var$normalizeDataKey(key)}`));
  },

  offset(element) {
    const rect = element.getBoundingClientRect();
    return {
      top: rect.top + window.pageYOffset,
      left: rect.left + window.pageXOffset
    };
  },

  position(element) {
    return {
      top: element.offsetTop,
      left: element.offsetLeft
    };
  }

};
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): dom/selector-engine.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

const $NlAe$var$NODE_TEXT = 3;
const $NlAe$var$SelectorEngine = {
  find(selector, element = document.documentElement) {
    return [].concat(...Element.prototype.querySelectorAll.call(element, selector));
  },

  findOne(selector, element = document.documentElement) {
    return Element.prototype.querySelector.call(element, selector);
  },

  children(element, selector) {
    return [].concat(...element.children).filter(child => child.matches(selector));
  },

  parents(element, selector) {
    const parents = [];
    let ancestor = element.parentNode;

    while (ancestor && ancestor.nodeType === Node.ELEMENT_NODE && ancestor.nodeType !== $NlAe$var$NODE_TEXT) {
      if (ancestor.matches(selector)) {
        parents.push(ancestor);
      }

      ancestor = ancestor.parentNode;
    }

    return parents;
  },

  prev(element, selector) {
    let previous = element.previousElementSibling;

    while (previous) {
      if (previous.matches(selector)) {
        return [previous];
      }

      previous = previous.previousElementSibling;
    }

    return [];
  },

  next(element, selector) {
    let next = element.nextElementSibling;

    while (next) {
      if (next.matches(selector)) {
        return [next];
      }

      next = next.nextElementSibling;
    }

    return [];
  },

  focusableChildren(element) {
    const focusables = ['a', 'button', 'input', 'textarea', 'select', 'details', '[tabindex]', '[contenteditable="true"]'].map(selector => `${selector}:not([tabindex^="-"])`).join(', ');
    return this.find(focusables, element).filter(el => !$NlAe$var$isDisabled(el) && $NlAe$var$isVisible(el));
  }

};
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): carousel.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const $NlAe$var$NAME$b = 'carousel';
const $NlAe$var$DATA_KEY$a = 'bs.carousel';
const $NlAe$var$EVENT_KEY$a = `.${$NlAe$var$DATA_KEY$a}`;
const $NlAe$var$DATA_API_KEY$6 = '.data-api';
const $NlAe$var$ARROW_LEFT_KEY = 'ArrowLeft';
const $NlAe$var$ARROW_RIGHT_KEY = 'ArrowRight';
const $NlAe$var$TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

const $NlAe$var$SWIPE_THRESHOLD = 40;
const $NlAe$var$Default$a = {
  interval: 5000,
  keyboard: true,
  slide: false,
  pause: 'hover',
  wrap: true,
  touch: true
};
const $NlAe$var$DefaultType$a = {
  interval: '(number|boolean)',
  keyboard: 'boolean',
  slide: '(boolean|string)',
  pause: '(string|boolean)',
  wrap: 'boolean',
  touch: 'boolean'
};
const $NlAe$var$ORDER_NEXT = 'next';
const $NlAe$var$ORDER_PREV = 'prev';
const $NlAe$var$DIRECTION_LEFT = 'left';
const $NlAe$var$DIRECTION_RIGHT = 'right';
const $NlAe$var$KEY_TO_DIRECTION = {
  [$NlAe$var$ARROW_LEFT_KEY]: $NlAe$var$DIRECTION_RIGHT,
  [$NlAe$var$ARROW_RIGHT_KEY]: $NlAe$var$DIRECTION_LEFT
};
const $NlAe$var$EVENT_SLIDE = `slide${$NlAe$var$EVENT_KEY$a}`;
const $NlAe$var$EVENT_SLID = `slid${$NlAe$var$EVENT_KEY$a}`;
const $NlAe$var$EVENT_KEYDOWN = `keydown${$NlAe$var$EVENT_KEY$a}`;
const $NlAe$var$EVENT_MOUSEENTER = `mouseenter${$NlAe$var$EVENT_KEY$a}`;
const $NlAe$var$EVENT_MOUSELEAVE = `mouseleave${$NlAe$var$EVENT_KEY$a}`;
const $NlAe$var$EVENT_TOUCHSTART = `touchstart${$NlAe$var$EVENT_KEY$a}`;
const $NlAe$var$EVENT_TOUCHMOVE = `touchmove${$NlAe$var$EVENT_KEY$a}`;
const $NlAe$var$EVENT_TOUCHEND = `touchend${$NlAe$var$EVENT_KEY$a}`;
const $NlAe$var$EVENT_POINTERDOWN = `pointerdown${$NlAe$var$EVENT_KEY$a}`;
const $NlAe$var$EVENT_POINTERUP = `pointerup${$NlAe$var$EVENT_KEY$a}`;
const $NlAe$var$EVENT_DRAG_START = `dragstart${$NlAe$var$EVENT_KEY$a}`;
const $NlAe$var$EVENT_LOAD_DATA_API$2 = `load${$NlAe$var$EVENT_KEY$a}${$NlAe$var$DATA_API_KEY$6}`;
const $NlAe$var$EVENT_CLICK_DATA_API$5 = `click${$NlAe$var$EVENT_KEY$a}${$NlAe$var$DATA_API_KEY$6}`;
const $NlAe$var$CLASS_NAME_CAROUSEL = 'carousel';
const $NlAe$var$CLASS_NAME_ACTIVE$2 = 'active';
const $NlAe$var$CLASS_NAME_SLIDE = 'slide';
const $NlAe$var$CLASS_NAME_END = 'carousel-item-end';
const $NlAe$var$CLASS_NAME_START = 'carousel-item-start';
const $NlAe$var$CLASS_NAME_NEXT = 'carousel-item-next';
const $NlAe$var$CLASS_NAME_PREV = 'carousel-item-prev';
const $NlAe$var$CLASS_NAME_POINTER_EVENT = 'pointer-event';
const $NlAe$var$CLASS_NAME_PAUSED = 'is-paused'; // Boosted mod: used for progress indicators

const $NlAe$var$CLASS_NAME_DONE = 'is-done'; // Boosted mod: used for progress indicators

const $NlAe$var$SELECTOR_ACTIVE$1 = '.active';
const $NlAe$var$SELECTOR_ACTIVE_ITEM = '.active.carousel-item';
const $NlAe$var$SELECTOR_ITEM = '.carousel-item';
const $NlAe$var$SELECTOR_ITEM_IMG = '.carousel-item img';
const $NlAe$var$SELECTOR_NEXT_PREV = '.carousel-item-next, .carousel-item-prev';
const $NlAe$var$SELECTOR_INDICATORS = '.carousel-indicators';
const $NlAe$var$SELECTOR_INDICATOR = '[data-bs-target]';
const $NlAe$var$SELECTOR_DATA_SLIDE = '[data-bs-slide], [data-bs-slide-to]';
const $NlAe$var$SELECTOR_DATA_RIDE = '[data-bs-ride="carousel"]';
const $NlAe$var$SELECTOR_CONTROL_PREV = '.carousel-control-prev'; // Boosted mod

const $NlAe$var$SELECTOR_CONTROL_NEXT = '.carousel-control-next'; // Boosted mod

const $NlAe$var$PREFIX_CUSTOM_PROPS = 'o-'; // Boosted mod: should match `$boosted-variable-prefix` in scss/_variables.scss

const $NlAe$var$POINTER_TYPE_TOUCH = 'touch';
const $NlAe$var$POINTER_TYPE_PEN = 'pen';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class $NlAe$export$Carousel extends $NlAe$var$BaseComponent {
  constructor(element, config) {
    super(element);
    this._items = null;
    this._interval = null;
    this._activeElement = null;
    this._isPaused = false;
    this._isSliding = false;
    this.touchTimeout = null;
    this.touchStartX = 0;
    this.touchDeltaX = 0;
    this._config = this._getConfig(config);
    this._indicatorsElement = $NlAe$var$SelectorEngine.findOne($NlAe$var$SELECTOR_INDICATORS, this._element);
    this._touchSupported = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
    this._pointerEvent = Boolean(window.PointerEvent);

    this._addEventListeners();
  } // Getters


  static get Default() {
    return $NlAe$var$Default$a;
  }

  static get NAME() {
    return $NlAe$var$NAME$b;
  } // Public


  next() {
    this._slide($NlAe$var$ORDER_NEXT);
  }

  nextWhenVisible() {
    // Don't call next when the page isn't visible
    // or the carousel or its parent isn't visible
    if (!document.hidden && $NlAe$var$isVisible(this._element)) {
      this.next();
    }
  }

  prev() {
    this._slide($NlAe$var$ORDER_PREV);
  }

  pause(event) {
    // Boosted mod: reset the animation on progress indicator
    if (this._indicatorsElement) {
      this._element.classList.add($NlAe$var$CLASS_NAME_PAUSED);
    } // End mod


    if (!event) {
      this._isPaused = true;
    }

    if ($NlAe$var$SelectorEngine.findOne($NlAe$var$SELECTOR_NEXT_PREV, this._element)) {
      $NlAe$var$triggerTransitionEnd(this._element);
      this.cycle(true);
    }

    clearInterval(this._interval);
    this._interval = null;
  }

  cycle(event) {
    // Boosted mod: restart the animation on progress indicator
    if (this._indicatorsElement) {
      this._element.classList.remove($NlAe$var$CLASS_NAME_PAUSED);
    } // End mod


    if (!event) {
      this._isPaused = false;
    }

    if (this._interval) {
      clearInterval(this._interval);
      this._interval = null;
    }

    if (this._config && this._config.interval && !this._isPaused) {
      this._updateInterval();

      this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
    }
  }

  to(index) {
    this._activeElement = $NlAe$var$SelectorEngine.findOne($NlAe$var$SELECTOR_ACTIVE_ITEM, this._element);

    const activeIndex = this._getItemIndex(this._activeElement); // Boosted mod: restart the animation on progress indicator


    if (this._indicatorsElement) {
      this._element.classList.remove($NlAe$var$CLASS_NAME_DONE);
    } // End mod


    if (index > this._items.length - 1 || index < 0) {
      return;
    }

    if (this._isSliding) {
      $NlAe$var$EventHandler.one(this._element, $NlAe$var$EVENT_SLID, () => this.to(index));
      return;
    }

    if (activeIndex === index) {
      this.pause();
      this.cycle();
      return;
    }

    const order = index > activeIndex ? $NlAe$var$ORDER_NEXT : $NlAe$var$ORDER_PREV;

    this._slide(order, this._items[index]);
  } // Private


  _getConfig(config) {
    config = { ...$NlAe$var$Default$a,
      ...$NlAe$var$Manipulator.getDataAttributes(this._element),
      ...(typeof config === 'object' ? config : {})
    };
    $NlAe$var$typeCheckConfig($NlAe$var$NAME$b, config, $NlAe$var$DefaultType$a);
    return config;
  }

  _handleSwipe() {
    const absDeltax = Math.abs(this.touchDeltaX);

    if (absDeltax <= $NlAe$var$SWIPE_THRESHOLD) {
      return;
    }

    const direction = absDeltax / this.touchDeltaX;
    this.touchDeltaX = 0;

    if (!direction) {
      return;
    }

    this._slide(direction > 0 ? $NlAe$var$DIRECTION_RIGHT : $NlAe$var$DIRECTION_LEFT);
  }

  _addEventListeners() {
    if (this._config.keyboard) {
      $NlAe$var$EventHandler.on(this._element, $NlAe$var$EVENT_KEYDOWN, event => this._keydown(event));
    }

    if (this._config.pause === 'hover') {
      $NlAe$var$EventHandler.on(this._element, $NlAe$var$EVENT_MOUSEENTER, event => this.pause(event));
      $NlAe$var$EventHandler.on(this._element, $NlAe$var$EVENT_MOUSELEAVE, event => this.cycle(event));
    }

    if (this._config.touch && this._touchSupported) {
      this._addTouchEventListeners();
    }
  }

  _addTouchEventListeners() {
    const hasPointerPenTouch = event => {
      return this._pointerEvent && (event.pointerType === $NlAe$var$POINTER_TYPE_PEN || event.pointerType === $NlAe$var$POINTER_TYPE_TOUCH);
    };

    const start = event => {
      if (hasPointerPenTouch(event)) {
        this.touchStartX = event.clientX;
      } else if (!this._pointerEvent) {
        this.touchStartX = event.touches[0].clientX;
      }
    };

    const move = event => {
      // ensure swiping with one touch and not pinching
      this.touchDeltaX = event.touches && event.touches.length > 1 ? 0 : event.touches[0].clientX - this.touchStartX;
    };

    const end = event => {
      if (hasPointerPenTouch(event)) {
        this.touchDeltaX = event.clientX - this.touchStartX;
      }

      this._handleSwipe();

      if (this._config.pause === 'hover') {
        // If it's a touch-enabled device, mouseenter/leave are fired as
        // part of the mouse compatibility events on first tap - the carousel
        // would stop cycling until user tapped out of it;
        // here, we listen for touchend, explicitly pause the carousel
        // (as if it's the second time we tap on it, mouseenter compat event
        // is NOT fired) and after a timeout (to allow for mouse compatibility
        // events to fire) we explicitly restart cycling
        this.pause();

        if (this.touchTimeout) {
          clearTimeout(this.touchTimeout);
        }

        this.touchTimeout = setTimeout(event => this.cycle(event), $NlAe$var$TOUCHEVENT_COMPAT_WAIT + this._config.interval);
      }
    };

    $NlAe$var$SelectorEngine.find($NlAe$var$SELECTOR_ITEM_IMG, this._element).forEach(itemImg => {
      $NlAe$var$EventHandler.on(itemImg, $NlAe$var$EVENT_DRAG_START, event => event.preventDefault());
    });

    if (this._pointerEvent) {
      $NlAe$var$EventHandler.on(this._element, $NlAe$var$EVENT_POINTERDOWN, event => start(event));
      $NlAe$var$EventHandler.on(this._element, $NlAe$var$EVENT_POINTERUP, event => end(event));

      this._element.classList.add($NlAe$var$CLASS_NAME_POINTER_EVENT);
    } else {
      $NlAe$var$EventHandler.on(this._element, $NlAe$var$EVENT_TOUCHSTART, event => start(event));
      $NlAe$var$EventHandler.on(this._element, $NlAe$var$EVENT_TOUCHMOVE, event => move(event));
      $NlAe$var$EventHandler.on(this._element, $NlAe$var$EVENT_TOUCHEND, event => end(event));
    }
  }

  _keydown(event) {
    if (/input|textarea/i.test(event.target.tagName)) {
      return;
    }

    const direction = $NlAe$var$KEY_TO_DIRECTION[event.key];

    if (direction) {
      event.preventDefault();

      this._slide(direction);
    }
  } // Boosted mod: handle prev/next controls states


  _disableControl(element) {
    if (element.nodeName === 'BUTTON') {
      element.disabled = true;
    } else {
      element.setAttribute('aria-disabled', true);
      element.setAttribute('tabindex', '-1');
    }
  }

  _enableControl(element) {
    if (element.nodeName === 'BUTTON') {
      element.disabled = false;
    } else {
      element.removeAttribute('aria-disabled');
      element.removeAttribute('tabindex');
    }
  } // End mod


  _getItemIndex(element) {
    this._items = element && element.parentNode ? $NlAe$var$SelectorEngine.find($NlAe$var$SELECTOR_ITEM, element.parentNode) : [];
    return this._items.indexOf(element);
  }

  _getItemByOrder(order, activeElement) {
    const isNext = order === $NlAe$var$ORDER_NEXT; // Boosted mod: progress indicators animation when wrapping is disabled

    if (!this._config.wrap) {
      const isPrev = order === $NlAe$var$ORDER_PREV;

      const activeIndex = this._getItemIndex(activeElement);

      const lastItemIndex = this._items.length - 1;
      const isGoingToWrap = isPrev && activeIndex === 0 || isNext && activeIndex === lastItemIndex;

      if (isGoingToWrap) {
        // Reset the animation on last progress indicator when last slide is active
        if (isNext && this._indicatorsElement && !this._element.hasAttribute('data-bs-slide')) {
          this._element.classList.add($NlAe$var$CLASS_NAME_DONE);
        }

        return activeElement;
      } // Restart animation otherwise


      if (this._indicatorsElement) {
        this._element.classList.remove($NlAe$var$CLASS_NAME_DONE);
      }
    } // End mod


    return $NlAe$var$getNextActiveElement(this._items, activeElement, isNext, this._config.wrap);
  }

  _triggerSlideEvent(relatedTarget, eventDirectionName) {
    const targetIndex = this._getItemIndex(relatedTarget);

    const fromIndex = this._getItemIndex($NlAe$var$SelectorEngine.findOne($NlAe$var$SELECTOR_ACTIVE_ITEM, this._element));

    return $NlAe$var$EventHandler.trigger(this._element, $NlAe$var$EVENT_SLIDE, {
      relatedTarget,
      direction: eventDirectionName,
      from: fromIndex,
      to: targetIndex
    });
  }

  _setActiveIndicatorElement(element) {
    if (this._indicatorsElement) {
      const activeIndicator = $NlAe$var$SelectorEngine.findOne($NlAe$var$SELECTOR_ACTIVE$1, this._indicatorsElement);
      activeIndicator.classList.remove($NlAe$var$CLASS_NAME_ACTIVE$2);
      activeIndicator.removeAttribute('aria-current');
      const indicators = $NlAe$var$SelectorEngine.find($NlAe$var$SELECTOR_INDICATOR, this._indicatorsElement);

      for (let i = 0; i < indicators.length; i++) {
        if (Number.parseInt(indicators[i].getAttribute('data-bs-slide-to'), 10) === this._getItemIndex(element)) {
          indicators[i].classList.add($NlAe$var$CLASS_NAME_ACTIVE$2);
          indicators[i].setAttribute('aria-current', 'true');
          break;
        }
      }
    }
  }

  _updateInterval() {
    const element = this._activeElement || $NlAe$var$SelectorEngine.findOne($NlAe$var$SELECTOR_ACTIVE_ITEM, this._element);

    if (!element) {
      return;
    }

    const elementInterval = Number.parseInt(element.getAttribute('data-bs-interval'), 10);

    if (elementInterval) {
      this._config.defaultInterval = this._config.defaultInterval || this._config.interval;
      this._config.interval = elementInterval;
    } else {
      this._config.interval = this._config.defaultInterval || this._config.interval;
    } // Boosted mod: set progress indicator's interval as custom property


    if (this._indicatorsElement && this._config.interval !== $NlAe$var$Default$a.interval) {
      const currentIndex = this._getItemIndex(element);

      const currentIndicator = $NlAe$var$SelectorEngine.findOne(`:nth-child(${currentIndex + 1})`, this._indicatorsElement);
      currentIndicator.style.setProperty(`--${$NlAe$var$PREFIX_CUSTOM_PROPS}carousel-interval`, `${this._config.interval}ms`);
    } // End mod

  }

  _slide(directionOrOrder, element) {
    const order = this._directionToOrder(directionOrOrder);

    const activeElement = $NlAe$var$SelectorEngine.findOne($NlAe$var$SELECTOR_ACTIVE_ITEM, this._element);

    const activeElementIndex = this._getItemIndex(activeElement);

    const nextElement = element || this._getItemByOrder(order, activeElement);

    const nextElementIndex = this._getItemIndex(nextElement);

    const isCycling = Boolean(this._interval);
    const isNext = order === $NlAe$var$ORDER_NEXT;
    const directionalClassName = isNext ? $NlAe$var$CLASS_NAME_START : $NlAe$var$CLASS_NAME_END;
    const orderClassName = isNext ? $NlAe$var$CLASS_NAME_NEXT : $NlAe$var$CLASS_NAME_PREV;

    const eventDirectionName = this._orderToDirection(order);

    if (nextElement && nextElement.classList.contains($NlAe$var$CLASS_NAME_ACTIVE$2)) {
      this._isSliding = false;
      return;
    }

    if (this._isSliding) {
      return;
    }

    const slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);

    if (slideEvent.defaultPrevented) {
      return;
    }

    if (!activeElement || !nextElement) {
      // Some weirdness is happening, so we bail
      return;
    }

    this._isSliding = true;

    if (isCycling) {
      this.pause();
    }

    this._setActiveIndicatorElement(nextElement);

    this._activeElement = nextElement;

    const triggerSlidEvent = () => {
      $NlAe$var$EventHandler.trigger(this._element, $NlAe$var$EVENT_SLID, {
        relatedTarget: nextElement,
        direction: eventDirectionName,
        from: activeElementIndex,
        to: nextElementIndex
      });
    }; // Boosted mod: enable/disable prev/next controls when wrap=false


    if (!this._config.wrap) {
      const prevControl = $NlAe$var$SelectorEngine.findOne($NlAe$var$SELECTOR_CONTROL_PREV, this._element);
      const nextControl = $NlAe$var$SelectorEngine.findOne($NlAe$var$SELECTOR_CONTROL_NEXT, this._element);

      this._enableControl(prevControl);

      this._enableControl(nextControl);

      if (nextElementIndex === 0) {
        this._disableControl(prevControl);
      } else if (nextElementIndex === this._items.length - 1) {
        this._disableControl(nextControl);
      }
    } // End mod


    if (this._element.classList.contains($NlAe$var$CLASS_NAME_SLIDE)) {
      nextElement.classList.add(orderClassName);
      $NlAe$var$reflow(nextElement);
      activeElement.classList.add(directionalClassName);
      nextElement.classList.add(directionalClassName);

      const completeCallBack = () => {
        nextElement.classList.remove(directionalClassName, orderClassName);
        nextElement.classList.add($NlAe$var$CLASS_NAME_ACTIVE$2);
        activeElement.classList.remove($NlAe$var$CLASS_NAME_ACTIVE$2, orderClassName, directionalClassName);
        this._isSliding = false;
        setTimeout(triggerSlidEvent, 0);
      };

      this._queueCallback(completeCallBack, activeElement, true);
    } else {
      activeElement.classList.remove($NlAe$var$CLASS_NAME_ACTIVE$2);
      nextElement.classList.add($NlAe$var$CLASS_NAME_ACTIVE$2);
      this._isSliding = false;
      triggerSlidEvent();
    }

    if (isCycling) {
      this.cycle();
    }
  }

  _directionToOrder(direction) {
    if (![$NlAe$var$DIRECTION_RIGHT, $NlAe$var$DIRECTION_LEFT].includes(direction)) {
      return direction;
    }

    if ($NlAe$var$isRTL()) {
      return direction === $NlAe$var$DIRECTION_LEFT ? $NlAe$var$ORDER_PREV : $NlAe$var$ORDER_NEXT;
    }

    return direction === $NlAe$var$DIRECTION_LEFT ? $NlAe$var$ORDER_NEXT : $NlAe$var$ORDER_PREV;
  }

  _orderToDirection(order) {
    if (![$NlAe$var$ORDER_NEXT, $NlAe$var$ORDER_PREV].includes(order)) {
      return order;
    }

    if ($NlAe$var$isRTL()) {
      return order === $NlAe$var$ORDER_PREV ? $NlAe$var$DIRECTION_LEFT : $NlAe$var$DIRECTION_RIGHT;
    }

    return order === $NlAe$var$ORDER_PREV ? $NlAe$var$DIRECTION_RIGHT : $NlAe$var$DIRECTION_LEFT;
  } // Static


  static carouselInterface(element, config) {
    const data = $NlAe$export$Carousel.getOrCreateInstance(element, config);
    let {
      _config
    } = data;

    if (typeof config === 'object') {
      _config = { ..._config,
        ...config
      };
    }

    const action = typeof config === 'string' ? config : _config.slide;

    if (typeof config === 'number') {
      data.to(config);
    } else if (typeof action === 'string') {
      if (typeof data[action] === 'undefined') {
        throw new TypeError(`No method named "${action}"`);
      }

      data[action]();
    } else if (_config.interval && _config.ride) {
      data.pause();
      data.cycle();
    }
  }

  static jQueryInterface(config) {
    return this.each(function () {
      $NlAe$export$Carousel.carouselInterface(this, config);
    });
  }

  static dataApiClickHandler(event) {
    const target = $NlAe$var$getElementFromSelector(this);

    if (!target || !target.classList.contains($NlAe$var$CLASS_NAME_CAROUSEL)) {
      return;
    }

    const config = { ...$NlAe$var$Manipulator.getDataAttributes(target),
      ...$NlAe$var$Manipulator.getDataAttributes(this)
    };
    const slideIndex = this.getAttribute('data-bs-slide-to');

    if (slideIndex) {
      config.interval = false;
    }

    $NlAe$export$Carousel.carouselInterface(target, config);

    if (slideIndex) {
      $NlAe$export$Carousel.getInstance(target).to(slideIndex);
    }

    event.preventDefault();
  }

}
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


$NlAe$var$EventHandler.on(document, $NlAe$var$EVENT_CLICK_DATA_API$5, $NlAe$var$SELECTOR_DATA_SLIDE, $NlAe$export$Carousel.dataApiClickHandler);
$NlAe$var$EventHandler.on(window, $NlAe$var$EVENT_LOAD_DATA_API$2, () => {
  const carousels = $NlAe$var$SelectorEngine.find($NlAe$var$SELECTOR_DATA_RIDE);

  for (let i = 0, len = carousels.length; i < len; i++) {
    $NlAe$export$Carousel.carouselInterface(carousels[i], $NlAe$export$Carousel.getInstance(carousels[i]));
  }
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Carousel to jQuery only if jQuery is present
 */

$NlAe$var$defineJQueryPlugin($NlAe$export$Carousel);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): collapse.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const $NlAe$var$NAME$a = 'collapse';
const $NlAe$var$DATA_KEY$9 = 'bs.collapse';
const $NlAe$var$EVENT_KEY$9 = `.${$NlAe$var$DATA_KEY$9}`;
const $NlAe$var$DATA_API_KEY$5 = '.data-api';
const $NlAe$var$Default$9 = {
  toggle: true,
  parent: null
};
const $NlAe$var$DefaultType$9 = {
  toggle: 'boolean',
  parent: '(null|element)'
};
const $NlAe$var$EVENT_SHOW$5 = `show${$NlAe$var$EVENT_KEY$9}`;
const $NlAe$var$EVENT_SHOWN$5 = `shown${$NlAe$var$EVENT_KEY$9}`;
const $NlAe$var$EVENT_HIDE$5 = `hide${$NlAe$var$EVENT_KEY$9}`;
const $NlAe$var$EVENT_HIDDEN$5 = `hidden${$NlAe$var$EVENT_KEY$9}`;
const $NlAe$var$EVENT_CLICK_DATA_API$4 = `click${$NlAe$var$EVENT_KEY$9}${$NlAe$var$DATA_API_KEY$5}`;
const $NlAe$var$CLASS_NAME_SHOW$7 = 'show';
const $NlAe$var$CLASS_NAME_COLLAPSE = 'collapse';
const $NlAe$var$CLASS_NAME_COLLAPSING = 'collapsing';
const $NlAe$var$CLASS_NAME_COLLAPSED = 'collapsed';
const $NlAe$var$CLASS_NAME_DEEPER_CHILDREN = `:scope .${$NlAe$var$CLASS_NAME_COLLAPSE} .${$NlAe$var$CLASS_NAME_COLLAPSE}`;
const $NlAe$var$CLASS_NAME_HORIZONTAL = 'collapse-horizontal';
const $NlAe$var$WIDTH = 'width';
const $NlAe$var$HEIGHT = 'height';
const $NlAe$var$SELECTOR_ACTIVES = '.collapse.show, .collapse.collapsing';
const $NlAe$var$SELECTOR_DATA_TOGGLE$4 = '[data-bs-toggle="collapse"]';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class $NlAe$export$Collapse extends $NlAe$var$BaseComponent {
  constructor(element, config) {
    super(element);
    this._isTransitioning = false;
    this._config = this._getConfig(config);
    this._triggerArray = [];
    const toggleList = $NlAe$var$SelectorEngine.find($NlAe$var$SELECTOR_DATA_TOGGLE$4);

    for (let i = 0, len = toggleList.length; i < len; i++) {
      const elem = toggleList[i];
      const selector = $NlAe$var$getSelectorFromElement(elem);
      const filterElement = $NlAe$var$SelectorEngine.find(selector).filter(foundElem => foundElem === this._element);

      if (selector !== null && filterElement.length) {
        this._selector = selector;

        this._triggerArray.push(elem);
      }
    }

    this._initializeChildren();

    if (!this._config.parent) {
      this._addAriaAndCollapsedClass(this._triggerArray, this._isShown());
    }

    if (this._config.toggle) {
      this.toggle();
    }
  } // Getters


  static get Default() {
    return $NlAe$var$Default$9;
  }

  static get NAME() {
    return $NlAe$var$NAME$a;
  } // Public


  toggle() {
    if (this._isShown()) {
      this.hide();
    } else {
      this.show();
    }
  }

  show() {
    if (this._isTransitioning || this._isShown()) {
      return;
    }

    let actives = [];
    let activesData;

    if (this._config.parent) {
      const children = $NlAe$var$SelectorEngine.find($NlAe$var$CLASS_NAME_DEEPER_CHILDREN, this._config.parent);
      actives = $NlAe$var$SelectorEngine.find($NlAe$var$SELECTOR_ACTIVES, this._config.parent).filter(elem => !children.includes(elem)); // remove children if greater depth
    }

    const container = $NlAe$var$SelectorEngine.findOne(this._selector);

    if (actives.length) {
      const tempActiveData = actives.find(elem => container !== elem);
      activesData = tempActiveData ? $NlAe$export$Collapse.getInstance(tempActiveData) : null;

      if (activesData && activesData._isTransitioning) {
        return;
      }
    }

    const startEvent = $NlAe$var$EventHandler.trigger(this._element, $NlAe$var$EVENT_SHOW$5);

    if (startEvent.defaultPrevented) {
      return;
    }

    actives.forEach(elemActive => {
      if (container !== elemActive) {
        $NlAe$export$Collapse.getOrCreateInstance(elemActive, {
          toggle: false
        }).hide();
      }

      if (!activesData) {
        $NlAe$var$Data.set(elemActive, $NlAe$var$DATA_KEY$9, null);
      }
    });

    const dimension = this._getDimension();

    this._element.classList.remove($NlAe$var$CLASS_NAME_COLLAPSE);

    this._element.classList.add($NlAe$var$CLASS_NAME_COLLAPSING);

    this._element.style[dimension] = 0;

    this._addAriaAndCollapsedClass(this._triggerArray, true);

    this._isTransitioning = true;

    const complete = () => {
      this._isTransitioning = false;

      this._element.classList.remove($NlAe$var$CLASS_NAME_COLLAPSING);

      this._element.classList.add($NlAe$var$CLASS_NAME_COLLAPSE, $NlAe$var$CLASS_NAME_SHOW$7);

      this._element.style[dimension] = '';
      $NlAe$var$EventHandler.trigger(this._element, $NlAe$var$EVENT_SHOWN$5);
    };

    const capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
    const scrollSize = `scroll${capitalizedDimension}`;

    this._queueCallback(complete, this._element, true);

    this._element.style[dimension] = `${this._element[scrollSize]}px`;
  }

  hide() {
    if (this._isTransitioning || !this._isShown()) {
      return;
    }

    const startEvent = $NlAe$var$EventHandler.trigger(this._element, $NlAe$var$EVENT_HIDE$5);

    if (startEvent.defaultPrevented) {
      return;
    }

    const dimension = this._getDimension();

    this._element.style[dimension] = `${this._element.getBoundingClientRect()[dimension]}px`;
    $NlAe$var$reflow(this._element);

    this._element.classList.add($NlAe$var$CLASS_NAME_COLLAPSING);

    this._element.classList.remove($NlAe$var$CLASS_NAME_COLLAPSE, $NlAe$var$CLASS_NAME_SHOW$7);

    const triggerArrayLength = this._triggerArray.length;

    for (let i = 0; i < triggerArrayLength; i++) {
      const trigger = this._triggerArray[i];
      const elem = $NlAe$var$getElementFromSelector(trigger);

      if (elem && !this._isShown(elem)) {
        this._addAriaAndCollapsedClass([trigger], false);
      }
    }

    this._isTransitioning = true;

    const complete = () => {
      this._isTransitioning = false;

      this._element.classList.remove($NlAe$var$CLASS_NAME_COLLAPSING);

      this._element.classList.add($NlAe$var$CLASS_NAME_COLLAPSE);

      $NlAe$var$EventHandler.trigger(this._element, $NlAe$var$EVENT_HIDDEN$5);
    };

    this._element.style[dimension] = '';

    this._queueCallback(complete, this._element, true);
  }

  _isShown(element = this._element) {
    return element.classList.contains($NlAe$var$CLASS_NAME_SHOW$7);
  } // Private


  _getConfig(config) {
    config = { ...$NlAe$var$Default$9,
      ...$NlAe$var$Manipulator.getDataAttributes(this._element),
      ...config
    };
    config.toggle = Boolean(config.toggle); // Coerce string values

    config.parent = $NlAe$var$getElement(config.parent);
    $NlAe$var$typeCheckConfig($NlAe$var$NAME$a, config, $NlAe$var$DefaultType$9);
    return config;
  }

  _getDimension() {
    return this._element.classList.contains($NlAe$var$CLASS_NAME_HORIZONTAL) ? $NlAe$var$WIDTH : $NlAe$var$HEIGHT;
  }

  _initializeChildren() {
    if (!this._config.parent) {
      return;
    }

    const children = $NlAe$var$SelectorEngine.find($NlAe$var$CLASS_NAME_DEEPER_CHILDREN, this._config.parent);
    $NlAe$var$SelectorEngine.find($NlAe$var$SELECTOR_DATA_TOGGLE$4, this._config.parent).filter(elem => !children.includes(elem)).forEach(element => {
      const selected = $NlAe$var$getElementFromSelector(element);

      if (selected) {
        this._addAriaAndCollapsedClass([element], this._isShown(selected));
      }
    });
  }

  _addAriaAndCollapsedClass(triggerArray, isOpen) {
    if (!triggerArray.length) {
      return;
    }

    triggerArray.forEach(elem => {
      if (isOpen) {
        elem.classList.remove($NlAe$var$CLASS_NAME_COLLAPSED);
      } else {
        elem.classList.add($NlAe$var$CLASS_NAME_COLLAPSED);
      }

      elem.setAttribute('aria-expanded', isOpen);
    });
  } // Static


  static jQueryInterface(config) {
    return this.each(function () {
      const _config = {};

      if (typeof config === 'string' && /show|hide/.test(config)) {
        _config.toggle = false;
      }

      const data = $NlAe$export$Collapse.getOrCreateInstance(this, _config);

      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }

        data[config]();
      }
    });
  }

}
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


$NlAe$var$EventHandler.on(document, $NlAe$var$EVENT_CLICK_DATA_API$4, $NlAe$var$SELECTOR_DATA_TOGGLE$4, function (event) {
  // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
  if (event.target.tagName === 'A' || event.delegateTarget && event.delegateTarget.tagName === 'A') {
    event.preventDefault();
  }

  const selector = $NlAe$var$getSelectorFromElement(this);
  const selectorElements = $NlAe$var$SelectorEngine.find(selector);
  selectorElements.forEach(element => {
    $NlAe$export$Collapse.getOrCreateInstance(element, {
      toggle: false
    }).toggle();
  });
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Collapse to jQuery only if jQuery is present
 */

$NlAe$var$defineJQueryPlugin($NlAe$export$Collapse);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): dropdown.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const $NlAe$var$NAME$9 = 'dropdown';
const $NlAe$var$DATA_KEY$8 = 'bs.dropdown';
const $NlAe$var$EVENT_KEY$8 = `.${$NlAe$var$DATA_KEY$8}`;
const $NlAe$var$DATA_API_KEY$4 = '.data-api';
const $NlAe$var$ESCAPE_KEY$2 = 'Escape';
const $NlAe$var$SPACE_KEY = 'Space';
const $NlAe$var$TAB_KEY$1 = 'Tab';
const $NlAe$var$ARROW_UP_KEY = 'ArrowUp';
const $NlAe$var$ARROW_DOWN_KEY = 'ArrowDown';
const $NlAe$var$RIGHT_MOUSE_BUTTON = 2; // MouseEvent.button value for the secondary button, usually the right button

const $NlAe$var$REGEXP_KEYDOWN = new RegExp(`${$NlAe$var$ARROW_UP_KEY}|${$NlAe$var$ARROW_DOWN_KEY}|${$NlAe$var$ESCAPE_KEY$2}`);
const $NlAe$var$EVENT_HIDE$4 = `hide${$NlAe$var$EVENT_KEY$8}`;
const $NlAe$var$EVENT_HIDDEN$4 = `hidden${$NlAe$var$EVENT_KEY$8}`;
const $NlAe$var$EVENT_SHOW$4 = `show${$NlAe$var$EVENT_KEY$8}`;
const $NlAe$var$EVENT_SHOWN$4 = `shown${$NlAe$var$EVENT_KEY$8}`;
const $NlAe$var$EVENT_CLICK_DATA_API$3 = `click${$NlAe$var$EVENT_KEY$8}${$NlAe$var$DATA_API_KEY$4}`;
const $NlAe$var$EVENT_KEYDOWN_DATA_API = `keydown${$NlAe$var$EVENT_KEY$8}${$NlAe$var$DATA_API_KEY$4}`;
const $NlAe$var$EVENT_KEYUP_DATA_API = `keyup${$NlAe$var$EVENT_KEY$8}${$NlAe$var$DATA_API_KEY$4}`;
const $NlAe$var$CLASS_NAME_SHOW$6 = 'show';
const $NlAe$var$CLASS_NAME_DROPUP = 'dropup';
const $NlAe$var$CLASS_NAME_DROPEND = 'dropend';
const $NlAe$var$CLASS_NAME_DROPSTART = 'dropstart';
const $NlAe$var$CLASS_NAME_NAVBAR = 'navbar';
const $NlAe$var$SELECTOR_DATA_TOGGLE$3 = '[data-bs-toggle="dropdown"]';
const $NlAe$var$SELECTOR_MENU = '.dropdown-menu';
const $NlAe$var$SELECTOR_NAVBAR_NAV = '.navbar-nav';
const $NlAe$var$SELECTOR_VISIBLE_ITEMS = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)';
const $NlAe$var$PLACEMENT_TOP = $NlAe$var$isRTL() ? 'top-end' : 'top-start';
const $NlAe$var$PLACEMENT_TOPEND = $NlAe$var$isRTL() ? 'top-start' : 'top-end';
const $NlAe$var$PLACEMENT_BOTTOM = $NlAe$var$isRTL() ? 'bottom-end' : 'bottom-start';
const $NlAe$var$PLACEMENT_BOTTOMEND = $NlAe$var$isRTL() ? 'bottom-start' : 'bottom-end';
const $NlAe$var$PLACEMENT_RIGHT = $NlAe$var$isRTL() ? 'left-start' : 'right-start';
const $NlAe$var$PLACEMENT_LEFT = $NlAe$var$isRTL() ? 'right-start' : 'left-start';
const $NlAe$var$Default$8 = {
  offset: [0, 2],
  boundary: 'clippingParents',
  reference: 'toggle',
  display: 'dynamic',
  popperConfig: null,
  autoClose: true
};
const $NlAe$var$DefaultType$8 = {
  offset: '(array|string|function)',
  boundary: '(string|element)',
  reference: '(string|element|object)',
  display: 'string',
  popperConfig: '(null|object|function)',
  autoClose: '(boolean|string)'
};
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class $NlAe$export$Dropdown extends $NlAe$var$BaseComponent {
  constructor(element, config) {
    super(element);
    this._popper = null;
    this._config = this._getConfig(config);
    this._menu = this._getMenuElement();
    this._inNavbar = this._detectNavbar();
  } // Getters


  static get Default() {
    return $NlAe$var$Default$8;
  }

  static get DefaultType() {
    return $NlAe$var$DefaultType$8;
  }

  static get NAME() {
    return $NlAe$var$NAME$9;
  } // Public


  toggle() {
    return this._isShown() ? this.hide() : this.show();
  }

  show() {
    if ($NlAe$var$isDisabled(this._element) || this._isShown(this._menu)) {
      return;
    }

    const relatedTarget = {
      relatedTarget: this._element
    };
    const showEvent = $NlAe$var$EventHandler.trigger(this._element, $NlAe$var$EVENT_SHOW$4, relatedTarget);

    if (showEvent.defaultPrevented) {
      return;
    }

    const parent = $NlAe$export$Dropdown.getParentFromElement(this._element); // Totally disable Popper for Dropdowns in Navbar

    if (this._inNavbar) {
      $NlAe$var$Manipulator.setDataAttribute(this._menu, 'popper', 'none');
    } else {
      this._createPopper(parent);
    } // If this is a touch-enabled device we add extra
    // empty mouseover listeners to the body's immediate children;
    // only needed because of broken event delegation on iOS
    // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


    if ('ontouchstart' in document.documentElement && !parent.closest($NlAe$var$SELECTOR_NAVBAR_NAV)) {
      [].concat(...document.body.children).forEach(elem => $NlAe$var$EventHandler.on(elem, 'mouseover', $NlAe$var$noop));
    }

    this._element.focus();

    this._element.setAttribute('aria-expanded', true);

    this._menu.classList.add($NlAe$var$CLASS_NAME_SHOW$6);

    this._element.classList.add($NlAe$var$CLASS_NAME_SHOW$6);

    $NlAe$var$EventHandler.trigger(this._element, $NlAe$var$EVENT_SHOWN$4, relatedTarget);
  }

  hide() {
    if ($NlAe$var$isDisabled(this._element) || !this._isShown(this._menu)) {
      return;
    }

    const relatedTarget = {
      relatedTarget: this._element
    };

    this._completeHide(relatedTarget);
  }

  dispose() {
    if (this._popper) {
      this._popper.destroy();
    }

    super.dispose();
  }

  update() {
    this._inNavbar = this._detectNavbar();

    if (this._popper) {
      this._popper.update();
    }
  } // Private


  _completeHide(relatedTarget) {
    const hideEvent = $NlAe$var$EventHandler.trigger(this._element, $NlAe$var$EVENT_HIDE$4, relatedTarget);

    if (hideEvent.defaultPrevented) {
      return;
    } // If this is a touch-enabled device we remove the extra
    // empty mouseover listeners we added for iOS support


    if ('ontouchstart' in document.documentElement) {
      [].concat(...document.body.children).forEach(elem => $NlAe$var$EventHandler.off(elem, 'mouseover', $NlAe$var$noop));
    }

    if (this._popper) {
      this._popper.destroy();
    }

    this._menu.classList.remove($NlAe$var$CLASS_NAME_SHOW$6);

    this._element.classList.remove($NlAe$var$CLASS_NAME_SHOW$6);

    this._element.setAttribute('aria-expanded', 'false');

    $NlAe$var$Manipulator.removeDataAttribute(this._menu, 'popper');
    $NlAe$var$EventHandler.trigger(this._element, $NlAe$var$EVENT_HIDDEN$4, relatedTarget);
  }

  _getConfig(config) {
    config = { ...this.constructor.Default,
      ...$NlAe$var$Manipulator.getDataAttributes(this._element),
      ...config
    };
    $NlAe$var$typeCheckConfig($NlAe$var$NAME$9, config, this.constructor.DefaultType);

    if (typeof config.reference === 'object' && !$NlAe$var$isElement(config.reference) && typeof config.reference.getBoundingClientRect !== 'function') {
      // Popper virtual elements require a getBoundingClientRect method
      throw new TypeError(`${$NlAe$var$NAME$9.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
    }

    return config;
  }

  _createPopper(parent) {
    if (typeof $vePw$exports === 'undefined') {
      throw new TypeError('Bootstrap\'s dropdowns require Popper (https://popper.js.org)');
    }

    let referenceElement = this._element;

    if (this._config.reference === 'parent') {
      referenceElement = parent;
    } else if ($NlAe$var$isElement(this._config.reference)) {
      referenceElement = $NlAe$var$getElement(this._config.reference);
    } else if (typeof this._config.reference === 'object') {
      referenceElement = this._config.reference;
    }

    const popperConfig = this._getPopperConfig();

    const isDisplayStatic = popperConfig.modifiers.find(modifier => modifier.name === 'applyStyles' && modifier.enabled === false);
    this._popper = $cujj$export$createPopper(referenceElement, this._menu, popperConfig);

    if (isDisplayStatic) {
      $NlAe$var$Manipulator.setDataAttribute(this._menu, 'popper', 'static');
    }
  }

  _isShown(element = this._element) {
    return element.classList.contains($NlAe$var$CLASS_NAME_SHOW$6);
  }

  _getMenuElement() {
    return $NlAe$var$SelectorEngine.next(this._element, $NlAe$var$SELECTOR_MENU)[0];
  }

  _getPlacement() {
    const parentDropdown = this._element.parentNode;

    if (parentDropdown.classList.contains($NlAe$var$CLASS_NAME_DROPEND)) {
      return $NlAe$var$PLACEMENT_RIGHT;
    }

    if (parentDropdown.classList.contains($NlAe$var$CLASS_NAME_DROPSTART)) {
      return $NlAe$var$PLACEMENT_LEFT;
    } // We need to trim the value because custom properties can also include spaces


    const isEnd = getComputedStyle(this._menu).getPropertyValue('--bs-position').trim() === 'end';

    if (parentDropdown.classList.contains($NlAe$var$CLASS_NAME_DROPUP)) {
      return isEnd ? $NlAe$var$PLACEMENT_TOPEND : $NlAe$var$PLACEMENT_TOP;
    }

    return isEnd ? $NlAe$var$PLACEMENT_BOTTOMEND : $NlAe$var$PLACEMENT_BOTTOM;
  }

  _detectNavbar() {
    return this._element.closest(`.${$NlAe$var$CLASS_NAME_NAVBAR}`) !== null;
  }

  _getOffset() {
    const {
      offset
    } = this._config;

    if (typeof offset === 'string') {
      return offset.split(',').map(val => Number.parseInt(val, 10));
    }

    if (typeof offset === 'function') {
      return popperData => offset(popperData, this._element);
    }

    return offset;
  }

  _getPopperConfig() {
    const defaultBsPopperConfig = {
      placement: this._getPlacement(),
      modifiers: [{
        name: 'preventOverflow',
        options: {
          boundary: this._config.boundary
        }
      }, {
        name: 'offset',
        options: {
          offset: this._getOffset()
        }
      }]
    }; // Disable Popper if we have a static display

    if (this._config.display === 'static') {
      defaultBsPopperConfig.modifiers = [{
        name: 'applyStyles',
        enabled: false
      }];
    }

    return { ...defaultBsPopperConfig,
      ...(typeof this._config.popperConfig === 'function' ? this._config.popperConfig(defaultBsPopperConfig) : this._config.popperConfig)
    };
  }

  _selectMenuItem({
    key,
    target
  }) {
    const items = $NlAe$var$SelectorEngine.find($NlAe$var$SELECTOR_VISIBLE_ITEMS, this._menu).filter($NlAe$var$isVisible);

    if (!items.length) {
      return;
    } // if target isn't included in items (e.g. when expanding the dropdown)
    // allow cycling to get the last item in case key equals ARROW_UP_KEY


    $NlAe$var$getNextActiveElement(items, target, key === $NlAe$var$ARROW_DOWN_KEY, !items.includes(target)).focus();
  } // Static


  static jQueryInterface(config) {
    return this.each(function () {
      const data = $NlAe$export$Dropdown.getOrCreateInstance(this, config);

      if (typeof config !== 'string') {
        return;
      }

      if (typeof data[config] === 'undefined') {
        throw new TypeError(`No method named "${config}"`);
      }

      data[config]();
    });
  }

  static clearMenus(event) {
    if (event && (event.button === $NlAe$var$RIGHT_MOUSE_BUTTON || event.type === 'keyup' && event.key !== $NlAe$var$TAB_KEY$1)) {
      return;
    }

    const toggles = $NlAe$var$SelectorEngine.find($NlAe$var$SELECTOR_DATA_TOGGLE$3);

    for (let i = 0, len = toggles.length; i < len; i++) {
      const context = $NlAe$export$Dropdown.getInstance(toggles[i]);

      if (!context || context._config.autoClose === false) {
        continue;
      }

      if (!context._isShown()) {
        continue;
      }

      const relatedTarget = {
        relatedTarget: context._element
      };

      if (event) {
        const composedPath = event.composedPath();
        const isMenuTarget = composedPath.includes(context._menu);

        if (composedPath.includes(context._element) || context._config.autoClose === 'inside' && !isMenuTarget || context._config.autoClose === 'outside' && isMenuTarget) {
          continue;
        } // Tab navigation through the dropdown menu or events from contained inputs shouldn't close the menu


        if (context._menu.contains(event.target) && (event.type === 'keyup' && event.key === $NlAe$var$TAB_KEY$1 || /input|select|option|textarea|form/i.test(event.target.tagName))) {
          continue;
        }

        if (event.type === 'click') {
          relatedTarget.clickEvent = event;
        }
      }

      context._completeHide(relatedTarget);
    }
  }

  static getParentFromElement(element) {
    return $NlAe$var$getElementFromSelector(element) || element.parentNode;
  }

  static dataApiKeydownHandler(event) {
    // If not input/textarea:
    //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
    // If input/textarea:
    //  - If space key => not a dropdown command
    //  - If key is other than escape
    //    - If key is not up or down => not a dropdown command
    //    - If trigger inside the menu => not a dropdown command
    if (/input|textarea/i.test(event.target.tagName) ? event.key === $NlAe$var$SPACE_KEY || event.key !== $NlAe$var$ESCAPE_KEY$2 && (event.key !== $NlAe$var$ARROW_DOWN_KEY && event.key !== $NlAe$var$ARROW_UP_KEY || event.target.closest($NlAe$var$SELECTOR_MENU)) : !$NlAe$var$REGEXP_KEYDOWN.test(event.key)) {
      return;
    }

    const isActive = this.classList.contains($NlAe$var$CLASS_NAME_SHOW$6);

    if (!isActive && event.key === $NlAe$var$ESCAPE_KEY$2) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();

    if ($NlAe$var$isDisabled(this)) {
      return;
    }

    const getToggleButton = this.matches($NlAe$var$SELECTOR_DATA_TOGGLE$3) ? this : $NlAe$var$SelectorEngine.prev(this, $NlAe$var$SELECTOR_DATA_TOGGLE$3)[0];
    const instance = $NlAe$export$Dropdown.getOrCreateInstance(getToggleButton);

    if (event.key === $NlAe$var$ESCAPE_KEY$2) {
      instance.hide();
      return;
    }

    if (event.key === $NlAe$var$ARROW_UP_KEY || event.key === $NlAe$var$ARROW_DOWN_KEY) {
      if (!isActive) {
        instance.show();
      }

      instance._selectMenuItem(event);

      return;
    }

    if (!isActive || event.key === $NlAe$var$SPACE_KEY) {
      $NlAe$export$Dropdown.clearMenus();
    }
  }

}
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


$NlAe$var$EventHandler.on(document, $NlAe$var$EVENT_KEYDOWN_DATA_API, $NlAe$var$SELECTOR_DATA_TOGGLE$3, $NlAe$export$Dropdown.dataApiKeydownHandler);
$NlAe$var$EventHandler.on(document, $NlAe$var$EVENT_KEYDOWN_DATA_API, $NlAe$var$SELECTOR_MENU, $NlAe$export$Dropdown.dataApiKeydownHandler);
$NlAe$var$EventHandler.on(document, $NlAe$var$EVENT_CLICK_DATA_API$3, $NlAe$export$Dropdown.clearMenus);
$NlAe$var$EventHandler.on(document, $NlAe$var$EVENT_KEYUP_DATA_API, $NlAe$export$Dropdown.clearMenus);
$NlAe$var$EventHandler.on(document, $NlAe$var$EVENT_CLICK_DATA_API$3, $NlAe$var$SELECTOR_DATA_TOGGLE$3, function (event) {
  event.preventDefault();
  $NlAe$export$Dropdown.getOrCreateInstance(this).toggle();
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Dropdown to jQuery only if jQuery is present
 */

$NlAe$var$defineJQueryPlugin($NlAe$export$Dropdown);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): util/scrollBar.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

const $NlAe$var$SELECTOR_FIXED_CONTENT = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';
const $NlAe$var$SELECTOR_STICKY_CONTENT = '.sticky-top';

class $NlAe$var$ScrollBarHelper {
  constructor() {
    this._element = document.body;
  }

  getWidth() {
    // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
    const documentWidth = document.documentElement.clientWidth;
    return Math.abs(window.innerWidth - documentWidth);
  }

  hide() {
    const width = this.getWidth();

    this._disableOverFlow(); // give padding to element to balance the hidden scrollbar width


    this._setElementAttributes(this._element, 'paddingRight', calculatedValue => calculatedValue + width); // trick: We adjust positive paddingRight and negative marginRight to sticky-top elements to keep showing fullwidth


    this._setElementAttributes($NlAe$var$SELECTOR_FIXED_CONTENT, 'paddingRight', calculatedValue => calculatedValue + width);

    this._setElementAttributes($NlAe$var$SELECTOR_STICKY_CONTENT, 'marginRight', calculatedValue => calculatedValue - width);
  }

  _disableOverFlow() {
    this._saveInitialAttribute(this._element, 'overflow');

    this._element.style.overflow = 'hidden';
  }

  _setElementAttributes(selector, styleProp, callback) {
    const scrollbarWidth = this.getWidth();

    const manipulationCallBack = element => {
      if (element !== this._element && window.innerWidth > element.clientWidth + scrollbarWidth) {
        return;
      }

      this._saveInitialAttribute(element, styleProp);

      const calculatedValue = window.getComputedStyle(element)[styleProp];
      element.style[styleProp] = `${callback(Number.parseFloat(calculatedValue))}px`;
    };

    this._applyManipulationCallback(selector, manipulationCallBack);
  }

  reset() {
    this._resetElementAttributes(this._element, 'overflow');

    this._resetElementAttributes(this._element, 'paddingRight');

    this._resetElementAttributes($NlAe$var$SELECTOR_FIXED_CONTENT, 'paddingRight');

    this._resetElementAttributes($NlAe$var$SELECTOR_STICKY_CONTENT, 'marginRight');
  }

  _saveInitialAttribute(element, styleProp) {
    const actualValue = element.style[styleProp];

    if (actualValue) {
      $NlAe$var$Manipulator.setDataAttribute(element, styleProp, actualValue);
    }
  }

  _resetElementAttributes(selector, styleProp) {
    const manipulationCallBack = element => {
      const value = $NlAe$var$Manipulator.getDataAttribute(element, styleProp);

      if (typeof value === 'undefined') {
        element.style.removeProperty(styleProp);
      } else {
        $NlAe$var$Manipulator.removeDataAttribute(element, styleProp);
        element.style[styleProp] = value;
      }
    };

    this._applyManipulationCallback(selector, manipulationCallBack);
  }

  _applyManipulationCallback(selector, callBack) {
    if ($NlAe$var$isElement(selector)) {
      callBack(selector);
    } else {
      $NlAe$var$SelectorEngine.find(selector, this._element).forEach(callBack);
    }
  }

  isOverflowing() {
    return this.getWidth() > 0;
  }

}
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): util/backdrop.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */


const $NlAe$var$Default$7 = {
  className: 'modal-backdrop',
  isVisible: true,
  // if false, we use the backdrop helper without adding any element to the dom
  isAnimated: false,
  rootElement: 'body',
  // give the choice to place backdrop under different elements
  clickCallback: null
};
const $NlAe$var$DefaultType$7 = {
  className: 'string',
  isVisible: 'boolean',
  isAnimated: 'boolean',
  rootElement: '(element|string)',
  clickCallback: '(function|null)'
};
const $NlAe$var$NAME$8 = 'backdrop';
const $NlAe$var$CLASS_NAME_FADE$4 = 'fade';
const $NlAe$var$CLASS_NAME_SHOW$5 = 'show';
const $NlAe$var$EVENT_MOUSEDOWN = `mousedown.bs.${$NlAe$var$NAME$8}`;

class $NlAe$var$Backdrop {
  constructor(config) {
    this._config = this._getConfig(config);
    this._isAppended = false;
    this._element = null;
  }

  show(callback) {
    if (!this._config.isVisible) {
      $NlAe$var$execute(callback);
      return;
    }

    this._append();

    if (this._config.isAnimated) {
      $NlAe$var$reflow(this._getElement());
    }

    this._getElement().classList.add($NlAe$var$CLASS_NAME_SHOW$5);

    this._emulateAnimation(() => {
      $NlAe$var$execute(callback);
    });
  }

  hide(callback) {
    if (!this._config.isVisible) {
      $NlAe$var$execute(callback);
      return;
    }

    this._getElement().classList.remove($NlAe$var$CLASS_NAME_SHOW$5);

    this._emulateAnimation(() => {
      this.dispose();
      $NlAe$var$execute(callback);
    });
  } // Private


  _getElement() {
    if (!this._element) {
      const backdrop = document.createElement('div');
      backdrop.className = this._config.className;

      if (this._config.isAnimated) {
        backdrop.classList.add($NlAe$var$CLASS_NAME_FADE$4);
      }

      this._element = backdrop;
    }

    return this._element;
  }

  _getConfig(config) {
    config = { ...$NlAe$var$Default$7,
      ...(typeof config === 'object' ? config : {})
    }; // use getElement() with the default "body" to get a fresh Element on each instantiation

    config.rootElement = $NlAe$var$getElement(config.rootElement);
    $NlAe$var$typeCheckConfig($NlAe$var$NAME$8, config, $NlAe$var$DefaultType$7);
    return config;
  }

  _append() {
    if (this._isAppended) {
      return;
    }

    this._config.rootElement.append(this._getElement());

    $NlAe$var$EventHandler.on(this._getElement(), $NlAe$var$EVENT_MOUSEDOWN, () => {
      $NlAe$var$execute(this._config.clickCallback);
    });
    this._isAppended = true;
  }

  dispose() {
    if (!this._isAppended) {
      return;
    }

    $NlAe$var$EventHandler.off(this._element, $NlAe$var$EVENT_MOUSEDOWN);

    this._element.remove();

    this._isAppended = false;
  }

  _emulateAnimation(callback) {
    $NlAe$var$executeAfterTransition(callback, this._getElement(), this._config.isAnimated);
  }

}
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): util/focustrap.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */


const $NlAe$var$Default$6 = {
  trapElement: null,
  // The element to trap focus inside of
  autofocus: true
};
const $NlAe$var$DefaultType$6 = {
  trapElement: 'element',
  autofocus: 'boolean'
};
const $NlAe$var$NAME$7 = 'focustrap';
const $NlAe$var$DATA_KEY$7 = 'bs.focustrap';
const $NlAe$var$EVENT_KEY$7 = `.${$NlAe$var$DATA_KEY$7}`;
const $NlAe$var$EVENT_FOCUSIN$1 = `focusin${$NlAe$var$EVENT_KEY$7}`;
const $NlAe$var$EVENT_KEYDOWN_TAB = `keydown.tab${$NlAe$var$EVENT_KEY$7}`;
const $NlAe$var$TAB_KEY = 'Tab';
const $NlAe$var$TAB_NAV_FORWARD = 'forward';
const $NlAe$var$TAB_NAV_BACKWARD = 'backward';

class $NlAe$var$FocusTrap {
  constructor(config) {
    this._config = this._getConfig(config);
    this._isActive = false;
    this._lastTabNavDirection = null;
  }

  activate() {
    const {
      trapElement,
      autofocus
    } = this._config;

    if (this._isActive) {
      return;
    }

    if (autofocus) {
      trapElement.focus();
    }

    $NlAe$var$EventHandler.off(document, $NlAe$var$EVENT_KEY$7); // guard against infinite focus loop

    $NlAe$var$EventHandler.on(document, $NlAe$var$EVENT_FOCUSIN$1, event => this._handleFocusin(event));
    $NlAe$var$EventHandler.on(document, $NlAe$var$EVENT_KEYDOWN_TAB, event => this._handleKeydown(event));
    this._isActive = true;
  }

  deactivate() {
    if (!this._isActive) {
      return;
    }

    this._isActive = false;
    $NlAe$var$EventHandler.off(document, $NlAe$var$EVENT_KEY$7);
  } // Private


  _handleFocusin(event) {
    const {
      target
    } = event;
    const {
      trapElement
    } = this._config;

    if (target === document || target === trapElement || trapElement.contains(target)) {
      return;
    }

    const elements = $NlAe$var$SelectorEngine.focusableChildren(trapElement);

    if (elements.length === 0) {
      trapElement.focus();
    } else if (this._lastTabNavDirection === $NlAe$var$TAB_NAV_BACKWARD) {
      elements[elements.length - 1].focus();
    } else {
      elements[0].focus();
    }
  }

  _handleKeydown(event) {
    if (event.key !== $NlAe$var$TAB_KEY) {
      return;
    }

    this._lastTabNavDirection = event.shiftKey ? $NlAe$var$TAB_NAV_BACKWARD : $NlAe$var$TAB_NAV_FORWARD;
  }

  _getConfig(config) {
    config = { ...$NlAe$var$Default$6,
      ...(typeof config === 'object' ? config : {})
    };
    $NlAe$var$typeCheckConfig($NlAe$var$NAME$7, config, $NlAe$var$DefaultType$6);
    return config;
  }

}
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): modal.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */


const $NlAe$var$NAME$6 = 'modal';
const $NlAe$var$DATA_KEY$6 = 'bs.modal';
const $NlAe$var$EVENT_KEY$6 = `.${$NlAe$var$DATA_KEY$6}`;
const $NlAe$var$DATA_API_KEY$3 = '.data-api';
const $NlAe$var$ESCAPE_KEY$1 = 'Escape';
const $NlAe$var$Default$5 = {
  backdrop: true,
  keyboard: true,
  focus: true
};
const $NlAe$var$DefaultType$5 = {
  backdrop: '(boolean|string)',
  keyboard: 'boolean',
  focus: 'boolean'
};
const $NlAe$var$EVENT_HIDE$3 = `hide${$NlAe$var$EVENT_KEY$6}`;
const $NlAe$var$EVENT_HIDE_PREVENTED = `hidePrevented${$NlAe$var$EVENT_KEY$6}`;
const $NlAe$var$EVENT_HIDDEN$3 = `hidden${$NlAe$var$EVENT_KEY$6}`;
const $NlAe$var$EVENT_SHOW$3 = `show${$NlAe$var$EVENT_KEY$6}`;
const $NlAe$var$EVENT_SHOWN$3 = `shown${$NlAe$var$EVENT_KEY$6}`;
const $NlAe$var$EVENT_RESIZE = `resize${$NlAe$var$EVENT_KEY$6}`;
const $NlAe$var$EVENT_CLICK_DISMISS = `click.dismiss${$NlAe$var$EVENT_KEY$6}`;
const $NlAe$var$EVENT_KEYDOWN_DISMISS$1 = `keydown.dismiss${$NlAe$var$EVENT_KEY$6}`;
const $NlAe$var$EVENT_MOUSEUP_DISMISS = `mouseup.dismiss${$NlAe$var$EVENT_KEY$6}`;
const $NlAe$var$EVENT_MOUSEDOWN_DISMISS = `mousedown.dismiss${$NlAe$var$EVENT_KEY$6}`;
const $NlAe$var$EVENT_CLICK_DATA_API$2 = `click${$NlAe$var$EVENT_KEY$6}${$NlAe$var$DATA_API_KEY$3}`;
const $NlAe$var$CLASS_NAME_OPEN = 'modal-open';
const $NlAe$var$CLASS_NAME_FADE$3 = 'fade';
const $NlAe$var$CLASS_NAME_SHOW$4 = 'show';
const $NlAe$var$CLASS_NAME_STATIC = 'modal-static';
const $NlAe$var$OPEN_SELECTOR$1 = '.modal.show';
const $NlAe$var$SELECTOR_DIALOG = '.modal-dialog';
const $NlAe$var$SELECTOR_MODAL_BODY = '.modal-body';
const $NlAe$var$SELECTOR_DATA_TOGGLE$2 = '[data-bs-toggle="modal"]';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class $NlAe$export$Modal extends $NlAe$var$BaseComponent {
  constructor(element, config) {
    super(element);
    this._config = this._getConfig(config);
    this._dialog = $NlAe$var$SelectorEngine.findOne($NlAe$var$SELECTOR_DIALOG, this._element);
    this._backdrop = this._initializeBackDrop();
    this._focustrap = this._initializeFocusTrap();
    this._isShown = false;
    this._ignoreBackdropClick = false;
    this._isTransitioning = false;
    this._scrollBar = new $NlAe$var$ScrollBarHelper();
  } // Getters


  static get Default() {
    return $NlAe$var$Default$5;
  }

  static get NAME() {
    return $NlAe$var$NAME$6;
  } // Public


  toggle(relatedTarget) {
    return this._isShown ? this.hide() : this.show(relatedTarget);
  }

  show(relatedTarget) {
    if (this._isShown || this._isTransitioning) {
      return;
    }

    const showEvent = $NlAe$var$EventHandler.trigger(this._element, $NlAe$var$EVENT_SHOW$3, {
      relatedTarget
    });

    if (showEvent.defaultPrevented) {
      return;
    }

    this._isShown = true;

    if (this._isAnimated()) {
      this._isTransitioning = true;
    }

    this._scrollBar.hide();

    document.body.classList.add($NlAe$var$CLASS_NAME_OPEN);

    this._adjustDialog();

    this._setEscapeEvent();

    this._setResizeEvent();

    $NlAe$var$EventHandler.on(this._dialog, $NlAe$var$EVENT_MOUSEDOWN_DISMISS, () => {
      $NlAe$var$EventHandler.one(this._element, $NlAe$var$EVENT_MOUSEUP_DISMISS, event => {
        if (event.target === this._element) {
          this._ignoreBackdropClick = true;
        }
      });
    });

    this._showBackdrop(() => this._showElement(relatedTarget));
  }

  hide() {
    if (!this._isShown || this._isTransitioning) {
      return;
    }

    const hideEvent = $NlAe$var$EventHandler.trigger(this._element, $NlAe$var$EVENT_HIDE$3);

    if (hideEvent.defaultPrevented) {
      return;
    }

    this._isShown = false;

    const isAnimated = this._isAnimated();

    if (isAnimated) {
      this._isTransitioning = true;
    }

    this._setEscapeEvent();

    this._setResizeEvent();

    this._focustrap.deactivate();

    this._element.classList.remove($NlAe$var$CLASS_NAME_SHOW$4);

    $NlAe$var$EventHandler.off(this._element, $NlAe$var$EVENT_CLICK_DISMISS);
    $NlAe$var$EventHandler.off(this._dialog, $NlAe$var$EVENT_MOUSEDOWN_DISMISS);

    this._queueCallback(() => this._hideModal(), this._element, isAnimated);
  }

  dispose() {
    [window, this._dialog].forEach(htmlElement => $NlAe$var$EventHandler.off(htmlElement, $NlAe$var$EVENT_KEY$6));

    this._backdrop.dispose();

    this._focustrap.deactivate();

    super.dispose();
  }

  handleUpdate() {
    this._adjustDialog();
  } // Private


  _initializeBackDrop() {
    return new $NlAe$var$Backdrop({
      isVisible: Boolean(this._config.backdrop),
      // 'static' option will be translated to true, and booleans will keep their value
      isAnimated: this._isAnimated()
    });
  }

  _initializeFocusTrap() {
    return new $NlAe$var$FocusTrap({
      trapElement: this._element
    });
  }

  _getConfig(config) {
    config = { ...$NlAe$var$Default$5,
      ...$NlAe$var$Manipulator.getDataAttributes(this._element),
      ...(typeof config === 'object' ? config : {})
    };
    $NlAe$var$typeCheckConfig($NlAe$var$NAME$6, config, $NlAe$var$DefaultType$5);
    return config;
  }

  _showElement(relatedTarget) {
    const isAnimated = this._isAnimated();

    const modalBody = $NlAe$var$SelectorEngine.findOne($NlAe$var$SELECTOR_MODAL_BODY, this._dialog);

    if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
      // Don't move modal's DOM position
      document.body.append(this._element);
    }

    this._element.style.display = 'block';

    this._element.removeAttribute('aria-hidden');

    this._element.setAttribute('aria-modal', true);

    this._element.setAttribute('role', 'dialog');

    this._element.scrollTop = 0;

    if (modalBody) {
      modalBody.scrollTop = 0;
    }

    if (isAnimated) {
      $NlAe$var$reflow(this._element);
    }

    this._element.classList.add($NlAe$var$CLASS_NAME_SHOW$4);

    const transitionComplete = () => {
      if (this._config.focus) {
        this._focustrap.activate();
      }

      this._isTransitioning = false;
      $NlAe$var$EventHandler.trigger(this._element, $NlAe$var$EVENT_SHOWN$3, {
        relatedTarget
      });
    };

    this._queueCallback(transitionComplete, this._dialog, isAnimated);
  }

  _setEscapeEvent() {
    if (this._isShown) {
      $NlAe$var$EventHandler.on(this._element, $NlAe$var$EVENT_KEYDOWN_DISMISS$1, event => {
        if (this._config.keyboard && event.key === $NlAe$var$ESCAPE_KEY$1) {
          event.preventDefault();
          this.hide();
        } else if (!this._config.keyboard && event.key === $NlAe$var$ESCAPE_KEY$1) {
          this._triggerBackdropTransition();
        }
      });
    } else {
      $NlAe$var$EventHandler.off(this._element, $NlAe$var$EVENT_KEYDOWN_DISMISS$1);
    }
  }

  _setResizeEvent() {
    if (this._isShown) {
      $NlAe$var$EventHandler.on(window, $NlAe$var$EVENT_RESIZE, () => this._adjustDialog());
    } else {
      $NlAe$var$EventHandler.off(window, $NlAe$var$EVENT_RESIZE);
    }
  }

  _hideModal() {
    this._element.style.display = 'none';

    this._element.setAttribute('aria-hidden', true);

    this._element.removeAttribute('aria-modal');

    this._element.removeAttribute('role');

    this._isTransitioning = false;

    this._backdrop.hide(() => {
      document.body.classList.remove($NlAe$var$CLASS_NAME_OPEN);

      this._resetAdjustments();

      this._scrollBar.reset();

      $NlAe$var$EventHandler.trigger(this._element, $NlAe$var$EVENT_HIDDEN$3);
    });
  }

  _showBackdrop(callback) {
    $NlAe$var$EventHandler.on(this._element, $NlAe$var$EVENT_CLICK_DISMISS, event => {
      if (this._ignoreBackdropClick) {
        this._ignoreBackdropClick = false;
        return;
      }

      if (event.target !== event.currentTarget) {
        return;
      }

      if (this._config.backdrop === true) {
        this.hide();
      } else if (this._config.backdrop === 'static') {
        this._triggerBackdropTransition();
      }
    });

    this._backdrop.show(callback);
  }

  _isAnimated() {
    return this._element.classList.contains($NlAe$var$CLASS_NAME_FADE$3);
  }

  _triggerBackdropTransition() {
    const hideEvent = $NlAe$var$EventHandler.trigger(this._element, $NlAe$var$EVENT_HIDE_PREVENTED);

    if (hideEvent.defaultPrevented) {
      return;
    }

    const {
      classList,
      scrollHeight,
      style
    } = this._element;
    const isModalOverflowing = scrollHeight > document.documentElement.clientHeight; // return if the following background transition hasn't yet completed

    if (!isModalOverflowing && style.overflowY === 'hidden' || classList.contains($NlAe$var$CLASS_NAME_STATIC)) {
      return;
    }

    if (!isModalOverflowing) {
      style.overflowY = 'hidden';
    }

    classList.add($NlAe$var$CLASS_NAME_STATIC);

    this._queueCallback(() => {
      classList.remove($NlAe$var$CLASS_NAME_STATIC);

      if (!isModalOverflowing) {
        this._queueCallback(() => {
          style.overflowY = '';
        }, this._dialog);
      }
    }, this._dialog);

    this._element.focus();
  } // ----------------------------------------------------------------------
  // the following methods are used to handle overflowing modals
  // ----------------------------------------------------------------------


  _adjustDialog() {
    const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

    const scrollbarWidth = this._scrollBar.getWidth();

    const isBodyOverflowing = scrollbarWidth > 0;

    if (!isBodyOverflowing && isModalOverflowing && !$NlAe$var$isRTL() || isBodyOverflowing && !isModalOverflowing && $NlAe$var$isRTL()) {
      this._element.style.paddingLeft = `${scrollbarWidth}px`;
    }

    if (isBodyOverflowing && !isModalOverflowing && !$NlAe$var$isRTL() || !isBodyOverflowing && isModalOverflowing && $NlAe$var$isRTL()) {
      this._element.style.paddingRight = `${scrollbarWidth}px`;
    }
  }

  _resetAdjustments() {
    this._element.style.paddingLeft = '';
    this._element.style.paddingRight = '';
  } // Static


  static jQueryInterface(config, relatedTarget) {
    return this.each(function () {
      const data = $NlAe$export$Modal.getOrCreateInstance(this, config);

      if (typeof config !== 'string') {
        return;
      }

      if (typeof data[config] === 'undefined') {
        throw new TypeError(`No method named "${config}"`);
      }

      data[config](relatedTarget);
    });
  }

}
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


$NlAe$var$EventHandler.on(document, $NlAe$var$EVENT_CLICK_DATA_API$2, $NlAe$var$SELECTOR_DATA_TOGGLE$2, function (event) {
  const target = $NlAe$var$getElementFromSelector(this);

  if (['A', 'AREA'].includes(this.tagName)) {
    event.preventDefault();
  }

  $NlAe$var$EventHandler.one(target, $NlAe$var$EVENT_SHOW$3, showEvent => {
    if (showEvent.defaultPrevented) {
      // only register focus restorer if modal will actually get shown
      return;
    }

    $NlAe$var$EventHandler.one(target, $NlAe$var$EVENT_HIDDEN$3, () => {
      if ($NlAe$var$isVisible(this)) {
        this.focus();
      }
    });
  }); // avoid conflict when clicking moddal toggler while another one is open

  const allReadyOpen = $NlAe$var$SelectorEngine.findOne($NlAe$var$OPEN_SELECTOR$1);

  if (allReadyOpen) {
    $NlAe$export$Modal.getInstance(allReadyOpen).hide();
  }

  const data = $NlAe$export$Modal.getOrCreateInstance(target);
  data.toggle(this);
});
$NlAe$var$enableDismissTrigger($NlAe$export$Modal);
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Modal to jQuery only if jQuery is present
 */

$NlAe$var$defineJQueryPlugin($NlAe$export$Modal);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): offcanvas.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const $NlAe$var$NAME$5 = 'offcanvas';
const $NlAe$var$DATA_KEY$5 = 'bs.offcanvas';
const $NlAe$var$EVENT_KEY$5 = `.${$NlAe$var$DATA_KEY$5}`;
const $NlAe$var$DATA_API_KEY$2 = '.data-api';
const $NlAe$var$EVENT_LOAD_DATA_API$1 = `load${$NlAe$var$EVENT_KEY$5}${$NlAe$var$DATA_API_KEY$2}`;
const $NlAe$var$ESCAPE_KEY = 'Escape';
const $NlAe$var$Default$4 = {
  backdrop: true,
  keyboard: true,
  scroll: false
};
const $NlAe$var$DefaultType$4 = {
  backdrop: 'boolean',
  keyboard: 'boolean',
  scroll: 'boolean'
};
const $NlAe$var$CLASS_NAME_SHOW$3 = 'show';
const $NlAe$var$CLASS_NAME_BACKDROP = 'offcanvas-backdrop';
const $NlAe$var$OPEN_SELECTOR = '.offcanvas.show';
const $NlAe$var$EVENT_SHOW$2 = `show${$NlAe$var$EVENT_KEY$5}`;
const $NlAe$var$EVENT_SHOWN$2 = `shown${$NlAe$var$EVENT_KEY$5}`;
const $NlAe$var$EVENT_HIDE$2 = `hide${$NlAe$var$EVENT_KEY$5}`;
const $NlAe$var$EVENT_HIDDEN$2 = `hidden${$NlAe$var$EVENT_KEY$5}`;
const $NlAe$var$EVENT_CLICK_DATA_API$1 = `click${$NlAe$var$EVENT_KEY$5}${$NlAe$var$DATA_API_KEY$2}`;
const $NlAe$var$EVENT_KEYDOWN_DISMISS = `keydown.dismiss${$NlAe$var$EVENT_KEY$5}`;
const $NlAe$var$SELECTOR_DATA_TOGGLE$1 = '[data-bs-toggle="offcanvas"]';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class $NlAe$export$Offcanvas extends $NlAe$var$BaseComponent {
  constructor(element, config) {
    super(element);
    this._config = this._getConfig(config);
    this._isShown = false;
    this._backdrop = this._initializeBackDrop();
    this._focustrap = this._initializeFocusTrap();

    this._addEventListeners();
  } // Getters


  static get NAME() {
    return $NlAe$var$NAME$5;
  }

  static get Default() {
    return $NlAe$var$Default$4;
  } // Public


  toggle(relatedTarget) {
    return this._isShown ? this.hide() : this.show(relatedTarget);
  }

  show(relatedTarget) {
    if (this._isShown) {
      return;
    }

    const showEvent = $NlAe$var$EventHandler.trigger(this._element, $NlAe$var$EVENT_SHOW$2, {
      relatedTarget
    });

    if (showEvent.defaultPrevented) {
      return;
    }

    this._isShown = true;
    this._element.style.visibility = 'visible';

    this._backdrop.show();

    if (!this._config.scroll) {
      new $NlAe$var$ScrollBarHelper().hide();
    }

    this._element.removeAttribute('aria-hidden');

    this._element.setAttribute('aria-modal', true);

    this._element.setAttribute('role', 'dialog');

    this._element.classList.add($NlAe$var$CLASS_NAME_SHOW$3);

    const completeCallBack = () => {
      if (!this._config.scroll) {
        this._focustrap.activate();
      }

      $NlAe$var$EventHandler.trigger(this._element, $NlAe$var$EVENT_SHOWN$2, {
        relatedTarget
      });
    };

    this._queueCallback(completeCallBack, this._element, true);
  }

  hide() {
    if (!this._isShown) {
      return;
    }

    const hideEvent = $NlAe$var$EventHandler.trigger(this._element, $NlAe$var$EVENT_HIDE$2);

    if (hideEvent.defaultPrevented) {
      return;
    }

    this._focustrap.deactivate();

    this._element.blur();

    this._isShown = false;

    this._element.classList.remove($NlAe$var$CLASS_NAME_SHOW$3);

    this._backdrop.hide();

    const completeCallback = () => {
      this._element.setAttribute('aria-hidden', true);

      this._element.removeAttribute('aria-modal');

      this._element.removeAttribute('role');

      this._element.style.visibility = 'hidden';

      if (!this._config.scroll) {
        new $NlAe$var$ScrollBarHelper().reset();
      }

      $NlAe$var$EventHandler.trigger(this._element, $NlAe$var$EVENT_HIDDEN$2);
    };

    this._queueCallback(completeCallback, this._element, true);
  }

  dispose() {
    this._backdrop.dispose();

    this._focustrap.deactivate();

    super.dispose();
  } // Private


  _getConfig(config) {
    config = { ...$NlAe$var$Default$4,
      ...$NlAe$var$Manipulator.getDataAttributes(this._element),
      ...(typeof config === 'object' ? config : {})
    };
    $NlAe$var$typeCheckConfig($NlAe$var$NAME$5, config, $NlAe$var$DefaultType$4);
    return config;
  }

  _initializeBackDrop() {
    return new $NlAe$var$Backdrop({
      className: $NlAe$var$CLASS_NAME_BACKDROP,
      isVisible: this._config.backdrop,
      isAnimated: true,
      rootElement: this._element.parentNode,
      clickCallback: () => this.hide()
    });
  }

  _initializeFocusTrap() {
    return new $NlAe$var$FocusTrap({
      trapElement: this._element
    });
  }

  _addEventListeners() {
    $NlAe$var$EventHandler.on(this._element, $NlAe$var$EVENT_KEYDOWN_DISMISS, event => {
      if (this._config.keyboard && event.key === $NlAe$var$ESCAPE_KEY) {
        this.hide();
      }
    });
  } // Static


  static jQueryInterface(config) {
    return this.each(function () {
      const data = $NlAe$export$Offcanvas.getOrCreateInstance(this, config);

      if (typeof config !== 'string') {
        return;
      }

      if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
        throw new TypeError(`No method named "${config}"`);
      }

      data[config](this);
    });
  }

}
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


$NlAe$var$EventHandler.on(document, $NlAe$var$EVENT_CLICK_DATA_API$1, $NlAe$var$SELECTOR_DATA_TOGGLE$1, function (event) {
  const target = $NlAe$var$getElementFromSelector(this);

  if (['A', 'AREA'].includes(this.tagName)) {
    event.preventDefault();
  }

  if ($NlAe$var$isDisabled(this)) {
    return;
  }

  $NlAe$var$EventHandler.one(target, $NlAe$var$EVENT_HIDDEN$2, () => {
    // focus on trigger when it is closed
    if ($NlAe$var$isVisible(this)) {
      this.focus();
    }
  }); // avoid conflict when clicking a toggler of an offcanvas, while another is open

  const allReadyOpen = $NlAe$var$SelectorEngine.findOne($NlAe$var$OPEN_SELECTOR);

  if (allReadyOpen && allReadyOpen !== target) {
    $NlAe$export$Offcanvas.getInstance(allReadyOpen).hide();
  }

  const data = $NlAe$export$Offcanvas.getOrCreateInstance(target);
  data.toggle(this);
});
$NlAe$var$EventHandler.on(window, $NlAe$var$EVENT_LOAD_DATA_API$1, () => $NlAe$var$SelectorEngine.find($NlAe$var$OPEN_SELECTOR).forEach(el => $NlAe$export$Offcanvas.getOrCreateInstance(el).show()));
$NlAe$var$enableDismissTrigger($NlAe$export$Offcanvas);
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */

$NlAe$var$defineJQueryPlugin($NlAe$export$Offcanvas);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): util/sanitizer.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

const $NlAe$var$uriAttributes = new Set(['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href']);
const $NlAe$var$ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
/**
 * A pattern that recognizes a commonly useful subset of URLs that are safe.
 *
 * Shoutout to Angular https://github.com/angular/angular/blob/12.2.x/packages/core/src/sanitization/url_sanitizer.ts
 */

const $NlAe$var$SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i;
/**
 * A pattern that matches safe data URLs. Only matches image, video and audio types.
 *
 * Shoutout to Angular https://github.com/angular/angular/blob/12.2.x/packages/core/src/sanitization/url_sanitizer.ts
 */

const $NlAe$var$DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

const $NlAe$var$allowedAttribute = (attribute, allowedAttributeList) => {
  const attributeName = attribute.nodeName.toLowerCase();

  if (allowedAttributeList.includes(attributeName)) {
    if ($NlAe$var$uriAttributes.has(attributeName)) {
      return Boolean($NlAe$var$SAFE_URL_PATTERN.test(attribute.nodeValue) || $NlAe$var$DATA_URL_PATTERN.test(attribute.nodeValue));
    }

    return true;
  }

  const regExp = allowedAttributeList.filter(attributeRegex => attributeRegex instanceof RegExp); // Check if a regular expression validates the attribute.

  for (let i = 0, len = regExp.length; i < len; i++) {
    if (regExp[i].test(attributeName)) {
      return true;
    }
  }

  return false;
};

const $NlAe$var$DefaultAllowlist = {
  // Global attributes allowed on any supplied element below.
  '*': ['class', 'dir', 'id', 'lang', 'role', $NlAe$var$ARIA_ATTRIBUTE_PATTERN],
  a: ['target', 'href', 'title', 'rel'],
  area: [],
  b: [],
  br: [],
  col: [],
  code: [],
  div: [],
  em: [],
  hr: [],
  h1: [],
  h2: [],
  h3: [],
  h4: [],
  h5: [],
  h6: [],
  i: [],
  img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
  li: [],
  ol: [],
  p: [],
  pre: [],
  s: [],
  small: [],
  span: [],
  sub: [],
  sup: [],
  strong: [],
  u: [],
  ul: []
};

function $NlAe$var$sanitizeHtml(unsafeHtml, allowList, sanitizeFn) {
  if (!unsafeHtml.length) {
    return unsafeHtml;
  }

  if (sanitizeFn && typeof sanitizeFn === 'function') {
    return sanitizeFn(unsafeHtml);
  }

  const domParser = new window.DOMParser();
  const createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
  const elements = [].concat(...createdDocument.body.querySelectorAll('*'));

  for (let i = 0, len = elements.length; i < len; i++) {
    const element = elements[i];
    const elementName = element.nodeName.toLowerCase();

    if (!Object.keys(allowList).includes(elementName)) {
      element.remove();
      continue;
    }

    const attributeList = [].concat(...element.attributes);
    const allowedAttributes = [].concat(allowList['*'] || [], allowList[elementName] || []);
    attributeList.forEach(attribute => {
      if (!$NlAe$var$allowedAttribute(attribute, allowedAttributes)) {
        element.removeAttribute(attribute.nodeName);
      }
    });
  }

  return createdDocument.body.innerHTML;
}
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): tooltip.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */


const $NlAe$var$NAME$4 = 'tooltip';
const $NlAe$var$DATA_KEY$4 = 'bs.tooltip';
const $NlAe$var$EVENT_KEY$4 = `.${$NlAe$var$DATA_KEY$4}`;
const $NlAe$var$CLASS_PREFIX$1 = 'bs-tooltip';
const $NlAe$var$DISALLOWED_ATTRIBUTES = new Set(['sanitize', 'allowList', 'sanitizeFn']);
const $NlAe$var$DefaultType$3 = {
  animation: 'boolean',
  template: 'string',
  title: '(string|element|function)',
  trigger: 'string',
  delay: '(number|object)',
  html: 'boolean',
  selector: '(string|boolean)',
  placement: '(string|function)',
  offset: '(array|string|function)',
  container: '(string|element|boolean)',
  fallbackPlacements: 'array',
  boundary: '(string|element)',
  customClass: '(string|function)',
  sanitize: 'boolean',
  sanitizeFn: '(null|function)',
  allowList: 'object',
  popperConfig: '(null|object|function)'
};
const $NlAe$var$AttachmentMap = {
  AUTO: 'auto',
  TOP: 'top',
  RIGHT: $NlAe$var$isRTL() ? 'left' : 'right',
  BOTTOM: 'bottom',
  LEFT: $NlAe$var$isRTL() ? 'right' : 'left'
};
const $NlAe$var$Default$3 = {
  animation: true,
  template: '<div class="tooltip" role="tooltip">' + '<div class="tooltip-arrow"></div>' + '<div class="tooltip-inner"></div>' + '</div>',
  trigger: 'hover focus',
  title: '',
  delay: 0,
  html: false,
  selector: false,
  placement: 'top',
  offset: [0, 0],
  container: false,
  fallbackPlacements: ['top', 'right', 'bottom', 'left'],
  boundary: 'clippingParents',
  customClass: '',
  sanitize: true,
  sanitizeFn: null,
  allowList: $NlAe$var$DefaultAllowlist,
  popperConfig: null
};
const $NlAe$var$Event$2 = {
  HIDE: `hide${$NlAe$var$EVENT_KEY$4}`,
  HIDDEN: `hidden${$NlAe$var$EVENT_KEY$4}`,
  SHOW: `show${$NlAe$var$EVENT_KEY$4}`,
  SHOWN: `shown${$NlAe$var$EVENT_KEY$4}`,
  INSERTED: `inserted${$NlAe$var$EVENT_KEY$4}`,
  CLICK: `click${$NlAe$var$EVENT_KEY$4}`,
  FOCUSIN: `focusin${$NlAe$var$EVENT_KEY$4}`,
  FOCUSOUT: `focusout${$NlAe$var$EVENT_KEY$4}`,
  MOUSEENTER: `mouseenter${$NlAe$var$EVENT_KEY$4}`,
  MOUSELEAVE: `mouseleave${$NlAe$var$EVENT_KEY$4}`
};
const $NlAe$var$CLASS_NAME_FADE$2 = 'fade';
const $NlAe$var$CLASS_NAME_MODAL = 'modal';
const $NlAe$var$CLASS_NAME_SHOW$2 = 'show';
const $NlAe$var$HOVER_STATE_SHOW = 'show';
const $NlAe$var$HOVER_STATE_OUT = 'out';
const $NlAe$var$SELECTOR_TOOLTIP_INNER = '.tooltip-inner';
const $NlAe$var$SELECTOR_MODAL = `.${$NlAe$var$CLASS_NAME_MODAL}`;
const $NlAe$var$EVENT_MODAL_HIDE = 'hide.bs.modal';
const $NlAe$var$TRIGGER_HOVER = 'hover';
const $NlAe$var$TRIGGER_FOCUS = 'focus';
const $NlAe$var$TRIGGER_MANUAL = 'manual';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class $NlAe$export$Tooltip extends $NlAe$var$BaseComponent {
  constructor(element, config) {
    if (typeof $vePw$exports === 'undefined') {
      throw new TypeError('Bootstrap\'s tooltips require Popper (https://popper.js.org)');
    }

    super(element); // private

    this._isEnabled = true;
    this._timeout = 0;
    this._hoverState = '';
    this._activeTrigger = {};
    this._popper = null; // Protected

    this._config = this._getConfig(config);
    this.tip = null;

    this._setListeners();
  } // Getters


  static get Default() {
    return $NlAe$var$Default$3;
  }

  static get NAME() {
    return $NlAe$var$NAME$4;
  }

  static get Event() {
    return $NlAe$var$Event$2;
  }

  static get DefaultType() {
    return $NlAe$var$DefaultType$3;
  } // Public


  enable() {
    this._isEnabled = true;
  }

  disable() {
    this._isEnabled = false;
  }

  toggleEnabled() {
    this._isEnabled = !this._isEnabled;
  }

  toggle(event) {
    if (!this._isEnabled) {
      return;
    }

    if (event) {
      const context = this._initializeOnDelegatedTarget(event);

      context._activeTrigger.click = !context._activeTrigger.click;

      if (context._isWithActiveTrigger()) {
        context._enter(null, context);
      } else {
        context._leave(null, context);
      }
    } else {
      if (this.getTipElement().classList.contains($NlAe$var$CLASS_NAME_SHOW$2)) {
        this._leave(null, this);

        return;
      }

      this._enter(null, this);
    }
  }

  dispose() {
    clearTimeout(this._timeout);
    $NlAe$var$EventHandler.off(this._element.closest($NlAe$var$SELECTOR_MODAL), $NlAe$var$EVENT_MODAL_HIDE, this._hideModalHandler);

    if (this.tip) {
      this.tip.remove();
    }

    this._disposePopper();

    super.dispose();
  }

  show() {
    if (this._element.style.display === 'none') {
      throw new Error('Please use show on visible elements');
    }

    if (!(this.isWithContent() && this._isEnabled)) {
      return;
    }

    const showEvent = $NlAe$var$EventHandler.trigger(this._element, this.constructor.Event.SHOW);
    const shadowRoot = $NlAe$var$findShadowRoot(this._element);
    const isInTheDom = shadowRoot === null ? this._element.ownerDocument.documentElement.contains(this._element) : shadowRoot.contains(this._element);

    if (showEvent.defaultPrevented || !isInTheDom) {
      return;
    } // A trick to recreate a tooltip in case a new title is given by using the NOT documented `data-bs-original-title`
    // This will be removed later in favor of a `setContent` method


    if (this.constructor.NAME === 'tooltip' && this.tip && this.getTitle() !== this.tip.querySelector($NlAe$var$SELECTOR_TOOLTIP_INNER).innerHTML) {
      this._disposePopper();

      this.tip.remove();
      this.tip = null;
    }

    const tip = this.getTipElement();
    const tipId = $NlAe$var$getUID(this.constructor.NAME);
    tip.setAttribute('id', tipId);

    this._element.setAttribute('aria-describedby', tipId);

    if (this._config.animation) {
      tip.classList.add($NlAe$var$CLASS_NAME_FADE$2);
    }

    const placement = typeof this._config.placement === 'function' ? this._config.placement.call(this, tip, this._element) : this._config.placement;

    const attachment = this._getAttachment(placement);

    this._addAttachmentClass(attachment);

    const {
      container
    } = this._config;
    $NlAe$var$Data.set(tip, this.constructor.DATA_KEY, this);

    if (!this._element.ownerDocument.documentElement.contains(this.tip)) {
      container.append(tip);
      $NlAe$var$EventHandler.trigger(this._element, this.constructor.Event.INSERTED);
    }

    if (this._popper) {
      this._popper.update();
    } else {
      this._popper = $cujj$export$createPopper(this._element, tip, this._getPopperConfig(attachment));
    }

    tip.classList.add($NlAe$var$CLASS_NAME_SHOW$2);

    const customClass = this._resolvePossibleFunction(this._config.customClass);

    if (customClass) {
      tip.classList.add(...customClass.split(' '));
    } // If this is a touch-enabled device we add extra
    // empty mouseover listeners to the body's immediate children;
    // only needed because of broken event delegation on iOS
    // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


    if ('ontouchstart' in document.documentElement) {
      [].concat(...document.body.children).forEach(element => {
        $NlAe$var$EventHandler.on(element, 'mouseover', $NlAe$var$noop);
      });
    }

    const complete = () => {
      const prevHoverState = this._hoverState;
      this._hoverState = null;
      $NlAe$var$EventHandler.trigger(this._element, this.constructor.Event.SHOWN);

      if (prevHoverState === $NlAe$var$HOVER_STATE_OUT) {
        this._leave(null, this);
      }
    };

    const isAnimated = this.tip.classList.contains($NlAe$var$CLASS_NAME_FADE$2);

    this._queueCallback(complete, this.tip, isAnimated);
  }

  hide() {
    if (!this._popper) {
      return;
    }

    const tip = this.getTipElement();

    const complete = () => {
      if (this._isWithActiveTrigger()) {
        return;
      }

      if (this._hoverState !== $NlAe$var$HOVER_STATE_SHOW) {
        tip.remove();
      }

      this._cleanTipClass();

      this._element.removeAttribute('aria-describedby');

      $NlAe$var$EventHandler.trigger(this._element, this.constructor.Event.HIDDEN);

      this._disposePopper();
    };

    const hideEvent = $NlAe$var$EventHandler.trigger(this._element, this.constructor.Event.HIDE);

    if (hideEvent.defaultPrevented) {
      return;
    }

    tip.classList.remove($NlAe$var$CLASS_NAME_SHOW$2); // If this is a touch-enabled device we remove the extra
    // empty mouseover listeners we added for iOS support

    if ('ontouchstart' in document.documentElement) {
      [].concat(...document.body.children).forEach(element => $NlAe$var$EventHandler.off(element, 'mouseover', $NlAe$var$noop));
    }

    this._activeTrigger[$NlAe$var$TRIGGER_FOCUS] = false;
    this._activeTrigger[$NlAe$var$TRIGGER_HOVER] = false;
    const isAnimated = this.tip.classList.contains($NlAe$var$CLASS_NAME_FADE$2);

    this._queueCallback(complete, this.tip, isAnimated);

    this._hoverState = '';
  }

  update() {
    if (this._popper !== null) {
      this._popper.update();
    }
  } // Protected


  isWithContent() {
    return Boolean(this.getTitle());
  }

  getTipElement() {
    if (this.tip) {
      return this.tip;
    }

    const element = document.createElement('div');
    element.innerHTML = this._config.template;
    const tip = element.children[0];
    this.setContent(tip);
    tip.classList.remove($NlAe$var$CLASS_NAME_FADE$2, $NlAe$var$CLASS_NAME_SHOW$2);
    this.tip = tip;
    return this.tip;
  }

  setContent(tip) {
    this._sanitizeAndSetContent(tip, this.getTitle(), $NlAe$var$SELECTOR_TOOLTIP_INNER);
  }

  _sanitizeAndSetContent(template, content, selector) {
    const templateElement = $NlAe$var$SelectorEngine.findOne(selector, template);

    if (!content && templateElement) {
      templateElement.remove();
      return;
    } // we use append for html objects to maintain js events


    this.setElementContent(templateElement, content);
  }

  setElementContent(element, content) {
    if (element === null) {
      return;
    }

    if ($NlAe$var$isElement(content)) {
      content = $NlAe$var$getElement(content); // content is a DOM node or a jQuery

      if (this._config.html) {
        if (content.parentNode !== element) {
          element.innerHTML = '';
          element.append(content);
        }
      } else {
        element.textContent = content.textContent;
      }

      return;
    }

    if (this._config.html) {
      if (this._config.sanitize) {
        content = $NlAe$var$sanitizeHtml(content, this._config.allowList, this._config.sanitizeFn);
      }

      element.innerHTML = content;
    } else {
      element.textContent = content;
    }
  }

  getTitle() {
    const title = this._element.getAttribute('data-bs-original-title') || this._config.title;

    return this._resolvePossibleFunction(title);
  }

  updateAttachment(attachment) {
    if (attachment === 'right') {
      return 'end';
    }

    if (attachment === 'left') {
      return 'start';
    }

    return attachment;
  } // Private


  _initializeOnDelegatedTarget(event, context) {
    return context || this.constructor.getOrCreateInstance(event.delegateTarget, this._getDelegateConfig());
  }

  _getOffset() {
    const {
      offset
    } = this._config;

    if (typeof offset === 'string') {
      return offset.split(',').map(val => Number.parseInt(val, 10));
    }

    if (typeof offset === 'function') {
      return popperData => offset(popperData, this._element);
    }

    return offset;
  }

  _resolvePossibleFunction(content) {
    return typeof content === 'function' ? content.call(this._element) : content;
  }

  _getPopperConfig(attachment) {
    const defaultBsPopperConfig = {
      placement: attachment,
      modifiers: [{
        name: 'flip',
        options: {
          fallbackPlacements: this._config.fallbackPlacements
        }
      }, {
        name: 'offset',
        options: {
          offset: this._getOffset()
        }
      }, {
        name: 'preventOverflow',
        options: {
          boundary: this._config.boundary
        }
      }, {
        name: 'arrow',
        options: {
          element: `.${this.constructor.NAME}-arrow`
        }
      }, {
        name: 'onChange',
        enabled: true,
        phase: 'afterWrite',
        fn: data => this._handlePopperPlacementChange(data)
      }],
      onFirstUpdate: data => {
        if (data.options.placement !== data.placement) {
          this._handlePopperPlacementChange(data);
        }
      }
    };
    return { ...defaultBsPopperConfig,
      ...(typeof this._config.popperConfig === 'function' ? this._config.popperConfig(defaultBsPopperConfig) : this._config.popperConfig)
    };
  }

  _addAttachmentClass(attachment) {
    this.getTipElement().classList.add(`${this._getBasicClassPrefix()}-${this.updateAttachment(attachment)}`);
  }

  _getAttachment(placement) {
    return $NlAe$var$AttachmentMap[placement.toUpperCase()];
  }

  _setListeners() {
    const triggers = this._config.trigger.split(' ');

    triggers.forEach(trigger => {
      if (trigger === 'click') {
        $NlAe$var$EventHandler.on(this._element, this.constructor.Event.CLICK, this._config.selector, event => this.toggle(event));
      } else if (trigger !== $NlAe$var$TRIGGER_MANUAL) {
        const eventIn = trigger === $NlAe$var$TRIGGER_HOVER ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN;
        const eventOut = trigger === $NlAe$var$TRIGGER_HOVER ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT;
        $NlAe$var$EventHandler.on(this._element, eventIn, this._config.selector, event => this._enter(event));
        $NlAe$var$EventHandler.on(this._element, eventOut, this._config.selector, event => this._leave(event));
      }
    });

    this._hideModalHandler = () => {
      if (this._element) {
        this.hide();
      }
    };

    $NlAe$var$EventHandler.on(this._element.closest($NlAe$var$SELECTOR_MODAL), $NlAe$var$EVENT_MODAL_HIDE, this._hideModalHandler);

    if (this._config.selector) {
      this._config = { ...this._config,
        trigger: 'manual',
        selector: ''
      };
    } else {
      this._fixTitle();
    }
  }

  _fixTitle() {
    const title = this._element.getAttribute('title');

    const originalTitleType = typeof this._element.getAttribute('data-bs-original-title');

    if (title || originalTitleType !== 'string') {
      this._element.setAttribute('data-bs-original-title', title || '');

      if (title && !this._element.getAttribute('aria-label') && !this._element.textContent) {
        this._element.setAttribute('aria-label', title);
      }

      this._element.setAttribute('title', '');
    }
  }

  _enter(event, context) {
    context = this._initializeOnDelegatedTarget(event, context);

    if (event) {
      context._activeTrigger[event.type === 'focusin' ? $NlAe$var$TRIGGER_FOCUS : $NlAe$var$TRIGGER_HOVER] = true;
    }

    if (context.getTipElement().classList.contains($NlAe$var$CLASS_NAME_SHOW$2) || context._hoverState === $NlAe$var$HOVER_STATE_SHOW) {
      context._hoverState = $NlAe$var$HOVER_STATE_SHOW;
      return;
    }

    clearTimeout(context._timeout);
    context._hoverState = $NlAe$var$HOVER_STATE_SHOW;

    if (!context._config.delay || !context._config.delay.show) {
      context.show();
      return;
    }

    context._timeout = setTimeout(() => {
      if (context._hoverState === $NlAe$var$HOVER_STATE_SHOW) {
        context.show();
      }
    }, context._config.delay.show);
  }

  _leave(event, context) {
    context = this._initializeOnDelegatedTarget(event, context);

    if (event) {
      context._activeTrigger[event.type === 'focusout' ? $NlAe$var$TRIGGER_FOCUS : $NlAe$var$TRIGGER_HOVER] = context._element.contains(event.relatedTarget);
    }

    if (context._isWithActiveTrigger()) {
      return;
    }

    clearTimeout(context._timeout);
    context._hoverState = $NlAe$var$HOVER_STATE_OUT;

    if (!context._config.delay || !context._config.delay.hide) {
      context.hide();
      return;
    }

    context._timeout = setTimeout(() => {
      if (context._hoverState === $NlAe$var$HOVER_STATE_OUT) {
        context.hide();
      }
    }, context._config.delay.hide);
  }

  _isWithActiveTrigger() {
    for (const trigger in this._activeTrigger) {
      if (this._activeTrigger[trigger]) {
        return true;
      }
    }

    return false;
  }

  _getConfig(config) {
    const dataAttributes = $NlAe$var$Manipulator.getDataAttributes(this._element);
    Object.keys(dataAttributes).forEach(dataAttr => {
      if ($NlAe$var$DISALLOWED_ATTRIBUTES.has(dataAttr)) {
        delete dataAttributes[dataAttr];
      }
    });
    config = { ...this.constructor.Default,
      ...dataAttributes,
      ...(typeof config === 'object' && config ? config : {})
    };
    config.container = config.container === false ? document.body : $NlAe$var$getElement(config.container);

    if (typeof config.delay === 'number') {
      config.delay = {
        show: config.delay,
        hide: config.delay
      };
    }

    if (typeof config.title === 'number') {
      config.title = config.title.toString();
    }

    if (typeof config.content === 'number') {
      config.content = config.content.toString();
    }

    $NlAe$var$typeCheckConfig($NlAe$var$NAME$4, config, this.constructor.DefaultType);

    if (config.sanitize) {
      config.template = $NlAe$var$sanitizeHtml(config.template, config.allowList, config.sanitizeFn);
    }

    return config;
  }

  _getDelegateConfig() {
    const config = {};

    for (const key in this._config) {
      if (this.constructor.Default[key] !== this._config[key]) {
        config[key] = this._config[key];
      }
    } // In the future can be replaced with:
    // const keysWithDifferentValues = Object.entries(this._config).filter(entry => this.constructor.Default[entry[0]] !== this._config[entry[0]])
    // `Object.fromEntries(keysWithDifferentValues)`


    return config;
  }

  _cleanTipClass() {
    const tip = this.getTipElement();
    const basicClassPrefixRegex = new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`, 'g');
    const tabClass = tip.getAttribute('class').match(basicClassPrefixRegex);

    if (tabClass !== null && tabClass.length > 0) {
      tabClass.map(token => token.trim()).forEach(tClass => tip.classList.remove(tClass));
    }
  }

  _getBasicClassPrefix() {
    return $NlAe$var$CLASS_PREFIX$1;
  }

  _handlePopperPlacementChange(popperData) {
    const {
      state
    } = popperData;

    if (!state) {
      return;
    }

    this.tip = state.elements.popper;

    this._cleanTipClass();

    this._addAttachmentClass(this._getAttachment(state.placement));
  }

  _disposePopper() {
    if (this._popper) {
      this._popper.destroy();

      this._popper = null;
    }
  } // Static


  static jQueryInterface(config) {
    return this.each(function () {
      const data = $NlAe$export$Tooltip.getOrCreateInstance(this, config);

      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }

        data[config]();
      }
    });
  }

}
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Tooltip to jQuery only if jQuery is present
 */


$NlAe$var$defineJQueryPlugin($NlAe$export$Tooltip);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): popover.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const $NlAe$var$NAME$3 = 'popover';
const $NlAe$var$DATA_KEY$3 = 'bs.popover';
const $NlAe$var$EVENT_KEY$3 = `.${$NlAe$var$DATA_KEY$3}`;
const $NlAe$var$CLASS_PREFIX = 'bs-popover';
const $NlAe$var$Default$2 = { ...$NlAe$export$Tooltip.Default,
  placement: 'right',
  offset: [0, 8],
  trigger: 'click',
  content: '',
  template: '<div class="popover" role="tooltip">' + '<div class="popover-arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div>' + '</div>'
};
const $NlAe$var$DefaultType$2 = { ...$NlAe$export$Tooltip.DefaultType,
  content: '(string|element|function)'
};
const $NlAe$var$Event$1 = {
  HIDE: `hide${$NlAe$var$EVENT_KEY$3}`,
  HIDDEN: `hidden${$NlAe$var$EVENT_KEY$3}`,
  SHOW: `show${$NlAe$var$EVENT_KEY$3}`,
  SHOWN: `shown${$NlAe$var$EVENT_KEY$3}`,
  INSERTED: `inserted${$NlAe$var$EVENT_KEY$3}`,
  CLICK: `click${$NlAe$var$EVENT_KEY$3}`,
  FOCUSIN: `focusin${$NlAe$var$EVENT_KEY$3}`,
  FOCUSOUT: `focusout${$NlAe$var$EVENT_KEY$3}`,
  MOUSEENTER: `mouseenter${$NlAe$var$EVENT_KEY$3}`,
  MOUSELEAVE: `mouseleave${$NlAe$var$EVENT_KEY$3}`
};
const $NlAe$var$SELECTOR_TITLE = '.popover-header';
const $NlAe$var$SELECTOR_CONTENT = '.popover-body';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class $NlAe$export$Popover extends $NlAe$export$Tooltip {
  // Getters
  static get Default() {
    return $NlAe$var$Default$2;
  }

  static get NAME() {
    return $NlAe$var$NAME$3;
  }

  static get Event() {
    return $NlAe$var$Event$1;
  }

  static get DefaultType() {
    return $NlAe$var$DefaultType$2;
  } // Overrides


  isWithContent() {
    return this.getTitle() || this._getContent();
  }

  setContent(tip) {
    this._sanitizeAndSetContent(tip, this.getTitle(), $NlAe$var$SELECTOR_TITLE);

    this._sanitizeAndSetContent(tip, this._getContent(), $NlAe$var$SELECTOR_CONTENT);
  } // Private


  _getContent() {
    return this._resolvePossibleFunction(this._config.content);
  }

  _getBasicClassPrefix() {
    return $NlAe$var$CLASS_PREFIX;
  } // Static


  static jQueryInterface(config) {
    return this.each(function () {
      const data = $NlAe$export$Popover.getOrCreateInstance(this, config);

      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }

        data[config]();
      }
    });
  }

}
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Popover to jQuery only if jQuery is present
 */


$NlAe$var$defineJQueryPlugin($NlAe$export$Popover);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): scrollspy.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const $NlAe$var$NAME$2 = 'scrollspy';
const $NlAe$var$DATA_KEY$2 = 'bs.scrollspy';
const $NlAe$var$EVENT_KEY$2 = `.${$NlAe$var$DATA_KEY$2}`;
const $NlAe$var$DATA_API_KEY$1 = '.data-api';
const $NlAe$var$Default$1 = {
  offset: 10,
  method: 'auto',
  target: ''
};
const $NlAe$var$DefaultType$1 = {
  offset: 'number',
  method: 'string',
  target: '(string|element)'
};
const $NlAe$var$EVENT_ACTIVATE = `activate${$NlAe$var$EVENT_KEY$2}`;
const $NlAe$var$EVENT_SCROLL = `scroll${$NlAe$var$EVENT_KEY$2}`;
const $NlAe$var$EVENT_LOAD_DATA_API = `load${$NlAe$var$EVENT_KEY$2}${$NlAe$var$DATA_API_KEY$1}`;
const $NlAe$var$CLASS_NAME_DROPDOWN_ITEM = 'dropdown-item';
const $NlAe$var$CLASS_NAME_ACTIVE$1 = 'active';
const $NlAe$var$SELECTOR_DATA_SPY = '[data-bs-spy="scroll"]';
const $NlAe$var$SELECTOR_NAV_LIST_GROUP$1 = '.nav, .list-group';
const $NlAe$var$SELECTOR_NAV_LINKS = '.nav-link';
const $NlAe$var$SELECTOR_NAV_ITEMS = '.nav-item';
const $NlAe$var$SELECTOR_LIST_ITEMS = '.list-group-item';
const $NlAe$var$SELECTOR_LINK_ITEMS = `${$NlAe$var$SELECTOR_NAV_LINKS}, ${$NlAe$var$SELECTOR_LIST_ITEMS}, .${$NlAe$var$CLASS_NAME_DROPDOWN_ITEM}`;
const $NlAe$var$SELECTOR_DROPDOWN$1 = '.dropdown';
const $NlAe$var$SELECTOR_DROPDOWN_TOGGLE$1 = '.dropdown-toggle';
const $NlAe$var$METHOD_OFFSET = 'offset';
const $NlAe$var$METHOD_POSITION = 'position';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class $NlAe$export$ScrollSpy extends $NlAe$var$BaseComponent {
  constructor(element, config) {
    super(element);
    this._scrollElement = this._element.tagName === 'BODY' ? window : this._element;
    this._config = this._getConfig(config);
    this._offsets = [];
    this._targets = [];
    this._activeTarget = null;
    this._scrollHeight = 0;
    $NlAe$var$EventHandler.on(this._scrollElement, $NlAe$var$EVENT_SCROLL, () => this._process());
    this.refresh();

    this._process();
  } // Getters


  static get Default() {
    return $NlAe$var$Default$1;
  }

  static get NAME() {
    return $NlAe$var$NAME$2;
  } // Public


  refresh() {
    const autoMethod = this._scrollElement === this._scrollElement.window ? $NlAe$var$METHOD_OFFSET : $NlAe$var$METHOD_POSITION;
    const offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;
    const offsetBase = offsetMethod === $NlAe$var$METHOD_POSITION ? this._getScrollTop() : 0;
    this._offsets = [];
    this._targets = [];
    this._scrollHeight = this._getScrollHeight();
    const targets = $NlAe$var$SelectorEngine.find($NlAe$var$SELECTOR_LINK_ITEMS, this._config.target);
    targets.map(element => {
      const targetSelector = $NlAe$var$getSelectorFromElement(element);
      const target = targetSelector ? $NlAe$var$SelectorEngine.findOne(targetSelector) : null;

      if (target) {
        const targetBCR = target.getBoundingClientRect();

        if (targetBCR.width || targetBCR.height) {
          return [$NlAe$var$Manipulator[offsetMethod](target).top + offsetBase, targetSelector];
        }
      }

      return null;
    }).filter(item => item).sort((a, b) => a[0] - b[0]).forEach(item => {
      this._offsets.push(item[0]);

      this._targets.push(item[1]);
    });
  }

  dispose() {
    $NlAe$var$EventHandler.off(this._scrollElement, $NlAe$var$EVENT_KEY$2);
    super.dispose();
  } // Private


  _getConfig(config) {
    config = { ...$NlAe$var$Default$1,
      ...$NlAe$var$Manipulator.getDataAttributes(this._element),
      ...(typeof config === 'object' && config ? config : {})
    };
    config.target = $NlAe$var$getElement(config.target) || document.documentElement;
    $NlAe$var$typeCheckConfig($NlAe$var$NAME$2, config, $NlAe$var$DefaultType$1);
    return config;
  }

  _getScrollTop() {
    return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
  }

  _getScrollHeight() {
    return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
  }

  _getOffsetHeight() {
    return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
  }

  _process() {
    const scrollTop = this._getScrollTop() + this._config.offset;

    const scrollHeight = this._getScrollHeight();

    const maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();

    if (this._scrollHeight !== scrollHeight) {
      this.refresh();
    }

    if (scrollTop >= maxScroll) {
      const target = this._targets[this._targets.length - 1];

      if (this._activeTarget !== target) {
        this._activate(target);
      }

      return;
    }

    if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
      this._activeTarget = null;

      this._clear();

      return;
    }

    for (let i = this._offsets.length; i--;) {
      const isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (typeof this._offsets[i + 1] === 'undefined' || scrollTop < this._offsets[i + 1]);

      if (isActiveTarget) {
        this._activate(this._targets[i]);
      }
    }
  }

  _activate(target) {
    this._activeTarget = target;

    this._clear();

    const queries = $NlAe$var$SELECTOR_LINK_ITEMS.split(',').map(selector => `${selector}[data-bs-target="${target}"],${selector}[href="${target}"]`);
    const link = $NlAe$var$SelectorEngine.findOne(queries.join(','), this._config.target);
    link.classList.add($NlAe$var$CLASS_NAME_ACTIVE$1);

    if (link.classList.contains($NlAe$var$CLASS_NAME_DROPDOWN_ITEM)) {
      $NlAe$var$SelectorEngine.findOne($NlAe$var$SELECTOR_DROPDOWN_TOGGLE$1, link.closest($NlAe$var$SELECTOR_DROPDOWN$1)).classList.add($NlAe$var$CLASS_NAME_ACTIVE$1);
    } else {
      $NlAe$var$SelectorEngine.parents(link, $NlAe$var$SELECTOR_NAV_LIST_GROUP$1).forEach(listGroup => {
        // Set triggered links parents as active
        // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor
        $NlAe$var$SelectorEngine.prev(listGroup, `${$NlAe$var$SELECTOR_NAV_LINKS}, ${$NlAe$var$SELECTOR_LIST_ITEMS}`).forEach(item => item.classList.add($NlAe$var$CLASS_NAME_ACTIVE$1)); // Handle special case when .nav-link is inside .nav-item

        $NlAe$var$SelectorEngine.prev(listGroup, $NlAe$var$SELECTOR_NAV_ITEMS).forEach(navItem => {
          $NlAe$var$SelectorEngine.children(navItem, $NlAe$var$SELECTOR_NAV_LINKS).forEach(item => item.classList.add($NlAe$var$CLASS_NAME_ACTIVE$1));
        });
      });
    }

    $NlAe$var$EventHandler.trigger(this._scrollElement, $NlAe$var$EVENT_ACTIVATE, {
      relatedTarget: target
    });
  }

  _clear() {
    $NlAe$var$SelectorEngine.find($NlAe$var$SELECTOR_LINK_ITEMS, this._config.target).filter(node => node.classList.contains($NlAe$var$CLASS_NAME_ACTIVE$1)).forEach(node => node.classList.remove($NlAe$var$CLASS_NAME_ACTIVE$1));
  } // Static


  static jQueryInterface(config) {
    return this.each(function () {
      const data = $NlAe$export$ScrollSpy.getOrCreateInstance(this, config);

      if (typeof config !== 'string') {
        return;
      }

      if (typeof data[config] === 'undefined') {
        throw new TypeError(`No method named "${config}"`);
      }

      data[config]();
    });
  }

}
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


$NlAe$var$EventHandler.on(window, $NlAe$var$EVENT_LOAD_DATA_API, () => {
  $NlAe$var$SelectorEngine.find($NlAe$var$SELECTOR_DATA_SPY).forEach(spy => new $NlAe$export$ScrollSpy(spy));
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .ScrollSpy to jQuery only if jQuery is present
 */

$NlAe$var$defineJQueryPlugin($NlAe$export$ScrollSpy);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): tab.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const $NlAe$var$NAME$1 = 'tab';
const $NlAe$var$DATA_KEY$1 = 'bs.tab';
const $NlAe$var$EVENT_KEY$1 = `.${$NlAe$var$DATA_KEY$1}`;
const $NlAe$var$DATA_API_KEY = '.data-api';
const $NlAe$var$EVENT_HIDE$1 = `hide${$NlAe$var$EVENT_KEY$1}`;
const $NlAe$var$EVENT_HIDDEN$1 = `hidden${$NlAe$var$EVENT_KEY$1}`;
const $NlAe$var$EVENT_SHOW$1 = `show${$NlAe$var$EVENT_KEY$1}`;
const $NlAe$var$EVENT_SHOWN$1 = `shown${$NlAe$var$EVENT_KEY$1}`;
const $NlAe$var$EVENT_CLICK_DATA_API = `click${$NlAe$var$EVENT_KEY$1}${$NlAe$var$DATA_API_KEY}`;
const $NlAe$var$CLASS_NAME_DROPDOWN_MENU = 'dropdown-menu';
const $NlAe$var$CLASS_NAME_ACTIVE = 'active';
const $NlAe$var$CLASS_NAME_FADE$1 = 'fade';
const $NlAe$var$CLASS_NAME_SHOW$1 = 'show';
const $NlAe$var$SELECTOR_DROPDOWN = '.dropdown';
const $NlAe$var$SELECTOR_NAV_LIST_GROUP = '.nav, .list-group';
const $NlAe$var$SELECTOR_ACTIVE = '.active';
const $NlAe$var$SELECTOR_ACTIVE_UL = ':scope > li > .active';
const $NlAe$var$SELECTOR_DATA_TOGGLE = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]';
const $NlAe$var$SELECTOR_DROPDOWN_TOGGLE = '.dropdown-toggle';
const $NlAe$var$SELECTOR_DROPDOWN_ACTIVE_CHILD = ':scope > .dropdown-menu .active';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class $NlAe$export$Tab extends $NlAe$var$BaseComponent {
  // Getters
  static get NAME() {
    return $NlAe$var$NAME$1;
  } // Public


  show() {
    if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains($NlAe$var$CLASS_NAME_ACTIVE)) {
      return;
    }

    let previous;
    const target = $NlAe$var$getElementFromSelector(this._element);

    const listElement = this._element.closest($NlAe$var$SELECTOR_NAV_LIST_GROUP);

    if (listElement) {
      const itemSelector = listElement.nodeName === 'UL' || listElement.nodeName === 'OL' ? $NlAe$var$SELECTOR_ACTIVE_UL : $NlAe$var$SELECTOR_ACTIVE;
      previous = $NlAe$var$SelectorEngine.find(itemSelector, listElement);
      previous = previous[previous.length - 1];
    }

    const hideEvent = previous ? $NlAe$var$EventHandler.trigger(previous, $NlAe$var$EVENT_HIDE$1, {
      relatedTarget: this._element
    }) : null;
    const showEvent = $NlAe$var$EventHandler.trigger(this._element, $NlAe$var$EVENT_SHOW$1, {
      relatedTarget: previous
    });

    if (showEvent.defaultPrevented || hideEvent !== null && hideEvent.defaultPrevented) {
      return;
    }

    this._activate(this._element, listElement);

    const complete = () => {
      $NlAe$var$EventHandler.trigger(previous, $NlAe$var$EVENT_HIDDEN$1, {
        relatedTarget: this._element
      });
      $NlAe$var$EventHandler.trigger(this._element, $NlAe$var$EVENT_SHOWN$1, {
        relatedTarget: previous
      });
    };

    if (target) {
      this._activate(target, target.parentNode, complete);
    } else {
      complete();
    }
  } // Private


  _activate(element, container, callback) {
    const activeElements = container && (container.nodeName === 'UL' || container.nodeName === 'OL') ? $NlAe$var$SelectorEngine.find($NlAe$var$SELECTOR_ACTIVE_UL, container) : $NlAe$var$SelectorEngine.children(container, $NlAe$var$SELECTOR_ACTIVE);
    const active = activeElements[0];
    const isTransitioning = callback && active && active.classList.contains($NlAe$var$CLASS_NAME_FADE$1);

    const complete = () => this._transitionComplete(element, active, callback);

    if (active && isTransitioning) {
      active.classList.remove($NlAe$var$CLASS_NAME_SHOW$1);

      this._queueCallback(complete, element, true);
    } else {
      complete();
    }
  }

  _transitionComplete(element, active, callback) {
    if (active) {
      active.classList.remove($NlAe$var$CLASS_NAME_ACTIVE);
      const dropdownChild = $NlAe$var$SelectorEngine.findOne($NlAe$var$SELECTOR_DROPDOWN_ACTIVE_CHILD, active.parentNode);

      if (dropdownChild) {
        dropdownChild.classList.remove($NlAe$var$CLASS_NAME_ACTIVE);
      }

      if (active.getAttribute('role') === 'tab') {
        active.setAttribute('aria-selected', false);
      }
    }

    element.classList.add($NlAe$var$CLASS_NAME_ACTIVE);

    if (element.getAttribute('role') === 'tab') {
      element.setAttribute('aria-selected', true);
    }

    $NlAe$var$reflow(element);

    if (element.classList.contains($NlAe$var$CLASS_NAME_FADE$1)) {
      element.classList.add($NlAe$var$CLASS_NAME_SHOW$1);
    }

    let parent = element.parentNode;

    if (parent && parent.nodeName === 'LI') {
      parent = parent.parentNode;
    }

    if (parent && parent.classList.contains($NlAe$var$CLASS_NAME_DROPDOWN_MENU)) {
      const dropdownElement = element.closest($NlAe$var$SELECTOR_DROPDOWN);

      if (dropdownElement) {
        $NlAe$var$SelectorEngine.find($NlAe$var$SELECTOR_DROPDOWN_TOGGLE, dropdownElement).forEach(dropdown => dropdown.classList.add($NlAe$var$CLASS_NAME_ACTIVE));
      }

      element.setAttribute('aria-expanded', true);
    }

    if (callback) {
      callback();
    }
  } // Static


  static jQueryInterface(config) {
    return this.each(function () {
      const data = $NlAe$export$Tab.getOrCreateInstance(this);

      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }

        data[config]();
      }
    });
  }

}
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


$NlAe$var$EventHandler.on(document, $NlAe$var$EVENT_CLICK_DATA_API, $NlAe$var$SELECTOR_DATA_TOGGLE, function (event) {
  if (['A', 'AREA'].includes(this.tagName)) {
    event.preventDefault();
  }

  if ($NlAe$var$isDisabled(this)) {
    return;
  }

  const data = $NlAe$export$Tab.getOrCreateInstance(this);
  data.show();
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Tab to jQuery only if jQuery is present
 */

$NlAe$var$defineJQueryPlugin($NlAe$export$Tab);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): toast.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const $NlAe$var$NAME = 'toast';
const $NlAe$var$DATA_KEY = 'bs.toast';
const $NlAe$var$EVENT_KEY = `.${$NlAe$var$DATA_KEY}`;
const $NlAe$var$EVENT_MOUSEOVER = `mouseover${$NlAe$var$EVENT_KEY}`;
const $NlAe$var$EVENT_MOUSEOUT = `mouseout${$NlAe$var$EVENT_KEY}`;
const $NlAe$var$EVENT_FOCUSIN = `focusin${$NlAe$var$EVENT_KEY}`;
const $NlAe$var$EVENT_FOCUSOUT = `focusout${$NlAe$var$EVENT_KEY}`;
const $NlAe$var$EVENT_HIDE = `hide${$NlAe$var$EVENT_KEY}`;
const $NlAe$var$EVENT_HIDDEN = `hidden${$NlAe$var$EVENT_KEY}`;
const $NlAe$var$EVENT_SHOW = `show${$NlAe$var$EVENT_KEY}`;
const $NlAe$var$EVENT_SHOWN = `shown${$NlAe$var$EVENT_KEY}`;
const $NlAe$var$CLASS_NAME_FADE = 'fade';
const $NlAe$var$CLASS_NAME_HIDE = 'hide'; // @deprecated - kept here only for backwards compatibility

const $NlAe$var$CLASS_NAME_SHOW = 'show';
const $NlAe$var$CLASS_NAME_SHOWING = 'showing';
const $NlAe$var$DefaultType = {
  animation: 'boolean',
  autohide: 'boolean',
  delay: 'number'
};
const $NlAe$var$Default = {
  animation: true,
  autohide: true,
  delay: 5000
};
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class $NlAe$export$Toast extends $NlAe$var$BaseComponent {
  constructor(element, config) {
    super(element);
    this._config = this._getConfig(config);
    this._timeout = null;
    this._hasMouseInteraction = false;
    this._hasKeyboardInteraction = false;

    this._setListeners();
  } // Getters


  static get DefaultType() {
    return $NlAe$var$DefaultType;
  }

  static get Default() {
    return $NlAe$var$Default;
  }

  static get NAME() {
    return $NlAe$var$NAME;
  } // Public


  show() {
    const showEvent = $NlAe$var$EventHandler.trigger(this._element, $NlAe$var$EVENT_SHOW);

    if (showEvent.defaultPrevented) {
      return;
    }

    this._clearTimeout();

    if (this._config.animation) {
      this._element.classList.add($NlAe$var$CLASS_NAME_FADE);
    }

    const complete = () => {
      this._element.classList.remove($NlAe$var$CLASS_NAME_SHOWING);

      $NlAe$var$EventHandler.trigger(this._element, $NlAe$var$EVENT_SHOWN);

      this._maybeScheduleHide();
    };

    this._element.classList.remove($NlAe$var$CLASS_NAME_HIDE); // @deprecated


    $NlAe$var$reflow(this._element);

    this._element.classList.add($NlAe$var$CLASS_NAME_SHOW);

    this._element.classList.add($NlAe$var$CLASS_NAME_SHOWING);

    this._queueCallback(complete, this._element, this._config.animation);
  }

  hide() {
    if (!this._element.classList.contains($NlAe$var$CLASS_NAME_SHOW)) {
      return;
    }

    const hideEvent = $NlAe$var$EventHandler.trigger(this._element, $NlAe$var$EVENT_HIDE);

    if (hideEvent.defaultPrevented) {
      return;
    }

    const complete = () => {
      this._element.classList.add($NlAe$var$CLASS_NAME_HIDE); // @deprecated


      this._element.classList.remove($NlAe$var$CLASS_NAME_SHOWING);

      this._element.classList.remove($NlAe$var$CLASS_NAME_SHOW);

      $NlAe$var$EventHandler.trigger(this._element, $NlAe$var$EVENT_HIDDEN);
    };

    this._element.classList.add($NlAe$var$CLASS_NAME_SHOWING);

    this._queueCallback(complete, this._element, this._config.animation);
  }

  dispose() {
    this._clearTimeout();

    if (this._element.classList.contains($NlAe$var$CLASS_NAME_SHOW)) {
      this._element.classList.remove($NlAe$var$CLASS_NAME_SHOW);
    }

    super.dispose();
  } // Private


  _getConfig(config) {
    config = { ...$NlAe$var$Default,
      ...$NlAe$var$Manipulator.getDataAttributes(this._element),
      ...(typeof config === 'object' && config ? config : {})
    };
    $NlAe$var$typeCheckConfig($NlAe$var$NAME, config, this.constructor.DefaultType);
    return config;
  }

  _maybeScheduleHide() {
    if (!this._config.autohide) {
      return;
    }

    if (this._hasMouseInteraction || this._hasKeyboardInteraction) {
      return;
    }

    this._timeout = setTimeout(() => {
      this.hide();
    }, this._config.delay);
  }

  _onInteraction(event, isInteracting) {
    switch (event.type) {
      case 'mouseover':
      case 'mouseout':
        this._hasMouseInteraction = isInteracting;
        break;

      case 'focusin':
      case 'focusout':
        this._hasKeyboardInteraction = isInteracting;
        break;
    }

    if (isInteracting) {
      this._clearTimeout();

      return;
    }

    const nextElement = event.relatedTarget;

    if (this._element === nextElement || this._element.contains(nextElement)) {
      return;
    }

    this._maybeScheduleHide();
  }

  _setListeners() {
    $NlAe$var$EventHandler.on(this._element, $NlAe$var$EVENT_MOUSEOVER, event => this._onInteraction(event, true));
    $NlAe$var$EventHandler.on(this._element, $NlAe$var$EVENT_MOUSEOUT, event => this._onInteraction(event, false));
    $NlAe$var$EventHandler.on(this._element, $NlAe$var$EVENT_FOCUSIN, event => this._onInteraction(event, true));
    $NlAe$var$EventHandler.on(this._element, $NlAe$var$EVENT_FOCUSOUT, event => this._onInteraction(event, false));
  }

  _clearTimeout() {
    clearTimeout(this._timeout);
    this._timeout = null;
  } // Static


  static jQueryInterface(config) {
    return this.each(function () {
      const data = $NlAe$export$Toast.getOrCreateInstance(this, config);

      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }

        data[config](this);
      }
    });
  }

}

$NlAe$var$enableDismissTrigger($NlAe$export$Toast);
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Toast to jQuery only if jQuery is present
 */

$NlAe$var$defineJQueryPlugin($NlAe$export$Toast);

(function (global, factory) {
  typeof $NlAe$exports === 'object' && "object" !== 'undefined' ? factory() : typeof $NlAe$var$define === 'function' && $NlAe$var$define.amd ? $NlAe$var$define(factory) : factory();
})(undefined, function () {
  /**
   * Applies the :focus-visible polyfill at the given scope.
   * A scope in this case is either the top-level Document or a Shadow Root.
   *
   * @param {(Document|ShadowRoot)} scope
   * @see https://github.com/WICG/focus-visible
   */
  function applyFocusVisiblePolyfill(scope) {
    var hadKeyboardEvent = true;
    var hadFocusVisibleRecently = false;
    var hadFocusVisibleRecentlyTimeout = null;
    var inputTypesAllowlist = {
      text: true,
      search: true,
      url: true,
      tel: true,
      email: true,
      password: true,
      number: true,
      date: true,
      month: true,
      week: true,
      time: true,
      datetime: true,
      'datetime-local': true
    };
    /**
     * Helper function for legacy browsers and iframes which sometimes focus
     * elements like document, body, and non-interactive SVG.
     * @param {Element} el
     */

    function isValidFocusTarget(el) {
      if (el && el !== document && el.nodeName !== 'HTML' && el.nodeName !== 'BODY' && 'classList' in el && 'contains' in el.classList) {
        return true;
      }

      return false;
    }
    /**
     * Computes whether the given element should automatically trigger the
     * `focus-visible` class being added, i.e. whether it should always match
     * `:focus-visible` when focused.
     * @param {Element} el
     * @return {boolean}
     */


    function focusTriggersKeyboardModality(el) {
      var type = el.type;
      var tagName = el.tagName;

      if (tagName === 'INPUT' && inputTypesAllowlist[type] && !el.readOnly) {
        return true;
      }

      if (tagName === 'TEXTAREA' && !el.readOnly) {
        return true;
      }

      if (el.isContentEditable) {
        return true;
      }

      return false;
    }
    /**
     * Add the `focus-visible` class to the given element if it was not added by
     * the author.
     * @param {Element} el
     */


    function addFocusVisibleClass(el) {
      if (el.classList.contains('focus-visible')) {
        return;
      }

      el.classList.add('focus-visible');
      el.setAttribute('data-focus-visible-added', '');
    }
    /**
     * Remove the `focus-visible` class from the given element if it was not
     * originally added by the author.
     * @param {Element} el
     */


    function removeFocusVisibleClass(el) {
      if (!el.hasAttribute('data-focus-visible-added')) {
        return;
      }

      el.classList.remove('focus-visible');
      el.removeAttribute('data-focus-visible-added');
    }
    /**
     * If the most recent user interaction was via the keyboard;
     * and the key press did not include a meta, alt/option, or control key;
     * then the modality is keyboard. Otherwise, the modality is not keyboard.
     * Apply `focus-visible` to any current active element and keep track
     * of our keyboard modality state with `hadKeyboardEvent`.
     * @param {KeyboardEvent} e
     */


    function onKeyDown(e) {
      if (e.metaKey || e.altKey || e.ctrlKey) {
        return;
      }

      if (isValidFocusTarget(scope.activeElement)) {
        addFocusVisibleClass(scope.activeElement);
      }

      hadKeyboardEvent = true;
    }
    /**
     * If at any point a user clicks with a pointing device, ensure that we change
     * the modality away from keyboard.
     * This avoids the situation where a user presses a key on an already focused
     * element, and then clicks on a different element, focusing it with a
     * pointing device, while we still think we're in keyboard modality.
     * @param {Event} e
     */


    function onPointerDown(e) {
      hadKeyboardEvent = false;
    }
    /**
     * On `focus`, add the `focus-visible` class to the target if:
     * - the target received focus as a result of keyboard navigation, or
     * - the event target is an element that will likely require interaction
     *   via the keyboard (e.g. a text box)
     * @param {Event} e
     */


    function onFocus(e) {
      // Prevent IE from focusing the document or HTML element.
      if (!isValidFocusTarget(e.target)) {
        return;
      }

      if (hadKeyboardEvent || focusTriggersKeyboardModality(e.target)) {
        addFocusVisibleClass(e.target);
      }
    }
    /**
     * On `blur`, remove the `focus-visible` class from the target.
     * @param {Event} e
     */


    function onBlur(e) {
      if (!isValidFocusTarget(e.target)) {
        return;
      }

      if (e.target.classList.contains('focus-visible') || e.target.hasAttribute('data-focus-visible-added')) {
        // To detect a tab/window switch, we look for a blur event followed
        // rapidly by a visibility change.
        // If we don't see a visibility change within 100ms, it's probably a
        // regular focus change.
        hadFocusVisibleRecently = true;
        window.clearTimeout(hadFocusVisibleRecentlyTimeout);
        hadFocusVisibleRecentlyTimeout = window.setTimeout(function () {
          hadFocusVisibleRecently = false;
        }, 100);
        removeFocusVisibleClass(e.target);
      }
    }
    /**
     * If the user changes tabs, keep track of whether or not the previously
     * focused element had .focus-visible.
     * @param {Event} e
     */


    function onVisibilityChange(e) {
      if (document.visibilityState === 'hidden') {
        // If the tab becomes active again, the browser will handle calling focus
        // on the element (Safari actually calls it twice).
        // If this tab change caused a blur on an element with focus-visible,
        // re-apply the class when the user switches back to the tab.
        if (hadFocusVisibleRecently) {
          hadKeyboardEvent = true;
        }

        addInitialPointerMoveListeners();
      }
    }
    /**
     * Add a group of listeners to detect usage of any pointing devices.
     * These listeners will be added when the polyfill first loads, and anytime
     * the window is blurred, so that they are active when the window regains
     * focus.
     */


    function addInitialPointerMoveListeners() {
      document.addEventListener('mousemove', onInitialPointerMove);
      document.addEventListener('mousedown', onInitialPointerMove);
      document.addEventListener('mouseup', onInitialPointerMove);
      document.addEventListener('pointermove', onInitialPointerMove);
      document.addEventListener('pointerdown', onInitialPointerMove);
      document.addEventListener('pointerup', onInitialPointerMove);
      document.addEventListener('touchmove', onInitialPointerMove);
      document.addEventListener('touchstart', onInitialPointerMove);
      document.addEventListener('touchend', onInitialPointerMove);
    }

    function removeInitialPointerMoveListeners() {
      document.removeEventListener('mousemove', onInitialPointerMove);
      document.removeEventListener('mousedown', onInitialPointerMove);
      document.removeEventListener('mouseup', onInitialPointerMove);
      document.removeEventListener('pointermove', onInitialPointerMove);
      document.removeEventListener('pointerdown', onInitialPointerMove);
      document.removeEventListener('pointerup', onInitialPointerMove);
      document.removeEventListener('touchmove', onInitialPointerMove);
      document.removeEventListener('touchstart', onInitialPointerMove);
      document.removeEventListener('touchend', onInitialPointerMove);
    }
    /**
     * When the polfyill first loads, assume the user is in keyboard modality.
     * If any event is received from a pointing device (e.g. mouse, pointer,
     * touch), turn off keyboard modality.
     * This accounts for situations where focus enters the page from the URL bar.
     * @param {Event} e
     */


    function onInitialPointerMove(e) {
      // Work around a Safari quirk that fires a mousemove on <html> whenever the
      // window blurs, even if you're tabbing out of the page. ¯\_(ツ)_/¯
      if (e.target.nodeName && e.target.nodeName.toLowerCase() === 'html') {
        return;
      }

      hadKeyboardEvent = false;
      removeInitialPointerMoveListeners();
    } // For some kinds of state, we are interested in changes at the global scope
    // only. For example, global pointer input, global key presses and global
    // visibility change should affect the state at every scope:


    document.addEventListener('keydown', onKeyDown, true);
    document.addEventListener('mousedown', onPointerDown, true);
    document.addEventListener('pointerdown', onPointerDown, true);
    document.addEventListener('touchstart', onPointerDown, true);
    document.addEventListener('visibilitychange', onVisibilityChange, true);
    addInitialPointerMoveListeners(); // For focus and blur, we specifically care about state changes in the local
    // scope. This is because focus / blur events that originate from within a
    // shadow root are not re-dispatched from the host element if it was already
    // the active element in its own scope:

    scope.addEventListener('focus', onFocus, true);
    scope.addEventListener('blur', onBlur, true); // We detect that a node is a ShadowRoot by ensuring that it is a
    // DocumentFragment and also has a host property. This check covers native
    // implementation and polyfill implementation transparently. If we only cared
    // about the native implementation, we could just check if the scope was
    // an instance of a ShadowRoot.

    if (scope.nodeType === Node.DOCUMENT_FRAGMENT_NODE && scope.host) {
      // Since a ShadowRoot is a special kind of DocumentFragment, it does not
      // have a root element to add a class to. So, we add this attribute to the
      // host element instead:
      scope.host.setAttribute('data-js-focus-visible', '');
    } else if (scope.nodeType === Node.DOCUMENT_NODE) {
      document.documentElement.classList.add('js-focus-visible');
      document.documentElement.setAttribute('data-js-focus-visible', '');
    }
  } // It is important to wrap all references to global window and document in
  // these checks to support server-side rendering use cases
  // @see https://github.com/WICG/focus-visible/issues/199


  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    // Make the polyfill helper globally available. This can be used as a signal
    // to interested libraries that wish to coordinate with the polyfill for e.g.,
    // applying the polyfill to a shadow root:
    window.applyFocusVisiblePolyfill = applyFocusVisiblePolyfill; // Notify interested libraries of the polyfill's presence, in case the
    // polyfill was loaded lazily:

    var event;

    try {
      event = new CustomEvent('focus-visible-polyfill-ready');
    } catch (error) {
      // IE11 does not support using CustomEvent as a constructor directly:
      event = document.createEvent('CustomEvent');
      event.initCustomEvent('focus-visible-polyfill-ready', false, false, {});
    }

    window.dispatchEvent(event);
  }

  if (typeof document !== 'undefined') {
    // Apply the polyfill to the global document, so that no JavaScript
    // coordination is required to use the polyfill in the top-level document:
    applyFocusVisiblePolyfill(document);
  }
});

$NlAe$exports.Tooltip = $NlAe$export$Tooltip;
$NlAe$exports.Toast = $NlAe$export$Toast;
$NlAe$exports.Tab = $NlAe$export$Tab;
$NlAe$exports.ScrollSpy = $NlAe$export$ScrollSpy;
$NlAe$exports.Popover = $NlAe$export$Popover;
$NlAe$exports.Offcanvas = $NlAe$export$Offcanvas;
$NlAe$exports.Modal = $NlAe$export$Modal;
$NlAe$exports.Dropdown = $NlAe$export$Dropdown;
$NlAe$exports.Collapse = $NlAe$export$Collapse;
$NlAe$exports.Carousel = $NlAe$export$Carousel;
$NlAe$exports.Button = $NlAe$export$Button;
$NlAe$exports.Alert = $NlAe$export$Alert;

/**!
 * Sortable 1.15.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function $H54I$var$ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function $H54I$var$_objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      $H54I$var$ownKeys(Object(source), true).forEach(function (key) {
        $H54I$var$_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      $H54I$var$ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function $H54I$var$_typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    $H54I$var$_typeof = function (obj) {
      return typeof obj;
    };
  } else {
    $H54I$var$_typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return $H54I$var$_typeof(obj);
}

function $H54I$var$_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function $H54I$var$_extends() {
  $H54I$var$_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return $H54I$var$_extends.apply(this, arguments);
}

function $H54I$var$_objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function $H54I$var$_objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = $H54I$var$_objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var $H54I$var$version = "1.15.0";

function $H54I$var$userAgent(pattern) {
  if (typeof window !== 'undefined' && window.navigator) {
    return !! /*@__PURE__*/navigator.userAgent.match(pattern);
  }
}

var $H54I$var$IE11OrLess = $H54I$var$userAgent(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i);
var $H54I$var$Edge = $H54I$var$userAgent(/Edge/i);
var $H54I$var$FireFox = $H54I$var$userAgent(/firefox/i);
var $H54I$var$Safari = $H54I$var$userAgent(/safari/i) && !$H54I$var$userAgent(/chrome/i) && !$H54I$var$userAgent(/android/i);
var $H54I$var$IOS = $H54I$var$userAgent(/iP(ad|od|hone)/i);
var $H54I$var$ChromeForAndroid = $H54I$var$userAgent(/chrome/i) && $H54I$var$userAgent(/android/i);
var $H54I$var$captureMode = {
  capture: false,
  passive: false
};

function $H54I$var$on(el, event, fn) {
  el.addEventListener(event, fn, !$H54I$var$IE11OrLess && $H54I$var$captureMode);
}

function $H54I$var$off(el, event, fn) {
  el.removeEventListener(event, fn, !$H54I$var$IE11OrLess && $H54I$var$captureMode);
}

function $H54I$var$matches(
/**HTMLElement*/
el,
/**String*/
selector) {
  if (!selector) return;
  selector[0] === '>' && (selector = selector.substring(1));

  if (el) {
    try {
      if (el.matches) {
        return el.matches(selector);
      } else if (el.msMatchesSelector) {
        return el.msMatchesSelector(selector);
      } else if (el.webkitMatchesSelector) {
        return el.webkitMatchesSelector(selector);
      }
    } catch (_) {
      return false;
    }
  }

  return false;
}

function $H54I$var$getParentOrHost(el) {
  return el.host && el !== document && el.host.nodeType ? el.host : el.parentNode;
}

function $H54I$var$closest(
/**HTMLElement*/
el,
/**String*/
selector,
/**HTMLElement*/
ctx, includeCTX) {
  if (el) {
    ctx = ctx || document;

    do {
      if (selector != null && (selector[0] === '>' ? el.parentNode === ctx && $H54I$var$matches(el, selector) : $H54I$var$matches(el, selector)) || includeCTX && el === ctx) {
        return el;
      }

      if (el === ctx) break;
      /* jshint boss:true */
    } while (el = $H54I$var$getParentOrHost(el));
  }

  return null;
}

var $H54I$var$R_SPACE = /\s+/g;

function $H54I$var$toggleClass(el, name, state) {
  if (el && name) {
    if (el.classList) {
      el.classList[state ? 'add' : 'remove'](name);
    } else {
      var className = (' ' + el.className + ' ').replace($H54I$var$R_SPACE, ' ').replace(' ' + name + ' ', ' ');
      el.className = (className + (state ? ' ' + name : '')).replace($H54I$var$R_SPACE, ' ');
    }
  }
}

function $H54I$var$css(el, prop, val) {
  var style = el && el.style;

  if (style) {
    if (val === void 0) {
      if (document.defaultView && document.defaultView.getComputedStyle) {
        val = document.defaultView.getComputedStyle(el, '');
      } else if (el.currentStyle) {
        val = el.currentStyle;
      }

      return prop === void 0 ? val : val[prop];
    } else {
      if (!(prop in style) && prop.indexOf('webkit') === -1) {
        prop = '-webkit-' + prop;
      }

      style[prop] = val + (typeof val === 'string' ? '' : 'px');
    }
  }
}

function $H54I$var$matrix(el, selfOnly) {
  var appliedTransforms = '';

  if (typeof el === 'string') {
    appliedTransforms = el;
  } else {
    do {
      var transform = $H54I$var$css(el, 'transform');

      if (transform && transform !== 'none') {
        appliedTransforms = transform + ' ' + appliedTransforms;
      }
      /* jshint boss:true */

    } while (!selfOnly && (el = el.parentNode));
  }

  var matrixFn = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  /*jshint -W056 */

  return matrixFn && new matrixFn(appliedTransforms);
}

function $H54I$var$find(ctx, tagName, iterator) {
  if (ctx) {
    var list = ctx.getElementsByTagName(tagName),
        i = 0,
        n = list.length;

    if (iterator) {
      for (; i < n; i++) {
        iterator(list[i], i);
      }
    }

    return list;
  }

  return [];
}

function $H54I$var$getWindowScrollingElement() {
  var scrollingElement = document.scrollingElement;

  if (scrollingElement) {
    return scrollingElement;
  } else {
    return document.documentElement;
  }
}
/**
 * Returns the "bounding client rect" of given element
 * @param  {HTMLElement} el                       The element whose boundingClientRect is wanted
 * @param  {[Boolean]} relativeToContainingBlock  Whether the rect should be relative to the containing block of (including) the container
 * @param  {[Boolean]} relativeToNonStaticParent  Whether the rect should be relative to the relative parent of (including) the contaienr
 * @param  {[Boolean]} undoScale                  Whether the container's scale() should be undone
 * @param  {[HTMLElement]} container              The parent the element will be placed in
 * @return {Object}                               The boundingClientRect of el, with specified adjustments
 */


function $H54I$var$getRect(el, relativeToContainingBlock, relativeToNonStaticParent, undoScale, container) {
  if (!el.getBoundingClientRect && el !== window) return;
  var elRect, top, left, bottom, right, height, width;

  if (el !== window && el.parentNode && el !== $H54I$var$getWindowScrollingElement()) {
    elRect = el.getBoundingClientRect();
    top = elRect.top;
    left = elRect.left;
    bottom = elRect.bottom;
    right = elRect.right;
    height = elRect.height;
    width = elRect.width;
  } else {
    top = 0;
    left = 0;
    bottom = window.innerHeight;
    right = window.innerWidth;
    height = window.innerHeight;
    width = window.innerWidth;
  }

  if ((relativeToContainingBlock || relativeToNonStaticParent) && el !== window) {
    // Adjust for translate()
    container = container || el.parentNode; // solves #1123 (see: https://stackoverflow.com/a/37953806/6088312)
    // Not needed on <= IE11

    if (!$H54I$var$IE11OrLess) {
      do {
        if (container && container.getBoundingClientRect && ($H54I$var$css(container, 'transform') !== 'none' || relativeToNonStaticParent && $H54I$var$css(container, 'position') !== 'static')) {
          var containerRect = container.getBoundingClientRect(); // Set relative to edges of padding box of container

          top -= containerRect.top + parseInt($H54I$var$css(container, 'border-top-width'));
          left -= containerRect.left + parseInt($H54I$var$css(container, 'border-left-width'));
          bottom = top + elRect.height;
          right = left + elRect.width;
          break;
        }
        /* jshint boss:true */

      } while (container = container.parentNode);
    }
  }

  if (undoScale && el !== window) {
    // Adjust for scale()
    var elMatrix = $H54I$var$matrix(container || el),
        scaleX = elMatrix && elMatrix.a,
        scaleY = elMatrix && elMatrix.d;

    if (elMatrix) {
      top /= scaleY;
      left /= scaleX;
      width /= scaleX;
      height /= scaleY;
      bottom = top + height;
      right = left + width;
    }
  }

  return {
    top: top,
    left: left,
    bottom: bottom,
    right: right,
    width: width,
    height: height
  };
}
/**
 * Checks if a side of an element is scrolled past a side of its parents
 * @param  {HTMLElement}  el           The element who's side being scrolled out of view is in question
 * @param  {String}       elSide       Side of the element in question ('top', 'left', 'right', 'bottom')
 * @param  {String}       parentSide   Side of the parent in question ('top', 'left', 'right', 'bottom')
 * @return {HTMLElement}               The parent scroll element that the el's side is scrolled past, or null if there is no such element
 */


function $H54I$var$isScrolledPast(el, elSide, parentSide) {
  var parent = $H54I$var$getParentAutoScrollElement(el, true),
      elSideVal = $H54I$var$getRect(el)[elSide];
  /* jshint boss:true */

  while (parent) {
    var parentSideVal = $H54I$var$getRect(parent)[parentSide],
        visible = void 0;

    if (parentSide === 'top' || parentSide === 'left') {
      visible = elSideVal >= parentSideVal;
    } else {
      visible = elSideVal <= parentSideVal;
    }

    if (!visible) return parent;
    if (parent === $H54I$var$getWindowScrollingElement()) break;
    parent = $H54I$var$getParentAutoScrollElement(parent, false);
  }

  return false;
}
/**
 * Gets nth child of el, ignoring hidden children, sortable's elements (does not ignore clone if it's visible)
 * and non-draggable elements
 * @param  {HTMLElement} el       The parent element
 * @param  {Number} childNum      The index of the child
 * @param  {Object} options       Parent Sortable's options
 * @return {HTMLElement}          The child at index childNum, or null if not found
 */


function $H54I$var$getChild(el, childNum, options, includeDragEl) {
  var currentChild = 0,
      i = 0,
      children = el.children;

  while (i < children.length) {
    if (children[i].style.display !== 'none' && children[i] !== $H54I$export$default.ghost && (includeDragEl || children[i] !== $H54I$export$default.dragged) && $H54I$var$closest(children[i], options.draggable, el, false)) {
      if (currentChild === childNum) {
        return children[i];
      }

      currentChild++;
    }

    i++;
  }

  return null;
}
/**
 * Gets the last child in the el, ignoring ghostEl or invisible elements (clones)
 * @param  {HTMLElement} el       Parent element
 * @param  {selector} selector    Any other elements that should be ignored
 * @return {HTMLElement}          The last child, ignoring ghostEl
 */


function $H54I$var$lastChild(el, selector) {
  var last = el.lastElementChild;

  while (last && (last === $H54I$export$default.ghost || $H54I$var$css(last, 'display') === 'none' || selector && !$H54I$var$matches(last, selector))) {
    last = last.previousElementSibling;
  }

  return last || null;
}
/**
 * Returns the index of an element within its parent for a selected set of
 * elements
 * @param  {HTMLElement} el
 * @param  {selector} selector
 * @return {number}
 */


function $H54I$var$index(el, selector) {
  var index = 0;

  if (!el || !el.parentNode) {
    return -1;
  }
  /* jshint boss:true */


  while (el = el.previousElementSibling) {
    if (el.nodeName.toUpperCase() !== 'TEMPLATE' && el !== $H54I$export$default.clone && (!selector || $H54I$var$matches(el, selector))) {
      index++;
    }
  }

  return index;
}
/**
 * Returns the scroll offset of the given element, added with all the scroll offsets of parent elements.
 * The value is returned in real pixels.
 * @param  {HTMLElement} el
 * @return {Array}             Offsets in the format of [left, top]
 */


function $H54I$var$getRelativeScrollOffset(el) {
  var offsetLeft = 0,
      offsetTop = 0,
      winScroller = $H54I$var$getWindowScrollingElement();

  if (el) {
    do {
      var elMatrix = $H54I$var$matrix(el),
          scaleX = elMatrix.a,
          scaleY = elMatrix.d;
      offsetLeft += el.scrollLeft * scaleX;
      offsetTop += el.scrollTop * scaleY;
    } while (el !== winScroller && (el = el.parentNode));
  }

  return [offsetLeft, offsetTop];
}
/**
 * Returns the index of the object within the given array
 * @param  {Array} arr   Array that may or may not hold the object
 * @param  {Object} obj  An object that has a key-value pair unique to and identical to a key-value pair in the object you want to find
 * @return {Number}      The index of the object in the array, or -1
 */


function $H54I$var$indexOfObject(arr, obj) {
  for (var i in arr) {
    if (!arr.hasOwnProperty(i)) continue;

    for (var key in obj) {
      if (obj.hasOwnProperty(key) && obj[key] === arr[i][key]) return Number(i);
    }
  }

  return -1;
}

function $H54I$var$getParentAutoScrollElement(el, includeSelf) {
  // skip to window
  if (!el || !el.getBoundingClientRect) return $H54I$var$getWindowScrollingElement();
  var elem = el;
  var gotSelf = false;

  do {
    // we don't need to get elem css if it isn't even overflowing in the first place (performance)
    if (elem.clientWidth < elem.scrollWidth || elem.clientHeight < elem.scrollHeight) {
      var elemCSS = $H54I$var$css(elem);

      if (elem.clientWidth < elem.scrollWidth && (elemCSS.overflowX == 'auto' || elemCSS.overflowX == 'scroll') || elem.clientHeight < elem.scrollHeight && (elemCSS.overflowY == 'auto' || elemCSS.overflowY == 'scroll')) {
        if (!elem.getBoundingClientRect || elem === document.body) return $H54I$var$getWindowScrollingElement();
        if (gotSelf || includeSelf) return elem;
        gotSelf = true;
      }
    }
    /* jshint boss:true */

  } while (elem = elem.parentNode);

  return $H54I$var$getWindowScrollingElement();
}

function $H54I$var$extend(dst, src) {
  if (dst && src) {
    for (var key in src) {
      if (src.hasOwnProperty(key)) {
        dst[key] = src[key];
      }
    }
  }

  return dst;
}

function $H54I$var$isRectEqual(rect1, rect2) {
  return Math.round(rect1.top) === Math.round(rect2.top) && Math.round(rect1.left) === Math.round(rect2.left) && Math.round(rect1.height) === Math.round(rect2.height) && Math.round(rect1.width) === Math.round(rect2.width);
}

var $H54I$var$_throttleTimeout;

function $H54I$var$throttle(callback, ms) {
  return function () {
    if (!$H54I$var$_throttleTimeout) {
      var args = arguments,
          _this = this;

      if (args.length === 1) {
        callback.call(_this, args[0]);
      } else {
        callback.apply(_this, args);
      }

      $H54I$var$_throttleTimeout = setTimeout(function () {
        $H54I$var$_throttleTimeout = void 0;
      }, ms);
    }
  };
}

function $H54I$var$cancelThrottle() {
  clearTimeout($H54I$var$_throttleTimeout);
  $H54I$var$_throttleTimeout = void 0;
}

function $H54I$var$scrollBy(el, x, y) {
  el.scrollLeft += x;
  el.scrollTop += y;
}

function $H54I$var$clone(el) {
  var Polymer = window.Polymer;
  var $ = window.jQuery || window.Zepto;

  if (Polymer && Polymer.dom) {
    return Polymer.dom(el).cloneNode(true);
  } else if ($) {
    return $(el).clone(true)[0];
  } else {
    return el.cloneNode(true);
  }
}

var $H54I$var$expando = 'Sortable' + new Date().getTime();

function $H54I$var$AnimationStateManager() {
  var animationStates = [],
      animationCallbackId;
  return {
    captureAnimationState: function captureAnimationState() {
      animationStates = [];
      if (!this.options.animation) return;
      var children = [].slice.call(this.el.children);
      children.forEach(function (child) {
        if ($H54I$var$css(child, 'display') === 'none' || child === $H54I$export$default.ghost) return;
        animationStates.push({
          target: child,
          rect: $H54I$var$getRect(child)
        });
        var fromRect = $H54I$var$_objectSpread2({}, animationStates[animationStates.length - 1].rect); // If animating: compensate for current animation

        if (child.thisAnimationDuration) {
          var childMatrix = $H54I$var$matrix(child, true);

          if (childMatrix) {
            fromRect.top -= childMatrix.f;
            fromRect.left -= childMatrix.e;
          }
        }

        child.fromRect = fromRect;
      });
    },
    addAnimationState: function addAnimationState(state) {
      animationStates.push(state);
    },
    removeAnimationState: function removeAnimationState(target) {
      animationStates.splice($H54I$var$indexOfObject(animationStates, {
        target: target
      }), 1);
    },
    animateAll: function animateAll(callback) {
      var _this = this;

      if (!this.options.animation) {
        clearTimeout(animationCallbackId);
        if (typeof callback === 'function') callback();
        return;
      }

      var animating = false,
          animationTime = 0;
      animationStates.forEach(function (state) {
        var time = 0,
            target = state.target,
            fromRect = target.fromRect,
            toRect = $H54I$var$getRect(target),
            prevFromRect = target.prevFromRect,
            prevToRect = target.prevToRect,
            animatingRect = state.rect,
            targetMatrix = $H54I$var$matrix(target, true);

        if (targetMatrix) {
          // Compensate for current animation
          toRect.top -= targetMatrix.f;
          toRect.left -= targetMatrix.e;
        }

        target.toRect = toRect;

        if (target.thisAnimationDuration) {
          // Could also check if animatingRect is between fromRect and toRect
          if ($H54I$var$isRectEqual(prevFromRect, toRect) && !$H54I$var$isRectEqual(fromRect, toRect) && // Make sure animatingRect is on line between toRect & fromRect
          (animatingRect.top - toRect.top) / (animatingRect.left - toRect.left) === (fromRect.top - toRect.top) / (fromRect.left - toRect.left)) {
            // If returning to same place as started from animation and on same axis
            time = $H54I$var$calculateRealTime(animatingRect, prevFromRect, prevToRect, _this.options);
          }
        } // if fromRect != toRect: animate


        if (!$H54I$var$isRectEqual(toRect, fromRect)) {
          target.prevFromRect = fromRect;
          target.prevToRect = toRect;

          if (!time) {
            time = _this.options.animation;
          }

          _this.animate(target, animatingRect, toRect, time);
        }

        if (time) {
          animating = true;
          animationTime = Math.max(animationTime, time);
          clearTimeout(target.animationResetTimer);
          target.animationResetTimer = setTimeout(function () {
            target.animationTime = 0;
            target.prevFromRect = null;
            target.fromRect = null;
            target.prevToRect = null;
            target.thisAnimationDuration = null;
          }, time);
          target.thisAnimationDuration = time;
        }
      });
      clearTimeout(animationCallbackId);

      if (!animating) {
        if (typeof callback === 'function') callback();
      } else {
        animationCallbackId = setTimeout(function () {
          if (typeof callback === 'function') callback();
        }, animationTime);
      }

      animationStates = [];
    },
    animate: function animate(target, currentRect, toRect, duration) {
      if (duration) {
        $H54I$var$css(target, 'transition', '');
        $H54I$var$css(target, 'transform', '');
        var elMatrix = $H54I$var$matrix(this.el),
            scaleX = elMatrix && elMatrix.a,
            scaleY = elMatrix && elMatrix.d,
            translateX = (currentRect.left - toRect.left) / (scaleX || 1),
            translateY = (currentRect.top - toRect.top) / (scaleY || 1);
        target.animatingX = !!translateX;
        target.animatingY = !!translateY;
        $H54I$var$css(target, 'transform', 'translate3d(' + translateX + 'px,' + translateY + 'px,0)');
        this.forRepaintDummy = $H54I$var$repaint(target); // repaint

        $H54I$var$css(target, 'transition', 'transform ' + duration + 'ms' + (this.options.easing ? ' ' + this.options.easing : ''));
        $H54I$var$css(target, 'transform', 'translate3d(0,0,0)');
        typeof target.animated === 'number' && clearTimeout(target.animated);
        target.animated = setTimeout(function () {
          $H54I$var$css(target, 'transition', '');
          $H54I$var$css(target, 'transform', '');
          target.animated = false;
          target.animatingX = false;
          target.animatingY = false;
        }, duration);
      }
    }
  };
}

function $H54I$var$repaint(target) {
  return target.offsetWidth;
}

function $H54I$var$calculateRealTime(animatingRect, fromRect, toRect, options) {
  return Math.sqrt(Math.pow(fromRect.top - animatingRect.top, 2) + Math.pow(fromRect.left - animatingRect.left, 2)) / Math.sqrt(Math.pow(fromRect.top - toRect.top, 2) + Math.pow(fromRect.left - toRect.left, 2)) * options.animation;
}

var $H54I$var$plugins = [];
var $H54I$var$defaults = {
  initializeByDefault: true
};
var $H54I$var$PluginManager = {
  mount: function mount(plugin) {
    // Set default static properties
    for (var option in $H54I$var$defaults) {
      if ($H54I$var$defaults.hasOwnProperty(option) && !(option in plugin)) {
        plugin[option] = $H54I$var$defaults[option];
      }
    }

    $H54I$var$plugins.forEach(function (p) {
      if (p.pluginName === plugin.pluginName) {
        throw "Sortable: Cannot mount plugin ".concat(plugin.pluginName, " more than once");
      }
    });
    $H54I$var$plugins.push(plugin);
  },
  pluginEvent: function pluginEvent(eventName, sortable, evt) {
    var _this = this;

    this.eventCanceled = false;

    evt.cancel = function () {
      _this.eventCanceled = true;
    };

    var eventNameGlobal = eventName + 'Global';
    $H54I$var$plugins.forEach(function (plugin) {
      if (!sortable[plugin.pluginName]) return; // Fire global events if it exists in this sortable

      if (sortable[plugin.pluginName][eventNameGlobal]) {
        sortable[plugin.pluginName][eventNameGlobal]($H54I$var$_objectSpread2({
          sortable: sortable
        }, evt));
      } // Only fire plugin event if plugin is enabled in this sortable,
      // and plugin has event defined


      if (sortable.options[plugin.pluginName] && sortable[plugin.pluginName][eventName]) {
        sortable[plugin.pluginName][eventName]($H54I$var$_objectSpread2({
          sortable: sortable
        }, evt));
      }
    });
  },
  initializePlugins: function initializePlugins(sortable, el, defaults, options) {
    $H54I$var$plugins.forEach(function (plugin) {
      var pluginName = plugin.pluginName;
      if (!sortable.options[pluginName] && !plugin.initializeByDefault) return;
      var initialized = new plugin(sortable, el, sortable.options);
      initialized.sortable = sortable;
      initialized.options = sortable.options;
      sortable[pluginName] = initialized; // Add default options from plugin

      $H54I$var$_extends(defaults, initialized.defaults);
    });

    for (var option in sortable.options) {
      if (!sortable.options.hasOwnProperty(option)) continue;
      var modified = this.modifyOption(sortable, option, sortable.options[option]);

      if (typeof modified !== 'undefined') {
        sortable.options[option] = modified;
      }
    }
  },
  getEventProperties: function getEventProperties(name, sortable) {
    var eventProperties = {};
    $H54I$var$plugins.forEach(function (plugin) {
      if (typeof plugin.eventProperties !== 'function') return;
      $H54I$var$_extends(eventProperties, plugin.eventProperties.call(sortable[plugin.pluginName], name));
    });
    return eventProperties;
  },
  modifyOption: function modifyOption(sortable, name, value) {
    var modifiedValue;
    $H54I$var$plugins.forEach(function (plugin) {
      // Plugin must exist on the Sortable
      if (!sortable[plugin.pluginName]) return; // If static option listener exists for this option, call in the context of the Sortable's instance of this plugin

      if (plugin.optionListeners && typeof plugin.optionListeners[name] === 'function') {
        modifiedValue = plugin.optionListeners[name].call(sortable[plugin.pluginName], value);
      }
    });
    return modifiedValue;
  }
};

function $H54I$var$dispatchEvent(_ref) {
  var sortable = _ref.sortable,
      rootEl = _ref.rootEl,
      name = _ref.name,
      targetEl = _ref.targetEl,
      cloneEl = _ref.cloneEl,
      toEl = _ref.toEl,
      fromEl = _ref.fromEl,
      oldIndex = _ref.oldIndex,
      newIndex = _ref.newIndex,
      oldDraggableIndex = _ref.oldDraggableIndex,
      newDraggableIndex = _ref.newDraggableIndex,
      originalEvent = _ref.originalEvent,
      putSortable = _ref.putSortable,
      extraEventProperties = _ref.extraEventProperties;
  sortable = sortable || rootEl && rootEl[$H54I$var$expando];
  if (!sortable) return;
  var evt,
      options = sortable.options,
      onName = 'on' + name.charAt(0).toUpperCase() + name.substr(1); // Support for new CustomEvent feature

  if (window.CustomEvent && !$H54I$var$IE11OrLess && !$H54I$var$Edge) {
    evt = new CustomEvent(name, {
      bubbles: true,
      cancelable: true
    });
  } else {
    evt = document.createEvent('Event');
    evt.initEvent(name, true, true);
  }

  evt.to = toEl || rootEl;
  evt.from = fromEl || rootEl;
  evt.item = targetEl || rootEl;
  evt.clone = cloneEl;
  evt.oldIndex = oldIndex;
  evt.newIndex = newIndex;
  evt.oldDraggableIndex = oldDraggableIndex;
  evt.newDraggableIndex = newDraggableIndex;
  evt.originalEvent = originalEvent;
  evt.pullMode = putSortable ? putSortable.lastPutMode : undefined;
  var allEventProperties = $H54I$var$_objectSpread2($H54I$var$_objectSpread2({}, extraEventProperties), $H54I$var$PluginManager.getEventProperties(name, sortable));

  for (var option in allEventProperties) {
    evt[option] = allEventProperties[option];
  }

  if (rootEl) {
    rootEl.dispatchEvent(evt);
  }

  if (options[onName]) {
    options[onName].call(sortable, evt);
  }
}

var $H54I$var$_excluded = ["evt"];

var $H54I$var$pluginEvent = function pluginEvent(eventName, sortable) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      originalEvent = _ref.evt,
      data = $H54I$var$_objectWithoutProperties(_ref, $H54I$var$_excluded);

  $H54I$var$PluginManager.pluginEvent.bind($H54I$export$default)(eventName, sortable, $H54I$var$_objectSpread2({
    dragEl: $H54I$var$dragEl,
    parentEl: $H54I$var$parentEl,
    ghostEl: $H54I$var$ghostEl,
    rootEl: $H54I$var$rootEl,
    nextEl: $H54I$var$nextEl,
    lastDownEl: $H54I$var$lastDownEl,
    cloneEl: $H54I$var$cloneEl,
    cloneHidden: $H54I$var$cloneHidden,
    dragStarted: $H54I$var$moved,
    putSortable: $H54I$var$putSortable,
    activeSortable: $H54I$export$default.active,
    originalEvent: originalEvent,
    oldIndex: $H54I$var$oldIndex,
    oldDraggableIndex: $H54I$var$oldDraggableIndex,
    newIndex: $H54I$var$newIndex,
    newDraggableIndex: $H54I$var$newDraggableIndex,
    hideGhostForTarget: $H54I$var$_hideGhostForTarget,
    unhideGhostForTarget: $H54I$var$_unhideGhostForTarget,
    cloneNowHidden: function cloneNowHidden() {
      $H54I$var$cloneHidden = true;
    },
    cloneNowShown: function cloneNowShown() {
      $H54I$var$cloneHidden = false;
    },
    dispatchSortableEvent: function dispatchSortableEvent(name) {
      $H54I$var$_dispatchEvent({
        sortable: sortable,
        name: name,
        originalEvent: originalEvent
      });
    }
  }, data));
};

function $H54I$var$_dispatchEvent(info) {
  $H54I$var$dispatchEvent($H54I$var$_objectSpread2({
    putSortable: $H54I$var$putSortable,
    cloneEl: $H54I$var$cloneEl,
    targetEl: $H54I$var$dragEl,
    rootEl: $H54I$var$rootEl,
    oldIndex: $H54I$var$oldIndex,
    oldDraggableIndex: $H54I$var$oldDraggableIndex,
    newIndex: $H54I$var$newIndex,
    newDraggableIndex: $H54I$var$newDraggableIndex
  }, info));
}

var $H54I$var$dragEl,
    $H54I$var$parentEl,
    $H54I$var$ghostEl,
    $H54I$var$rootEl,
    $H54I$var$nextEl,
    $H54I$var$lastDownEl,
    $H54I$var$cloneEl,
    $H54I$var$cloneHidden,
    $H54I$var$oldIndex,
    $H54I$var$newIndex,
    $H54I$var$oldDraggableIndex,
    $H54I$var$newDraggableIndex,
    $H54I$var$activeGroup,
    $H54I$var$putSortable,
    $H54I$var$awaitingDragStarted = false,
    $H54I$var$ignoreNextClick = false,
    $H54I$var$sortables = [],
    $H54I$var$tapEvt,
    $H54I$var$touchEvt,
    $H54I$var$lastDx,
    $H54I$var$lastDy,
    $H54I$var$tapDistanceLeft,
    $H54I$var$tapDistanceTop,
    $H54I$var$moved,
    $H54I$var$lastTarget,
    $H54I$var$lastDirection,
    $H54I$var$pastFirstInvertThresh = false,
    $H54I$var$isCircumstantialInvert = false,
    $H54I$var$targetMoveDistance,
    // For positioning ghost absolutely
$H54I$var$ghostRelativeParent,
    $H54I$var$ghostRelativeParentInitialScroll = [],
    // (left, top)
$H54I$var$_silent = false,
    $H54I$var$savedInputChecked = [];
/** @const */

var $H54I$var$documentExists = typeof document !== 'undefined',
    $H54I$var$PositionGhostAbsolutely = $H54I$var$IOS,
    $H54I$var$CSSFloatProperty = $H54I$var$Edge || $H54I$var$IE11OrLess ? 'cssFloat' : 'float',
    // This will not pass for IE9, because IE9 DnD only works on anchors
$H54I$var$supportDraggable = $H54I$var$documentExists && !$H54I$var$ChromeForAndroid && !$H54I$var$IOS && 'draggable' in document.createElement('div'),
    $H54I$var$supportCssPointerEvents = function () {
  if (!$H54I$var$documentExists) return; // false when <= IE11

  if ($H54I$var$IE11OrLess) {
    return false;
  }

  var el = document.createElement('x');
  el.style.cssText = 'pointer-events:auto';
  return el.style.pointerEvents === 'auto';
}(),
    $H54I$var$_detectDirection = function _detectDirection(el, options) {
  var elCSS = $H54I$var$css(el),
      elWidth = parseInt(elCSS.width) - parseInt(elCSS.paddingLeft) - parseInt(elCSS.paddingRight) - parseInt(elCSS.borderLeftWidth) - parseInt(elCSS.borderRightWidth),
      child1 = $H54I$var$getChild(el, 0, options),
      child2 = $H54I$var$getChild(el, 1, options),
      firstChildCSS = child1 && $H54I$var$css(child1),
      secondChildCSS = child2 && $H54I$var$css(child2),
      firstChildWidth = firstChildCSS && parseInt(firstChildCSS.marginLeft) + parseInt(firstChildCSS.marginRight) + $H54I$var$getRect(child1).width,
      secondChildWidth = secondChildCSS && parseInt(secondChildCSS.marginLeft) + parseInt(secondChildCSS.marginRight) + $H54I$var$getRect(child2).width;

  if (elCSS.display === 'flex') {
    return elCSS.flexDirection === 'column' || elCSS.flexDirection === 'column-reverse' ? 'vertical' : 'horizontal';
  }

  if (elCSS.display === 'grid') {
    return elCSS.gridTemplateColumns.split(' ').length <= 1 ? 'vertical' : 'horizontal';
  }

  if (child1 && firstChildCSS["float"] && firstChildCSS["float"] !== 'none') {
    var touchingSideChild2 = firstChildCSS["float"] === 'left' ? 'left' : 'right';
    return child2 && (secondChildCSS.clear === 'both' || secondChildCSS.clear === touchingSideChild2) ? 'vertical' : 'horizontal';
  }

  return child1 && (firstChildCSS.display === 'block' || firstChildCSS.display === 'flex' || firstChildCSS.display === 'table' || firstChildCSS.display === 'grid' || firstChildWidth >= elWidth && elCSS[$H54I$var$CSSFloatProperty] === 'none' || child2 && elCSS[$H54I$var$CSSFloatProperty] === 'none' && firstChildWidth + secondChildWidth > elWidth) ? 'vertical' : 'horizontal';
},
    $H54I$var$_dragElInRowColumn = function _dragElInRowColumn(dragRect, targetRect, vertical) {
  var dragElS1Opp = vertical ? dragRect.left : dragRect.top,
      dragElS2Opp = vertical ? dragRect.right : dragRect.bottom,
      dragElOppLength = vertical ? dragRect.width : dragRect.height,
      targetS1Opp = vertical ? targetRect.left : targetRect.top,
      targetS2Opp = vertical ? targetRect.right : targetRect.bottom,
      targetOppLength = vertical ? targetRect.width : targetRect.height;
  return dragElS1Opp === targetS1Opp || dragElS2Opp === targetS2Opp || dragElS1Opp + dragElOppLength / 2 === targetS1Opp + targetOppLength / 2;
},

/**
 * Detects first nearest empty sortable to X and Y position using emptyInsertThreshold.
 * @param  {Number} x      X position
 * @param  {Number} y      Y position
 * @return {HTMLElement}   Element of the first found nearest Sortable
 */
$H54I$var$_detectNearestEmptySortable = function _detectNearestEmptySortable(x, y) {
  var ret;
  $H54I$var$sortables.some(function (sortable) {
    var threshold = sortable[$H54I$var$expando].options.emptyInsertThreshold;
    if (!threshold || $H54I$var$lastChild(sortable)) return;
    var rect = $H54I$var$getRect(sortable),
        insideHorizontally = x >= rect.left - threshold && x <= rect.right + threshold,
        insideVertically = y >= rect.top - threshold && y <= rect.bottom + threshold;

    if (insideHorizontally && insideVertically) {
      return ret = sortable;
    }
  });
  return ret;
},
    $H54I$var$_prepareGroup = function _prepareGroup(options) {
  function toFn(value, pull) {
    return function (to, from, dragEl, evt) {
      var sameGroup = to.options.group.name && from.options.group.name && to.options.group.name === from.options.group.name;

      if (value == null && (pull || sameGroup)) {
        // Default pull value
        // Default pull and put value if same group
        return true;
      } else if (value == null || value === false) {
        return false;
      } else if (pull && value === 'clone') {
        return value;
      } else if (typeof value === 'function') {
        return toFn(value(to, from, dragEl, evt), pull)(to, from, dragEl, evt);
      } else {
        var otherGroup = (pull ? to : from).options.group.name;
        return value === true || typeof value === 'string' && value === otherGroup || value.join && value.indexOf(otherGroup) > -1;
      }
    };
  }

  var group = {};
  var originalGroup = options.group;

  if (!originalGroup || $H54I$var$_typeof(originalGroup) != 'object') {
    originalGroup = {
      name: originalGroup
    };
  }

  group.name = originalGroup.name;
  group.checkPull = toFn(originalGroup.pull, true);
  group.checkPut = toFn(originalGroup.put);
  group.revertClone = originalGroup.revertClone;
  options.group = group;
},
    $H54I$var$_hideGhostForTarget = function _hideGhostForTarget() {
  if (!$H54I$var$supportCssPointerEvents && $H54I$var$ghostEl) {
    $H54I$var$css($H54I$var$ghostEl, 'display', 'none');
  }
},
    $H54I$var$_unhideGhostForTarget = function _unhideGhostForTarget() {
  if (!$H54I$var$supportCssPointerEvents && $H54I$var$ghostEl) {
    $H54I$var$css($H54I$var$ghostEl, 'display', '');
  }
}; // #1184 fix - Prevent click event on fallback if dragged but item not changed position


if ($H54I$var$documentExists && !$H54I$var$ChromeForAndroid) {
  document.addEventListener('click', function (evt) {
    if ($H54I$var$ignoreNextClick) {
      evt.preventDefault();
      evt.stopPropagation && evt.stopPropagation();
      evt.stopImmediatePropagation && evt.stopImmediatePropagation();
      $H54I$var$ignoreNextClick = false;
      return false;
    }
  }, true);
}

var $H54I$var$nearestEmptyInsertDetectEvent = function nearestEmptyInsertDetectEvent(evt) {
  if ($H54I$var$dragEl) {
    evt = evt.touches ? evt.touches[0] : evt;
    var nearest = $H54I$var$_detectNearestEmptySortable(evt.clientX, evt.clientY);

    if (nearest) {
      // Create imitation event
      var event = {};

      for (var i in evt) {
        if (evt.hasOwnProperty(i)) {
          event[i] = evt[i];
        }
      }

      event.target = event.rootEl = nearest;
      event.preventDefault = void 0;
      event.stopPropagation = void 0;

      nearest[$H54I$var$expando]._onDragOver(event);
    }
  }
};

var $H54I$var$_checkOutsideTargetEl = function _checkOutsideTargetEl(evt) {
  if ($H54I$var$dragEl) {
    $H54I$var$dragEl.parentNode[$H54I$var$expando]._isOutsideThisEl(evt.target);
  }
};
/**
 * @class  Sortable
 * @param  {HTMLElement}  el
 * @param  {Object}       [options]
 */


function $H54I$export$default(el, options) {
  if (!(el && el.nodeType && el.nodeType === 1)) {
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(el));
  }

  this.el = el; // root element

  this.options = options = $H54I$var$_extends({}, options); // Export instance

  el[$H54I$var$expando] = this;
  var defaults = {
    group: null,
    sort: true,
    disabled: false,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(el.nodeName) ? '>li' : '>*',
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: false,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: true,
    direction: function direction() {
      return $H54I$var$_detectDirection(el, this.options);
    },
    ghostClass: 'sortable-ghost',
    chosenClass: 'sortable-chosen',
    dragClass: 'sortable-drag',
    ignore: 'a, img',
    filter: null,
    preventOnFilter: true,
    animation: 0,
    easing: null,
    setData: function setData(dataTransfer, dragEl) {
      dataTransfer.setData('Text', dragEl.textContent);
    },
    dropBubble: false,
    dragoverBubble: false,
    dataIdAttr: 'data-id',
    delay: 0,
    delayOnTouchOnly: false,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: false,
    fallbackClass: 'sortable-fallback',
    fallbackOnBody: false,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    supportPointer: $H54I$export$default.supportPointer !== false && 'PointerEvent' in window && !$H54I$var$Safari,
    emptyInsertThreshold: 5
  };
  $H54I$var$PluginManager.initializePlugins(this, el, defaults); // Set default options

  for (var name in defaults) {
    !(name in options) && (options[name] = defaults[name]);
  }

  $H54I$var$_prepareGroup(options); // Bind all private methods

  for (var fn in this) {
    if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
      this[fn] = this[fn].bind(this);
    }
  } // Setup drag mode


  this.nativeDraggable = options.forceFallback ? false : $H54I$var$supportDraggable;

  if (this.nativeDraggable) {
    // Touch start threshold cannot be greater than the native dragstart threshold
    this.options.touchStartThreshold = 1;
  } // Bind events


  if (options.supportPointer) {
    $H54I$var$on(el, 'pointerdown', this._onTapStart);
  } else {
    $H54I$var$on(el, 'mousedown', this._onTapStart);
    $H54I$var$on(el, 'touchstart', this._onTapStart);
  }

  if (this.nativeDraggable) {
    $H54I$var$on(el, 'dragover', this);
    $H54I$var$on(el, 'dragenter', this);
  }

  $H54I$var$sortables.push(this.el); // Restore sorting

  options.store && options.store.get && this.sort(options.store.get(this) || []); // Add animation state manager

  $H54I$var$_extends(this, $H54I$var$AnimationStateManager());
}

$H54I$export$default.prototype =
/** @lends Sortable.prototype */
{
  constructor: $H54I$export$default,
  _isOutsideThisEl: function _isOutsideThisEl(target) {
    if (!this.el.contains(target) && target !== this.el) {
      $H54I$var$lastTarget = null;
    }
  },
  _getDirection: function _getDirection(evt, target) {
    return typeof this.options.direction === 'function' ? this.options.direction.call(this, evt, target, $H54I$var$dragEl) : this.options.direction;
  },
  _onTapStart: function _onTapStart(
  /** Event|TouchEvent */
  evt) {
    if (!evt.cancelable) return;

    var _this = this,
        el = this.el,
        options = this.options,
        preventOnFilter = options.preventOnFilter,
        type = evt.type,
        touch = evt.touches && evt.touches[0] || evt.pointerType && evt.pointerType === 'touch' && evt,
        target = (touch || evt).target,
        originalTarget = evt.target.shadowRoot && (evt.path && evt.path[0] || evt.composedPath && evt.composedPath()[0]) || target,
        filter = options.filter;

    $H54I$var$_saveInputCheckedState(el); // Don't trigger start event when an element is been dragged, otherwise the evt.oldindex always wrong when set option.group.

    if ($H54I$var$dragEl) {
      return;
    }

    if (/mousedown|pointerdown/.test(type) && evt.button !== 0 || options.disabled) {
      return; // only left button and enabled
    } // cancel dnd if original target is content editable


    if (originalTarget.isContentEditable) {
      return;
    } // Safari ignores further event handling after mousedown


    if (!this.nativeDraggable && $H54I$var$Safari && target && target.tagName.toUpperCase() === 'SELECT') {
      return;
    }

    target = $H54I$var$closest(target, options.draggable, el, false);

    if (target && target.animated) {
      return;
    }

    if ($H54I$var$lastDownEl === target) {
      // Ignoring duplicate `down`
      return;
    } // Get the index of the dragged element within its parent


    $H54I$var$oldIndex = $H54I$var$index(target);
    $H54I$var$oldDraggableIndex = $H54I$var$index(target, options.draggable); // Check filter

    if (typeof filter === 'function') {
      if (filter.call(this, evt, target, this)) {
        $H54I$var$_dispatchEvent({
          sortable: _this,
          rootEl: originalTarget,
          name: 'filter',
          targetEl: target,
          toEl: el,
          fromEl: el
        });
        $H54I$var$pluginEvent('filter', _this, {
          evt: evt
        });
        preventOnFilter && evt.cancelable && evt.preventDefault();
        return; // cancel dnd
      }
    } else if (filter) {
      filter = filter.split(',').some(function (criteria) {
        criteria = $H54I$var$closest(originalTarget, criteria.trim(), el, false);

        if (criteria) {
          $H54I$var$_dispatchEvent({
            sortable: _this,
            rootEl: criteria,
            name: 'filter',
            targetEl: target,
            fromEl: el,
            toEl: el
          });
          $H54I$var$pluginEvent('filter', _this, {
            evt: evt
          });
          return true;
        }
      });

      if (filter) {
        preventOnFilter && evt.cancelable && evt.preventDefault();
        return; // cancel dnd
      }
    }

    if (options.handle && !$H54I$var$closest(originalTarget, options.handle, el, false)) {
      return;
    } // Prepare `dragstart`


    this._prepareDragStart(evt, touch, target);
  },
  _prepareDragStart: function _prepareDragStart(
  /** Event */
  evt,
  /** Touch */
  touch,
  /** HTMLElement */
  target) {
    var _this = this,
        el = _this.el,
        options = _this.options,
        ownerDocument = el.ownerDocument,
        dragStartFn;

    if (target && !$H54I$var$dragEl && target.parentNode === el) {
      var dragRect = $H54I$var$getRect(target);
      $H54I$var$rootEl = el;
      $H54I$var$dragEl = target;
      $H54I$var$parentEl = $H54I$var$dragEl.parentNode;
      $H54I$var$nextEl = $H54I$var$dragEl.nextSibling;
      $H54I$var$lastDownEl = target;
      $H54I$var$activeGroup = options.group;
      $H54I$export$default.dragged = $H54I$var$dragEl;
      $H54I$var$tapEvt = {
        target: $H54I$var$dragEl,
        clientX: (touch || evt).clientX,
        clientY: (touch || evt).clientY
      };
      $H54I$var$tapDistanceLeft = $H54I$var$tapEvt.clientX - dragRect.left;
      $H54I$var$tapDistanceTop = $H54I$var$tapEvt.clientY - dragRect.top;
      this._lastX = (touch || evt).clientX;
      this._lastY = (touch || evt).clientY;
      $H54I$var$dragEl.style['will-change'] = 'all';

      dragStartFn = function dragStartFn() {
        $H54I$var$pluginEvent('delayEnded', _this, {
          evt: evt
        });

        if ($H54I$export$default.eventCanceled) {
          _this._onDrop();

          return;
        } // Delayed drag has been triggered
        // we can re-enable the events: touchmove/mousemove


        _this._disableDelayedDragEvents();

        if (!$H54I$var$FireFox && _this.nativeDraggable) {
          $H54I$var$dragEl.draggable = true;
        } // Bind the events: dragstart/dragend


        _this._triggerDragStart(evt, touch); // Drag start event


        $H54I$var$_dispatchEvent({
          sortable: _this,
          name: 'choose',
          originalEvent: evt
        }); // Chosen item

        $H54I$var$toggleClass($H54I$var$dragEl, options.chosenClass, true);
      }; // Disable "draggable"


      options.ignore.split(',').forEach(function (criteria) {
        $H54I$var$find($H54I$var$dragEl, criteria.trim(), $H54I$var$_disableDraggable);
      });
      $H54I$var$on(ownerDocument, 'dragover', $H54I$var$nearestEmptyInsertDetectEvent);
      $H54I$var$on(ownerDocument, 'mousemove', $H54I$var$nearestEmptyInsertDetectEvent);
      $H54I$var$on(ownerDocument, 'touchmove', $H54I$var$nearestEmptyInsertDetectEvent);
      $H54I$var$on(ownerDocument, 'mouseup', _this._onDrop);
      $H54I$var$on(ownerDocument, 'touchend', _this._onDrop);
      $H54I$var$on(ownerDocument, 'touchcancel', _this._onDrop); // Make dragEl draggable (must be before delay for FireFox)

      if ($H54I$var$FireFox && this.nativeDraggable) {
        this.options.touchStartThreshold = 4;
        $H54I$var$dragEl.draggable = true;
      }

      $H54I$var$pluginEvent('delayStart', this, {
        evt: evt
      }); // Delay is impossible for native DnD in Edge or IE

      if (options.delay && (!options.delayOnTouchOnly || touch) && (!this.nativeDraggable || !($H54I$var$Edge || $H54I$var$IE11OrLess))) {
        if ($H54I$export$default.eventCanceled) {
          this._onDrop();

          return;
        } // If the user moves the pointer or let go the click or touch
        // before the delay has been reached:
        // disable the delayed drag


        $H54I$var$on(ownerDocument, 'mouseup', _this._disableDelayedDrag);
        $H54I$var$on(ownerDocument, 'touchend', _this._disableDelayedDrag);
        $H54I$var$on(ownerDocument, 'touchcancel', _this._disableDelayedDrag);
        $H54I$var$on(ownerDocument, 'mousemove', _this._delayedDragTouchMoveHandler);
        $H54I$var$on(ownerDocument, 'touchmove', _this._delayedDragTouchMoveHandler);
        options.supportPointer && $H54I$var$on(ownerDocument, 'pointermove', _this._delayedDragTouchMoveHandler);
        _this._dragStartTimer = setTimeout(dragStartFn, options.delay);
      } else {
        dragStartFn();
      }
    }
  },
  _delayedDragTouchMoveHandler: function _delayedDragTouchMoveHandler(
  /** TouchEvent|PointerEvent **/
  e) {
    var touch = e.touches ? e.touches[0] : e;

    if (Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1))) {
      this._disableDelayedDrag();
    }
  },
  _disableDelayedDrag: function _disableDelayedDrag() {
    $H54I$var$dragEl && $H54I$var$_disableDraggable($H54I$var$dragEl);
    clearTimeout(this._dragStartTimer);

    this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function _disableDelayedDragEvents() {
    var ownerDocument = this.el.ownerDocument;
    $H54I$var$off(ownerDocument, 'mouseup', this._disableDelayedDrag);
    $H54I$var$off(ownerDocument, 'touchend', this._disableDelayedDrag);
    $H54I$var$off(ownerDocument, 'touchcancel', this._disableDelayedDrag);
    $H54I$var$off(ownerDocument, 'mousemove', this._delayedDragTouchMoveHandler);
    $H54I$var$off(ownerDocument, 'touchmove', this._delayedDragTouchMoveHandler);
    $H54I$var$off(ownerDocument, 'pointermove', this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function _triggerDragStart(
  /** Event */
  evt,
  /** Touch */
  touch) {
    touch = touch || evt.pointerType == 'touch' && evt;

    if (!this.nativeDraggable || touch) {
      if (this.options.supportPointer) {
        $H54I$var$on(document, 'pointermove', this._onTouchMove);
      } else if (touch) {
        $H54I$var$on(document, 'touchmove', this._onTouchMove);
      } else {
        $H54I$var$on(document, 'mousemove', this._onTouchMove);
      }
    } else {
      $H54I$var$on($H54I$var$dragEl, 'dragend', this);
      $H54I$var$on($H54I$var$rootEl, 'dragstart', this._onDragStart);
    }

    try {
      if (document.selection) {
        // Timeout neccessary for IE9
        $H54I$var$_nextTick(function () {
          document.selection.empty();
        });
      } else {
        window.getSelection().removeAllRanges();
      }
    } catch (err) {}
  },
  _dragStarted: function _dragStarted(fallback, evt) {
    $H54I$var$awaitingDragStarted = false;

    if ($H54I$var$rootEl && $H54I$var$dragEl) {
      $H54I$var$pluginEvent('dragStarted', this, {
        evt: evt
      });

      if (this.nativeDraggable) {
        $H54I$var$on(document, 'dragover', $H54I$var$_checkOutsideTargetEl);
      }

      var options = this.options; // Apply effect

      !fallback && $H54I$var$toggleClass($H54I$var$dragEl, options.dragClass, false);
      $H54I$var$toggleClass($H54I$var$dragEl, options.ghostClass, true);
      $H54I$export$default.active = this;
      fallback && this._appendGhost(); // Drag start event

      $H54I$var$_dispatchEvent({
        sortable: this,
        name: 'start',
        originalEvent: evt
      });
    } else {
      this._nulling();
    }
  },
  _emulateDragOver: function _emulateDragOver() {
    if ($H54I$var$touchEvt) {
      this._lastX = $H54I$var$touchEvt.clientX;
      this._lastY = $H54I$var$touchEvt.clientY;
      $H54I$var$_hideGhostForTarget();
      var target = document.elementFromPoint($H54I$var$touchEvt.clientX, $H54I$var$touchEvt.clientY);
      var parent = target;

      while (target && target.shadowRoot) {
        target = target.shadowRoot.elementFromPoint($H54I$var$touchEvt.clientX, $H54I$var$touchEvt.clientY);
        if (target === parent) break;
        parent = target;
      }

      $H54I$var$dragEl.parentNode[$H54I$var$expando]._isOutsideThisEl(target);

      if (parent) {
        do {
          if (parent[$H54I$var$expando]) {
            var inserted = void 0;
            inserted = parent[$H54I$var$expando]._onDragOver({
              clientX: $H54I$var$touchEvt.clientX,
              clientY: $H54I$var$touchEvt.clientY,
              target: target,
              rootEl: parent
            });

            if (inserted && !this.options.dragoverBubble) {
              break;
            }
          }

          target = parent; // store last element
        }
        /* jshint boss:true */
        while (parent = parent.parentNode);
      }

      $H54I$var$_unhideGhostForTarget();
    }
  },
  _onTouchMove: function _onTouchMove(
  /**TouchEvent*/
  evt) {
    if ($H54I$var$tapEvt) {
      var options = this.options,
          fallbackTolerance = options.fallbackTolerance,
          fallbackOffset = options.fallbackOffset,
          touch = evt.touches ? evt.touches[0] : evt,
          ghostMatrix = $H54I$var$ghostEl && $H54I$var$matrix($H54I$var$ghostEl, true),
          scaleX = $H54I$var$ghostEl && ghostMatrix && ghostMatrix.a,
          scaleY = $H54I$var$ghostEl && ghostMatrix && ghostMatrix.d,
          relativeScrollOffset = $H54I$var$PositionGhostAbsolutely && $H54I$var$ghostRelativeParent && $H54I$var$getRelativeScrollOffset($H54I$var$ghostRelativeParent),
          dx = (touch.clientX - $H54I$var$tapEvt.clientX + fallbackOffset.x) / (scaleX || 1) + (relativeScrollOffset ? relativeScrollOffset[0] - $H54I$var$ghostRelativeParentInitialScroll[0] : 0) / (scaleX || 1),
          dy = (touch.clientY - $H54I$var$tapEvt.clientY + fallbackOffset.y) / (scaleY || 1) + (relativeScrollOffset ? relativeScrollOffset[1] - $H54I$var$ghostRelativeParentInitialScroll[1] : 0) / (scaleY || 1); // only set the status to dragging, when we are actually dragging

      if (!$H54I$export$default.active && !$H54I$var$awaitingDragStarted) {
        if (fallbackTolerance && Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) < fallbackTolerance) {
          return;
        }

        this._onDragStart(evt, true);
      }

      if ($H54I$var$ghostEl) {
        if (ghostMatrix) {
          ghostMatrix.e += dx - ($H54I$var$lastDx || 0);
          ghostMatrix.f += dy - ($H54I$var$lastDy || 0);
        } else {
          ghostMatrix = {
            a: 1,
            b: 0,
            c: 0,
            d: 1,
            e: dx,
            f: dy
          };
        }

        var cssMatrix = "matrix(".concat(ghostMatrix.a, ",").concat(ghostMatrix.b, ",").concat(ghostMatrix.c, ",").concat(ghostMatrix.d, ",").concat(ghostMatrix.e, ",").concat(ghostMatrix.f, ")");
        $H54I$var$css($H54I$var$ghostEl, 'webkitTransform', cssMatrix);
        $H54I$var$css($H54I$var$ghostEl, 'mozTransform', cssMatrix);
        $H54I$var$css($H54I$var$ghostEl, 'msTransform', cssMatrix);
        $H54I$var$css($H54I$var$ghostEl, 'transform', cssMatrix);
        $H54I$var$lastDx = dx;
        $H54I$var$lastDy = dy;
        $H54I$var$touchEvt = touch;
      }

      evt.cancelable && evt.preventDefault();
    }
  },
  _appendGhost: function _appendGhost() {
    // Bug if using scale(): https://stackoverflow.com/questions/2637058
    // Not being adjusted for
    if (!$H54I$var$ghostEl) {
      var container = this.options.fallbackOnBody ? document.body : $H54I$var$rootEl,
          rect = $H54I$var$getRect($H54I$var$dragEl, true, $H54I$var$PositionGhostAbsolutely, true, container),
          options = this.options; // Position absolutely

      if ($H54I$var$PositionGhostAbsolutely) {
        // Get relatively positioned parent
        $H54I$var$ghostRelativeParent = container;

        while ($H54I$var$css($H54I$var$ghostRelativeParent, 'position') === 'static' && $H54I$var$css($H54I$var$ghostRelativeParent, 'transform') === 'none' && $H54I$var$ghostRelativeParent !== document) {
          $H54I$var$ghostRelativeParent = $H54I$var$ghostRelativeParent.parentNode;
        }

        if ($H54I$var$ghostRelativeParent !== document.body && $H54I$var$ghostRelativeParent !== document.documentElement) {
          if ($H54I$var$ghostRelativeParent === document) $H54I$var$ghostRelativeParent = $H54I$var$getWindowScrollingElement();
          rect.top += $H54I$var$ghostRelativeParent.scrollTop;
          rect.left += $H54I$var$ghostRelativeParent.scrollLeft;
        } else {
          $H54I$var$ghostRelativeParent = $H54I$var$getWindowScrollingElement();
        }

        $H54I$var$ghostRelativeParentInitialScroll = $H54I$var$getRelativeScrollOffset($H54I$var$ghostRelativeParent);
      }

      $H54I$var$ghostEl = $H54I$var$dragEl.cloneNode(true);
      $H54I$var$toggleClass($H54I$var$ghostEl, options.ghostClass, false);
      $H54I$var$toggleClass($H54I$var$ghostEl, options.fallbackClass, true);
      $H54I$var$toggleClass($H54I$var$ghostEl, options.dragClass, true);
      $H54I$var$css($H54I$var$ghostEl, 'transition', '');
      $H54I$var$css($H54I$var$ghostEl, 'transform', '');
      $H54I$var$css($H54I$var$ghostEl, 'box-sizing', 'border-box');
      $H54I$var$css($H54I$var$ghostEl, 'margin', 0);
      $H54I$var$css($H54I$var$ghostEl, 'top', rect.top);
      $H54I$var$css($H54I$var$ghostEl, 'left', rect.left);
      $H54I$var$css($H54I$var$ghostEl, 'width', rect.width);
      $H54I$var$css($H54I$var$ghostEl, 'height', rect.height);
      $H54I$var$css($H54I$var$ghostEl, 'opacity', '0.8');
      $H54I$var$css($H54I$var$ghostEl, 'position', $H54I$var$PositionGhostAbsolutely ? 'absolute' : 'fixed');
      $H54I$var$css($H54I$var$ghostEl, 'zIndex', '100000');
      $H54I$var$css($H54I$var$ghostEl, 'pointerEvents', 'none');
      $H54I$export$default.ghost = $H54I$var$ghostEl;
      container.appendChild($H54I$var$ghostEl); // Set transform-origin

      $H54I$var$css($H54I$var$ghostEl, 'transform-origin', $H54I$var$tapDistanceLeft / parseInt($H54I$var$ghostEl.style.width) * 100 + '% ' + $H54I$var$tapDistanceTop / parseInt($H54I$var$ghostEl.style.height) * 100 + '%');
    }
  },
  _onDragStart: function _onDragStart(
  /**Event*/
  evt,
  /**boolean*/
  fallback) {
    var _this = this;

    var dataTransfer = evt.dataTransfer;
    var options = _this.options;
    $H54I$var$pluginEvent('dragStart', this, {
      evt: evt
    });

    if ($H54I$export$default.eventCanceled) {
      this._onDrop();

      return;
    }

    $H54I$var$pluginEvent('setupClone', this);

    if (!$H54I$export$default.eventCanceled) {
      $H54I$var$cloneEl = $H54I$var$clone($H54I$var$dragEl);
      $H54I$var$cloneEl.removeAttribute("id");
      $H54I$var$cloneEl.draggable = false;
      $H54I$var$cloneEl.style['will-change'] = '';

      this._hideClone();

      $H54I$var$toggleClass($H54I$var$cloneEl, this.options.chosenClass, false);
      $H54I$export$default.clone = $H54I$var$cloneEl;
    } // #1143: IFrame support workaround


    _this.cloneId = $H54I$var$_nextTick(function () {
      $H54I$var$pluginEvent('clone', _this);
      if ($H54I$export$default.eventCanceled) return;

      if (!_this.options.removeCloneOnHide) {
        $H54I$var$rootEl.insertBefore($H54I$var$cloneEl, $H54I$var$dragEl);
      }

      _this._hideClone();

      $H54I$var$_dispatchEvent({
        sortable: _this,
        name: 'clone'
      });
    });
    !fallback && $H54I$var$toggleClass($H54I$var$dragEl, options.dragClass, true); // Set proper drop events

    if (fallback) {
      $H54I$var$ignoreNextClick = true;
      _this._loopId = setInterval(_this._emulateDragOver, 50);
    } else {
      // Undo what was set in _prepareDragStart before drag started
      $H54I$var$off(document, 'mouseup', _this._onDrop);
      $H54I$var$off(document, 'touchend', _this._onDrop);
      $H54I$var$off(document, 'touchcancel', _this._onDrop);

      if (dataTransfer) {
        dataTransfer.effectAllowed = 'move';
        options.setData && options.setData.call(_this, dataTransfer, $H54I$var$dragEl);
      }

      $H54I$var$on(document, 'drop', _this); // #1276 fix:

      $H54I$var$css($H54I$var$dragEl, 'transform', 'translateZ(0)');
    }

    $H54I$var$awaitingDragStarted = true;
    _this._dragStartId = $H54I$var$_nextTick(_this._dragStarted.bind(_this, fallback, evt));
    $H54I$var$on(document, 'selectstart', _this);
    $H54I$var$moved = true;

    if ($H54I$var$Safari) {
      $H54I$var$css(document.body, 'user-select', 'none');
    }
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function _onDragOver(
  /**Event*/
  evt) {
    var el = this.el,
        target = evt.target,
        dragRect,
        targetRect,
        revert,
        options = this.options,
        group = options.group,
        activeSortable = $H54I$export$default.active,
        isOwner = $H54I$var$activeGroup === group,
        canSort = options.sort,
        fromSortable = $H54I$var$putSortable || activeSortable,
        vertical,
        _this = this,
        completedFired = false;

    if ($H54I$var$_silent) return;

    function dragOverEvent(name, extra) {
      $H54I$var$pluginEvent(name, _this, $H54I$var$_objectSpread2({
        evt: evt,
        isOwner: isOwner,
        axis: vertical ? 'vertical' : 'horizontal',
        revert: revert,
        dragRect: dragRect,
        targetRect: targetRect,
        canSort: canSort,
        fromSortable: fromSortable,
        target: target,
        completed: completed,
        onMove: function onMove(target, after) {
          return $H54I$var$_onMove($H54I$var$rootEl, el, $H54I$var$dragEl, dragRect, target, $H54I$var$getRect(target), evt, after);
        },
        changed: changed
      }, extra));
    } // Capture animation state


    function capture() {
      dragOverEvent('dragOverAnimationCapture');

      _this.captureAnimationState();

      if (_this !== fromSortable) {
        fromSortable.captureAnimationState();
      }
    } // Return invocation when dragEl is inserted (or completed)


    function completed(insertion) {
      dragOverEvent('dragOverCompleted', {
        insertion: insertion
      });

      if (insertion) {
        // Clones must be hidden before folding animation to capture dragRectAbsolute properly
        if (isOwner) {
          activeSortable._hideClone();
        } else {
          activeSortable._showClone(_this);
        }

        if (_this !== fromSortable) {
          // Set ghost class to new sortable's ghost class
          $H54I$var$toggleClass($H54I$var$dragEl, $H54I$var$putSortable ? $H54I$var$putSortable.options.ghostClass : activeSortable.options.ghostClass, false);
          $H54I$var$toggleClass($H54I$var$dragEl, options.ghostClass, true);
        }

        if ($H54I$var$putSortable !== _this && _this !== $H54I$export$default.active) {
          $H54I$var$putSortable = _this;
        } else if (_this === $H54I$export$default.active && $H54I$var$putSortable) {
          $H54I$var$putSortable = null;
        } // Animation


        if (fromSortable === _this) {
          _this._ignoreWhileAnimating = target;
        }

        _this.animateAll(function () {
          dragOverEvent('dragOverAnimationComplete');
          _this._ignoreWhileAnimating = null;
        });

        if (_this !== fromSortable) {
          fromSortable.animateAll();
          fromSortable._ignoreWhileAnimating = null;
        }
      } // Null lastTarget if it is not inside a previously swapped element


      if (target === $H54I$var$dragEl && !$H54I$var$dragEl.animated || target === el && !target.animated) {
        $H54I$var$lastTarget = null;
      } // no bubbling and not fallback


      if (!options.dragoverBubble && !evt.rootEl && target !== document) {
        $H54I$var$dragEl.parentNode[$H54I$var$expando]._isOutsideThisEl(evt.target); // Do not detect for empty insert if already inserted


        !insertion && $H54I$var$nearestEmptyInsertDetectEvent(evt);
      }

      !options.dragoverBubble && evt.stopPropagation && evt.stopPropagation();
      return completedFired = true;
    } // Call when dragEl has been inserted


    function changed() {
      $H54I$var$newIndex = $H54I$var$index($H54I$var$dragEl);
      $H54I$var$newDraggableIndex = $H54I$var$index($H54I$var$dragEl, options.draggable);
      $H54I$var$_dispatchEvent({
        sortable: _this,
        name: 'change',
        toEl: el,
        newIndex: $H54I$var$newIndex,
        newDraggableIndex: $H54I$var$newDraggableIndex,
        originalEvent: evt
      });
    }

    if (evt.preventDefault !== void 0) {
      evt.cancelable && evt.preventDefault();
    }

    target = $H54I$var$closest(target, options.draggable, el, true);
    dragOverEvent('dragOver');
    if ($H54I$export$default.eventCanceled) return completedFired;

    if ($H54I$var$dragEl.contains(evt.target) || target.animated && target.animatingX && target.animatingY || _this._ignoreWhileAnimating === target) {
      return completed(false);
    }

    $H54I$var$ignoreNextClick = false;

    if (activeSortable && !options.disabled && (isOwner ? canSort || (revert = $H54I$var$parentEl !== $H54I$var$rootEl) // Reverting item into the original list
    : $H54I$var$putSortable === this || (this.lastPutMode = $H54I$var$activeGroup.checkPull(this, activeSortable, $H54I$var$dragEl, evt)) && group.checkPut(this, activeSortable, $H54I$var$dragEl, evt))) {
      vertical = this._getDirection(evt, target) === 'vertical';
      dragRect = $H54I$var$getRect($H54I$var$dragEl);
      dragOverEvent('dragOverValid');
      if ($H54I$export$default.eventCanceled) return completedFired;

      if (revert) {
        $H54I$var$parentEl = $H54I$var$rootEl; // actualization

        capture();

        this._hideClone();

        dragOverEvent('revert');

        if (!$H54I$export$default.eventCanceled) {
          if ($H54I$var$nextEl) {
            $H54I$var$rootEl.insertBefore($H54I$var$dragEl, $H54I$var$nextEl);
          } else {
            $H54I$var$rootEl.appendChild($H54I$var$dragEl);
          }
        }

        return completed(true);
      }

      var elLastChild = $H54I$var$lastChild(el, options.draggable);

      if (!elLastChild || $H54I$var$_ghostIsLast(evt, vertical, this) && !elLastChild.animated) {
        // Insert to end of list
        // If already at end of list: Do not insert
        if (elLastChild === $H54I$var$dragEl) {
          return completed(false);
        } // if there is a last element, it is the target


        if (elLastChild && el === evt.target) {
          target = elLastChild;
        }

        if (target) {
          targetRect = $H54I$var$getRect(target);
        }

        if ($H54I$var$_onMove($H54I$var$rootEl, el, $H54I$var$dragEl, dragRect, target, targetRect, evt, !!target) !== false) {
          capture();

          if (elLastChild && elLastChild.nextSibling) {
            // the last draggable element is not the last node
            el.insertBefore($H54I$var$dragEl, elLastChild.nextSibling);
          } else {
            el.appendChild($H54I$var$dragEl);
          }

          $H54I$var$parentEl = el; // actualization

          changed();
          return completed(true);
        }
      } else if (elLastChild && $H54I$var$_ghostIsFirst(evt, vertical, this)) {
        // Insert to start of list
        var firstChild = $H54I$var$getChild(el, 0, options, true);

        if (firstChild === $H54I$var$dragEl) {
          return completed(false);
        }

        target = firstChild;
        targetRect = $H54I$var$getRect(target);

        if ($H54I$var$_onMove($H54I$var$rootEl, el, $H54I$var$dragEl, dragRect, target, targetRect, evt, false) !== false) {
          capture();
          el.insertBefore($H54I$var$dragEl, firstChild);
          $H54I$var$parentEl = el; // actualization

          changed();
          return completed(true);
        }
      } else if (target.parentNode === el) {
        targetRect = $H54I$var$getRect(target);
        var direction = 0,
            targetBeforeFirstSwap,
            differentLevel = $H54I$var$dragEl.parentNode !== el,
            differentRowCol = !$H54I$var$_dragElInRowColumn($H54I$var$dragEl.animated && $H54I$var$dragEl.toRect || dragRect, target.animated && target.toRect || targetRect, vertical),
            side1 = vertical ? 'top' : 'left',
            scrolledPastTop = $H54I$var$isScrolledPast(target, 'top', 'top') || $H54I$var$isScrolledPast($H54I$var$dragEl, 'top', 'top'),
            scrollBefore = scrolledPastTop ? scrolledPastTop.scrollTop : void 0;

        if ($H54I$var$lastTarget !== target) {
          targetBeforeFirstSwap = targetRect[side1];
          $H54I$var$pastFirstInvertThresh = false;
          $H54I$var$isCircumstantialInvert = !differentRowCol && options.invertSwap || differentLevel;
        }

        direction = $H54I$var$_getSwapDirection(evt, target, targetRect, vertical, differentRowCol ? 1 : options.swapThreshold, options.invertedSwapThreshold == null ? options.swapThreshold : options.invertedSwapThreshold, $H54I$var$isCircumstantialInvert, $H54I$var$lastTarget === target);
        var sibling;

        if (direction !== 0) {
          // Check if target is beside dragEl in respective direction (ignoring hidden elements)
          var dragIndex = $H54I$var$index($H54I$var$dragEl);

          do {
            dragIndex -= direction;
            sibling = $H54I$var$parentEl.children[dragIndex];
          } while (sibling && ($H54I$var$css(sibling, 'display') === 'none' || sibling === $H54I$var$ghostEl));
        } // If dragEl is already beside target: Do not insert


        if (direction === 0 || sibling === target) {
          return completed(false);
        }

        $H54I$var$lastTarget = target;
        $H54I$var$lastDirection = direction;
        var nextSibling = target.nextElementSibling,
            after = false;
        after = direction === 1;
        var moveVector = $H54I$var$_onMove($H54I$var$rootEl, el, $H54I$var$dragEl, dragRect, target, targetRect, evt, after);

        if (moveVector !== false) {
          if (moveVector === 1 || moveVector === -1) {
            after = moveVector === 1;
          }

          $H54I$var$_silent = true;
          setTimeout($H54I$var$_unsilent, 30);
          capture();

          if (after && !nextSibling) {
            el.appendChild($H54I$var$dragEl);
          } else {
            target.parentNode.insertBefore($H54I$var$dragEl, after ? nextSibling : target);
          } // Undo chrome's scroll adjustment (has no effect on other browsers)


          if (scrolledPastTop) {
            $H54I$var$scrollBy(scrolledPastTop, 0, scrollBefore - scrolledPastTop.scrollTop);
          }

          $H54I$var$parentEl = $H54I$var$dragEl.parentNode; // actualization
          // must be done before animation

          if (targetBeforeFirstSwap !== undefined && !$H54I$var$isCircumstantialInvert) {
            $H54I$var$targetMoveDistance = Math.abs(targetBeforeFirstSwap - $H54I$var$getRect(target)[side1]);
          }

          changed();
          return completed(true);
        }
      }

      if (el.contains($H54I$var$dragEl)) {
        return completed(false);
      }
    }

    return false;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function _offMoveEvents() {
    $H54I$var$off(document, 'mousemove', this._onTouchMove);
    $H54I$var$off(document, 'touchmove', this._onTouchMove);
    $H54I$var$off(document, 'pointermove', this._onTouchMove);
    $H54I$var$off(document, 'dragover', $H54I$var$nearestEmptyInsertDetectEvent);
    $H54I$var$off(document, 'mousemove', $H54I$var$nearestEmptyInsertDetectEvent);
    $H54I$var$off(document, 'touchmove', $H54I$var$nearestEmptyInsertDetectEvent);
  },
  _offUpEvents: function _offUpEvents() {
    var ownerDocument = this.el.ownerDocument;
    $H54I$var$off(ownerDocument, 'mouseup', this._onDrop);
    $H54I$var$off(ownerDocument, 'touchend', this._onDrop);
    $H54I$var$off(ownerDocument, 'pointerup', this._onDrop);
    $H54I$var$off(ownerDocument, 'touchcancel', this._onDrop);
    $H54I$var$off(document, 'selectstart', this);
  },
  _onDrop: function _onDrop(
  /**Event*/
  evt) {
    var el = this.el,
        options = this.options; // Get the index of the dragged element within its parent

    $H54I$var$newIndex = $H54I$var$index($H54I$var$dragEl);
    $H54I$var$newDraggableIndex = $H54I$var$index($H54I$var$dragEl, options.draggable);
    $H54I$var$pluginEvent('drop', this, {
      evt: evt
    });
    $H54I$var$parentEl = $H54I$var$dragEl && $H54I$var$dragEl.parentNode; // Get again after plugin event

    $H54I$var$newIndex = $H54I$var$index($H54I$var$dragEl);
    $H54I$var$newDraggableIndex = $H54I$var$index($H54I$var$dragEl, options.draggable);

    if ($H54I$export$default.eventCanceled) {
      this._nulling();

      return;
    }

    $H54I$var$awaitingDragStarted = false;
    $H54I$var$isCircumstantialInvert = false;
    $H54I$var$pastFirstInvertThresh = false;
    clearInterval(this._loopId);
    clearTimeout(this._dragStartTimer);
    $H54I$var$_cancelNextTick(this.cloneId);
    $H54I$var$_cancelNextTick(this._dragStartId); // Unbind events

    if (this.nativeDraggable) {
      $H54I$var$off(document, 'drop', this);
      $H54I$var$off(el, 'dragstart', this._onDragStart);
    }

    this._offMoveEvents();

    this._offUpEvents();

    if ($H54I$var$Safari) {
      $H54I$var$css(document.body, 'user-select', '');
    }

    $H54I$var$css($H54I$var$dragEl, 'transform', '');

    if (evt) {
      if ($H54I$var$moved) {
        evt.cancelable && evt.preventDefault();
        !options.dropBubble && evt.stopPropagation();
      }

      $H54I$var$ghostEl && $H54I$var$ghostEl.parentNode && $H54I$var$ghostEl.parentNode.removeChild($H54I$var$ghostEl);

      if ($H54I$var$rootEl === $H54I$var$parentEl || $H54I$var$putSortable && $H54I$var$putSortable.lastPutMode !== 'clone') {
        // Remove clone(s)
        $H54I$var$cloneEl && $H54I$var$cloneEl.parentNode && $H54I$var$cloneEl.parentNode.removeChild($H54I$var$cloneEl);
      }

      if ($H54I$var$dragEl) {
        if (this.nativeDraggable) {
          $H54I$var$off($H54I$var$dragEl, 'dragend', this);
        }

        $H54I$var$_disableDraggable($H54I$var$dragEl);
        $H54I$var$dragEl.style['will-change'] = ''; // Remove classes
        // ghostClass is added in dragStarted

        if ($H54I$var$moved && !$H54I$var$awaitingDragStarted) {
          $H54I$var$toggleClass($H54I$var$dragEl, $H54I$var$putSortable ? $H54I$var$putSortable.options.ghostClass : this.options.ghostClass, false);
        }

        $H54I$var$toggleClass($H54I$var$dragEl, this.options.chosenClass, false); // Drag stop event

        $H54I$var$_dispatchEvent({
          sortable: this,
          name: 'unchoose',
          toEl: $H54I$var$parentEl,
          newIndex: null,
          newDraggableIndex: null,
          originalEvent: evt
        });

        if ($H54I$var$rootEl !== $H54I$var$parentEl) {
          if ($H54I$var$newIndex >= 0) {
            // Add event
            $H54I$var$_dispatchEvent({
              rootEl: $H54I$var$parentEl,
              name: 'add',
              toEl: $H54I$var$parentEl,
              fromEl: $H54I$var$rootEl,
              originalEvent: evt
            }); // Remove event

            $H54I$var$_dispatchEvent({
              sortable: this,
              name: 'remove',
              toEl: $H54I$var$parentEl,
              originalEvent: evt
            }); // drag from one list and drop into another

            $H54I$var$_dispatchEvent({
              rootEl: $H54I$var$parentEl,
              name: 'sort',
              toEl: $H54I$var$parentEl,
              fromEl: $H54I$var$rootEl,
              originalEvent: evt
            });
            $H54I$var$_dispatchEvent({
              sortable: this,
              name: 'sort',
              toEl: $H54I$var$parentEl,
              originalEvent: evt
            });
          }

          $H54I$var$putSortable && $H54I$var$putSortable.save();
        } else {
          if ($H54I$var$newIndex !== $H54I$var$oldIndex) {
            if ($H54I$var$newIndex >= 0) {
              // drag & drop within the same list
              $H54I$var$_dispatchEvent({
                sortable: this,
                name: 'update',
                toEl: $H54I$var$parentEl,
                originalEvent: evt
              });
              $H54I$var$_dispatchEvent({
                sortable: this,
                name: 'sort',
                toEl: $H54I$var$parentEl,
                originalEvent: evt
              });
            }
          }
        }

        if ($H54I$export$default.active) {
          /* jshint eqnull:true */
          if ($H54I$var$newIndex == null || $H54I$var$newIndex === -1) {
            $H54I$var$newIndex = $H54I$var$oldIndex;
            $H54I$var$newDraggableIndex = $H54I$var$oldDraggableIndex;
          }

          $H54I$var$_dispatchEvent({
            sortable: this,
            name: 'end',
            toEl: $H54I$var$parentEl,
            originalEvent: evt
          }); // Save sorting

          this.save();
        }
      }
    }

    this._nulling();
  },
  _nulling: function _nulling() {
    $H54I$var$pluginEvent('nulling', this);
    $H54I$var$rootEl = $H54I$var$dragEl = $H54I$var$parentEl = $H54I$var$ghostEl = $H54I$var$nextEl = $H54I$var$cloneEl = $H54I$var$lastDownEl = $H54I$var$cloneHidden = $H54I$var$tapEvt = $H54I$var$touchEvt = $H54I$var$moved = $H54I$var$newIndex = $H54I$var$newDraggableIndex = $H54I$var$oldIndex = $H54I$var$oldDraggableIndex = $H54I$var$lastTarget = $H54I$var$lastDirection = $H54I$var$putSortable = $H54I$var$activeGroup = $H54I$export$default.dragged = $H54I$export$default.ghost = $H54I$export$default.clone = $H54I$export$default.active = null;
    $H54I$var$savedInputChecked.forEach(function (el) {
      el.checked = true;
    });
    $H54I$var$savedInputChecked.length = $H54I$var$lastDx = $H54I$var$lastDy = 0;
  },
  handleEvent: function handleEvent(
  /**Event*/
  evt) {
    switch (evt.type) {
      case 'drop':
      case 'dragend':
        this._onDrop(evt);

        break;

      case 'dragenter':
      case 'dragover':
        if ($H54I$var$dragEl) {
          this._onDragOver(evt);

          $H54I$var$_globalDragOver(evt);
        }

        break;

      case 'selectstart':
        evt.preventDefault();
        break;
    }
  },

  /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */
  toArray: function toArray() {
    var order = [],
        el,
        children = this.el.children,
        i = 0,
        n = children.length,
        options = this.options;

    for (; i < n; i++) {
      el = children[i];

      if ($H54I$var$closest(el, options.draggable, this.el, false)) {
        order.push(el.getAttribute(options.dataIdAttr) || $H54I$var$_generateId(el));
      }
    }

    return order;
  },

  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function sort(order, useAnimation) {
    var items = {},
        rootEl = this.el;
    this.toArray().forEach(function (id, i) {
      var el = rootEl.children[i];

      if ($H54I$var$closest(el, this.options.draggable, rootEl, false)) {
        items[id] = el;
      }
    }, this);
    useAnimation && this.captureAnimationState();
    order.forEach(function (id) {
      if (items[id]) {
        rootEl.removeChild(items[id]);
        rootEl.appendChild(items[id]);
      }
    });
    useAnimation && this.animateAll();
  },

  /**
   * Save the current sorting
   */
  save: function save() {
    var store = this.options.store;
    store && store.set && store.set(this);
  },

  /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */
  closest: function closest$1(el, selector) {
    return $H54I$var$closest(el, selector || this.options.draggable, this.el, false);
  },

  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function option(name, value) {
    var options = this.options;

    if (value === void 0) {
      return options[name];
    } else {
      var modifiedValue = $H54I$var$PluginManager.modifyOption(this, name, value);

      if (typeof modifiedValue !== 'undefined') {
        options[name] = modifiedValue;
      } else {
        options[name] = value;
      }

      if (name === 'group') {
        $H54I$var$_prepareGroup(options);
      }
    }
  },

  /**
   * Destroy
   */
  destroy: function destroy() {
    $H54I$var$pluginEvent('destroy', this);
    var el = this.el;
    el[$H54I$var$expando] = null;
    $H54I$var$off(el, 'mousedown', this._onTapStart);
    $H54I$var$off(el, 'touchstart', this._onTapStart);
    $H54I$var$off(el, 'pointerdown', this._onTapStart);

    if (this.nativeDraggable) {
      $H54I$var$off(el, 'dragover', this);
      $H54I$var$off(el, 'dragenter', this);
    } // Remove draggable attributes


    Array.prototype.forEach.call(el.querySelectorAll('[draggable]'), function (el) {
      el.removeAttribute('draggable');
    });

    this._onDrop();

    this._disableDelayedDragEvents();

    $H54I$var$sortables.splice($H54I$var$sortables.indexOf(this.el), 1);
    this.el = el = null;
  },
  _hideClone: function _hideClone() {
    if (!$H54I$var$cloneHidden) {
      $H54I$var$pluginEvent('hideClone', this);
      if ($H54I$export$default.eventCanceled) return;
      $H54I$var$css($H54I$var$cloneEl, 'display', 'none');

      if (this.options.removeCloneOnHide && $H54I$var$cloneEl.parentNode) {
        $H54I$var$cloneEl.parentNode.removeChild($H54I$var$cloneEl);
      }

      $H54I$var$cloneHidden = true;
    }
  },
  _showClone: function _showClone(putSortable) {
    if (putSortable.lastPutMode !== 'clone') {
      this._hideClone();

      return;
    }

    if ($H54I$var$cloneHidden) {
      $H54I$var$pluginEvent('showClone', this);
      if ($H54I$export$default.eventCanceled) return; // show clone at dragEl or original position

      if ($H54I$var$dragEl.parentNode == $H54I$var$rootEl && !this.options.group.revertClone) {
        $H54I$var$rootEl.insertBefore($H54I$var$cloneEl, $H54I$var$dragEl);
      } else if ($H54I$var$nextEl) {
        $H54I$var$rootEl.insertBefore($H54I$var$cloneEl, $H54I$var$nextEl);
      } else {
        $H54I$var$rootEl.appendChild($H54I$var$cloneEl);
      }

      if (this.options.group.revertClone) {
        this.animate($H54I$var$dragEl, $H54I$var$cloneEl);
      }

      $H54I$var$css($H54I$var$cloneEl, 'display', '');
      $H54I$var$cloneHidden = false;
    }
  }
};

function $H54I$var$_globalDragOver(
/**Event*/
evt) {
  if (evt.dataTransfer) {
    evt.dataTransfer.dropEffect = 'move';
  }

  evt.cancelable && evt.preventDefault();
}

function $H54I$var$_onMove(fromEl, toEl, dragEl, dragRect, targetEl, targetRect, originalEvent, willInsertAfter) {
  var evt,
      sortable = fromEl[$H54I$var$expando],
      onMoveFn = sortable.options.onMove,
      retVal; // Support for new CustomEvent feature

  if (window.CustomEvent && !$H54I$var$IE11OrLess && !$H54I$var$Edge) {
    evt = new CustomEvent('move', {
      bubbles: true,
      cancelable: true
    });
  } else {
    evt = document.createEvent('Event');
    evt.initEvent('move', true, true);
  }

  evt.to = toEl;
  evt.from = fromEl;
  evt.dragged = dragEl;
  evt.draggedRect = dragRect;
  evt.related = targetEl || toEl;
  evt.relatedRect = targetRect || $H54I$var$getRect(toEl);
  evt.willInsertAfter = willInsertAfter;
  evt.originalEvent = originalEvent;
  fromEl.dispatchEvent(evt);

  if (onMoveFn) {
    retVal = onMoveFn.call(sortable, evt, originalEvent);
  }

  return retVal;
}

function $H54I$var$_disableDraggable(el) {
  el.draggable = false;
}

function $H54I$var$_unsilent() {
  $H54I$var$_silent = false;
}

function $H54I$var$_ghostIsFirst(evt, vertical, sortable) {
  var rect = $H54I$var$getRect($H54I$var$getChild(sortable.el, 0, sortable.options, true));
  var spacer = 10;
  return vertical ? evt.clientX < rect.left - spacer || evt.clientY < rect.top && evt.clientX < rect.right : evt.clientY < rect.top - spacer || evt.clientY < rect.bottom && evt.clientX < rect.left;
}

function $H54I$var$_ghostIsLast(evt, vertical, sortable) {
  var rect = $H54I$var$getRect($H54I$var$lastChild(sortable.el, sortable.options.draggable));
  var spacer = 10;
  return vertical ? evt.clientX > rect.right + spacer || evt.clientX <= rect.right && evt.clientY > rect.bottom && evt.clientX >= rect.left : evt.clientX > rect.right && evt.clientY > rect.top || evt.clientX <= rect.right && evt.clientY > rect.bottom + spacer;
}

function $H54I$var$_getSwapDirection(evt, target, targetRect, vertical, swapThreshold, invertedSwapThreshold, invertSwap, isLastTarget) {
  var mouseOnAxis = vertical ? evt.clientY : evt.clientX,
      targetLength = vertical ? targetRect.height : targetRect.width,
      targetS1 = vertical ? targetRect.top : targetRect.left,
      targetS2 = vertical ? targetRect.bottom : targetRect.right,
      invert = false;

  if (!invertSwap) {
    // Never invert or create dragEl shadow when target movemenet causes mouse to move past the end of regular swapThreshold
    if (isLastTarget && $H54I$var$targetMoveDistance < targetLength * swapThreshold) {
      // multiplied only by swapThreshold because mouse will already be inside target by (1 - threshold) * targetLength / 2
      // check if past first invert threshold on side opposite of lastDirection
      if (!$H54I$var$pastFirstInvertThresh && ($H54I$var$lastDirection === 1 ? mouseOnAxis > targetS1 + targetLength * invertedSwapThreshold / 2 : mouseOnAxis < targetS2 - targetLength * invertedSwapThreshold / 2)) {
        // past first invert threshold, do not restrict inverted threshold to dragEl shadow
        $H54I$var$pastFirstInvertThresh = true;
      }

      if (!$H54I$var$pastFirstInvertThresh) {
        // dragEl shadow (target move distance shadow)
        if ($H54I$var$lastDirection === 1 ? mouseOnAxis < targetS1 + $H54I$var$targetMoveDistance // over dragEl shadow
        : mouseOnAxis > targetS2 - $H54I$var$targetMoveDistance) {
          return -$H54I$var$lastDirection;
        }
      } else {
        invert = true;
      }
    } else {
      // Regular
      if (mouseOnAxis > targetS1 + targetLength * (1 - swapThreshold) / 2 && mouseOnAxis < targetS2 - targetLength * (1 - swapThreshold) / 2) {
        return $H54I$var$_getInsertDirection(target);
      }
    }
  }

  invert = invert || invertSwap;

  if (invert) {
    // Invert of regular
    if (mouseOnAxis < targetS1 + targetLength * invertedSwapThreshold / 2 || mouseOnAxis > targetS2 - targetLength * invertedSwapThreshold / 2) {
      return mouseOnAxis > targetS1 + targetLength / 2 ? 1 : -1;
    }
  }

  return 0;
}
/**
 * Gets the direction dragEl must be swapped relative to target in order to make it
 * seem that dragEl has been "inserted" into that element's position
 * @param  {HTMLElement} target       The target whose position dragEl is being inserted at
 * @return {Number}                   Direction dragEl must be swapped
 */


function $H54I$var$_getInsertDirection(target) {
  if ($H54I$var$index($H54I$var$dragEl) < $H54I$var$index(target)) {
    return 1;
  } else {
    return -1;
  }
}
/**
 * Generate id
 * @param   {HTMLElement} el
 * @returns {String}
 * @private
 */


function $H54I$var$_generateId(el) {
  var str = el.tagName + el.className + el.src + el.href + el.textContent,
      i = str.length,
      sum = 0;

  while (i--) {
    sum += str.charCodeAt(i);
  }

  return sum.toString(36);
}

function $H54I$var$_saveInputCheckedState(root) {
  $H54I$var$savedInputChecked.length = 0;
  var inputs = root.getElementsByTagName('input');
  var idx = inputs.length;

  while (idx--) {
    var el = inputs[idx];
    el.checked && $H54I$var$savedInputChecked.push(el);
  }
}

function $H54I$var$_nextTick(fn) {
  return setTimeout(fn, 0);
}

function $H54I$var$_cancelNextTick(id) {
  return clearTimeout(id);
} // Fixed #973:


if ($H54I$var$documentExists) {
  $H54I$var$on(document, 'touchmove', function (evt) {
    if (($H54I$export$default.active || $H54I$var$awaitingDragStarted) && evt.cancelable) {
      evt.preventDefault();
    }
  });
} // Export utils


$H54I$export$default.utils = {
  on: $H54I$var$on,
  off: $H54I$var$off,
  css: $H54I$var$css,
  find: $H54I$var$find,
  is: function is(el, selector) {
    return !!$H54I$var$closest(el, selector, el, false);
  },
  extend: $H54I$var$extend,
  throttle: $H54I$var$throttle,
  closest: $H54I$var$closest,
  toggleClass: $H54I$var$toggleClass,
  clone: $H54I$var$clone,
  index: $H54I$var$index,
  nextTick: $H54I$var$_nextTick,
  cancelNextTick: $H54I$var$_cancelNextTick,
  detectDirection: $H54I$var$_detectDirection,
  getChild: $H54I$var$getChild
};
/**
 * Get the Sortable instance of an element
 * @param  {HTMLElement} element The element
 * @return {Sortable|undefined}         The instance of Sortable
 */

$H54I$export$default.get = function (element) {
  return element[$H54I$var$expando];
};
/**
 * Mount a plugin to Sortable
 * @param  {...SortablePlugin|SortablePlugin[]} plugins       Plugins being mounted
 */


$H54I$export$default.mount = function () {
  for (var _len = arguments.length, plugins = new Array(_len), _key = 0; _key < _len; _key++) {
    plugins[_key] = arguments[_key];
  }

  if (plugins[0].constructor === Array) plugins = plugins[0];
  plugins.forEach(function (plugin) {
    if (!plugin.prototype || !plugin.prototype.constructor) {
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(plugin));
    }

    if (plugin.utils) $H54I$export$default.utils = $H54I$var$_objectSpread2($H54I$var$_objectSpread2({}, $H54I$export$default.utils), plugin.utils);
    $H54I$var$PluginManager.mount(plugin);
  });
};
/**
 * Create sortable instance
 * @param {HTMLElement}  el
 * @param {Object}      [options]
 */


$H54I$export$default.create = function (el, options) {
  return new $H54I$export$default(el, options);
}; // Export


$H54I$export$default.version = $H54I$var$version;
var $H54I$var$autoScrolls = [],
    $H54I$var$scrollEl,
    $H54I$var$scrollRootEl,
    $H54I$var$scrolling = false,
    $H54I$var$lastAutoScrollX,
    $H54I$var$lastAutoScrollY,
    $H54I$var$touchEvt$1,
    $H54I$var$pointerElemChangedInterval;

function $H54I$var$AutoScrollPlugin() {
  function AutoScroll() {
    this.defaults = {
      scroll: true,
      forceAutoScrollFallback: false,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: true
    }; // Bind all private methods

    for (var fn in this) {
      if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
        this[fn] = this[fn].bind(this);
      }
    }
  }

  AutoScroll.prototype = {
    dragStarted: function dragStarted(_ref) {
      var originalEvent = _ref.originalEvent;

      if (this.sortable.nativeDraggable) {
        $H54I$var$on(document, 'dragover', this._handleAutoScroll);
      } else {
        if (this.options.supportPointer) {
          $H54I$var$on(document, 'pointermove', this._handleFallbackAutoScroll);
        } else if (originalEvent.touches) {
          $H54I$var$on(document, 'touchmove', this._handleFallbackAutoScroll);
        } else {
          $H54I$var$on(document, 'mousemove', this._handleFallbackAutoScroll);
        }
      }
    },
    dragOverCompleted: function dragOverCompleted(_ref2) {
      var originalEvent = _ref2.originalEvent; // For when bubbling is canceled and using fallback (fallback 'touchmove' always reached)

      if (!this.options.dragOverBubble && !originalEvent.rootEl) {
        this._handleAutoScroll(originalEvent);
      }
    },
    drop: function drop() {
      if (this.sortable.nativeDraggable) {
        $H54I$var$off(document, 'dragover', this._handleAutoScroll);
      } else {
        $H54I$var$off(document, 'pointermove', this._handleFallbackAutoScroll);
        $H54I$var$off(document, 'touchmove', this._handleFallbackAutoScroll);
        $H54I$var$off(document, 'mousemove', this._handleFallbackAutoScroll);
      }

      $H54I$var$clearPointerElemChangedInterval();
      $H54I$var$clearAutoScrolls();
      $H54I$var$cancelThrottle();
    },
    nulling: function nulling() {
      $H54I$var$touchEvt$1 = $H54I$var$scrollRootEl = $H54I$var$scrollEl = $H54I$var$scrolling = $H54I$var$pointerElemChangedInterval = $H54I$var$lastAutoScrollX = $H54I$var$lastAutoScrollY = null;
      $H54I$var$autoScrolls.length = 0;
    },
    _handleFallbackAutoScroll: function _handleFallbackAutoScroll(evt) {
      this._handleAutoScroll(evt, true);
    },
    _handleAutoScroll: function _handleAutoScroll(evt, fallback) {
      var _this = this;

      var x = (evt.touches ? evt.touches[0] : evt).clientX,
          y = (evt.touches ? evt.touches[0] : evt).clientY,
          elem = document.elementFromPoint(x, y);
      $H54I$var$touchEvt$1 = evt; // IE does not seem to have native autoscroll,
      // Edge's autoscroll seems too conditional,
      // MACOS Safari does not have autoscroll,
      // Firefox and Chrome are good

      if (fallback || this.options.forceAutoScrollFallback || $H54I$var$Edge || $H54I$var$IE11OrLess || $H54I$var$Safari) {
        $H54I$var$autoScroll(evt, this.options, elem, fallback); // Listener for pointer element change

        var ogElemScroller = $H54I$var$getParentAutoScrollElement(elem, true);

        if ($H54I$var$scrolling && (!$H54I$var$pointerElemChangedInterval || x !== $H54I$var$lastAutoScrollX || y !== $H54I$var$lastAutoScrollY)) {
          $H54I$var$pointerElemChangedInterval && $H54I$var$clearPointerElemChangedInterval(); // Detect for pointer elem change, emulating native DnD behaviour

          $H54I$var$pointerElemChangedInterval = setInterval(function () {
            var newElem = $H54I$var$getParentAutoScrollElement(document.elementFromPoint(x, y), true);

            if (newElem !== ogElemScroller) {
              ogElemScroller = newElem;
              $H54I$var$clearAutoScrolls();
            }

            $H54I$var$autoScroll(evt, _this.options, newElem, fallback);
          }, 10);
          $H54I$var$lastAutoScrollX = x;
          $H54I$var$lastAutoScrollY = y;
        }
      } else {
        // if DnD is enabled (and browser has good autoscrolling), first autoscroll will already scroll, so get parent autoscroll of first autoscroll
        if (!this.options.bubbleScroll || $H54I$var$getParentAutoScrollElement(elem, true) === $H54I$var$getWindowScrollingElement()) {
          $H54I$var$clearAutoScrolls();
          return;
        }

        $H54I$var$autoScroll(evt, this.options, $H54I$var$getParentAutoScrollElement(elem, false), false);
      }
    }
  };
  return $H54I$var$_extends(AutoScroll, {
    pluginName: 'scroll',
    initializeByDefault: true
  });
}

function $H54I$var$clearAutoScrolls() {
  $H54I$var$autoScrolls.forEach(function (autoScroll) {
    clearInterval(autoScroll.pid);
  });
  $H54I$var$autoScrolls = [];
}

function $H54I$var$clearPointerElemChangedInterval() {
  clearInterval($H54I$var$pointerElemChangedInterval);
}

var $H54I$var$autoScroll = $H54I$var$throttle(function (evt, options, rootEl, isFallback) {
  // Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=505521
  if (!options.scroll) return;
  var x = (evt.touches ? evt.touches[0] : evt).clientX,
      y = (evt.touches ? evt.touches[0] : evt).clientY,
      sens = options.scrollSensitivity,
      speed = options.scrollSpeed,
      winScroller = $H54I$var$getWindowScrollingElement();
  var scrollThisInstance = false,
      scrollCustomFn; // New scroll root, set scrollEl

  if ($H54I$var$scrollRootEl !== rootEl) {
    $H54I$var$scrollRootEl = rootEl;
    $H54I$var$clearAutoScrolls();
    $H54I$var$scrollEl = options.scroll;
    scrollCustomFn = options.scrollFn;

    if ($H54I$var$scrollEl === true) {
      $H54I$var$scrollEl = $H54I$var$getParentAutoScrollElement(rootEl, true);
    }
  }

  var layersOut = 0;
  var currentParent = $H54I$var$scrollEl;

  do {
    var el = currentParent,
        rect = $H54I$var$getRect(el),
        top = rect.top,
        bottom = rect.bottom,
        left = rect.left,
        right = rect.right,
        width = rect.width,
        height = rect.height,
        canScrollX = void 0,
        canScrollY = void 0,
        scrollWidth = el.scrollWidth,
        scrollHeight = el.scrollHeight,
        elCSS = $H54I$var$css(el),
        scrollPosX = el.scrollLeft,
        scrollPosY = el.scrollTop;

    if (el === winScroller) {
      canScrollX = width < scrollWidth && (elCSS.overflowX === 'auto' || elCSS.overflowX === 'scroll' || elCSS.overflowX === 'visible');
      canScrollY = height < scrollHeight && (elCSS.overflowY === 'auto' || elCSS.overflowY === 'scroll' || elCSS.overflowY === 'visible');
    } else {
      canScrollX = width < scrollWidth && (elCSS.overflowX === 'auto' || elCSS.overflowX === 'scroll');
      canScrollY = height < scrollHeight && (elCSS.overflowY === 'auto' || elCSS.overflowY === 'scroll');
    }

    var vx = canScrollX && (Math.abs(right - x) <= sens && scrollPosX + width < scrollWidth) - (Math.abs(left - x) <= sens && !!scrollPosX);
    var vy = canScrollY && (Math.abs(bottom - y) <= sens && scrollPosY + height < scrollHeight) - (Math.abs(top - y) <= sens && !!scrollPosY);

    if (!$H54I$var$autoScrolls[layersOut]) {
      for (var i = 0; i <= layersOut; i++) {
        if (!$H54I$var$autoScrolls[i]) {
          $H54I$var$autoScrolls[i] = {};
        }
      }
    }

    if ($H54I$var$autoScrolls[layersOut].vx != vx || $H54I$var$autoScrolls[layersOut].vy != vy || $H54I$var$autoScrolls[layersOut].el !== el) {
      $H54I$var$autoScrolls[layersOut].el = el;
      $H54I$var$autoScrolls[layersOut].vx = vx;
      $H54I$var$autoScrolls[layersOut].vy = vy;
      clearInterval($H54I$var$autoScrolls[layersOut].pid);

      if (vx != 0 || vy != 0) {
        scrollThisInstance = true;
        /* jshint loopfunc:true */

        $H54I$var$autoScrolls[layersOut].pid = setInterval(function () {
          // emulate drag over during autoscroll (fallback), emulating native DnD behaviour
          if (isFallback && this.layer === 0) {
            $H54I$export$default.active._onTouchMove($H54I$var$touchEvt$1); // To move ghost if it is positioned absolutely

          }

          var scrollOffsetY = $H54I$var$autoScrolls[this.layer].vy ? $H54I$var$autoScrolls[this.layer].vy * speed : 0;
          var scrollOffsetX = $H54I$var$autoScrolls[this.layer].vx ? $H54I$var$autoScrolls[this.layer].vx * speed : 0;

          if (typeof scrollCustomFn === 'function') {
            if (scrollCustomFn.call($H54I$export$default.dragged.parentNode[$H54I$var$expando], scrollOffsetX, scrollOffsetY, evt, $H54I$var$touchEvt$1, $H54I$var$autoScrolls[this.layer].el) !== 'continue') {
              return;
            }
          }

          $H54I$var$scrollBy($H54I$var$autoScrolls[this.layer].el, scrollOffsetX, scrollOffsetY);
        }.bind({
          layer: layersOut
        }), 24);
      }
    }

    layersOut++;
  } while (options.bubbleScroll && currentParent !== winScroller && (currentParent = $H54I$var$getParentAutoScrollElement(currentParent, false)));

  $H54I$var$scrolling = scrollThisInstance; // in case another function catches scrolling as false in between when it is not
}, 30);

var $H54I$var$drop = function drop(_ref) {
  var originalEvent = _ref.originalEvent,
      putSortable = _ref.putSortable,
      dragEl = _ref.dragEl,
      activeSortable = _ref.activeSortable,
      dispatchSortableEvent = _ref.dispatchSortableEvent,
      hideGhostForTarget = _ref.hideGhostForTarget,
      unhideGhostForTarget = _ref.unhideGhostForTarget;
  if (!originalEvent) return;
  var toSortable = putSortable || activeSortable;
  hideGhostForTarget();
  var touch = originalEvent.changedTouches && originalEvent.changedTouches.length ? originalEvent.changedTouches[0] : originalEvent;
  var target = document.elementFromPoint(touch.clientX, touch.clientY);
  unhideGhostForTarget();

  if (toSortable && !toSortable.el.contains(target)) {
    dispatchSortableEvent('spill');
    this.onSpill({
      dragEl: dragEl,
      putSortable: putSortable
    });
  }
};

function $H54I$var$Revert() {}

$H54I$var$Revert.prototype = {
  startIndex: null,
  dragStart: function dragStart(_ref2) {
    var oldDraggableIndex = _ref2.oldDraggableIndex;
    this.startIndex = oldDraggableIndex;
  },
  onSpill: function onSpill(_ref3) {
    var dragEl = _ref3.dragEl,
        putSortable = _ref3.putSortable;
    this.sortable.captureAnimationState();

    if (putSortable) {
      putSortable.captureAnimationState();
    }

    var nextSibling = $H54I$var$getChild(this.sortable.el, this.startIndex, this.options);

    if (nextSibling) {
      this.sortable.el.insertBefore(dragEl, nextSibling);
    } else {
      this.sortable.el.appendChild(dragEl);
    }

    this.sortable.animateAll();

    if (putSortable) {
      putSortable.animateAll();
    }
  },
  drop: $H54I$var$drop
};
$H54I$var$_extends($H54I$var$Revert, {
  pluginName: 'revertOnSpill'
});

function $H54I$var$Remove() {}

$H54I$var$Remove.prototype = {
  onSpill: function onSpill(_ref4) {
    var dragEl = _ref4.dragEl,
        putSortable = _ref4.putSortable;
    var parentSortable = putSortable || this.sortable;
    parentSortable.captureAnimationState();
    dragEl.parentNode && dragEl.parentNode.removeChild(dragEl);
    parentSortable.animateAll();
  },
  drop: $H54I$var$drop
};
$H54I$var$_extends($H54I$var$Remove, {
  pluginName: 'removeOnSpill'
});
var $H54I$var$lastSwapEl;
var $H54I$var$lastMultiDragSelect, // for selection with modifier key down (SHIFT)
$H54I$var$multiDragSortable, $H54I$var$dragEl$1, $H54I$var$clonesFromRect, $H54I$var$clonesHidden;
$H54I$export$default.mount(new $H54I$var$AutoScrollPlugin());
$H54I$export$default.mount($H54I$var$Remove, $H54I$var$Revert);
var $Focm$var$modals = ['streamsModal', 'genresModal', 'locationsModal', 'rssModal', 'deleteConfirmationModal', 'episodeStreamsModal', 'addItemModal', 'addCoverModal'];
$Focm$var$modals.forEach(function (modal) {
  var modalEl = document.getElementById(modal);
  if (!modalEl) return;
  var boostedModal = new $NlAe$export$Modal(modalEl);
  boostedModal.show();
});
var $Focm$var$sortableEl = document.getElementById('sortableItems');

if (!!$Focm$var$sortableEl) {
  $H54I$export$default.create($Focm$var$sortableEl, {
    animation: 150
  });
}
})();