"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[747],{747:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Search; }\n/* harmony export */ });\n/* harmony import */ var redom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(861);\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n\n\nvar Search = /*#__PURE__*/function () {\n  function Search(data, clients) {\n    var _this = this;\n\n    _classCallCheck(this, Search);\n\n    this.data = data;\n    this.clients = clients;\n    this.getComponent();\n    this.input.addEventListener('focus', function () {\n      _this.searchBox.style.display = 'block';\n\n      if (_this.input.value == '') {\n        _this.updateSearchBox();\n      }\n    }, true);\n    document.addEventListener('click', function (e) {\n      if (e.target != _this.input && !e.target.classList.contains(\"app-search__item\")) _this.searchBox.style.display = '';\n    });\n    this.input.addEventListener('input', function () {\n      if (_this.input.value != '') {\n        _this.search().then(function (data) {\n          _this.updateSearchBox(data);\n        });\n      } else _this.updateSearchBox();\n    });\n  }\n\n  _createClass(Search, [{\n    key: \"getComponent\",\n    value: function getComponent() {\n      var input = (0,redom__WEBPACK_IMPORTED_MODULE_0__.el)('input', {\n        class: 'app-search__input',\n        placeholder: 'Введите запрос'\n      });\n      var list = (0,redom__WEBPACK_IMPORTED_MODULE_0__.el)('ul.app-search__list');\n      var searchBox = (0,redom__WEBPACK_IMPORTED_MODULE_0__.el)('.app-search__box', list);\n      var form = (0,redom__WEBPACK_IMPORTED_MODULE_0__.el)('form', {\n        class: 'app-search'\n      }, input);\n      var component = (0,redom__WEBPACK_IMPORTED_MODULE_0__.el)('.app-search', [form, searchBox]);\n      this.component = component;\n      this.form = form;\n      this.input = input;\n      this.searchBox = searchBox;\n      this.list = list;\n      return {\n        component: component,\n        input: input,\n        list: list\n      };\n    }\n  }, {\n    key: \"getSearchItem\",\n    value: function getSearchItem(data) {\n      var name = (0,redom__WEBPACK_IMPORTED_MODULE_0__.el)('span', {\n        class: 'app-search__item--name'\n      });\n\n      if (typeof data.name === 'string') {\n        (0,redom__WEBPACK_IMPORTED_MODULE_0__/* .setAttr */ .fi)(name, {\n          innerText: data.name\n        });\n      } else {\n        (0,redom__WEBPACK_IMPORTED_MODULE_0__/* .mount */ .LI)(name, data.name);\n      }\n\n      var searchItem = (0,redom__WEBPACK_IMPORTED_MODULE_0__.el)('li', {\n        class: 'app-search__item',\n        tabIndex: 0\n      }, name);\n\n      if (data.search != undefined && data.search != false) {\n        (0,redom__WEBPACK_IMPORTED_MODULE_0__/* .setAttr */ .fi)(data.search, {\n          className: 'app-search__item--search'\n        });\n        (0,redom__WEBPACK_IMPORTED_MODULE_0__/* .mount */ .LI)(searchItem, data.search);\n      }\n\n      return searchItem;\n    }\n  }, {\n    key: \"updateSearchBox\",\n    value: function () {\n      var _updateSearchBox = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {\n        var dataLength, i, _el, name, item, _iterator, _step, _item, component;\n\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                if (data) {\n                  _context.next = 18;\n                  break;\n                }\n\n                this.list.innerHTML = '';\n                dataLength = this.data.length;\n                if (dataLength > 5) dataLength = 5;\n                i = 0;\n\n              case 5:\n                if (!(i < dataLength)) {\n                  _context.next = 16;\n                  break;\n                }\n\n                _el = this.data[i];\n                name = \"\".concat(_el.lastName, \" \").concat(_el.name, \" \").concat(_el.surname);\n                _context.next = 10;\n                return this.getSearchItem({\n                  name: name\n                });\n\n              case 10:\n                item = _context.sent;\n                this.searchEvents(item, this.clients[i]);\n                (0,redom__WEBPACK_IMPORTED_MODULE_0__/* .mount */ .LI)(this.list, item);\n\n              case 13:\n                i++;\n                _context.next = 5;\n                break;\n\n              case 16:\n                _context.next = 39;\n                break;\n\n              case 18:\n                this.list.innerHTML = '';\n                _iterator = _createForOfIteratorHelper(data);\n                _context.prev = 20;\n\n                _iterator.s();\n\n              case 22:\n                if ((_step = _iterator.n()).done) {\n                  _context.next = 31;\n                  break;\n                }\n\n                _item = _step.value;\n                _context.next = 26;\n                return this.getSearchItem({\n                  name: _item.name,\n                  search: _item.value\n                });\n\n              case 26:\n                component = _context.sent;\n                this.searchEvents(component, _item.client);\n                (0,redom__WEBPACK_IMPORTED_MODULE_0__/* .mount */ .LI)(this.list, component);\n\n              case 29:\n                _context.next = 22;\n                break;\n\n              case 31:\n                _context.next = 36;\n                break;\n\n              case 33:\n                _context.prev = 33;\n                _context.t0 = _context[\"catch\"](20);\n\n                _iterator.e(_context.t0);\n\n              case 36:\n                _context.prev = 36;\n\n                _iterator.f();\n\n                return _context.finish(36);\n\n              case 39:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this, [[20, 33, 36, 39]]);\n      }));\n\n      function updateSearchBox(_x) {\n        return _updateSearchBox.apply(this, arguments);\n      }\n\n      return updateSearchBox;\n    }()\n  }, {\n    key: \"searchEvents\",\n    value: function searchEvents(component, client) {\n      var _this2 = this;\n\n      component.addEventListener('click', function () {\n        _this2.searchBox.style.display = '';\n        client.classList.add('app-table__item--active');\n        setTimeout(function () {\n          client.classList.remove('app-table__item--active');\n        }, 1500);\n        client.scrollIntoView({\n          behavior: 'smooth',\n          block: 'start'\n        });\n      });\n      component.addEventListener('keydown', function (event) {\n        if (event.keyCode == 13) {\n          component.click();\n        }\n      });\n      component.addEventListener('mouseover', function () {\n        client.classList.add('app-table__item--active');\n      });\n      component.addEventListener('mouseout', function () {\n        if (_this2.searchBox.style.display == 'block') {\n          client.classList.remove('app-table__item--active');\n        }\n      });\n      this.form.addEventListener('submit', function (e) {\n        return e.preventDefault();\n      });\n    }\n  }, {\n    key: \"searchMark\",\n    value: function searchMark(str) {\n      var value = this.input.value.toLowerCase();\n      var pos = str.search(value);\n      var len = value.length;\n      return (0,redom__WEBPACK_IMPORTED_MODULE_0__.el)('span', [\"\".concat(str.slice(0, pos)), (0,redom__WEBPACK_IMPORTED_MODULE_0__.el)('mark', \"\".concat(str.slice(pos, pos + len))), str.slice(pos + len)]);\n    }\n  }, {\n    key: \"search\",\n    value: function () {\n      var _search = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {\n        var value, searchItems, index, element, name;\n        return regeneratorRuntime.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                value = \"\".concat(this.input.value).trim().toLowerCase();\n                searchItems = [];\n                _context2.t0 = regeneratorRuntime.keys(this.data);\n\n              case 3:\n                if ((_context2.t1 = _context2.t0()).done) {\n                  _context2.next = 12;\n                  break;\n                }\n\n                index = _context2.t1.value;\n\n                if (!(searchItems.length == 5)) {\n                  _context2.next = 7;\n                  break;\n                }\n\n                return _context2.abrupt(\"return\", searchItems);\n\n              case 7:\n                element = this.data[index];\n                name = \"\".concat(element.lastName, \" \").concat(element.name, \" \").concat(element.surname).toLowerCase();\n\n                if (name.search(value) != -1) {\n                  searchItems.push({\n                    name: this.searchMark(name),\n                    client: this.clients[index]\n                  });\n                } else if (element.id.search(value) != -1) {\n                  searchItems.push({\n                    name: name,\n                    client: this.clients[index],\n                    value: this.searchMark(element.id)\n                  });\n                }\n\n                _context2.next = 3;\n                break;\n\n              case 12:\n                return _context2.abrupt(\"return\", searchItems);\n\n              case 13:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2, this);\n      }));\n\n      function search() {\n        return _search.apply(this, arguments);\n      }\n\n      return search;\n    }()\n  }]);\n\n  return Search;\n}();\n\n\n\n//# sourceURL=webpack:///./classes/Search.ts?")}}]);