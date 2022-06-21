/*!For license information please see audima-widget.js.LICENSE.txt*/
(() => {
    var __webpack_modules__ = {
            1490: e => {
                e.exports = {
                    o_tv_foco: "www.otvfoco.com.br:isis-valverde-aparece-amamentando-o-filho-em-foto-encantadora:",
                    pediatra_online: "www.pediatraonline.com.br",
                    noticias_r7: "noticias.r7.com",
                    esportes_r7: "esportes.r7.com",
                    podcasts_r7: "podcasts.r7.com",
                    estudio_r7: "estudio.r7.com",
                    diversao_r7: "diversao.r7.com",
                    recordtv_r7: "recordtv.r7.com",
                    lifestyle_r7: "lifestyle.r7.com",
                    videos_r7: "videos.r7.com",
                    virtz_r7: "virtz.r7.com",
                    afazenda_r7: "afazenda.r7.com",
                    monitor7_r7: "monitor7.r7.com",
                    r7: "www.r7.com",
                    ava_uninove: "ava.uninove.br",
                    aluno_uninove: "aluno.uninove.br",
                    aapa_uninove: "aapa.uninove.br",
                    itau_cultural_homolog_1: "aws.homolog.inf.br",
                    itau_cultural_homolog_2: "www.aws.homolog.inf.br",
                    itau_cultural_homolog_3: "ocupacao.wp.h5.homolog.inf.br",
                    itau_cultural_homolog_4: "www.ocupacao.wp.h5.homolog.inf.br",
                    itau_cultural_prod_1: "www.itaucultural.org.br",
                    itau_cultural_prod_2: "itaucultural.org.br"
                }
            },
            3717: (e, a, t) => {
                function n(e) {
                    return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    })(e)
                }

                function o(e, a) {
                    var t;
                    if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                        if (Array.isArray(e) || (t = function(e, a) {
                                if (e) {
                                    if ("string" == typeof e) return i(e, a);
                                    var t = Object.prototype.toString.call(e).slice(8, -1);
                                    return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? i(e, a) : void 0
                                }
                            }(e)) || a && e && "number" == typeof e.length) {
                            t && (e = t);
                            var n = 0,
                                o = function() {};
                            return {
                                s: o,
                                n: function() {
                                    return n >= e.length ? {
                                        done: !0
                                    } : {
                                        done: !1,
                                        value: e[n++]
                                    }
                                },
                                e: function(e) {
                                    throw e
                                },
                                f: o
                            }
                        }
                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }
                    var r, s = !0,
                        l = !1;
                    return {
                        s: function() {
                            t = e[Symbol.iterator]()
                        },
                        n: function() {
                            var e = t.next();
                            return s = e.done, e
                        },
                        e: function(e) {
                            l = !0, r = e
                        },
                        f: function() {
                            try {
                                s || null == t.return || t.return()
                            } finally {
                                if (l) throw r
                            }
                        }
                    }
                }

                function i(e, a) {
                    (null == a || a > e.length) && (a = e.length);
                    for (var t = 0, n = new Array(a); t < a; t++) n[t] = e[t];
                    return n
                }
                e = t.nmd(e);
                var r = t(3367),
                    s = r.brazilianStates,
                    l = r.countries;

                function c(e, a, t) {
                    var n;
                    t = t || {}, this._uri = e, this._doc = a, this._articleTitle = null, this._articleByline = null, this._articleDir = null, this._attempts = [], this._debug = !!t.debug, this._maxElemsToParse = t.maxElemsToParse || this.DEFAULT_MAX_ELEMS_TO_PARSE, this._nbTopCandidates = t.nbTopCandidates || this.DEFAULT_N_TOP_CANDIDATES, this._charThreshold = t.charThreshold || this.DEFAULT_CHAR_THRESHOLD, this._classesToPreserve = this.CLASSES_TO_PRESERVE.concat(t.classesToPreserve || []), this._flags = this.FLAG_STRIP_UNLIKELYS | this.FLAG_WEIGHT_CLASSES | this.FLAG_CLEAN_CONDITIONALLY, this._debug ? (n = function(e) {
                        var a = e.nodeName + " ";
                        if (e.nodeType == e.TEXT_NODE) return a + '("' + e.textContent + '")';
                        var t = e.className && "." + e.className.replace(/ /g, "."),
                            n = "";
                        return e.id ? n = "(#" + e.id + t + ")" : t && (n = "(" + t + ")"), a + n
                    }, this.log = function() {
                        if ("undefined" != typeof dump) {
                            var e = Array.prototype.map.call(arguments, (function(e) {
                                return e && e.nodeName ? n(e) : e
                            })).join(" ");
                            dump("Reader: (Readability) " + e + "\n")
                        } else if ("undefined" != typeof console) {
                            var a = ["Reader: (Readability) "].concat(arguments);
                            console.log.apply(console, a)
                        }
                    }) : this.log = function() {}
                }
                c.prototype = {
                    FLAG_STRIP_UNLIKELYS: 1,
                    FLAG_WEIGHT_CLASSES: 2,
                    FLAG_CLEAN_CONDITIONALLY: 4,
                    DEFAULT_MAX_ELEMS_TO_PARSE: 0,
                    DEFAULT_N_TOP_CANDIDATES: 5,
                    DEFAULT_TAGS_TO_SCORE: "section,h2,h3,h4,h5,h6,p,td,pre".toUpperCase().split(","),
                    DEFAULT_CHAR_THRESHOLD: 500,
                    REGEXPS: {
                        unlikelyCandidates: /banner|breadcrumbs|combx|comment|community|cover-wrap|disqus|extra|foot|header|legends|menu|related|remark|replies|rss|shoutbox|sidebar|skyscraper|social|sponsor|supplemental|ad-break|agegate|pagination|pager|popup|yom-remote/i,
                        okMaybeItsACandidate: /and|article|body|column|main|shadow/i,
                        positive: /article|body|wrapper|content|entry|hentry|h-entry|main|page|pagination|post|text|blog|story/i,
                        negative: /hidden|^hid$| hid$| hid |^hid |banner|combx|comment|com-|contact|foot|footer|footnote|masthead|media|meta|outbrain|promo|related|scroll|share|shoutbox|sidebar|skyscraper|sponsor|shopping|tags|tool|widget/i,
                        extraneous: /print|archive|comment|discuss|e[\-]?mail|share|reply|all|login|sign|single|utility/i,
                        byline: /byline|author|dateline|writtenby|p-author/i,
                        replaceFonts: /<(\/?)font[^>]*>/gi,
                        normalize: /\s{2,}/g,
                        videos: /\/\/(www\.)?(dailymotion|youtube|youtube-nocookie|player\.vimeo)\.com/i,
                        nextLink: /(next|weiter|continue|>([^\|]|$)|»([^\|]|$))/i,
                        prevLink: /(prev|earl|old|new|<|«)/i,
                        whitespace: /^\s*$/,
                        hasContent: /\S$/
                    },
                    DIV_TO_P_ELEMS: ["A", "BLOCKQUOTE", "DL", "DIV", "IMG", "OL", "P", "PRE", "TABLE", "UL", "SELECT"],
                    ALTER_TO_DIV_EXCEPTIONS: ["DIV", "ARTICLE", "SECTION", "P"],
                    PRESENTATIONAL_ATTRIBUTES: ["align", "background", "bgcolor", "border", "cellpadding", "cellspacing", "frame", "hspace", "rules", "style", "valign", "vspace"],
                    DEPRECATED_SIZE_ATTRIBUTE_ELEMS: ["TABLE", "TH", "TD", "HR", "PRE"],
                    CLASSES_TO_PRESERVE: ["readability-styled", "page"],
                    _postProcessContent: function(e) {
                        this._fixRelativeUris(e), this._cleanClasses(e)
                    },
                    _removeNodes: function(e, a) {
                        for (var t = e.length - 1; t >= 0; t--) {
                            var n = e[t],
                                o = n.parentNode;
                            o && (a && !a.call(this, n, t, e) || o.removeChild(n))
                        }
                    },
                    _replaceNodeTags: function(e, a) {
                        for (var t = e.length - 1; t >= 0; t--) {
                            var n = e[t];
                            this._setNodeTag(n, a)
                        }
                    },
                    _forEachNode: function(e, a) {
                        Array.prototype.forEach.call(e, a, this)
                    },
                    _someNode: function(e, a) {
                        return Array.prototype.some.call(e, a, this)
                    },
                    _concatNodeLists: function() {
                        var e = Array.prototype.slice,
                            a = e.call(arguments),
                            t = a.map((function(a) {
                                return e.call(a)
                            }));
                        return Array.prototype.concat.apply([], t)
                    },
                    _getAllNodesWithTag: function(e, a) {
                        return e.querySelectorAll ? e.querySelectorAll(a.join(",")) : [].concat.apply([], a.map((function(a) {
                            var t = e.getElementsByTagName(a);
                            return Array.isArray(t) ? t : Array.from(t)
                        })))
                    },
                    _cleanClasses: function(e) {
                        var a = this._classesToPreserve,
                            t = (e.getAttribute("class") || "").split(/\s+/).filter((function(e) {
                                return -1 != a.indexOf(e)
                            })).join(" ");
                        for (t ? e.setAttribute("class", t) : e.removeAttribute("class"), e = e.firstElementChild; e; e = e.nextElementSibling) this._cleanClasses(e)
                    },
                    _fixRelativeUris: function(e) {
                        var a = this._doc.baseURI,
                            t = this._doc.documentURI;

                        function n(e) {
                            if (a == t && "#" == e.charAt(0)) return e;
                            try {
                                return new URL(e, a).href
                            } catch (e) {}
                            return e
                        }
                        var o = e.getElementsByTagName("a");
                        this._forEachNode(o, (function(e) {
                            var a = e.getAttribute("href");
                            if (a)
                                if (0 === a.indexOf("javascript:")) {
                                    var t = this._doc.createTextNode(e.textContent);
                                    e.parentNode.replaceChild(t, e)
                                } else e.setAttribute("href", n(a))
                        }));
                        var i = e.getElementsByTagName("img");
                        this._forEachNode(i, (function(e) {
                            var a = e.getAttribute("src");
                            a && e.setAttribute("src", n(a))
                        }))
                    },
                    _getArticleTitle: function() {
                        var e = this._doc,
                            a = "",
                            t = "";
                        try {
                            "string" != typeof(a = t = e.title) && (a = t = this._getInnerText(e.getElementsByTagName("title")[0]))
                        } catch (e) {}
                        var n = !1;

                        function o(e) {
                            return e.split(/\s+/).length
                        }
                        if (/ [\|\-\\\/>»] /.test(a)) n = / [\\\/>»] /.test(a), o(a = t.replace(/(.*)[\|\-\\\/>»] .*/gi, "$1")) < 3 && (a = t.replace(/[^\|\-\\\/>»]*[\|\-\\\/>»](.*)/gi, "$1"));
                        else if (-1 !== a.indexOf(": ")) {
                            var i = this._concatNodeLists(e.getElementsByTagName("h1"), e.getElementsByTagName("h2"));
                            this._someNode(i, (function(e) {
                                return e.textContent === a
                            })) || (o(a = t.substring(t.lastIndexOf(":") + 1)) < 3 ? a = t.substring(t.indexOf(":") + 1) : o(t.substr(0, t.indexOf(":"))) > 5 && (a = t))
                        } else if (a.length > 150 || a.length < 15) {
                            var r = e.getElementsByTagName("h1");
                            1 === r.length && (a = this._getInnerText(r[0]))
                        }
                        var s, l, c, m, u, d, h, g, b, p, w, y, f, k = o(a = a.trim());
                        if (k <= 4 && (!n || k != o(t.replace(/[\|\-\\\/>»]+/g, "")) - 1) && (a = t), "www.acritica.com" === window.location.hostname && (a = e.getElementsByTagName("H2")[0].innerHTML), "asws-servicehub-dev-brazilsouth001.azurewebsites.net" !== window.location.hostname && "www.asws-servicehub-dev-brazilsouth001.azurewebsites.net" !== window.location.hostname && "asws-servicehub-uat-brazilsouth001.azurewebsites.net" !== window.location.hostname && "www.asws-servicehub-uat-brazilsouth001.azurewebsites.net" !== window.location.hostname && "asws-servicehub-prod-brazilsouth001.azurewebsites.net" !== window.location.hostname && "www.asws-servicehub-prod-brazilsouth001.azurewebsites.net" !== window.location.hostname && "atendimento.electrolux.com.br" !== window.location.hostname && "www.atendimento.electrolux.com.br" !== window.location.hostname || (a = e.getElementsByClassName("title")[0].innerHTML), "estrategiaconcursos.com.br" !== window.location.hostname && "www.estrategiaconcursos.com.br" !== window.location.hostname || (a = e.getElementsByTagName("TITLE")[0].innerText), "fras-le.com" !== window.location.hostname && "www.fras-le.com" !== window.location.hostname || (a = e.getElementsByTagName("H1")[0].innerText), "dev.pleno.news" !== window.location.hostname && "pleno.news" !== window.location.hostname || (a = e.getElementsByTagName("H1")[0].innerHTML), "entretenimento.r7.com" === document.location.hostname && (a = document.getElementsByTagName("H1")[2] ? document.getElementsByTagName("H1")[2].innerHTML : document.getElementsByTagName("H1")[0].innerHTML), "www.noticiasagricolas.com.br" === document.location.hostname && (a = e.getElementsByTagName("H1")[0].innerHTML), "stage.allthingshair.com" !== document.location.hostname && "www.allthingshair.com" !== document.location.hostname || (a = e.getElementsByTagName("H1")[0].innerHTML), "omelete.com.br" !== document.location.hostname && "staging.omelete.com.br" !== document.location.hostname && "www.omelete.com.br" !== document.location.hostname && "www.staging.omelete.com.br" !== document.location.hostname || (a = e.getElementsByTagName("H1")[0].innerHTML), "theenemy.com.br" !== document.location.hostname && "staging.theenemy.com.br" !== document.location.hostname && "www.theenemy.com.br" !== document.location.hostname && "www.staging.theenemy.com.br" !== document.location.hostname || (a = e.getElementsByTagName("H1")[0].innerHTML), ("preprodbondinho.eleventickets.com" === document.location.hostname || "www.preprodbondinho.eleventickets.com" === document.location.hostname) && (a = e.getElementsByTagName("H3")[0] ? null === (s = e.getElementsByTagName("H3")[0]) || void 0 === s ? void 0 : s.innerText : a.replace(" - Site Oficial", "")), "ava.uninove.br" !== document.location.hostname && "aapa.uninove.br" !== document.location.hostname || (a = e.getElementsByTagName("H1")[0].innerHTML), "q.eletrobras.com" !== document.location.hostname && "eletrobras.com" !== document.location.hostname || (a = e.getElementsByTagName("H2")[1].innerText), "www.olharjuridico.com.br" !== document.location.hostname && "olharjuridico.com.br" !== document.location.hostname && "www.agroolhar.com.br" !== document.location.hostname && "agroolhar.com.br" !== document.location.hostname && "www.olhardireto.com.br" !== document.location.hostname && "olhardireto.com.br" !== document.location.hostname || (a = e.getElementsByTagName("H3")[0].innerHTML), "unimedfranca.com.br" !== document.location.hostname && "www.unimedfranca.com.br" !== document.location.hostname || (a = e.getElementsByTagName("H3")[0].innerHTML), "lavoz.com.ar" !== document.location.hostname && "www.lavoz.com.ar" !== document.location.hostname && "beta-arc.lavoz.com.ar" !== document.location.hostname && "www.beta-arc.lavoz.com.ar" !== document.location.hostname || (a = e.getElementsByTagName("H1")[0].innerHTML), "elespectador.com" !== document.location.hostname && "www.elespectador.com" !== document.location.hostname && "elespectador-el-espectador-sandbox.cdn.arcpublishing.com" !== document.location.hostname && "www.elespectador-el-espectador-sandbox.cdn.arcpublishing.com" !== document.location.hostname || (a = e.getElementsByTagName("H1")[0].innerHTML), "www.olharconceito.com.br" !== document.location.hostname && "olharconceito.com.br" !== document.location.hostname || (a = a.replace(":: Olhar Conceito", "")), "falleneamigos.com.br" !== document.location.hostname && "www.falleneamigos.com.br" !== document.location.hostname || (a = a.replace(": FALLEN & AMIGOS", "")), ("web.cnn.agilesvcs.com" === window.location.hostname || "www.cnnbrasil.com.br" === window.location.hostname || "staging-cnnbrasil.go-vip.net" === window.location.hostname || "web.homologation.cnn.agilesvcs.com" === window.location.hostname || "web-prod.cnn.agilesvcs.com" === window.location.hostname || "web-sandbox.cnn.agilesvcs.com" === window.location.hostname || "cnnbrasil.com.br" === window.location.hostname) && (a = (null === (l = e.getElementsByClassName("news-title")[0]) || void 0 === l ? void 0 : l.innerHTML) || (null === (c = e.querySelector("H1")) || void 0 === c ? void 0 : c.textContent)), "www.aberje.com.br" === window.location.hostname && (a = a.split("–")[0]), ("www.elliberal.com.ar" === window.location.hostname || "elliberal.com.ar" === window.location.hostname) && (a = null === (m = e.getElementsByTagName("h1")[0]) || void 0 === m ? void 0 : m.textContent), "intranet.espro.org.br" !== window.location.hostname && "intranet.hom.espro.org.br" !== window.location.hostname || (a = (null === (u = e.getElementsByTagName("h3")[0]) || void 0 === u ? void 0 : u.textContent) || t), "www.goiania.go.gov.br" !== window.location.hostname && "goiania.go.gov.br" !== window.location.hostname || (a = null === (d = e.getElementsByTagName("h1")[0]) || void 0 === d ? void 0 : d.textContent), "aws.homolog.inf.br" !== window.location.hostname && "www.aws.homolog.inf.br" !== window.location.hostname && "www.itaucultural.org.br" !== window.location.hostname && "itaucultural.org.br" !== window.location.hostname || !window.location.pathname.includes("/ocupacao/") || e.getElementsByTagName("h1")[0] || (a = null === (h = e.getElementsByTagName("h2")[0]) || void 0 === h ? void 0 : h.textContent), "ocupacao.wp.h5.homolog.inf.br" !== window.location.hostname && "www.ocupacao.wp.h5.homolog.inf.br" !== window.location.hostname || e.getElementsByTagName("h1")[0] || (a = null === (g = e.getElementsByTagName("h2")[0]) || void 0 === g ? void 0 : g.textContent), "valor.globo.com" !== window.location.hostname && "valor.qa.globoi.com" !== window.location.hostname || (a = e.getElementsByTagName("h1")[0].innerHTML + ". Valor Econômico."), "valorinveste.globo.com" !== window.location.hostname && "valorinveste.qa.globoi.com" !== window.location.hostname || (a = e.getElementsByTagName("h1")[0].innerHTML + ". Valor Investe."), "atendimento.consul.com.br" === window.location.hostname && (a = (null === (b = e.getElementsByClassName("title-primary -full-bg new-header")[0]) || void 0 === b ? void 0 : b.textContent) + ". ", a += null === (p = e.getElementsByClassName("title-purple")[0]) || void 0 === p ? void 0 : p.textContent), "noticiasdatv.uol.com.br" === window.location.hostname || "www.noticiasdatv.uol.com.br" === window.location.hostname) {
                            var v, _ = null === (v = e.getElementsByTagName("h1")[0]) || void 0 === v ? void 0 : v.textContent;
                            a = this._dictionary(_, /([\wÀ-ú-)]{3,}) x ([\wÀ-ú]{3,})/gm, "$1 contra $2")
                        }
                        if ("br-recepedia-com.netlify.app" !== window.location.hostname && "mx-recepedia-com.netlify.app" !== window.location.hostname && "br.recepedia.com" !== window.location.hostname && "mx.recepedia.com" !== window.location.hostname && "preview-3340--br-recepedia-com.netlify.app" !== window.location.hostname && "preview-3340--mx-recepedia-com.netlify.app" !== window.location.hostname && "dev--br-recepedia-com.netlify.app" !== window.location.hostname && "dev--mx-recepedia-com.netlify.app" !== window.location.hostname || (a = null === (w = e.getElementsByTagName("h1")[0]) || void 0 === w ? void 0 : w.textContent), "dev-med.estrategia.com" !== window.location.hostname && "med.estrategia.com" !== window.location.hostname && "vestibulares.estrategia.com" !== window.location.hostname && "dev-vestibulares.estrategia.com" !== window.location.hostname && "militares.estrategia.com" !== window.location.hostname && "dev-militares.estrategia.com" !== window.location.hostname || (a = null === (y = e.getElementsByTagName("h1")[0]) || void 0 === y ? void 0 : y.textContent), "seucreditodigital.com.br" !== window.location.hostname && "www.seucreditodigital.com.br" !== window.location.hostname || (a = null === (f = e.getElementsByTagName("h1")[0]) || void 0 === f ? void 0 : f.textContent), "sustentabilidade.petrobras.com.br" === window.location.hostname || "hmg-sustentabilidade.hotsitespetrobras.com.br" === window.location.hostname) {
                            var N = e.querySelector(".chapter").querySelector(".title");
                            a = N.textContent
                        }
                        return a
                    },
                    _prepDocument: function() {
                        var e = this._doc;
                        this._removeNodes(e.getElementsByTagName("style")), e.body && this._replaceBrs(e.body), this._replaceNodeTags(e.getElementsByTagName("font"), "SPAN")
                    },
                    _nextElement: function(e) {
                        for (var a = e; a && a.nodeType != Node.ELEMENT_NODE && this.REGEXPS.whitespace.test(a.textContent);) a = a.nextSibling;
                        return a
                    },
                    _replaceBrs: function(e) {
                        this._forEachNode(this._getAllNodesWithTag(e, ["br"]), (function(e) {
                            for (var a = e.nextSibling, t = !1;
                                (a = this._nextElement(a)) && "BR" == a.tagName;) {
                                t = !0;
                                var n = a.nextSibling;
                                a.parentNode.removeChild(a), a = n
                            }
                            if (t) {
                                var o = this._doc.createElement("p");
                                for (e.parentNode.replaceChild(o, e), a = o.nextSibling; a;) {
                                    if ("BR" == a.tagName) {
                                        var i = this._nextElement(a);
                                        if (i && "BR" == i.tagName) break
                                    }
                                    var r = a.nextSibling;
                                    o.appendChild(a), a = r
                                }
                            }
                        }))
                    },
                    _setNodeTag: function(e, a) {
                        if (this.log("_setNodeTag", e, a), e.__JSDOMParser__) return e.localName = a.toLowerCase(), e.tagName = a.toUpperCase(), e;
                        for (var t = e.ownerDocument.createElement(a); e.firstChild;) t.appendChild(e.firstChild);
                        e.parentNode.replaceChild(t, e), e.readability && (t.readability = e.readability);
                        for (var n = 0; n < e.attributes.length; n++) try {
                            t.setAttribute(e.attributes[n].name, e.attributes[n].value)
                        } catch (e) {}
                        return t
                    },
                    _prepArticle: function(e) {
                        this._cleanStyles(e), this._markDataTables(e), this._cleanConditionally(e, "form"), this._cleanConditionally(e, "fieldset"), this._clean(e, "object"), this._clean(e, "embed"), this._clean(e, "h1"), this._clean(e, "footer"), this._clean(e, "link"), this._forEachNode(e.children, (function(e) {
                            this._cleanMatchedNodes(e, /share/)
                        }));
                        var a = e.getElementsByTagName("h2");
                        if (1 === a.length) {
                            var t = (a[0].textContent.length - this._articleTitle.length) / this._articleTitle.length;
                            Math.abs(t) < .5 && (t > 0 ? a[0].textContent.includes(this._articleTitle) : this._articleTitle.includes(a[0].textContent)) && this._clean(e, "h2")
                        }
                        this._clean(e, "iframe"), this._clean(e, "input"), this._clean(e, "textarea"), this._clean(e, "select"), this._clean(e, "button"), this._clean(e, "audima-div"), this._clean(e, "audima-span"), this._clean(e, "audima-p"), this._cleanHeaders(e), this._cleanConditionally(e, "table"), this._cleanConditionally(e, "ul"), this._cleanConditionally(e, "div"), this._removeNodes(e.getElementsByTagName("p"), (function(e) {
                            var a = e.getElementsByTagName("img").length,
                                t = e.getElementsByTagName("embed").length,
                                n = e.getElementsByTagName("object").length,
                                o = e.getElementsByTagName("audima-div").length,
                                i = e.getElementsByTagName('audima-span"').length,
                                r = e.getElementsByTagName('audima-p"').length;
                            return 0 === a + t + n + e.getElementsByTagName("iframe").length + o + i + r && !this._getInnerText(e, !1)
                        })), this._forEachNode(this._getAllNodesWithTag(e, ["br"]), (function(e) {
                            var a = this._nextElement(e.nextSibling);
                            a && "P" == a.tagName && e.parentNode.removeChild(e)
                        }))
                    },
                    _initializeNode: function(e) {
                        switch (e.readability = {
                                contentScore: 0
                            }, e.tagName) {
                            case "DIV":
                                e.readability.contentScore += 5;
                                break;
                            case "PRE":
                            case "TD":
                            case "BLOCKQUOTE":
                                e.readability.contentScore += 3;
                                break;
                            case "ADDRESS":
                            case "OL":
                            case "UL":
                            case "DL":
                            case "DD":
                            case "DT":
                            case "LI":
                            case "FORM":
                                e.readability.contentScore -= 3;
                                break;
                            case "H1":
                            case "H2":
                            case "H3":
                            case "H4":
                            case "H5":
                            case "H6":
                            case "TH":
                                e.readability.contentScore -= 5
                        }
                        e.readability.contentScore += this._getClassWeight(e)
                    },
                    _removeAndGetNext: function(e) {
                        var a = this._getNextNode(e, !0);
                        return e.parentNode.removeChild(e), a
                    },
                    _getNextNode: function(e, a) {
                        if (!a && e.firstElementChild) return e.firstElementChild;
                        if (e.nextElementSibling) return e.nextElementSibling;
                        do {
                            e = e.parentNode
                        } while (e && !e.nextElementSibling);
                        return e && e.nextElementSibling
                    },
                    _getNextNodeNoElementProperties: function(e, a) {
                        function t(e) {
                            do {
                                e = e.nextSibling
                            } while (e && e.nodeType !== e.ELEMENT_NODE);
                            return e
                        }
                        if (!a && e.children[0]) return e.children[0];
                        var n = t(e);
                        if (n) return n;
                        do {
                            (e = e.parentNode) && (n = t(e))
                        } while (e && !n);
                        return e && n
                    },
                    _checkByline: function(e, a) {
                        if (this._articleByline) return !1;
                        if (void 0 !== e.getAttribute) var t = e.getAttribute("rel");
                        return !("author" !== t && !this.REGEXPS.byline.test(a) || !this._isValidByline(e.textContent) || (this._articleByline = e.textContent.trim(), 0))
                    },
                    _getNodeAncestors: function(e, a) {
                        a = a || 0;
                        for (var t = 0, n = []; e.parentNode && (n.push(e.parentNode), !a || ++t !== a);) e = e.parentNode;
                        return n
                    },
                    _insertPeriodAtTheEndOfAHeader: function(e) {
                        return e.replace(/([^\.?!])(<\/h1>|<\/h2>|<\/h3>|<\/h4>|<\/h5>|<\/h6>)/gm, "$1.$2 ")
                    },
                    _insertPeriodAtTheEndOfAList: function(e) {
                        return e.replace(/(<\/li>)/gm, ".$1 ")
                    },
                    _insertPeriodAtTheEndOfADt: function(e) {
                        return e.replace(/([^\:])(<\/dt>)/gm, "$1: $2 ")
                    },
                    _insertPeriodAtTheEndOfADd: function(e) {
                        return e.replace(/([^\.])(<\/dd>)/gm, "$1. $2 ")
                    },
                    _insertPeriodAtTheEndOfACell: function(e) {
                        return e.replace(/([^\.?!])(<\/th>|<\/td>)/gm, "$1 . $2 ")
                    },
                    _insertPeriodAtTheEndOfABlockquote: function(e) {
                        return e.replace(/([^\.?!])(<\/blockquote>)/gm, "$1.$2 ")
                    },
                    _insertPeriodAtTheEndOfABr: function(e) {
                        return e.replace(/([^\.?!])(<\/br>|<br>|<\/ br>)/gm, "$1.$2 ")
                    },
                    _insertPeriodAtTheEndOfADiv: function(e) {
                        return e.replace(/(\w+)(<\/div><\/?div)/gm, "$1. $2")
                    },
                    _insertSpaceAtTheEndOfABr: function(e) {
                        return e.replace(/([\.?!])(<\/br>|<br>|<\/ br>)/gm, "$1 $2 ")
                    },
                    _removeLinkFromTd: function(e) {
                        return e.replace(/<td><a /gm, "<td><c ").replace(/<\/a><\/td>/, "</c>")
                    },
                    _insertPeriodAtTheEndOfAParagraph: function(e) {
                        return e.replace(/([^\.?!:])(<\/p>)/gm, "$1.$2 ")
                    },
                    _removeSemicolonAtEndOfEachItem: function(e) {
                        return e.replace(/;/gm, "")
                    },
                    _removeEnbsp: function(e) {
                        return e.replace(/&nbsp;/gm, " ")
                    },
                    _dictionary: function(e, a, t) {
                        return e.replace(a, t)
                    },
                    _writeFullDate: function(e) {
                        return e.replace(/([^\/\d])(\d?\d)\/(\d\d?)([^\/\d])/gm, this._getDayAndMonth)
                    },
                    _getDayAndMonth: function(e, a, t, n, o) {
                        var i = 1 === Number(t) ? "primeiro" : Number(t),
                            r = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"][n - 1];
                        return "".concat(a).concat(i, " de ").concat(r).concat(o)
                    },
                    _grabArticle: function(e) {
                        var a = this;
                        this.log("**** grabArticle ****");
                        var t = this._doc,
                            n = null !== e;
                        if (!(e = e || this._doc.body)) return this.log("No body found in document. Abort."), null;
                        for (var i = e.innerHTML;;) {
                            var r, c = this._flagIsActive(this.FLAG_STRIP_UNLIKELYS),
                                m = [],
                                u = this._doc.documentElement,
                                d = 0;
                            if (e.querySelectorAll(".noreadme-audima").forEach((function(e) {
                                    e.innerHTML = ""
                                })), u.innerHTML = this._insertPeriodAtTheEndOfAHeader(u.innerHTML), "noticiasdatv.uol.com.br" !== window.location.hostname && "www.noticiasdatv.uol.com.br" !== window.location.hostname || (u.innerHTML = this._insertPeriodAtTheEndOfAList(u.innerHTML), u.innerHTML = this._insertPeriodAtTheEndOfACell(u.innerHTML), u.innerHTML = this._insertPeriodAtTheEndOfABlockquote(u.innerHTML), u.innerHTML = this._insertPeriodAtTheEndOfABr(u.innerHTML), u.innerHTML = this._insertPeriodAtTheEndOfAParagraph(u.innerHTML), u.innerHTML = this._writeFullDate(u.innerHTML), u.innerHTML = this._dictionary(u.innerHTML, /([\wÀ-ú-)]{3,}) x ([\wÀ-ú]{3,})/gm, "$1 contra $2"), u.innerHTML = this._dictionary(u.innerHTML, /(\d?\d)h(\d\d)/gm, "$1:$2"), u.innerHTML = this._dictionary(u.innerHTML, /(TV)(\.)/gm, "$1 $2"), u.innerHTML = this._dictionary(u.innerHTML, / -- /gm, ". "), Object.keys(s).forEach((function(e) {
                                    var t = new RegExp("([^\\w])".concat(e, "([^\\w])"), "gm");
                                    u.innerHTML = a._dictionary(u.innerHTML, t, "$1".concat(s[e], "$2"))
                                })), Object.keys(l).forEach((function(e) {
                                    var t = new RegExp("(".concat(e, ")"), "gm");
                                    u.innerHTML = a._dictionary(u.innerHTML, t, "".concat(l[e]))
                                }))), "mybest-brazil.com.br" !== document.location.hostname && "www.mybest-brazil.com.br" !== document.location.hostname || (t.querySelectorAll(".noreadme-audima").forEach((function(e) {
                                    e.innerHTML = ""
                                })), t.querySelectorAll(".c-badge-rank--default").forEach((function(e) {
                                    e.innerHTML = ". ".concat(e.textContent, ". ")
                                })), t.querySelectorAll(".c-badge-rank--bronze").forEach((function(e) {
                                    e.innerHTML = ". ".concat(e.textContent, ". ")
                                })), t.querySelectorAll(".c-badge-rank--silver").forEach((function(e) {
                                    e.innerHTML = ". ".concat(e.textContent, ". ")
                                })), t.querySelectorAll(".c-badge-rank--gold").forEach((function(e) {
                                    e.innerHTML = ". ".concat(e.textContent, ". ")
                                })), t.querySelectorAll(".c-panel__right>p").forEach((function(e) {
                                    e.innerHTML = "".concat(e.textContent, ". ")
                                })), t.querySelectorAll(".p-profile__position").forEach((function(e) {
                                    e.innerHTML = "".concat(e.textContent, ". ")
                                })), t.querySelectorAll(".p-profile__name").forEach((function(e) {
                                    e.innerHTML = "".concat(e.textContent, ". ")
                                })), u.innerHTML = this._insertPeriodAtTheEndOfAList(u.innerHTML), t.querySelector(".p-compare-spec.js-item-spec") && (t.querySelector(".p-compare-spec.js-item-spec").innerHTML = ""), t.querySelector(".p-profile.c-widget-sm") && (t.querySelector(".p-profile.c-widget-sm").innerHTML = ""), t.querySelector(".p-item-link") && (t.querySelector(".p-item-link").innerHTML = ""), t.querySelectorAll(".p-profile.c-widget-sm").forEach((function(e) {
                                    return e.innerHTML = ""
                                })), t.querySelectorAll(".c-badge--black").forEach((function(e) {
                                    return e.innerHTML = ""
                                })), t.querySelectorAll(".c-panel__left").forEach((function(e) {
                                    return e.innerHTML = ""
                                })), t.querySelectorAll(".c-panel__sub-text").forEach((function(e) {
                                    return e.innerHTML = ""
                                })), t.querySelectorAll(".c-panel__buttons").forEach((function(e) {
                                    return e.innerHTML = ""
                                })), t.querySelectorAll(".c-panel__spec").forEach((function(e) {
                                    return e.innerHTML = ""
                                })), t.querySelectorAll(".p-press__image-rel").forEach((function(e) {
                                    return e.innerHTML = ""
                                })), t.querySelectorAll(".p-press__link--external").forEach((function(e) {
                                    return e.innerHTML = ""
                                })), t.querySelectorAll(".p-sns").forEach((function(e) {
                                    return e.innerHTML = ""
                                }))), "br-recepedia-com.netlify.app" === window.location.hostname || "br.recepedia.com" === window.location.hostname || "preview-3340--br-recepedia-com.netlify.app" === window.location.hostname || "dev--br-recepedia-com.netlify.app" === window.location.hostname) {
                                u.innerHTML = this._insertPeriodAtTheEndOfADd(u.innerHTML), u.innerHTML = this._dictionary(u.innerHTML, /’/gm, "'"), t.querySelector("h1") && (t.querySelector("h1").innerHTML = ""), t.querySelector(".print--aligned-title") && (t.querySelector(".print--aligned-title").innerHTML = ""), t.querySelector(".recipe-ingredients__group-title") && (t.querySelector(".recipe-ingredients__group-title").innerHTML = ""), t.querySelector(".cooking-methods__group-title") && (t.querySelector(".cooking-methods__group-title").innerHTML = ""), t.querySelector(".ArticlePage-module--article-next--3EESu") && (t.querySelector(".ArticlePage-module--article-next--3EESu").innerHTML = ""), t.querySelectorAll(".recipe-attribute-card__label").forEach((function(e) {
                                    return e.innerHTML = ""
                                })), t.querySelectorAll(".social-sharing-in-modal").forEach((function(e) {
                                    return e.innerHTML = ""
                                })), t.querySelectorAll(".cooking-methods__group-item-counter").forEach((function(e) {
                                    return e.innerHTML = "\n".concat(e.textContent, "\n")
                                }));
                                var h = t.querySelector(".recipe-attributes");
                                h && (h.innerHTML = this._dictionary(h.innerHTML, /(pessoas|pessoa)/gm, " $1. ")), h && (h.innerHTML = this._dictionary(h.innerHTML, /(min)(s?)/gm, " $1uto$2."))
                            }
                            if ("mx-recepedia-com.netlify.app" === window.location.hostname || "mx.recepedia.com" === window.location.hostname || "preview-3340--mx-recepedia-com.netlify.app" === window.location.hostname || "dev--mx-recepedia-com.netlify.app" === window.location.hostname) {
                                u.innerHTML = this._insertPeriodAtTheEndOfADt(u.innerHTML), u.innerHTML = this._insertPeriodAtTheEndOfADd(u.innerHTML), t.querySelector(".cooking-methods__group-title") && (t.querySelector(".print--aligned-title").innerHTML = ""), t.querySelector(".button__label") && (t.querySelector(".button__label").innerHTML = ""), t.querySelector(".no-print") && (t.querySelector(".no-print").innerHTML = ""), t.querySelectorAll(".recipe-attribute-card__label").forEach((function(e) {
                                    return e.innerHTML = ""
                                })), t.querySelectorAll(".no-print").forEach((function(e) {
                                    return e.innerHTML = ""
                                })), t.querySelectorAll(".RecipeCopyIngredients-module--recipe-ingredients__group-title-hidden--3_eco").forEach((function(e) {
                                    return e.innerHTML = ""
                                })), t.querySelectorAll(".RecipeCookingMethod-module--cooking-methods__group-title-hidden--2wKQL").forEach((function(e) {
                                    return e.innerHTML = ""
                                })), t.querySelectorAll(".cooking-methods__group-item-counter").forEach((function(e) {
                                    return e.innerHTML = "\n".concat(e.textContent, "\n")
                                }));
                                var g = t.querySelector(".recipe-attributes");
                                g && (g.innerHTML = this._dictionary(g.innerHTML, /(personas|persona)/gim, " $1. ")), g && (g.innerHTML = this._dictionary(g.innerHTML, /min\./gim, " minutos. ")), u.innerHTML = this._dictionary(u.innerHTML, /([^\.])(<\/p>)/gm, "$1. $2"), u.innerHTML = this._dictionary(u.innerHTML, /°C./gm, "° C . ")
                            }
                            if ("elespectador.com" !== document.location.hostname && "www.elespectador.com" !== document.location.hostname && "elespectador-el-espectador-sandbox.cdn.arcpublishing.com" !== document.location.hostname && "www.elespectador-el-espectador-sandbox.cdn.arcpublishing.com" !== document.location.hostname || (u.innerHTML = this._dictionary(u.innerHTML, /\s%/gm, "%"), u.innerHTML = this._dictionary(u.innerHTML, /(\d)\.(\d)/gm, "$1$2"), u.innerHTML = this._dictionary(u.innerHTML, /(\d),(\d)/gm, "$1.$2")), "www.coca-coladeparaguay.com.py" !== window.location.hostname && "www.coca-coladeuruguay.com.uy" !== window.location.hostname && "www.coca-coladebolivia.com.bo" !== window.location.hostname && "www.cocacoladeargentina.com.ar" !== window.location.hostname && "www.cocacoladechile.cl" !== window.location.hostname || (u.innerHTML = this._dictionary(u.innerHTML, /(\d)\.(\d)/gm, "$1$2"), u.innerHTML = this._dictionary(u.innerHTML, /(\d),(\d)/gm, "$1.$2")), "www.msf.org.br" !== window.location.hostname && "msf.org.br" !== window.location.hostname && "hhh2.msf.org.br" !== window.location.hostname || e.querySelector("iframe") && e.querySelectorAll("iframe").forEach((function(e) {
                                    return e.innerHTML = ""
                                })), "www3.alerj.rj.gov.br" !== document.location.hostname && "www.alerj.rj.gov.br" !== document.location.hostname && "interteste2008" !== document.location.hostname && "interteste2008/lotus_notes/" !== document.location.hostname || (u.children[1].innerHTML = u.children[1].innerHTML.replace(/(<\/td>)/g, ". </td>")), "q.eletrobras.com" !== document.location.hostname && "eletrobras.com" !== document.location.hostname || (u.children[1].innerHTML = u.children[1].innerHTML.replace(/(<\/td>)/g, ". </td>")), "dev-med.estrategia.com" !== window.location.hostname && "med.estrategia.com" !== window.location.hostname && "vestibulares.estrategia.com" !== window.location.hostname && "dev-vestibulares.estrategia.com" !== window.location.hostname && "militares.estrategia.com" !== window.location.hostname && "dev-militares.estrategia.com" !== window.location.hostname || (e.querySelector(".cs-breadcrumbs") && (e.querySelector(".cs-breadcrumbs").innerHTML = ""), e.querySelector(".post-meta") && (e.querySelector(".post-meta").innerHTML = ""), e.querySelector("#voce-tambem-pode-se-interessar-por") && (e.querySelector("#voce-tambem-pode-se-interessar-por").innerHTML = ""), e.querySelector("#voce-tambem-pode-se-interessar-por") && (e.querySelector("#voce-tambem-pode-se-interessar-por").nextElementSibling.innerHTML = ""), e.querySelector("#h-voce-tambem-pode-se-interessar-por") && (e.querySelector("#h-voce-tambem-pode-se-interessar-por").innerHTML = ""), e.querySelector("#h-voce-tambem-pode-se-interessar-por") && (e.querySelector("#h-voce-tambem-pode-se-interessar-por").nextElementSibling.innerHTML = ""), e.querySelector(".author-description") && (e.querySelector(".author-description").innerHTML = ""), e.querySelector(".post-tags") && (e.querySelector(".post-tags").innerHTML = ""), e.querySelector(".wp-block-image") && (e.querySelector(".wp-block-image").innerHTML = ""), e.querySelector("figcaption") && e.querySelectorAll("figcaption").forEach((function(e) {
                                    e.innerHTML = ""
                                })), e.querySelector(".noreadme-audima") && e.querySelectorAll(".noreadme-audima").forEach((function(e) {
                                    e.innerHTML = ""
                                })), e.innerHTML = this._insertPeriodAtTheEndOfAHeader(e.innerHTML), e.innerHTML = this._insertPeriodAtTheEndOfACell(e.innerHTML), e.innerHTML = this._removeSemicolonAtEndOfEachItem(e.innerHTML), e.innerHTML = this._removeEnbsp(e.innerHTML), e.innerHTML = this._insertPeriodAtTheEndOfAList(e.innerHTML), e.innerHTML = this._writeFullDate(e.innerHTML), e.innerHTML = this._insertSpaceAtTheEndOfABr(e.innerHTML), e.innerHTML = this._removeLinkFromTd(e.innerHTML)), "folhetinsemilianos.com.br" !== window.location.hostname && "www.folhetinsemilianos.com.br" !== window.location.hostname || (e.querySelector("#header-wrapper") && (e.querySelector("#header-wrapper").innerHTML = ""), e.querySelector("#breadcrumb") && (e.querySelector("#breadcrumb").innerHTML = ""), e.querySelector(".align-right") && (e.querySelector(".align-right").innerHTML = ""), e.querySelector(".entry-labels") && (e.querySelector(".entry-labels").innerHTML = ""), e.querySelector(".newspot-pro-blog-post-comments") && (e.querySelector(".newspot-pro-blog-post-comments").innerHTML = ""), e.querySelector(".post-nav") && (e.querySelector(".post-nav").innerHTML = ""), e.querySelector("#sidebar-wrapper") && (e.querySelector("#sidebar-wrapper").innerHTML = ""), e.querySelector(".consent-text") && (e.querySelector(".consent-text").innerHTML = ""), e.querySelector(".consent-button") && (e.querySelector(".consent-button").innerHTML = ""), e.querySelector(".mm-footer") && (e.querySelector(".mm-footer").innerHTML = ""), e.querySelector(".mobile-menu") && (e.querySelector(".mobile-menu").innerHTML = ""), e.querySelector(".activity-links") && (e.querySelector(".activity-links").innerHTML = ""), t.getElementById("outer-wrapper").textContent = t.getElementById("outer-wrapper").textContent.replace("Formulário de contato", "")), "elespectador.com" !== window.location.hostname && "www.elespectador.com" !== window.location.hostname && "elespectador-el-espectador-sandbox.cdn.arcpublishing.com" !== window.location.hostname && "www.elespectador-el-espectador-sandbox.cdn.arcpublishing.com" !== window.location.hostname || (e.querySelector(".Header-TopBar") && (e.querySelector(".Header-TopBar").innerHTML = ""), e.querySelector("#fallBackAd") && (e.querySelector("#fallBackAd").innerHTML = ""), e.querySelector(".Breadcrumb-Container") && (e.querySelector(".Breadcrumb-Container").innerHTML = ""), e.querySelector(".ACredit-Author") && (e.querySelector(".ACredit-Author").innerHTML = ""), e.querySelector(".ImageArticle-ContainerText") && (e.querySelector(".ImageArticle-ContainerText").innerHTML = ""), e.querySelectorAll(".font--secondary").forEach((function(e) {
                                    return e.innerHTML = ""
                                })), t.querySelectorAll(".Datetime").forEach((function(e) {
                                    return e.innerHTML = ""
                                }))), "concremat.puracomunicacao.com.br" !== window.location.hostname && "wwwconcremat.puracomunicacao.com.br" !== window.location.hostname && "concremat.com.br" !== window.location.hostname && "www.concremat.com.br" !== window.location.hostname || (e.querySelector("#cookie-law-info-bar") && (e.querySelector("#cookie-law-info-bar").innerHTML = ""), e.querySelector(".cli-modal") && (e.querySelector(".cli-modal").innerHTML = ""), e.querySelector("#ajaxsearchlitesettings1") && (e.querySelector("#ajaxsearchlitesettings1").innerHTML = ""), e.querySelector(".cesis_transparent_header") && (e.querySelector(".cesis_transparent_header").innerHTML = ""), e.querySelector(".header_overlay ") && (e.querySelector(".header_overlay ").innerHTML = ""), e.querySelector(".menu-aberto") && (e.querySelector(".menu-aberto").innerHTML = ""), e.querySelector(".vc_custom_1647521822578") && (e.querySelector(".vc_custom_1647521822578").innerHTML = ""), t.querySelector("#mobile") && (t.querySelector("#mobile").innerHTML = ""), e.querySelectorAll(".sg-popup-builder-content").forEach((function(e) {
                                    return e.innerHTML = ""
                                }))), "fras-le.com" !== window.location.hostname && "www.fras-le.com" !== window.location.hostname || (e.querySelector("header") && (e.querySelector("header").innerHTML = ""), e.querySelector("h2") && (e.querySelector("h2").innerHTML = ""), e.querySelector(".header-interna ul") && (e.querySelector(".header-interna ul").innerHTML = "")), ("espro-sandbox.myopenlms.net" === window.location.hostname || "ead.espro.org.br" === window.location.hostname) && (t.querySelector(".edit-summary") && (t.querySelector(".edit-summary").innerHTML = ""), t.querySelector(".snap-move-note") && (t.querySelector(".snap-move-note").innerHTML = ""), t.querySelector("#snap-create-activity-0") && (t.querySelector("#snap-create-activity-0").innerHTML = ""), t.querySelector("#section-1") && (t.querySelector("#section-1").innerHTML = ""), t.querySelector("#section-2") && (t.querySelector("#section-2").innerHTML = ""), t.querySelector("#section-3") && (t.querySelector("#section-3").innerHTML = ""), t.querySelector("#section-4") && (t.querySelector("#section-4").innerHTML = ""), t.querySelector("#section-5") && (t.querySelector("#section-5").innerHTML = ""), t.querySelector("#coursetools") && (t.querySelector("#coursetools").innerHTML = ""), t.querySelectorAll(".snap-current-tag").forEach((function(e) {
                                    return e.innerHTML = ""
                                })), t.querySelectorAll(".asset-wrapper").forEach((function(e) {
                                    return e.innerHTML = ""
                                })), t.querySelectorAll(".snap-dropzone-label").forEach((function(e) {
                                    return e.innerHTML = ""
                                })), t.querySelectorAll(".text").forEach((function(e) {
                                    return e.innerHTML = ""
                                })), t.querySelectorAll(".snap-draft-tag").forEach((function(e) {
                                    return e.innerHTML = ""
                                })), t.getElementsByClassName("content")[0].textContent = null === (r = t.getElementsByClassName("content")[0]) || void 0 === r ? void 0 : r.textContent.replace(/Crie uma nova seção./gm, "")), "asws-servicehub-dev-brazilsouth001.azurewebsites.net" !== window.location.hostname && "www.asws-servicehub-dev-brazilsouth001.azurewebsites.net" !== window.location.hostname && "asws-servicehub-uat-brazilsouth001.azurewebsites.net" !== window.location.hostname && "www.asws-servicehub-uat-brazilsouth001.azurewebsites.net" !== window.location.hostname && "asws-servicehub-prod-brazilsouth001.azurewebsites.net" !== window.location.hostname && "www.asws-servicehub-prod-brazilsouth001.azurewebsites.net" !== window.location.hostname && "atendimento.electrolux.com.br" !== window.location.hostname && "www.atendimento.electrolux.com.br" !== window.location.hostname || (e.querySelector(".blue-block") && (e.querySelector(".blue-block").innerHTML = ""), e.querySelector(".menu-item") && (e.querySelector(".menu-item").innerHTML = ""), e.querySelector(".header-new-fixed") && (e.querySelector(".header-new-fixed").innerHTML = ""), e.querySelector(".breadcrumbcomponent") && (e.querySelector(".breadcrumbcomponent").innerHTML = ""), e.querySelector(".white-block") && (e.querySelector(".white-block").innerHTML = ""), e.querySelector(".sty") && (e.querySelector(".sty").innerHTML = ""), e.querySelector(".title") && (e.querySelector(".title").innerHTML = ""), e.querySelector(".title-3") && (e.querySelector(".title-3").innerHTML = ""), e.querySelector("#assistance") && (e.querySelector("#assistance").innerHTML = ""), e.querySelector(".talk-to-us-container") && (e.querySelector(".talk-to-us-container").innerHTML = ""), e.querySelectorAll(".likeArtc").forEach((function(e) {
                                    return e.innerHTML = ""
                                }))), "seucreditodigital.com.br" === window.location.hostname || "www.seucreditodigital.com.br" === window.location.hostname) {
                                var b, p, w, y, f, k, v, _, N, E, A, x, C, T;
                                e.querySelector(".single-featured") && (e.querySelector(".single-featured").innerHTML = "");
                                var S = null === (b = e.querySelector(".off-canvas-container")) || void 0 === b ? void 0 : b.outerHTML,
                                    z = null === (p = e.querySelector(".site-branding")) || void 0 === p ? void 0 : p.outerHTML,
                                    L = null === (w = e.querySelector("#main-navigation")) || void 0 === w ? void 0 : w.outerHTML,
                                    j = null === (y = e.querySelector(".site-title")) || void 0 === y ? void 0 : y.outerHTML,
                                    q = null === (f = e.querySelector(".post-header")) || void 0 === f ? void 0 : f.outerHTML,
                                    D = null === (k = e.querySelector(".bf-breadcrumb-items")) || void 0 === k ? void 0 : k.outerHTML,
                                    H = null === (v = e.querySelector(".more-stories")) || void 0 === v ? void 0 : v.outerHTML,
                                    B = null === (_ = e.querySelector(".heateor_ffc_facebook_comments_title")) || void 0 === _ ? void 0 : _.outerHTML,
                                    M = null === (N = e.querySelector(".rh-cover")) || void 0 === N ? void 0 : N.outerHTML,
                                    F = null === (E = e.querySelector(".post-author")) || void 0 === E ? void 0 : E.outerHTML,
                                    R = null === (A = e.querySelector(".author-title")) || void 0 === A ? void 0 : A.outerHTML,
                                    O = null === (x = e.querySelector(".post-author-bio")) || void 0 === x ? void 0 : x.outerHTML,
                                    I = null === (C = e.querySelector(".single-featured")) || void 0 === C ? void 0 : C.outerHTML,
                                    P = null === (T = e.querySelector(".entry-terms")) || void 0 === T ? void 0 : T.outerHTML;
                                e.querySelector(".term-badges ") && (e.querySelector(".term-badges ").innerHTML = ""), e.querySelector(".post-meta.single-post-meta") && (e.querySelector(".post-meta.single-post-meta").innerHTML = ""), e.querySelector(".next-prev-post.clearfix") && (e.querySelector(".next-prev-post.clearfix").innerHTML = ""), e.querySelector(".monsterinsights-popular-posts-widget") && (e.querySelector(".monsterinsights-popular-posts-widget").innerHTML = ""), e.querySelector(".heateorFfcClear") && (e.querySelector(".heateorFfcClear").previousSibling.previousElementSibling.innerHTML = ""), e.querySelector(".yqwahd-caption") && (e.querySelector(".yqwahd-caption").innerHTML = ""), e.querySelector(".lx_home_button") && (e.querySelector(".lx_home_button").innerHTML = ""), e.querySelector(".bs-irp.center.bs-irp-text-4-full") && (e.querySelector(".bs-irp.center.bs-irp-text-4-full").innerHTML = ""), e.querySelector(".more-stories-title") && (e.querySelector(".more-stories-title").innerHTML = ""), e.querySelector(".bs-pagination-wrapper") && (e.querySelector(".bs-pagination-wrapper").innerHTML = ""), e.querySelector(".bf-breadcrumb-items") && (e.querySelector(".bf-breadcrumb-items").innerHTML = ""), e.querySelector(".bs-irp") && (e.querySelector(".bs-irp").innerHTML = "");
                                var G = e.querySelector(".bs-irp");
                                G && (null == G || G.previousElementSibling.remove(), null == G || G.previousElementSibling.remove(), null == G || G.previousElementSibling.remove(), null == G || G.previousElementSibling.remove(), null == G || G.previousElementSibling.remove(), "É provável que você também goste:" === G.previousElementSibling.textContent && (null == G || G.previousElementSibling.remove()));
                                var U = new RegExp("(".concat(S, "|").concat(z, "|").concat(L, "|").concat(j, "|").concat(q, "|").concat(D, "|").concat(H, "|").concat(B, "|").concat(M, "|").concat(F, "|").concat(R, "|").concat(O, "|").concat(I, "|").concat(P, ")"), "gm");
                                e.innerHTML = this._dictionary(e.innerHTML, U, "")
                            }
                            if ("portaldogremista.com.br" === window.location.hostname || "www.portaldogremista.com.br" === window.location.hostname) {
                                var X, W, $, V, Y, K, J, Q, Z, ee;
                                e.innerHTML = this._insertPeriodAtTheEndOfAHeader(u.innerHTML);
                                var ae = null === (X = e.querySelector("title")) || void 0 === X || null === (W = X.textContent) || void 0 === W ? void 0 : W.replace(/(\?)/gm, "\\?"),
                                    te = null === ($ = e.querySelector(".bf-breadcrumb-end > span")) || void 0 === $ || null === (V = $.textContent) || void 0 === V ? void 0 : V.replace(/(\?)/gm, "\\?"),
                                    ne = null === (Y = e.querySelector(".site-description")) || void 0 === Y || null === (K = Y.textContent) || void 0 === K ? void 0 : K.replace(/(\?)/gm, "\\?"),
                                    oe = null === (J = e.querySelector(".post-author-bio > p")) || void 0 === J || null === (Q = J.textContent) || void 0 === Q ? void 0 : Q.replace(/(\?)/gm, "\\?"),
                                    ie = null === (Z = e.querySelector(".image-credit")) || void 0 === Z || null === (ee = Z.textContent) || void 0 === ee ? void 0 : ee.replace(/(\?)/gm, "\\?"),
                                    re = e.querySelectorAll(".noreadme-audima"),
                                    se = document.querySelectorAll(".bf-breadcrumb-item > a > span"),
                                    le = Array.from(re).reduce((function(e, a) {
                                        var t;
                                        return "".concat(null == a || null === (t = a.textContent) || void 0 === t ? void 0 : t.replace(/(\?)/gm, "\\?"), "|").concat(e)
                                    }), ""),
                                    ce = Array.from(se).reduce((function(e, a) {
                                        var t;
                                        return "".concat(null == a || null === (t = a.textContent) || void 0 === t ? void 0 : t.replace(/(\?)/gm, "\\?"), "|").concat(e)
                                    }), ""),
                                    me = new RegExp("(".concat(ae, "|").concat(te, "|").concat(ne, "|").concat(oe, "|").concat(ie, "|").concat(le).concat(ce, ")"), "gm");
                                e.innerHTML = this._dictionary(e.innerHTML, me, "")
                            }
                            for ("www.mattosfilho.com.br" !== window.location.hostname && "mattosfilho.com.br" !== window.location.hostname && "hm.mattosfilho.com.br" !== window.location.hostname || (e.querySelector(".wt-cli-cookie-bar-container") && (e.querySelector(".wt-cli-cookie-bar-container").innerHTML = ""), e.querySelector("header") && (e.querySelector("header").innerHTML = "")), "espro.org.br" !== window.location.hostname && "www.espro.org.br" !== window.location.hostname && "homologacao.espro.org.br" !== window.location.hostname && "www.homologacao.espro.org.br" !== window.location.hostname || (e.querySelector(".moove-gdpr-cookie-notice") && (e.querySelector(".moove-gdpr-cookie-notice").innerHTML = ""), e.querySelector("#strict-necessary-cookies") && (e.querySelector("#strict-necessary-cookies").innerHTML = ""), e.querySelector("#privacy_overview") && (e.querySelector("#privacy_overview").innerHTML = "".padEnd(300, "'"))), "sustentabilidade.petrobras.com.br" !== window.location.hostname && "hmg-sustentabilidade.hotsitespetrobras.com.br" !== window.location.hostname || (e.querySelector("#xpcc_quickAccessNav") && (e.querySelector("#xpcc_quickAccessNav").innerHTML = ""), u.querySelector("#xpcc_quickAccessNav") && (u.querySelector("#xpcc_quickAccessNav").innerHTML = ""), e.querySelector("#xprw_quickAccessNav") && (e.querySelector("#xprw_quickAccessNav").innerHTML = ""), u.querySelector("#xprw_quickAccessNav") && (u.querySelector("#xprw_quickAccessNav").innerHTML = ""), e.querySelector("#page-out") && (e.querySelector("#page-out").innerHTML = ""), u.querySelector("#page-out") && (u.querySelector("#page-out").innerHTML = ""), e.querySelector(".quick-access-nav") && (e.querySelector(".quick-access-nav").innerHTML = ""), u.querySelector(".quick-access-nav") && (u.querySelector(".quick-access-nav").innerHTML = ""), e.querySelector("#fragment-2-pmjd") && (e.querySelector("#fragment-2-pmjd").innerHTML = ""), u.querySelector("#fragment-2-pmjd") && (u.querySelector("#fragment-2-pmjd").innerHTML = ""), e.querySelector(".hide-accessible") && e.querySelectorAll(".hide-accessible").forEach((function(e) {
                                    return e.innerHTML = ""
                                })), u.querySelector(".hide-accessible") && u.querySelectorAll(".hide-accessible").forEach((function(e) {
                                    return e.innerHTML = ""
                                })), u.innerHTML = this._dictionary(u.innerHTML, /\u200B/gm, "")), "mosaicbr.levisssd.com" !== window.location.hostname && "www.mosaicbr.levisssd.com" !== window.location.hostname && "mosaicco.com.br" !== window.location.hostname && "www.mosaicco.com.br" !== window.location.hostname || (t.getElementsByClassName("bodyContent")[0].textContent = t.getElementsByClassName("bodyContent")[0].textContent.replace(/(Results Per Page|(10|20|30|50|100|200|400|500)\n)/gm, "")); u;) {
                                var ue, de, he = u.className + " " + u.id;
                                if ("www3.alerj.rj.gov.br" === document.location.hostname || "interteste2008" === document.location.hostname || "interteste2008/lotus_notes/" === document.location.hostname || "www.alerj.rj.gov.br" === document.location.hostname) {
                                    if ("TABLE" === u.tagName) {
                                        var ge = t.getElementsByClassName("interna")[0];
                                        (je = t.createElement("p")).textContent = u.textContent, je.style.display = "inline", je.className = "readability-styled", ge.insertBefore(je, ge[ge.childNodes.length])
                                    }
                                    if ("B" === u.tagName) {
                                        var be, pe, we = t.getElementsByClassName("interna")[0];
                                        void 0 !== (null === (be = u.childNodes[0].childNodes[0].childNodes[0]) || void 0 === be ? void 0 : be.textContent) && -1 !== (null === (pe = u.childNodes[0].childNodes[0].childNodes[0]) || void 0 === pe ? void 0 : pe.textContent).indexOf("Atalho") && ((je = t.createElement("p")).textContent = u.textContent, je.style.display = "inline", je.className = "readability-styled", we.insertBefore(je, we[we.childNodes.length]))
                                    }
                                }
                                if (("web.cnn.agilesvcs.com" === window.location.hostname || "www.cnnbrasil.com.br" === window.location.hostname || "staging-cnnbrasil.go-vip.net" === window.location.hostname || "web.homologation.cnn.agilesvcs.com" === window.location.hostname || "web-prod.cnn.agilesvcs.com" === window.location.hostname || "web-sandbox.cnn.agilesvcs.com" === window.location.hostname || "cnnbrasil.com.br" === window.location.hostname) && "ARTICLE" === u.tagName) {
                                    var ye, fe, ke = t.createElement("p");
                                    ke.textContent = null === (ye = u.children[0]) || void 0 === ye || null === (fe = ye.children[1]) || void 0 === fe ? void 0 : fe.textContent, ke.style.display = "inline", ke.className = "readability-styled", u.prepend(ke)
                                }
                                if (("elespectador.com" === document.location.hostname || "www.elespectador.com" === document.location.hostname || "elespectador-el-espectador-sandbox.cdn.arcpublishing.com" === document.location.hostname || "www.elespectador-el-espectador-sandbox.cdn.arcpublishing.com" === document.location.hostname) && "ArticleHeader-Hook" === u.className) {
                                    var ve = t.createElement("p");
                                    ve.textContent = u.textContent, ve.style.display = "inline", ve.className = "readability-styled", t.getElementsByTagName("ARTICLE")[0].insertAdjacentElement("afterbegin", ve)
                                }
                                if (("espro.org.br" === document.location.hostname || "www.espro.org.br" === document.location.hostname || "homologacao.espro.org.br" === document.location.hostname || "www.homologacao.espro.org.br" === document.location.hostname) && "H1" === u.tagName) {
                                    var _e = t.createElement("p");
                                    _e.textContent = u.textContent, _e.style.display = "inline", _e.className = "readability-styled", t.getElementsByClassName("main-content-sec")[0].insertAdjacentElement("afterbegin", _e)
                                }
                                if (("espro.org.br" === document.location.hostname || "www.espro.org.br" === document.location.hostname || "homologacao.espro.org.br" === document.location.hostname || "www.homologacao.espro.org.br" === document.location.hostname) && "dv-banner" === u.className) {
                                    var Ne = t.createElement("p");
                                    Ne.textContent = u.textContent, Ne.style.display = "inline", Ne.className = "readability-styled", t.getElementsByClassName("container")[0].insertAdjacentElement("afterbegin", Ne)
                                }
                                if ("brasil.estadao.com.br" === document.location.hostname && "ARTICLE" === u.tagName) {
                                    ge = u.childNodes[3].textContent;
                                    (je = t.createElement("p")).textContent = ge, je.style.display = "inline", je.className = "readability-styled", (ge = t.getElementsByClassName("n--noticia__content content")[0]).insertAdjacentElement("afterbegin", je)
                                }
                                if (("autenticaint.vivo.com.br" === document.location.hostname || "intranet.telefonica.com.br" === document.location.hostname || "intranet-hmlstg.telefonica.com.br" === document.location.hostname || "intranet-hml.telefonica.com.br" === document.location.hostname || "stg.intranet.telefonica.com.br" === document.location.hostname) && "container interna-content event-favorite" === u.className) {
                                    ge = null === (Ee = t.getElementsByClassName("conteudo")[0].childNodes[1].childNodes[1].childNodes[1]) || void 0 === Ee ? void 0 : Ee.textContent;
                                    var Ee, Ae = t.createElement("p");
                                    Ae.textContent = ge, Ae.style.display = "inline", Ae.className = "readability-styled", (ge = t.getElementsByClassName("conteudo")[0]).insertAdjacentElement("afterbegin", Ae)
                                }
                                if ("ava.uninove.br" !== document.location.hostname && "aapa.uninove.br" !== document.location.hostname || "col-sm-9" !== u.className || (ge = t.getElementById("objetivoTopico").textContent, (je = t.createElement("p")).textContent = ge, je.style.display = "inline", je.className = "readability-styled", (ge = t.getElementsByClassName("col-xs-12  caixaTexto bloco gc-marca-texto tp-padding")[0]).insertAdjacentElement("afterbegin", je)), "box.novaescola.org.br" === document.location.hostname && "content" === u.id) ge = t.getElementsByTagName("h2")[0].textContent, (je = t.createElement("p")).textContent = ge, je.style.display = "inline", je.className = "readability-styled", null === (de = ge = t.getElementsByClassName("col-xl-8 offset-xl-2 col-lg-8 offset-lg-2 col-md-12 col-sm-12 content")[0]) || void 0 === de || de.insertAdjacentElement("afterbegin", je);
                                if ("epocanegocios.globo.com" !== document.location.hostname && "revistapegn.globo.com" !== document.location.hostname || "featured-text" !== u.className || (ge = t.getElementsByTagName("h2")[0].textContent, (je = t.createElement("p")).textContent = ge, je.style.display = "inline", je.className = "readability-styled", (ge = t.getElementsByClassName("protected-content")[0]).insertAdjacentElement("afterbegin", je)), "asws-servicehub-dev-brazilsouth001.azurewebsites.net" !== document.location.hostname && "www.asws-servicehub-dev-brazilsouth001.azurewebsites.net" !== document.location.hostname && "asws-servicehub-uat-brazilsouth001.azurewebsites.net" !== document.location.hostname && "www.asws-servicehub-uat-brazilsouth001.azurewebsites.net" !== document.location.hostname && "asws-servicehub-prod-brazilsouth001.azurewebsites.net" !== document.location.hostname && "www.asws-servicehub-prod-brazilsouth001.azurewebsites.net" !== document.location.hostname && "atendimento.electrolux.com.br" !== document.location.hostname && "www.atendimento.electrolux.com.br" !== document.location.hostname || "main-content" !== u.id || (ge = null === (ue = t.getElementsByClassName("subtitle")[0]) || void 0 === ue ? void 0 : ue.textContent) && ((je = t.createElement("p")).textContent = ge, je.style.display = "inline", je.className = "readability-styled", (ge = t.getElementById("article-body")).insertAdjacentElement("beforebegin", je)), "mosaicbr.levisssd.com" !== window.location.hostname && "www.mosaicbr.levisssd.com" !== window.location.hostname && "mosaicco.com.br" !== window.location.hostname && "www.mosaicco.com.br" !== window.location.hostname || "/%C3%81reas-de-Atua%C3%A7%C3%A3o" !== window.location.pathname && "/Áreas-de-Atuação" !== window.location.pathname && "/Instituto-Mosaic" !== window.location.pathname && "/Carreiras" !== window.location.pathname && "/Nossos-Princ%C3%ADpios" !== window.location.pathname && "/Nossos-Princípio" !== window.location.pathname && "/Oportunidade" !== window.location.pathname && "/Contato" !== window.location.pathname && "/Clientes" !== window.location.pathname && "/Documentos-e-links-%C3%BAteis" !== window.location.pathname && "/Documentos-e-links-Úteis" !== window.location.pathname || "pageText" !== u.className || (ge = t.getElementsByClassName("bodyContent")[0].textContent, (je = t.createElement("p")).textContent = ge, je.style.display = "inline", je.className = "readability-styled", (ge = t.getElementsByClassName("cookies-popup")[0]).insertAdjacentElement("afterend", je)), "vogue.globo.com" === document.location.hostname && "featured-text" === u.className && t.getElementsByTagName("h2").length >= 1 && (ge = t.getElementsByTagName("h2")[0].textContent, (je = t.createElement("p")).textContent = ge, je.style.display = "inline", je.className = "readability-styled", (ge = t.getElementsByClassName("protected-content")[0]).insertAdjacentElement("afterbegin", je)), ("valor.globo.com" === window.location.hostname || "valor.qa.globoi.com" === window.location.hostname) && "mc-column content-text active-extra-styles" === u.className && d < 1) {
                                    var xe, Ce = t.getElementsByClassName("content-head__subtitle");
                                    (je = t.createElement("p")).textContent = null === (xe = Ce[0]) || void 0 === xe ? void 0 : xe.textContent, je.style.display = "inline", je.className = "readability-styled", u.insertAdjacentElement("afterbegin", je), d++
                                }
                                if ("portal.fgv.br" === window.location.hostname && "block-views-eventos-block-9" === u.id && (ge = t.getElementById("content-wrapper"), (je = t.createElement("p")).textContent = u.textContent, je.style.display = "inline", je.className = "readability-styled", ge.parentNode.insertBefore(je, ge.nextSibling)), ("lunetas.com.br" === window.location.hostname || "www.lunetas.com.br" === window.location.hostname || "h1.lunetas.com.br" === window.location.hostname || "www.h1.lunetas.com.br" === window.location.hostname) && "single single-page" === u.className) {
                                    var Te = u.childNodes[1].childNodes[1].childNodes[1].childNodes[5].textContent + ".",
                                        Se = u.childNodes[5].textContent.replace(/\./g, "/") + ".",
                                        ze = u.childNodes[7].childNodes[1].childNodes[3];
                                    (je = t.createElement("p")).textContent = Te + Se, je.style.display = "inline", je.className = "readability-styled", ze.insertAdjacentElement("afterbegin", je)
                                }
                                if (("entretenimento.r7.com" === document.location.hostname || "recordtv.r7.com" === document.location.hostname || "afazenda.r7.com" === document.location.hostname) && "toolkit-subtitle mt-5" === u.className) {
                                    var Le = u.innerHTML;
                                    (je = t.createElement("p")).textContent = Le.replace("&nbsp;", ""), je.style.display = "inline", je.className = "readability-styled", (ge = t.getElementsByClassName("toolkit-media-content")[0]).insertAdjacentElement("afterbegin", je)
                                }
                                if ("rsvponline.mx" !== document.location.hostname && "www.rsvponline.mx" !== document.location.hostname && "melodijolola.com" !== document.location.hostname && "www.melodijolola.com" !== document.location.hostname && "m.melodijolola.com" !== document.location.hostname && "www.m.melodijolola.com" !== document.location.hostname && "local.melodijolola.com" !== document.location.hostname && "www.local.melodijolola.com" !== document.location.hostname && "melodijolola.jediteam.mx" !== document.location.hostname && "www.melodijolola.jediteam.mx" !== document.location.hostname && "lola.jediteam.mx" !== document.location.hostname && "www.lola.jediteam.mx" !== document.location.hostname || "signature" !== u.id || (ge = t.getElementsByClassName("collection-item avatar")[0].textContent, (je = t.createElement("p")).textContent = ge, je.style.display = "inline", je.className = "readability-styled", (ge = t.getElementsByClassName("text_suscripcion")[0]).insertAdjacentElement("beforebegin", je)), this._checkByline(u, he)) u = this._removeAndGetNext(u);
                                else if (c && this.REGEXPS.unlikelyCandidates.test(he) && !this.REGEXPS.okMaybeItsACandidate.test(he) && "BODY" !== u.tagName && "A" !== u.tagName) this.log("Removing unlikely candidate - " + he), u = this._removeAndGetNext(u);
                                else if ("espro.org.br" !== document.location.hostname && "www.espro.org.br" !== document.location.hostname && "homologacao.espro.org.br" !== document.location.hostname && "www.homologacao.espro.org.br" !== document.location.hostname || "moove_gdpr_cookie_modal" !== u.id)
                                    if ("autenticaint.vivo.com.br" !== document.location.hostname && "intranet.telefonica.com.br" !== document.location.hostname && "intranet-hmlstg.telefonica.com.br" !== document.location.hostname && "intranet-hml.telefonica.com.br" !== document.location.hostname && "stg.intranet.telefonica.com.br" !== document.location.hostname || "interna-content__titulo" !== u.className)
                                        if ("lavoz.com.ar" !== window.location.hostname && "www.lavoz.com.ar" !== window.location.hostname || !u.className.includes("noreadme-audima"))
                                            if ("string" == typeof u.className && u.className.includes("noreadme-audima")) u = this._removeAndGetNext(u);
                                            else if ("portaldogremista.com.br" !== window.location.hostname && "www.portaldogremista.com.br" !== window.location.hostname || "post-url post-title" !== u.className)
                                    if ("www.blend-edu.com" !== window.location.hostname && "blend-edu.com" !== window.location.hostname || "js-skip-links" !== u.id)
                                        if ("www.abc.com.py" !== window.location.hostname && "abc.com.py" !== window.location.hostname && "abccolor-abccolor-sandbox.cdn.arcpublishing.com" !== window.location.hostname && "www.abccolor-abccolor-sandbox.cdn.arcpublishing.com" !== window.location.hostname || "article-embed" !== u.className)
                                            if ("www.blend-edu.com" !== window.location.hostname && "blend-edu.com" !== window.location.hostname || "< voltar para o blog" !== u.textContent && "content u-center-elements--mobile" !== u.className)
                                                if ("noticiasdatv.uol.com.br" !== window.location.hostname && "www.noticiasdatv.uol.com.br" !== window.location.hostname || "wrapper_comentarios" !== u.className && "my-4" !== u.className && "copyright_text copyright" !== u.className)
                                                    if ("audima.co" !== document.location.hostname || "/player/coca-cola/" !== document.location.pathname || "Footer-module__footerRights--3wPJf" !== u.className)
                                                        if ("melodijolola.jediteam.mx" !== window.location.hostname && "www.melodijolola.jediteam.mx" !== window.location.hostname || "description-img hide-on-med-and-down" !== u.className && "signature" !== u.id && "collection-item avatar" !== u.className)
                                                            if ("cebds.org" !== document.location.hostname || "H5" !== u.tagName || "Autor: " !== u.childNodes[0].data && -1 === u.childNodes[0].data.indexOf("Data:"))
                                                                if ("atribuna.com.br" !== document.location.hostname && "www.atribuna.com.br" !== document.location.hostname && "qa.atribuna.com.br" !== document.location.hostname && "www.qa.atribuna.com.br" !== document.location.hostname || "tiit" !== u.className)
                                                                    if ("mosaicbr.levisssd.com" !== window.location.hostname && "www.mosaicbr.levisssd.com" !== window.location.hostname && "mosaicco.com.br" !== window.location.hostname && "www.mosaicco.com.br" !== window.location.hostname || "/%C3%81reas-de-Atua%C3%A7%C3%A3o" !== window.location.pathname && "/Áreas-de-Atuação" !== window.location.pathname && "/Instituto-Mosaic" !== window.location.pathname && "/Carreiras" !== window.location.pathname && "/Nossos-Princ%C3%ADpios" !== window.location.pathname && "/Nossos-Princípios" !== window.location.pathname && "/Oportunidade" !== window.location.pathname && "/Contato" !== window.location.pathname && "/Clientes" !== window.location.pathname && "/Documentos-e-links-%C3%BAteis" !== window.location.pathname && "/Documentos-e-links-Úteis" !== window.location.pathname || "cookies-popup" !== u.className && "pageText" !== u.className)
                                                                        if ("vogue.globo.com" !== document.location.hostname && "epocanegocios.globo.com" !== document.location.hostname && "revistapegn.globo.com" !== document.location.hostname || "ASIDE" !== u.tagName)
                                                                            if ("preprodbondinho.eleventickets.com" !== document.location.hostname && "www.preprodbondinho.eleventickets.com" !== document.location.hostname || "H3" !== u.tagName)
                                                                                if ("portal.ap.gov.br" !== document.location.hostname && "www.portal.ap.gov.br" !== document.location.hostname || "titulo_noticia" !== u.className)
                                                                                    if ("www.brastemp.com.br" !== window.location.hostname && "brastemp.com.br" !== window.location.hostname || "wdgt-contact-brastemp" !== u.className)
                                                                                        if ("estrategiaconcursos.com.br" !== window.location.hostname && "www.estrategiaconcursos.com.br" !== window.location.hostname || "comment-item" !== u.className)
                                                                                            if ("valorinveste.globo.com" !== window.location.hostname && "valorinveste.qa.globoi.com" !== window.location.hostname || "mc-bottom" !== u.className)
                                                                                                if ("istoe.com.br" !== document.location.hostname || "credits" !== u.className && "A" !== u.tagName && "H3" !== u.tagName)
                                                                                                    if ("ava.uninove.br" !== document.location.hostname && "aapa.uninove.br" !== document.location.hostname || "gc-div-legenda-objeto" !== u.className)
                                                                                                        if ("www3.alerj.rj.gov.br" !== document.location.hostname && "interteste2008" !== document.location.hostname && "interteste2008/lotus_notes/" !== document.location.hostname && "www.alerj.rj.gov.br" !== document.location.hostname || "inferior interna" !== u.className)
                                                                                                            if ("www.metropoles.com" !== window.location.hostname && "hom.metropoles.com" !== window.location.hostname || "svg" !== u.tagName && -1 === u.className.indexOf("new-carousel") && -1 === u.className.indexOf("m-carousel-post") && -1 === u.className.indexOf("comment_face") && -1 === u.className.indexOf("OUTBRAIN") && -1 === u.className.indexOf("ob-smartfeed-wrapper") && "BUTTON" !== u.tagName && "the_tags" !== u.id)
                                                                                                                if ("tucnews.com.br" !== window.location.hostname || "about_the_author" !== u.id && "boombox_comments" !== u.id && "H5" !== u.tagName && "ASIDE" !== u.tagName && "TIME" !== u.tagName && "NAV" !== u.tagName && -1 === u.className.indexOf("bb-reading-time") && -1 === u.className.indexOf("bb-reaction-box") && -1 === u.className.indexOf("bb-author-vcard-mini") && "author" !== u.className && "post_related" !== u.className && "post_more" !== u.className && "comment-respond" !== u.className)
                                                                                                                    if ("www.acritica.com" !== window.location.hostname || "mb-ads" !== u.className && "sharing-block" !== u.className && "category-tp-1" !== u.className && "post-main-overlay legend" !== u.className)
                                                                                                                        if ("dev.pleno.news" !== window.location.hostname && "pleno.news" !== window.location.hostname || "breadcrumb" !== u.className && "leiamais" !== u.className && "ad-recommended" !== u.className && "messenger-text" !== u.className && "conheca-whatsapp" !== u.className && "fb-comments" !== u.className && "aside" !== u.className && "latest-news" !== u.className)
                                                                                                                            if ("www.tribunadonorte.com.br" !== window.location.hostname || "H3" !== u.tagName)
                                                                                                                                if ("audima.co" !== document.location.hostname || "/player/natura/" !== document.location.pathname || "BenefitBar_text__3EUSB" !== u.className && "Text_text__2Uyix SetPostalCode_description__2wUcl" !== u.className && "index_row__1Cckb" !== u.className && "yv-box-gray" !== u.className && "H3" !== u.tagName && "SetPostalCode_content__1Fzwv" !== u.className && "SingleProduct_code__2702x" !== u.className)
                                                                                                                                    if ("q.eletrobras.com" !== document.location.hostname && "eletrobras.com" !== document.location.hostname || -1 === u.id.indexOf("ECBItems_") && "MSOZoneCell_WebPartWPQ6" !== u.id)
                                                                                                                                        if ("q.eletrobras.com" !== document.location.hostname && "eletrobras.com" !== document.location.hostname || "container-fluid topo-imagem layout" !== u.className)
                                                                                                                                            if ("rsvponline.mx" !== document.location.hostname && "www.rsvponline.mx" !== document.location.hostname && "melodijolola.com" !== document.location.hostname && "www.melodijolola.com" !== document.location.hostname && "m.melodijolola.com" !== document.location.hostname && "www.m.melodijolola.com" !== document.location.hostname && "local.melodijolola.com" !== document.location.hostname && "www.local.melodijolola.com" !== document.location.hostname && "melodijolola.jediteam.mx" !== document.location.hostname && "www.melodijolola.jediteam.mx" !== document.location.hostname && "lola.jediteam.mx" !== document.location.hostname && "www.lola.jediteam.mx" !== document.location.hostname || "description-img hide-on-med-and-down" !== u.className)
                                                                                                                                                if ("atendimento.consul.com.br" !== window.location.hostname || "ot-pc-content" !== u.id && " answer-feedback jsanswerfeedback" !== u.className && "list-links" !== u.className && "H3" !== u.tagName)
                                                                                                                                                    if (("www.olharjuridico.com.br" === document.location.hostname || "olharjuridico.com.br" === document.location.hostname || "www.agroolhar.com.br" === document.location.hostname || "agroolhar.com.br" === document.location.hostname) && "STRONG" === u.tagName && u.childNodes.length > 1) u = this._removeAndGetNext(u);
                                                                                                                                                    else if ("www.agroolhar.com.br" !== document.location.hostname && "agroolhar.com.br" !== document.location.hostname || "SPAN" !== u.tagName)
                                    if (("www.olharconceito.com.br" === document.location.hostname || "olharconceito.com.br" === document.location.hostname || "www.olhardireto.com.br" === document.location.hostname || "olhardireto.com.br" === document.location.hostname) && "SPAN" === u.tagName && u.childNodes.length > 0) u = this._removeAndGetNext(u);
                                    else if ("www.noticiasagricolas.com.br" !== document.location.hostname || "contador-impressoes" !== u.className && "comentarios" !== u.id && "newsletter" !== u.id)
                                    if ("civicus.devdemo.org" !== document.location.hostname && "www.civicus.devdemo.org" !== document.location.hostname || "glitter_page_blocktype_html glitter_page_block glitter_page_block_even" !== u.className && "glitter_page_blocktype_html glitter_page_block glitter_page_block_even glitter_page_block_last" !== u.className && "twitter-tweet" !== u.className && "glitter_page_blocktype_imageblock figcaption" !== u.className)
                                        if ("www.sbt.com.br" !== document.location.hostname && "sbt.com.br" !== document.location.hostname && "www-dev.tvsbt.com.br" !== document.location.hostname && "www-seo.tvsbt.com.br" !== document.location.hostname || "notice-infos" !== u.className)
                                            if ("chc.osasco.sp.gov.br" !== window.location.hostname && "www.chc.osasco.sp.gov.br" !== window.location.hostname || "modal-body" !== u.className && -1 === u.className.indexOf("sologado"))
                                                if ("www.engie.com.br" !== window.location.hostname || "swiper-wrapper" !== u.className)
                                                    if ("oglobo.globo.com" !== window.location.hostname && "m.oglobo.globo.com" !== window.location.hostname || "article__picture-caption" !== u.className)
                                                        if ("sustentabilidade.petrobras.com.br" !== window.location.hostname && "hmg-sustentabilidade.hotsitespetrobras.com.br" !== window.location.hostname || "read-full-report" !== u.className && "petrobras-rodape-copyright" !== u.className && "card-conhecer-capitulos" !== u.className && "copyright-text" !== u.className && "page-out" !== u.id && "page-in" !== u.id)
                                                            if (-1 === window.location.hostname.indexOf("nexojornal.com.br") || "meta-photo" !== u.className && "teaser" !== u.className && "photo-caption" !== u.className)
                                                                if ("blogs.oglobo.globo.com" !== window.location.hostname || "meta" !== u.className && "H2" !== u.tagName && "tag" !== u.className && "leftBar" !== u.className && "sidebar" !== u.className)
                                                                    if ("extra.globo.com" !== window.location.hostname && "m.extra.globo.com" !== window.location.hostname || "main_nav" !== u.className && "aside" !== u.tagName && "ASIDE" !== u.tagName && "date" !== u.className && "textsize" !== u.className)
                                                                        if ("m.extra.globo.com" !== window.location.hostname || "figcaption" !== u.className && "less" !== u.className && "zero" !== u.className && "more" !== u.className && "textsize" !== u.className)
                                                                            if ("hmlforbes.elav.tmp.br" !== window.location.hostname && "forbes.com.br" !== window.location.hostname && "www.forbes.com.br" !== window.location.hostname || "mh-ad-spot" !== u.className)
                                                                                if ("hmlforbes.elav.tmp.br" !== window.location.hostname && "forbes.com.br" !== window.location.hostname && "www.forbes.com.br" !== window.location.hostname || "link-audima" !== u.className || -1 === u.childNodes[0].textContent.indexOf("LEIA MAIS"))
                                                                                    if ("hmlforbes.elav.tmp.br" !== window.location.hostname && "forbes.com.br" !== window.location.hostname && "www.forbes.com.br" !== window.location.hostname && "www.forbes.uol.br" !== window.location.hostname && "forbes.uol.com.br" !== window.location.hostname || !u.hasAttribute("rel") || "noreferrer" !== u.getAttribute("rel"))
                                                                                        if ("www.conjur.com.br" !== window.location.hostname && "conjur.com.br" !== window.location.hostname || !u.hasAttribute("itemprop") || "datePublished" !== u.getAttribute("itemprop"))
                                                                                            if ("galeria_embed" !== u.id && "instagram-media" !== u.className)
                                                                                                if ("www.oncoguia.org.br" !== window.location.hostname || "ft" !== u.className)
                                                                                                    if ("cebds.org" !== window.location.hostname || "cli-tab-content" !== u.className && "cli-bar-message" !== u.className && "cli-bar-message" !== u.className && "fundo-destaque margin-bottom-40" !== u.className && "btn-publi-download pdf" !== u.className && "cookie_hdr_showagain" !== u.id)
                                                                                                        if (-1 === window.location.hostname.indexOf("ig.com.br") || "preAds_ad_intext" !== u.id && "preAds_ad_mrec_intext" !== u.id && "tags" !== u.id && "category-title" !== u.className && "show-more-container" !== u.className && "iG_componente_taboola_containerTitulo" !== u.className)
                                                                                                            if ("www.otvfoco.com.br" !== window.location.hostname || "A" !== u.tagName && "figcaption" !== u.tagName && "wp-caption-text" !== u.className)
                                                                                                                if ("www.jcnet.com.br" !== window.location.hostname || "legenda" !== u.className && "credito" !== u.className)
                                                                                                                    if ("www.falaroca.com" !== window.location.hostname && "falaroca.com" !== window.location.hostname || "post-section post-sidebar-date" !== u.className)
                                                                                                                        if ("www.academia.org.br" !== window.location.hostname || "region region-breadcrumb" !== u.className)
                                                                                                                            if ("portalic-dev.icnetworks.org" !== window.location.hostname && "www.itaucultural.org.br" !== window.location.hostname && "itaucultural.org.br" !== window.location.hostname || "lgpd-text" !== u.className && "main-list" !== u.className && "content-highlight " !== u.className && "credit-author" !== u.className && "content-tab programacao" !== u.className && "see-also" !== u.className && "article-content" !== u.className)
                                                                                                                                if ("noticias.r7.com" !== window.location.hostname || "twitter-tweet" !== u.className)
                                                                                                                                    if ("estudio.r7.com" !== window.location.hostname || "info__date-published" !== u.className)
                                                                                                                                        if ("gooutside.com.br" !== window.location.hostname && "www.gooutside.com.br" !== window.location.hostname || "H5" !== u.tagName)
                                                                                                                                            if ("amaro.com" !== window.location.hostname && "www.amaro.com" !== window.location.hostname || "caption-audima" !== u.className)
                                                                                                                                                if ("lavoz.com.ar" !== window.location.hostname && "www.lavoz.com.ar" !== window.location.hostname && "beta-arc.lavoz.com.ar" !== window.location.hostname && "www.beta-arc.lavoz.com.ar" !== window.location.hostname || "story-meta-datetime" !== u.className)
                                                                                                                                                    if ("falleneamigos.com.br" !== window.location.hostname && "www.falleneamigos.com.br" !== window.location.hostname || "BreadCrumb" !== u.id)
                                                                                                                                                        if ("agrolink.com.br" !== window.location.hostname && "www.agrolink.com.br" !== window.location.hostname || "col-md-3 d-none d-sm-block bottommargin" !== u.className && "modal-body" !== u.className)
                                                                                                                                                            if ("onumulheres.org.br" !== window.location.hostname && "www.onumulheres.org.br" !== window.location.hostname || "elegant pages" !== u.className)
                                                                                                                                                                if ("portal.fgv.br" !== window.location.hostname || "block-title" !== u.className && "views-field views-field-field-livro-autor" !== u.className && "datas-internas" !== u.className && "titulo-eventos" !== u.className && "area-eventos" !== u.className && "li" !== u.tagName && "block-views-eventos-block-9" !== u.id && "block-views-eventos-block-6" !== u.id && "block-views-eventos-block-4" !== u.id)
                                                                                                                                                                    if ("web.cnn.agilesvcs.com" !== window.location.hostname && "www.cnnbrasil.com.br" !== window.location.hostname && "staging-cnnbrasil.go-vip.net" !== window.location.hostname && "web.homologation.cnn.agilesvcs.com" !== window.location.hostname && "web-prod.cnn.agilesvcs.com" !== window.location.hostname && "web-sandbox.cnn.agilesvcs.com" !== window.location.hostname && "cnnbrasil.com.br" !== window.location.hostname || "jsx-3087431076 breaking-news-bar" !== u.className && "jsx-3805853902 news-authors" !== u.className && "AlsoReadSomeNews" !== u.className && "read__too" !== u.className && ("SPAN" !== u.tagName || -1 === u.className.indexOf("light")))
                                                                                                                                                                        if ("hidden-title" == u.className && "SPAN" === u.tagName || "hidden-url" == u.className && "SPAN" === u.tagName) u = this._removeAndGetNext(u);
                                                                                                                                                                        else if ("www.aberje.com.br" !== window.location.hostname || -1 === u.className.indexOf("new-type-post-title") && "post-thumbnail full no-desktop" !== u.className)
                                    if ("FIGURE" !== u.tagName)
                                        if ("www.debate.com.mx" !== window.location.hostname && "debate.com.mx" !== window.location.hostname || "FORM" !== u.tagName && "boxpush_suscripcion_news_notification" !== u.className && "mod--googlenews__text" !== u.className)
                                            if ("www.debate.com.mx" !== window.location.hostname && "debate.com.mx" !== window.location.hostname || "P" !== u.tagName || !u.textContent.includes("Leer más:"))
                                                if ("unimedfranca.com.br" !== window.location.hostname && "www.unimedfranca.com.br" !== window.location.hostname || "WebPartWPQ3_ChromeTitle" !== u.id)
                                                    if ("www.milkpoint.com.br" !== window.location.hostname && "milkpoint.com.br" !== window.location.hostname || "geral-comentario" !== u.id)
                                                        if ("tetrixchallenge.com" !== window.location.hostname && "www.tetrixchallenge.com" !== window.location.hostname || "blog-single-bar" !== u.className)
                                                            if ("akatu.org.br" !== window.location.hostname && "www.akatu.org.br" !== window.location.hostname || "et_pb_column et_pb_column_4_4 et_pb_column_0  et_pb_css_mix_blend_mode_passthrough et-last-child" !== u.className && "et_pb_module et_pb_text et_pb_text_0 noreadme-audima  et_pb_text_align_left et_pb_text_align_center-tablet et_pb_bg_layout_light et_multi_view__hover_selector" !== u.className && "cli-tab-pane cli-fade" !== u.className) {
                                                                if (("tetrixchallenge.com" === window.location.hostname || "www.tetrixchallenge.com" === window.location.hostname) && "blog-single-content" === u.className && "continue" === function() {
                                                                        var e = null;
                                                                        return u.childNodes.forEach((function(a, t) {
                                                                            "[PT]" === a.textContent && (a.textContent = ""), "EN" === a.textContent && (e = t)
                                                                        })), u.childNodes.forEach((function(t, n, o) {
                                                                            n >= e && (u = a._removeAndGetNext(o[n]))
                                                                        })), "continue"
                                                                    }()) continue;
                                                                if ("DIV" !== u.tagName && "SECTION" !== u.tagName && "HEADER" !== u.tagName && "H1" !== u.tagName && "H2" !== u.tagName && "H3" !== u.tagName && "H4" !== u.tagName && "H5" !== u.tagName && "H6" !== u.tagName && "audima-div" !== u.tagName && "audima-span" !== u.tagName && "audima-p" !== u.tagName || !this._isElementWithoutContent(u)) {
                                                                    var je;
                                                                    if (-1 !== this.DEFAULT_TAGS_TO_SCORE.indexOf(u.tagName) && (window.location.hostname.indexOf("nexojornal.com.br") && "H2" === u.tagName && "linha-fina" === u.className ? (ge = t.getElementsByClassName("container")[0].childNodes[4].childNodes[1].childNodes[2].childNodes[1].childNodes[1].childNodes[1].childNodes[3].childNodes[1].childNodes[0], (je = t.createElement("p")).textContent = u.textContent, je.style.display = "inline", je.className = "readability-styled", m.push(je), ge.parentNode.insertBefore(je, ge)) : m.push(u)), "intranet.valepub.net" === window.location.hostname && "LI" === u.tagName) ge = t.getElementsByClassName("metade")[0], (je = t.createElement("p")).textContent = u.textContent, je.style.display = "inline", je.className = "readability-styled", ge.parentNode.insertBefore(je, ge.children[ge.childNodes.length]);
                                                                    if ("DIV" === u.tagName)
                                                                        if (this._hasSinglePInsideElement(u)) {
                                                                            var qe = u.children[0];
                                                                            u.parentNode.replaceChild(qe, u), u = qe, m.push(u)
                                                                        } else this._hasChildBlockElement(u) ? this._forEachNode(u.childNodes, (function(e) {
                                                                            if (("www3.alerj.rj.gov.br" === document.location.hostname || "interteste2008" === document.location.hostname || "interteste2008/lotus_notes/" === document.location.hostname || "www.alerj.rj.gov.br" === document.location.hostname) && "controle" === e.className) {
                                                                                var a, n = o(e.childNodes[1].childNodes[1].childNodes);
                                                                                try {
                                                                                    for (n.s(); !(a = n.n()).done;)
                                                                                        if (itemFirstPart = a.value, "navbar navbar-default" !== itemFirstPart.className && "jumbotron" !== itemFirstPart.className && "divLoading" !== itemFirstPart.id || (itemFirstPart.textContent = ""), "divConteudo" === itemFirstPart.id) {
                                                                                            var i, r = o(itemFirstPart.childNodes);
                                                                                            try {
                                                                                                for (r.s(); !(i = r.n()).done;) itemSecondPart = i.value, "alert alert-warning" !== itemSecondPart.className && "barraBotoes" !== itemSecondPart.id || (itemSecondPart.textContent = "")
                                                                                            } catch (e) {
                                                                                                r.e(e)
                                                                                            } finally {
                                                                                                r.f()
                                                                                            }
                                                                                        }
                                                                                } catch (e) {
                                                                                    n.e(e)
                                                                                } finally {
                                                                                    n.f()
                                                                                }(R = t.createElement("p")).textContent = e.textContent, R.style.display = "inline", R.className = "readability-styled", m.push(R), u.replaceChild(R, e)
                                                                            }
                                                                            if ("www.facha.edu.br" === window.location.hostname && "DIV" === e.tagName && ((R = t.createElement("p")).textContent = e.textContent, R.style.display = "inline", R.className = "readability-styled", u.replaceChild(R, e)), ("mybest-brazil.com.br" === document.location.hostname || "www.mybest-brazil.com.br" === document.location.hostname) && "p-press__lead-sentence u-readable" === e.className) {
                                                                                var s = t.querySelector(".js-toc"),
                                                                                    l = t.createElement("p");
                                                                                l.textContent = e.textContent, l.style.display = "inline", l.className = "readability-styled", s.insertAdjacentElement("afterbegin", l)
                                                                            }
                                                                            if (("web.cnn.agilesvcs.com" === window.location.hostname || "www.cnnbrasil.com.br" === window.location.hostname || "staging-cnnbrasil.go-vip.net" === window.location.hostname || "web.homologation.cnn.agilesvcs.com" === window.location.hostname || "web-prod.cnn.agilesvcs.com" === window.location.hostname || "web-sandbox.cnn.agilesvcs.com" === window.location.hostname || "cnnbrasil.com.br" === window.location.hostname) && "H1" === e.tagName) {
                                                                                var c = t.createElement("p");
                                                                                c.textContent = e.textContent, c.style.display = "inline", c.className = "readability-styled", u.replaceChild(c, e)
                                                                            }
                                                                            if (("unimedfranca.com.br" === window.location.hostname || "www.unimedfranca.com.br" === window.location.hostname) && "ms-rtestate-field" === e.className) {
                                                                                var d = t.createElement("p");
                                                                                d.textContent = e.textContent, d.style.display = "inline", d.className = "readability-styled", u.replaceChild(d, e)
                                                                            }
                                                                            if (("sustentabilidade.petrobras.com.br" === window.location.hostname || "hmg-sustentabilidade.hotsitespetrobras.com.br" === window.location.hostname) && "topics" === e.className && e.childNodes.length >= 5) {
                                                                                var h = t.createElement("p");
                                                                                h.textContent = e.textContent, h.style.display = "inline", h.className = "readability-styled", u.replaceChild(h, e)
                                                                            }
                                                                            if (("www.elliberal.com.ar" === window.location.hostname || "elliberal.com.ar" === window.location.hostname) && "z-single-post-content mb-4" === e.className) {
                                                                                var g, b = t.getElementsByClassName("h2 z-post-excerpt"),
                                                                                    p = t.createElement("p");
                                                                                p.textContent = null === (g = b[0]) || void 0 === g ? void 0 : g.textContent, p.style.display = "inline", p.className = "readability-styled", e.insertAdjacentElement("afterbegin", p)
                                                                            }
                                                                            if (("www.goiania.go.gov.br" === window.location.hostname || "goiania.go.gov.br" === window.location.hostname) && "ARTICLE" === e.tagName) {
                                                                                var w, y, f = t.getElementsByTagName("P"),
                                                                                    k = t.createElement("p");
                                                                                k.textContent = null === (w = f[1]) || void 0 === w ? void 0 : w.textContent, k.style.display = "inline", k.className = "readability-styled", "post-info" === (null === (y = f[1].previousElementSibling) || void 0 === y ? void 0 : y.classList.value) && e.insertAdjacentElement("afterbegin", k)
                                                                            }
                                                                            if ("q.eletrobras.com" !== document.location.hostname && "eletrobras.com" !== document.location.hostname || "ms-listviewtable" !== e.className || ((R = t.createElement("p")).textContent = e.textContent, R.style.display = "inline", R.className = "readability-styled", u.replaceChild(R, e)), ("concremat.puracomunicacao.com.br" === document.location.hostname || "www.concremat.puracomunicacao.com.br" === document.location.hostname || "concremat.com.br" === document.location.hostname || "www.concremat.com.br" === document.location.hostname) && "main-container" === e.className) {
                                                                                t.querySelectorAll(".isotope_filter_date").forEach((function(e) {
                                                                                    return e.innerHTML = ""
                                                                                })), t.querySelectorAll(".cesis_blog_m_title ").forEach((function(e) {
                                                                                    return e.innerHTML = ""
                                                                                }));
                                                                                var v = t.querySelector(".article_ctn ");
                                                                                (R = t.createElement("p")).textContent = v.textContent, R.style.display = "inline", R.className = "readability-styled", u.replaceChild(R, e)
                                                                            }
                                                                            if ("chc.osasco.sp.gov.br" !== window.location.hostname && "www.chc.osasco.sp.gov.br" !== window.location.hostname || "post_text_inner" !== e.className || (e.childNodes[1].textContent = "", e.childNodes[3].textContent = "", e.childNodes[e.childNodes.length - 1].textContent = "", e.childNodes[e.childNodes.length - 2].textContent = "", (R = t.createElement("p")).textContent = e.textContent, R.style.display = "inline", R.className = "readability-styled", u.replaceChild(R, e)), "box.novaescola.org.br" === window.location.hostname && "single-item" === e.className && (e.childNodes[1].textContent = "", e.childNodes[3].textContent = "", e.childNodes[5].textContent = ""), !("mosaicbr.levisssd.com" !== window.location.hostname && "www.mosaicbr.levisssd.com" !== window.location.hostname && "mosaicco.com.br" !== window.location.hostname && "www.mosaicco.com.br" !== window.location.hostname || "/Documentos-e-links-%C3%BAteis" !== window.location.pathname && "/Documentos-e-links-Úteis" !== window.location.pathname)) {
                                                                                var _ = t.getElementsByClassName("modDspQtyContainer")[0],
                                                                                    N = t.getElementsByClassName("modDspQtyContainer")[1],
                                                                                    E = t.getElementsByClassName("modDspQtyContainer")[2],
                                                                                    A = t.getElementsByClassName("modDspQtyContainer")[3],
                                                                                    x = t.getElementsByClassName("modDspQtyContainer")[4],
                                                                                    C = t.getElementsByClassName("modDspQtyContainer")[5],
                                                                                    T = t.getElementsByClassName("modDspQtyContainer")[6],
                                                                                    S = t.getElementsByClassName("modDspQtyContainer")[7];
                                                                                _.innerHTML = "", N.innerHTML = "", E.innerHTML = "", A.innerHTML = "", x.innerHTML = "", C.innerHTML = "", T.innerHTML = "", S.innerHTML = ""
                                                                            }
                                                                            if ("mosaicbr.levisssd.com" !== window.location.hostname && "www.mosaicbr.levisssd.com" !== window.location.hostname && "mosaicco.com.br" !== window.location.hostname && "www.mosaicco.com.br" !== window.location.hostname || "/%C3%81reas-de-Atua%C3%A7%C3%A3o" !== window.location.pathname && "Áreas-de-Atuação" !== window.location.pathname || ((_ = t.getElementsByClassName("modDspQtyContainer")[0]).innerHTML = ""), ("estrategiaconcursos.com.br" === window.location.hostname || "www.estrategiaconcursos.com.br" === window.location.hostname) && "blog-post-block" === e.className) {
                                                                                v = t.getElementsByClassName("blog-post-ctt")[0].textContent;
                                                                                (R = t.createElement("p")).textContent = v, R.style.display = "inline", R.className = "readability-styled", u.replaceChild(R, e)
                                                                            }
                                                                            if ("foxbit.com.br" !== window.location.hostname && "www.foxbit.com.br" !== window.location.hostname && "ajuda.foxbit.com.br" !== window.location.hostname && "www.ajuda.foxbit.com.br" !== window.location.hostname || "elementor-section-wrap" !== e.className || ((v = t.getElementsByClassName("elementor-tabs-wrapper"))[0].textContent = "", v[1].textContent = "", v[2].textContent = "", (R = t.createElement("p")).textContent = e.textContent, R.style.display = "inline", R.className = "readability-styled", m.push(R), u.replaceChild(R, e)), "ava.uninove.br" !== window.location.hostname && "aapa.uninove.br" !== document.location.hostname || " col-xs-12  caixaTexto bloco gc-marca-texto tp-padding" !== e.className || ((R = t.createElement("p")).textContent = e.textContent, R.style.display = "inline", R.className = "readability-styled", m.push(R), u.replaceChild(R, e)), "economia.ig.com.br" === document.location.hostname && "col-sm-12 ig-container_headerText" === e.className && (v = e.childNodes[3].textContent, (R = t.createElement("p")).textContent = v, R.style.display = "inline", R.className = "readability-styled", u.replaceChild(R, e)), "visitesaopaulo.com" === document.location.hostname && "post-2464" === e.id && (v = t.getElementById("post-2464").textContent, (R = t.createElement("p")).textContent = v, R.style.display = "inline", R.className = "readability-styled", u.replaceChild(R, e)), "audima.co" === document.location.hostname && "/player/coca-cola/brasil.html" === document.location.pathname) {
                                                                                var z, L = null === (z = t.querySelector(".card--overlayWrapper")) || void 0 === z ? void 0 : z.textContent,
                                                                                    j = t.createElement("p");
                                                                                j.textContent = L, j.style.display = "inline", j.className = "readability-styled", u.replaceChild(j, e)
                                                                            }
                                                                            if ("maisquedois.com.br" !== document.location.hostname && "www.maisquedois.com.br" !== document.location.hostname || "wp-block-pullquote" !== e.className || (v = t.getElementsByClassName("wp-block-pullquote")[0].textContent, (R = t.createElement("p")).textContent = v, R.style.display = "inline", R.className = "readability-styled", u.replaceChild(R, e)), ("br-recepedia-com.netlify.app" === window.location.hostname || "br.recepedia.com" === window.location.hostname || "preview-3340--br-recepedia-com.netlify.app" === window.location.hostname || "dev--br-recepedia-com.netlify.app" === window.location.hostname) && e.children) {
                                                                                var q = Array.from(e.children).filter((function(e) {
                                                                                    return "content" === e.id
                                                                                }));
                                                                                if (q[0]) {
                                                                                    var D = q[0].children[1].textContent + "\n" + q[0].children[3].textContent + "\n" + q[0].children[4].textContent;
                                                                                    (R = t.createElement("p")).textContent = D, R.style.display = "inline", R.className = "readability-styled", u.replaceChild(R, e)
                                                                                }
                                                                            }
                                                                            if (("mx-recepedia-com.netlify.app" === window.location.hostname || "mx.recepedia.com" === window.location.hostname || "preview-3340--mx-recepedia-com.netlify.app" === window.location.hostname || "dev--mx-recepedia-com.netlify.app" === window.location.hostname) && e.children) {
                                                                                var H = Array.from(e.children).filter((function(e) {
                                                                                    return "content" === e.id
                                                                                }));
                                                                                if (H[0]) {
                                                                                    var B = H[0].children[1].textContent + "\n" + H[0].children[2].textContent;
                                                                                    (R = t.createElement("p")).textContent = B, R.style.display = "inline", R.className = "readability-styled", u.replaceChild(R, e)
                                                                                }
                                                                            }
                                                                            if ("mosaicbr.levisssd.com" !== window.location.hostname && "www.mosaicbr.levisssd.com" !== window.location.hostname && "mosaicco.com.br" !== window.location.hostname && "www.mosaicco.com.br" !== window.location.hostname || "bodyContent" !== e.className || (v = t.getElementsByClassName("bodyContent")[0].textContent, (R = t.createElement("p")).textContent = v, R.style.display = "inline", R.className = "readability-styled", u.replaceChild(R, e)), "www.acritica.com" === window.location.hostname && "ARTICLE" === e.tagName && "P" === e.tagName && ((R = t.createElement("p")).textContent = e.textContent, R.style.display = "inline", R.className = "readability-styled", m.push(R), u.replaceChild(R, e)), ("www.mattosfilho.com.br" === window.location.hostname || "mattosfilho.com.br" === window.location.hostname || "hm.mattosfilho.com.br" === window.location.hostname) && "categories" === e.className) {
                                                                                var M = t.createElement("p");
                                                                                M.textContent = e.textContent, M.style.display = "inline", M.className = "readability-styled", u.replaceChild(M, e)
                                                                            }
                                                                            if ("cora.com.br" === window.location.hostname || "www.cora.com.br" === window.location.hostname) {
                                                                                var F = t.querySelector(".noreadme-audima");
                                                                                null == F || F.remove(), "elementor-widget-wrap" === e.className && ((R = t.createElement("p")).textContent = e.textContent, R.style.display = "inline", R.className = "readability-styled", m.push(R), u.replaceChild(R, e))
                                                                            }
                                                                            var R;
                                                                            ("intranet.valepub.net" === window.location.hostname && "boxDestaque01 destaqueStl01 vermelho" === e.className && ((R = t.createElement("p")).textContent = e.textContent, R.style.display = "inline", R.className = "readability-styled", u.replaceChild(R, e)), "intranet.valepub.net" === window.location.hostname && "boxDestaque01 destaqueStl laranja" === e.className && ((R = t.createElement("p")).textContent = e.textContent, R.style.display = "inline", R.className = "readability-styled", u.replaceChild(R, e)), "intranet.valepub.net" === window.location.hostname && "A" === e.tagName && "linkStl01" === e.className && ((R = t.createElement("p")).textContent = e.textContent, R.style.display = "inline", R.className = "readability-styled", u.replaceChild(R, e)), "portal.fgv.br" === window.location.hostname && "group-header" === e.className) && (v = t.getElementsByClassName("group-header")[0].childNodes[1].childNodes[0].childNodes[0], (R = t.createElement("p")).textContent = v.textContent + ". \n", R.style.display = "inline", R.className = "readability-styled", u.replaceChild(R, e));
                                                                            if (("mybest-brazil.com.br" === document.location.hostname || "www.mybest-brazil.com.br" === document.location.hostname) && "js-toc" === e.className) {
                                                                                var O = t.createElement("p");
                                                                                O.textContent = e.textContent, O.style.display = "inline", O.className = "readability-styled", u.replaceChild(O, e)
                                                                            }
                                                                            "www.empregodf.com.br" !== window.location.hostname && "www.minhaoperadora.com.br" !== window.location.hostname && "www.academia.org.br" !== window.location.hostname || "SPAN" !== e.tagName && "P" !== e.tagName || !e.textContent || ((R = t.createElement("p")).textContent = e.textContent, R.style.display = "inline", R.className = "readability-styled", u.replaceChild(R, e)), "www.oncoguia.org.br" === window.location.hostname && "wrap dynamic" === u.className && ("UL" === e.tagName || "SPAN" === e.tagName || "P" === e.tagName) && e.textContent.trim().length > 0 && m.push(e), e.nodeType === Node.TEXT_NODE && e.textContent.trim().length > 0 && ((R = t.createElement("p")).textContent = e.textContent, R.style.display = "inline", R.className = "readability-styled", u.replaceChild(R, e))
                                                                        })) : (u = this._setNodeTag(u, "P"), m.push(u));
                                                                    u = this._getNextNode(u)
                                                                } else u = this._removeAndGetNext(u)
                                                            } else u = this._removeAndGetNext(u);
                                else u = this._removeAndGetNext(u);
                                else u = this._removeAndGetNext(u);
                                else u = this._removeAndGetNext(u);
                                else u = this._removeAndGetNext(u);
                                else u = this._removeAndGetNext(u);
                                else u = this._removeAndGetNext(u);
                                else u = this._removeAndGetNext(u);
                                else u = this._removeAndGetNext(u);
                                else u = this._removeAndGetNext(u);
                                else u = this._removeAndGetNext(u);
                                else u = this._removeAndGetNext(u);
                                else u = this._removeAndGetNext(u);
                                else u = this._removeAndGetNext(u);
                                else u = this._removeAndGetNext(u);
                                else u = this._removeAndGetNext(u);
                                else u = this._removeAndGetNext(u);
                                else u = this._removeAndGetNext(u);
                                else u = this._removeAndGetNext(u);
                                else u = this._removeAndGetNext(u);
                                else u = this._removeAndGetNext(u);
                                else u = this._removeAndGetNext(u);
                                else u = this._removeAndGetNext(u);
                                else u = this._removeAndGetNext(u);
                                else u = this._removeAndGetNext(u);
                                else u = this._removeAndGetNext(u);
                                else u = this._removeAndGetNext(u);
                                else u = this._removeAndGetNext(u);
                                else u = this._removeAndGetNext(u);
                                else u = this._removeAndGetNext(u);
                                else u = this._removeAndGetNext(u);
                                else u = this._removeAndGetNext(u);
                                else u = this._removeAndGetNext(u);
                                else u = this._removeAndGetNext(u);
                                else u = this._removeAndGetNext(u);
                                else u = this._removeAndGetNext(u);
                                else u = this._removeAndGetNext(u);
                                else u = this._removeAndGetNext(u);
                                else u = this._removeAndGetNext(u);
                                else u = this._removeAndGetNext(u);
                                else u = this._removeAndGetNext(u);
                                else u = this._removeAndGetNext(u);
                                else u = this._removeAndGetNext(u);
                                else u = this._removeAndGetNext(u);
                                else u = this._removeAndGetNext(u);
                                else u = this._removeAndGetNext(u);
                                else u = this._removeAndGetNext(u);
                                else u = this._removeAndGetNext(u);
                                else u = this._removeAndGetNext(u);
                                else u = this._removeAndGetNext(u);
                                else u = this._removeAndGetNext(u);
                                else u = this._removeAndGetNext(u);
                                else u = this._removeAndGetNext(u);
                                else u = this._removeAndGetNext(u);
                                else u = this._removeAndGetNext(u);
                                else u = this._removeAndGetNext(u);
                                else u = this._removeAndGetNext(u);
                                else u = this._removeAndGetNext(u);
                                else u = this._removeAndGetNext(u);
                                else u = this._removeAndGetNext(u);
                                else u = this._removeAndGetNext(u);
                                else u = this._removeAndGetNext(u);
                                else u = this._removeAndGetNext(u);
                                else u = this._removeAndGetNext(u);
                                else u = this._removeAndGetNext(u);
                                else u = this._removeAndGetNext(u);
                                else u = this._removeAndGetNext(u);
                                else u = this._removeAndGetNext(u);
                                else u = this._removeAndGetNext(u);
                                else u = this._removeAndGetNext(u);
                                else u = this._removeAndGetNext(u);
                                else u = this._removeAndGetNext(u);
                                else u = this._removeAndGetNext(u);
                                else u = this._removeAndGetNext(u);
                                else u = this._removeAndGetNext(u)
                            }
                            var De = [];
                            this._forEachNode(m, (function(e) {
                                if (e.parentNode && void 0 !== e.parentNode.tagName) {
                                    var a = this._getInnerText(e);
                                    if (!(a.length < 25)) {
                                        var t = this._getNodeAncestors(e, 3);
                                        if (0 !== t.length) {
                                            var n = 0;
                                            n += 1, n += a.split(",").length, n += Math.min(Math.floor(a.length / 100), 3), this._forEachNode(t, (function(e, a) {
                                                if (e.tagName) {
                                                    if (void 0 === e.readability && (this._initializeNode(e), De.push(e)), 0 === a) var t = 1;
                                                    else t = 1 === a ? 2 : 3 * a;
                                                    e.readability.contentScore += n / t
                                                }
                                            }))
                                        }
                                    }
                                }
                            }));
                            for (var He = [], Be = 0, Me = De.length; Be < Me; Be += 1) {
                                var Fe = De[Be],
                                    Re = Fe.readability.contentScore * (1 - this._getLinkDensity(Fe));
                                Fe.readability.contentScore = Re, this.log("Candidate:", Fe, "with score " + Re);
                                for (var Oe = 0; Oe < this._nbTopCandidates; Oe++) {
                                    var Ie = He[Oe];
                                    if (!Ie || Re > Ie.readability.contentScore) {
                                        He.splice(Oe, 0, Fe), He.length > this._nbTopCandidates && He.pop();
                                        break
                                    }
                                }
                            }
                            var Pe, Ge = He[0] || null,
                                Ue = !1;
                            if (null === Ge || "BODY" === Ge.tagName) {
                                Ge = t.createElement("DIV"), Ue = !0;
                                for (var Xe = e.childNodes; Xe.length;) this.log("Moving child out:", Xe[0]), Ge.appendChild(Xe[0]);
                                e.appendChild(Ge), this._initializeNode(Ge)
                            } else if (Ge) {
                                for (var We = [], $e = 1; $e < He.length; $e++) He[$e].readability.contentScore / Ge.readability.contentScore >= .75 && We.push(this._getNodeAncestors(He[$e]));
                                if (We.length >= 3)
                                    for (Pe = Ge.parentNode;
                                        "BODY" !== Pe.tagName;) {
                                        for (var Ve = 0, Ye = 0; Ye < We.length && Ve < 3; Ye++) Ve += Number(We[Ye].includes(Pe));
                                        if (Ve >= 3) {
                                            Ge = Pe;
                                            break
                                        }
                                        Pe = Pe.parentNode
                                    }
                                Ge.readability || this._initializeNode(Ge), Pe = Ge.parentNode;
                                for (var Ke = Ge.readability.contentScore, Je = Ke / 3;
                                    "BODY" !== Pe.tagName;)
                                    if (Pe.readability) {
                                        var Qe = Pe.readability.contentScore;
                                        if (Qe < Je) break;
                                        if (Qe > Ke) {
                                            Ge = Pe;
                                            break
                                        }
                                        Ke = Pe.readability.contentScore, Pe = Pe.parentNode
                                    } else Pe = Pe.parentNode;
                                for (Pe = Ge.parentNode;
                                    "BODY" != Pe.tagName && 1 == Pe.children.length;) Pe = (Ge = Pe).parentNode;
                                Ge.readability || this._initializeNode(Ge)
                            }
                            var Ze = t.createElement("DIV");
                            n && (Ze.id = "readability-content");
                            for (var ea = Math.max(10, .2 * Ge.readability.contentScore), aa = (Pe = Ge.parentNode).children, ta = 0, na = aa.length; ta < na; ta++) {
                                var oa = aa[ta],
                                    ia = !1;
                                if (this.log("Looking at sibling node:", oa, oa.readability ? "with score " + oa.readability.contentScore : ""), this.log("Sibling has score", oa.readability ? oa.readability.contentScore : "Unknown"), oa === Ge) ia = !0;
                                else {
                                    var ra = 0;
                                    if (oa.className === Ge.className && "" !== Ge.className && (ra += .2 * Ge.readability.contentScore), oa.readability && oa.readability.contentScore + ra >= ea) ia = !0;
                                    else if ("P" === oa.nodeName) {
                                        var sa = this._getLinkDensity(oa),
                                            la = this._getInnerText(oa),
                                            ca = la.length;
                                        (ca > 80 && sa < .25 || ca < 80 && ca > 0 && 0 === sa && -1 !== la.search(/\.( |$)/)) && (ia = !0)
                                    }
                                }
                                ia && (this.log("Appending node:", oa), -1 === this.ALTER_TO_DIV_EXCEPTIONS.indexOf(oa.nodeName) && (this.log("Altering sibling:", oa, "to div."), oa = this._setNodeTag(oa, "DIV")), Ze.appendChild(oa), ta -= 1, na -= 1)
                            }
                            this._debug && this.log("Article content pre-prep: " + Ze.innerHTML), this._prepArticle(Ze), this._debug && this.log("Article content post-prep: " + Ze.innerHTML), Ue && (Ge.id = "readability-page-2", Ge.className = "page"), this._debug && this.log("Article content after paging: " + Ze.innerHTML);
                            var ma = !0,
                                ua = this._getInnerText(Ze, !0).length;
                            if (ua < this._charThreshold)
                                if (ma = !1, e.innerHTML = i, this._flagIsActive(this.FLAG_STRIP_UNLIKELYS)) this._removeFlag(this.FLAG_STRIP_UNLIKELYS), this._attempts.push({
                                    articleContent: Ze,
                                    textLength: ua
                                });
                                else if (this._flagIsActive(this.FLAG_WEIGHT_CLASSES)) this._removeFlag(this.FLAG_WEIGHT_CLASSES), this._attempts.push({
                                articleContent: Ze,
                                textLength: ua
                            });
                            else if (this._flagIsActive(this.FLAG_CLEAN_CONDITIONALLY)) this._removeFlag(this.FLAG_CLEAN_CONDITIONALLY), this._attempts.push({
                                articleContent: Ze,
                                textLength: ua
                            });
                            else {
                                if (this._attempts.push({
                                        articleContent: Ze,
                                        textLength: ua
                                    }), this._attempts.sort((function(e, a) {
                                        return e.textLength < a.textLength
                                    })), !this._attempts[0].textLength) return null;
                                Ze = this._attempts[0].articleContent, ma = !0
                            }
                            if (ma) {
                                var da = [Pe, Ge].concat(this._getNodeAncestors(Pe));
                                return this._someNode(da, (function(e) {
                                    if (!e.tagName) return !1;
                                    var a = e.getAttribute("dir");
                                    return !!a && (this._articleDir = a, !0)
                                })), Ze
                            }
                        }
                    },
                    _isValidByline: function(e) {
                        return ("string" == typeof e || e instanceof String) && (e = e.trim()).length > 0 && e.length < 100
                    },
                    _getArticleMetadata: function() {
                        var e = {},
                            a = {},
                            t = this._doc.getElementsByTagName("meta"),
                            n = /^\s*((twitter)\s*:\s*)?(description|title)\s*$/gi,
                            o = /^\s*og\s*:\s*(description|title)\s*$/gi;
                        return this._forEachNode(t, (function(t) {
                            var i = t.getAttribute("name"),
                                r = t.getAttribute("property");
                            if (-1 === [i, r].indexOf("author")) {
                                var s = null;
                                if (n.test(i) ? s = i : o.test(r) && (s = r), s) {
                                    var l = t.getAttribute("content");
                                    l && (s = s.toLowerCase().replace(/\s/g, ""), a[s] = l.trim())
                                }
                            } else e.byline = t.getAttribute("content")
                        })), "description" in a ? e.excerpt = a.description : "og:description" in a ? e.excerpt = a["og:description"] : "twitter:description" in a && (e.excerpt = a["twitter:description"]), e.title = this._getArticleTitle(), e.title || ("og:title" in a ? e.title = a["og:title"] : "twitter:title" in a && (e.title = a["twitter:title"])), e
                    },
                    _removeScripts: function(e) {
                        this._removeNodes(e.getElementsByTagName("script"), (function(e) {
                            return e.nodeValue = "", e.removeAttribute("src"), !0
                        })), this._removeNodes(e.getElementsByTagName("noscript"))
                    },
                    _hasSinglePInsideElement: function(e) {
                        return 1 == e.children.length && "P" === e.children[0].tagName && !this._someNode(e.childNodes, (function(e) {
                            return e.nodeType === Node.TEXT_NODE && this.REGEXPS.hasContent.test(e.textContent)
                        }))
                    },
                    _isElementWithoutContent: function(e) {
                        return e.nodeType === Node.ELEMENT_NODE && 0 == e.textContent.trim().length && (0 == e.children.length || e.children.length == e.getElementsByTagName("br").length + e.getElementsByTagName("hr").length)
                    },
                    _hasChildBlockElement: function(e) {
                        return this._someNode(e.childNodes, (function(e) {
                            return -1 !== this.DIV_TO_P_ELEMS.indexOf(e.tagName) || this._hasChildBlockElement(e)
                        }))
                    },
                    _getInnerText: function(e, a) {
                        a = void 0 === a || a;
                        var t = e.textContent.trim();
                        return a ? t.replace(this.REGEXPS.normalize, " ") : t
                    },
                    _getCharCount: function(e, a) {
                        return a = a || ",", this._getInnerText(e).split(a).length - 1
                    },
                    _cleanStyles: function(e) {
                        if (e && "svg" !== e.tagName.toLowerCase()) {
                            if ("readability-styled" !== e.className) {
                                for (var a = 0; a < this.PRESENTATIONAL_ATTRIBUTES.length; a++) e.removeAttribute(this.PRESENTATIONAL_ATTRIBUTES[a]); - 1 !== this.DEPRECATED_SIZE_ATTRIBUTE_ELEMS.indexOf(e.tagName) && (e.removeAttribute("width"), e.removeAttribute("height"))
                            }
                            for (var t = e.firstElementChild; null !== t;) this._cleanStyles(t), t = t.nextElementSibling
                        }
                    },
                    _getLinkDensity: function(e) {
                        var a = this._getInnerText(e).length;
                        if (0 === a) return 0;
                        var t = 0;
                        return this._forEachNode(e.getElementsByTagName("a"), (function(e) {
                            t += this._getInnerText(e).length
                        })), t / a
                    },
                    _getClassWeight: function(e) {
                        if (!this._flagIsActive(this.FLAG_WEIGHT_CLASSES)) return 0;
                        var a = 0;
                        return "string" == typeof e.className && "" !== e.className && (this.REGEXPS.negative.test(e.className) && (a -= 25), this.REGEXPS.positive.test(e.className) && (a += 25)), "string" == typeof e.id && "" !== e.id && (this.REGEXPS.negative.test(e.id) && (a -= 25), this.REGEXPS.positive.test(e.id) && (a += 25)), a
                    },
                    _clean: function(e, a) {
                        var t = -1 !== ["object", "embed", "iframe", "audima-div", "audima-span", "audima-p"].indexOf(a);
                        this._removeNodes(e.getElementsByTagName(a), (function(e) {
                            if (t) {
                                var a = [].map.call(e.attributes, (function(e) {
                                    return e.value
                                })).join("|");
                                if (this.REGEXPS.videos.test(a)) return !1;
                                if (this.REGEXPS.videos.test(e.innerHTML)) return !1
                            }
                            return !0
                        }))
                    },
                    _hasAncestorTag: function(e, a, t, n) {
                        t = t || 3, a = a.toUpperCase();
                        for (var o = 0; e.parentNode;) {
                            if (t > 0 && o > t) return !1;
                            if (e.parentNode.tagName === a && (!n || n(e.parentNode))) return !0;
                            e = e.parentNode, o++
                        }
                        return !1
                    },
                    _getRowAndColumnCount: function(e) {
                        for (var a = 0, t = 0, n = e.getElementsByTagName("tr"), o = 0; o < n.length; o++) {
                            var i = n[o].getAttribute("rowspan") || 0;
                            i && (i = parseInt(i, 10)), a += i || 1;
                            for (var r = 0, s = n[o].getElementsByTagName("td"), l = 0; l < s.length; l++) {
                                var c = s[l].getAttribute("colspan") || 0;
                                c && (c = parseInt(c, 10)), r += c || 1
                            }
                            t = Math.max(t, r)
                        }
                        return {
                            rows: a,
                            columns: t
                        }
                    },
                    _markDataTables: function(e) {
                        for (var a = e.getElementsByTagName("table"), t = 0; t < a.length; t++) {
                            var n = a[t];
                            if ("presentation" != n.getAttribute("role"))
                                if ("0" != n.getAttribute("datatable"))
                                    if (n.getAttribute("summary")) n._readabilityDataTable = !0;
                                    else {
                                        var o = n.getElementsByTagName("caption")[0];
                                        if (o && o.childNodes.length > 0) n._readabilityDataTable = !0;
                                        else if (["col", "colgroup", "tfoot", "thead", "th"].some((function(e) {
                                                return !!n.getElementsByTagName(e)[0]
                                            }))) this.log("Data table because found data-y descendant"), n._readabilityDataTable = !0;
                                        else if (n.getElementsByTagName("table")[0]) n._readabilityDataTable = !1;
                                        else {
                                            var i = this._getRowAndColumnCount(n);
                                            i.rows >= 10 || i.columns > 4 ? n._readabilityDataTable = !0 : n._readabilityDataTable = i.rows * i.columns > 10
                                        }
                                    }
                            else n._readabilityDataTable = !1;
                            else n._readabilityDataTable = !1
                        }
                    },
                    _cleanConditionally: function(e, a) {
                        if (this._flagIsActive(this.FLAG_CLEAN_CONDITIONALLY)) {
                            var t = "ul" === a || "ol" === a;
                            this._removeNodes(e.getElementsByTagName(a), (function(e) {
                                if (this._hasAncestorTag(e, "table", -1, (function(e) {
                                        return e._readabilityDataTable
                                    }))) return !1;
                                var a = this._getClassWeight(e);
                                if (this.log("Cleaning Conditionally", e), a + 0 < 0) return !0;
                                if (this._getCharCount(e, ",") < 10) {
                                    for (var n = e.getElementsByTagName("p").length, o = e.getElementsByTagName("img").length, i = e.getElementsByTagName("li").length - 100, r = e.getElementsByTagName("input").length, s = 0, l = e.getElementsByTagName("embed"), c = 0, m = l.length; c < m; c += 1) this.REGEXPS.videos.test(l[c].src) || (s += 1);
                                    var u = this._getLinkDensity(e),
                                        d = this._getInnerText(e).length;
                                    return o > 1 && n / o < .5 && !this._hasAncestorTag(e, "figure") || !t && i > n || r > Math.floor(n / 3) || !t && d < 25 && (0 === o || o > 2) && !this._hasAncestorTag(e, "figure") || !t && a < 25 && u > .2 || a >= 25 && u > .5 || 1 === s && d < 75 || s > 1
                                }
                                return !1
                            }))
                        }
                    },
                    _cleanMatchedNodes: function(e, a) {
                        for (var t = this._getNextNode(e, !0), n = this._getNextNode(e); n && n != t;) n = a.test(n.className + " " + n.id) ? this._removeAndGetNext(n) : this._getNextNode(n)
                    },
                    _cleanHeaders: function(e) {
                        for (var a = 1; a < 3; a += 1) this._removeNodes(e.getElementsByTagName("h" + a), (function(e) {
                            return this._getClassWeight(e) < 0
                        }))
                    },
                    _flagIsActive: function(e) {
                        return (this._flags & e) > 0
                    },
                    _removeFlag: function(e) {
                        this._flags = this._flags & ~e
                    },
                    isProbablyReaderable: function(e) {
                        var a = this._getAllNodesWithTag(this._doc, ["p", "pre"]),
                            t = this._getAllNodesWithTag(this._doc, ["div > br"]);
                        if (t.length) {
                            var n = new Set;
                            [].forEach.call(t, (function(e) {
                                n.add(e.parentNode)
                            })), a = [].concat.apply(Array.from(n), a)
                        }
                        var o = 0;
                        return this._someNode(a, (function(a) {
                            if (e && !e(a)) return !1;
                            var t = a.className + " " + a.id;
                            if (this.REGEXPS.unlikelyCandidates.test(t) && !this.REGEXPS.okMaybeItsACandidate.test(t)) return !1;
                            if (a.matches && a.matches("li p")) return !1;
                            var n = a.textContent.trim().length;
                            return !(n < 140) && (o += Math.sqrt(n - 140)) > 20
                        }))
                    },
                    parse: function() {
                        if (this._maxElemsToParse > 0) {
                            var e = this._doc.getElementsByTagName("*").length;
                            if (e > this._maxElemsToParse) throw new Error("Aborting parsing document; " + e + " elements found")
                        }
                        void 0 === this._doc.documentElement.firstElementChild && (this._getNextNode = this._getNextNodeNoElementProperties), this._removeScripts(this._doc), this._prepDocument();
                        var a = this._getArticleMetadata();
                        this._articleTitle = a.title;
                        var t = this._grabArticle();
                        if (!t) return null;
                        this.log("Grabbed: " + t.innerHTML), this._postProcessContent(t);
                        for (var n = 0; n < t.getElementsByTagName("p").length; n++) {
                            var o = t.getElementsByTagName("p");
                            void 0 === o[n].textContent && null === o[n].textContent || (t.getElementsByTagName("p")[n].textContent = o[n].textContent + " \n")
                        }
                        for (n = 0; n < t.getElementsByTagName("div").length; n++) {
                            var i = t.getElementsByTagName("div");
                            void 0 === i[n].textContent && null === i[n].textContent || (t.getElementsByTagName("div")[n].textContent = i[n].textContent + " \n")
                        }
                        for (n = 0; n < t.getElementsByTagName("span").length; n++) {
                            var r = t.getElementsByTagName("span");
                            void 0 === r[n].textContent && null === r[n].textContent || (t.getElementsByTagName("span")[n].textContent = r[n].textContent + " \n")
                        }
                        if (!a.excerpt) {
                            var s = t.getElementsByTagName("p");
                            s.length > 0 && (a.excerpt = s[0].textContent.trim())
                        }
                        var l = t.textContent;
                        return {
                            uri: this._uri,
                            title: this._articleTitle,
                            byline: a.byline || this._articleByline,
                            dir: this._articleDir,
                            content: t.innerHTML,
                            textContent: l,
                            length: l.length,
                            excerpt: a.excerpt
                        }
                    }
                }, "object" === n(e) && (e.exports = c)
            },
            3367: (e, a) => {
                a.brazilianStates = {
                    AC: "Acre",
                    AL: "Alagoas",
                    AP: "Amapá",
                    AM: "Amazonas",
                    BA: "Bahia",
                    CE: "Ceará",
                    DF: "Distrito Federal",
                    ES: "Espírito Santo",
                    GO: "Goiás",
                    MA: "Maranhão",
                    MT: "Mato Grosso",
                    MS: "Mato Grosso do Sul",
                    MG: "Minas Gerais",
                    PA: "Pará",
                    PB: "Paraíba",
                    PR: "Paraná",
                    PE: "Pernambuco",
                    PI: "Piauí",
                    RR: "Roraima",
                    RO: "Rondônia",
                    RJ: "Rio de Janeiro",
                    RN: "Rio Grande do Norte",
                    RS: "Rio Grande do Sul",
                    SC: "Santa Catarina",
                    SP: "São Paulo",
                    SE: "Sergipe",
                    TO: "Tocantins"
                }, a.countries = {
                    AFG: "Afeganistão",
                    RSA: "África do Sul",
                    ALB: "Albânia",
                    GER: "Alemanha",
                    AND: "Andorra",
                    ANG: "Angola",
                    AIA: "Anguilla",
                    ATG: "Antígua e Barbuda",
                    ANT: "Antilhas Holandesas",
                    KSA: "Arábia Saudita",
                    ALG: "Argélia",
                    ARG: "Argentina",
                    ARM: "Arménia",
                    ARU: "Aruba",
                    AUS: "Austrália",
                    AUT: "Austria",
                    AZE: "Azerbaijão",
                    BAH: "Bahamas",
                    BHR: "Bahrein",
                    BAN: "Bangladesh",
                    BRB: "Barbados",
                    BEL: "Bélgica",
                    BLZ: "Belize",
                    BEN: "Benim",
                    BER: "Bermudas",
                    BLR: "Bielorrússia",
                    BHU: "Butão",
                    BOL: "Bolívia",
                    BIH: "Bósnia e Herzegovina",
                    BOT: "Botsuana",
                    BRA: "Brasil",
                    BRU: "Brunei",
                    BUL: "Bulgária",
                    BFA: "Burkina Faso",
                    BDI: "Burundi",
                    CAM: "Camboja",
                    CMR: "Camarões",
                    CAN: "Canadá",
                    CPV: "Cabo Verde",
                    CAY: "Ilhas Cayman",
                    KAZ: "Cazaquistão",
                    CHA: "Chade",
                    CHI: "Chile",
                    CHN: "China",
                    CYP: "Chipre",
                    COL: "Colômbia",
                    COM: "Comores",
                    CGO: "Congo",
                    COK: "Ilhas Cook",
                    PRK: "Coreia do Norte",
                    KOR: "Coreia do Sul",
                    CRC: "Costa Rica",
                    CIV: "Costa do Marfim",
                    CRO: "Croácia",
                    CUB: "Cuba",
                    DEN: "Dinamarca",
                    DJI: "Djibouti",
                    DMA: "Dominica",
                    ECU: "Equador",
                    EGY: "Egito",
                    SLV: "El Salvador",
                    UAE: "Emirados Árabes Unidos",
                    ERI: "Eritreia",
                    SCO: "Escócia",
                    SVK: "Eslováquia",
                    SVN: "Eslovênia",
                    ESP: "Espanha",
                    USA: "Estados Unidos",
                    EST: "Estônia",
                    ETH: "Etiópia",
                    FRO: "Ilhas Feroé",
                    FIJ: "Fiji",
                    PHI: "Filipinas",
                    FIN: "Finlândia",
                    FRA: "França",
                    GAB: "Gabão",
                    GHA: "Gana",
                    GAM: "Gâmbia",
                    GEO: "Geórgia",
                    GIB: "Gibraltar",
                    GRN: "Granada",
                    GRE: "Grécia",
                    GPE: "Guadalupe",
                    GUM: "Guam",
                    GUA: "Guatemala",
                    GUI: "Guiné",
                    GNB: "Guiné-Bissau",
                    EQG: "Guiné Equatorial",
                    GUY: "Guiana",
                    FGU: "Guiana Francesa",
                    HAI: "Haiti",
                    HON: "Honduras",
                    HKG: "Hong Kong",
                    HUN: "Hungria",
                    YEM: "Iémen",
                    IND: "Índia",
                    IDN: "Indonésia",
                    ENG: "Inglaterra",
                    IRN: "Irã",
                    IRQ: "Iraque",
                    IRL: "Irlanda",
                    NIR: "Irlanda do Norte",
                    ISL: "Islândia",
                    ISR: "Israel",
                    ITA: "Itália",
                    JAM: "Jamaica",
                    JPN: "Japão",
                    JOR: "Jordânia",
                    KVX: "Kosovo",
                    KUW: "Kuwait",
                    LAO: "Laos",
                    LVA: "Letônia",
                    LES: "Lesoto",
                    LIB: "Líbano",
                    LBR: "Libéria",
                    LBY: "Líbia",
                    LIE: "Liechtenstein",
                    LTU: "Lituânia",
                    LUX: "Luxemburgo",
                    MAC: "Macau",
                    MKD: "Macedónia",
                    MAD: "Madagáscar",
                    MAS: "Malásia",
                    MWI: "Malaui",
                    MDV: "Maldivas",
                    MLI: "Mali",
                    MLT: "Malta",
                    FLK: "Ilhas Malvinas",
                    MAR: "Marrocos",
                    MTQ: "Martinica",
                    MTN: "Mauritânia",
                    MRI: "Maurícia",
                    MEX: "México",
                    MYA: "Mianmar",
                    FSM: "Estados Federados da Micronésia",
                    MDA: "Moldávia",
                    MNG: "Mongólia",
                    MNE: "Montenegro",
                    MSR: "Montserrat",
                    MOZ: "Moçambique",
                    NAM: "Namíbia",
                    NEP: "Nepal",
                    NCL: "Nova Caledônia",
                    NZL: "Nova Zelândia",
                    NCA: "Nicarágua",
                    NIG: "Níger",
                    NGA: "Nigéria",
                    NOR: "Noruega",
                    OMA: "Omã",
                    WAL: "País de Gales",
                    NED: "Países Baixos",
                    PLE: "Palestina",
                    PAN: "Panamá",
                    PNG: "Papua-Nova Guiné",
                    PAK: "Paquistão",
                    PAR: "Paraguai",
                    PER: "Peru",
                    TAH: "Polinésia Francesa",
                    POL: "Polónia",
                    POR: "Portugal",
                    PUR: "Porto Rico",
                    QAT: "Qatar",
                    KEN: "Quênia",
                    KGZ: "Quirguistão",
                    VGB: "Ilhas Virgens Britânicas",
                    CTA: "República Centro-Africana",
                    CZE: "República Checa",
                    COD: "República Democrática do Congo",
                    DOM: "República Dominicana",
                    TPE: "Taiwan",
                    ROU: "Romênia",
                    RUS: "Rússia",
                    RWA: "Ruanda",
                    SOL: "Ilhas Salomão",
                    SAM: "Samoa",
                    ASA: "Samoa Americana",
                    LCA: "Santa Lúcia",
                    SKN: "São Cristóvão e Névis",
                    VIN: "São Vicente e Granadinas",
                    SMR: "São Marinho",
                    STP: "São Tomé e Príncipe",
                    SEN: "Senegal",
                    SLE: "Serra Leoa",
                    SRB: "Sérvia",
                    SEY: "Seychelles",
                    SIN: "Singapura",
                    SYR: "Síria",
                    SOM: "Somália",
                    SRI: "Sri Lanka",
                    SDN: "Sudão",
                    SSD: "Sudão do Sul",
                    SWE: "Suécia",
                    SWZ: "Suazilândia",
                    SUI: "Suíça",
                    SUR: "Suriname",
                    TJK: "Tadjiquistão",
                    THA: "Tailândia",
                    TAN: "Tanzânia",
                    TLS: "Timor-Leste",
                    TOG: "Togo",
                    TGA: "Tonga",
                    TRI: "Trinidad e Tobago",
                    TUN: "Tunísia",
                    TKM: "Turcomenistão",
                    TUR: "Turquia",
                    TCA: "Turcas e Caicos",
                    UKR: "Ucrânia",
                    UGA: "Uganda",
                    VIR: "Ilhas Virgens Americanas",
                    URU: "Uruguai",
                    UZB: "Uzbequistão",
                    VAN: "Vanuatu",
                    VEN: "Venezuela",
                    VIE: "Vietname",
                    ZAM: "Zâmbia",
                    ZIM: "Zimbábue"
                }
            },
            9514: e => {
                "use strict";
                e.exports = function(e) {
                    return String(e).replace(/\s+/g, " ")
                }
            },
            7943: e => {
                "use strict";
                e.exports = JSON.parse('{"Latin":{"spa":" de|os |de | la|la | y | a |es |ón |ión|rec|ere|der| co|e l|el |en |ien|ent|cho|ech|ció|aci|o a|a p| el|al |a l|as |e d| en|ona|na |da |s d|nte| to|ad |ene|con| su| pr|tod| se|ho | pe|los|per|ers| lo| ti|cia|o d|n d|a t|cio|ida|res| es|tie|ion|rso|te | in|do |to |son|dad| re| li|e s|tad|que|pro|est|oda|men|nci| po|a e| qu|ue | un|ne |s y|lib|n e|su | na|s e|ia |nac|e e|tra|or | pa|ado|a d|nes|se |ra |a c|com|nal|por|er |a s|ual|rta| o |ber|les|one|rá |des|s p|dos|sta|ser|ter|ar |era|ibe|ert|ale| di|a a|nto|l d|del|ica|hos|o e|io |imi|oci|n c|s n|ant|cci|re |e c|y l|ame| as|mie|enc| so|o s|ici|las|par|s t|ndi| cu|ara|dic|bre|una|tos|ntr|l p|s l|e a|pre|cla|o t|a y|omo|man|y a|ial|so |nid|n l|n p| al|mo |e p|s s| ig|igu|gua|uma| fu|nta|y e|soc|o p|no |ali|ten|s a|ade|hum|ran|l t|n t|s c|ria|dis|d d| ca|cas|das|ada|ido|l e|y d|tiv|vid|mbr|a i| hu|fun|und|eli|s i| ma|nda|e i| ha|uni|nad|a u|sar|s o| ac|die|qui|rac|ndo| tr|ind| me|ori|tal|odo|ari|lid|esp|o y|tic|ca |un |esa|cti|cua|ier|ta |lar|ons|ont|iva|ide|med|edi|d y|ele|nos|ist|l m|s h|ecc|sti|tor| le|seg|cie|r e|n a|ito|ios|rse|ie |o i|a o|o l|pen|tri|rim|l y|ami|lig|erá|o c|rot|ote|mat|ond|ern|n s|e h|an |ect|lo |ibr|ple|sus|us ","eng":" th|the| an|he |nd |and|ion| of|of |tio| to|to |on | in|al |ati|igh|rig|ght| ri|or |ent|as |ll |is |ed |in | be|e r|ne |ver|one|s t|all|eve|t t| fr| ha| re|s a|ty |ery|d t| pr| or|e h| ev| co|ht |e a|ng |his|ts |yon|be |ing|ce |ryo| sh|n t|fre|ree|men|her|pro|has|nal|sha|es |nat|y a|for| hi|hal|n a|f t|nt | pe|n o|s o| fo|nce|d i|er |e s|res|ect|ons|ity|l b|ly |e e|ry |an |e o|ter|ers|e i| de|cti|hts|eed|edo|dom| wh|ona|re | no|l a| a |e p| un| as|ny |d f| wi|nit| na|nte| en|d a|any|ere|ith| di|e c|e t|st |y t|ns |ted|sta|per|th |man|ve |om |nti|s e|t o|ch | ar|d o|equ|soc|oci|wit|ess|ote|ial|rea| al| fu| on| so|uni|oth| ma| ac| se|enc| eq|qua|ual|ive|lit|thi|int| st|tat|r t|t a|y o|e w|hum|uma|und|led|cia|l o|e f| is|le |f h| by|by | la|ali|are|y i|con|te | wo|eas| hu|ave|o a|com| me|ic |r a|ge |f a|ms |whe| ch|en |n e|rot|tec|tit|s r| li|o t|ple|s d|rat|ate|t f|o o|wor| fa|hou|dis|t i|nda|nde|eli|anc|rom| su|cie|no |ary|inc|son|age|at |oms|oun|nst|s w|d w|ld |n p|nta|l p|tan|edu|n s|duc|itl|tle|whi|hic|ich|ble|o s|imi|min|law|aw |gni|iti| ot|g t|eme|se |e b|ntr|tra| pu|d n|s i|act|e d|ort| he|r s|cou|unt|pen|ily| ag|ces|rit|it |din|s f|hav|ind| ed|uca|cat|ren|ien|tho|ern|d e|omm","por":"os |de | de| a | e |o d|to |ão | di|ent|da |ito|em | co|eit|as |dir|ire|es |rei| se|ção|ade|a p|e d|s d|dad|men|nte|do |s e| pe| pr|dos| to| da|o e| o |a a|o a|ess|tod|con| qu|que| do|e a|te |al |res|ida|m d| in|er | ou|sso| re| na|a s| po|uma| li|cia| te|pro|açã|e e|ar |a d|a t|ue | su| es|ou |s p|a e|tos|des|com|ra |ia |tem|no | pa|ame|nto|e p|is |est|oda|na |s o|tra|ões|das|pes|soa|o s|s n|o p|ser|s a| à |ais| as| em|o o|e o|ber|oa |o t|ado|a c|sua|ua | no|ter|man|e s| os|s s|e n|çõe|ica|lib|ibe|erd|rda|nci|odo|nal|so |ntr|or |ura|s t|o c|ona| so| ao|hum|ual|sta|ma |ons|a n|era|e t|pre|ara|r a|por| hu|cio|o à|ria|par|ind|e c|ran|gua| um|o i|a l|s c|ndi|m a| en|und|nos|e r|ano|aci|ion|soc|oci|nid|sen|raç| ac|ndo|nsi| ig|igu| fu|fun|m o|nac|per|ali|rec|ime|ont|açõ|int|r p| al|um | me|a i|s h|nta|rio|cçã|ere|pel|l d|a o| ex|pri|uni|ese|ada| ma|ant|ide|nda| fa|am |e f|lid|io |ém |ita|iva|omo|o r|esp|a f|m p|lic|ca |s f|naç|pod|ode|ver|a q|r e|tad|tiv|vid|e l|o q|r d|e i|seu|eli|mo |ecç|s i|ial|ing|ngu|s l| vi|ist|ta |eci|ênc|a m| ca|der|ido|ios| un|dis|cla|qua|se |ati|sti|r o|sid|roc| tr|sem|o n|ao |dam|ens|tur|ico|rot|ote|tec|sse|l e|ena|for| pl| ni|nin|gué|uém|não|ela|tro|ros|ias","ind":"an |ang| da|ng | pe|ak | ke| me| se|ata|dan|kan| di| be|hak|ber|per|ran|nga|yan|eng| ya| ha|asa|men|gan|ara|nya|n p|n d|n k|a d| at|tan|at |ora|ala| ba|san|erh|ap |ya |rha|n b| ma|a s|pen|g b|eba|as |aan| or|ntu|uk |eti|tia|tas|aka|set|ban|n s| un|n y| te|ter|iap|tuk|k m|beb|bas|lam| de|n m|k a|keb|am |i d|ama|unt|ah |dal|end|n h|p o|den|sa |dak|mem|ika|ra |ebe|pun|ri |nda|ela|ma | sa|di |a m|n t|k d|ngg|n a|tau|asi| ti|eri|gar|man|ada|al |um |un |ari|au |lak|a p|ta |a b|ngs|ole| ne|neg|dar|ers|gsa|ida|leh|ert|k h|ana|sam|sia|i m|ia |dap|era|dil|ila|tid|eh |h d|atu|bat|uka|aha|a a|ai |g d|lan|tu |t d|uan| in|ena|har|sem|ser|kat|erl|apa|erb|uat|na |kum|g s|ung|nan|emp|rta|l d|mas|ega|n u| hu|ka |eni|pat|mba|adi| su|aga|ent|nta|huk|uku|rga|ndi|ind|i s|ar |sua|aku|rus|n i|ni |car|si |nny|han| la|in |u d|lah|ik |gga|ua |ian|ann|lai|usi|emb|rik|mer|erk|arg|emu|dun|dip|nas|lua|aru|ema|a u|min|mat|aya|kes|rak|eka|a t|rka|a k|iba|rbu|rma|yat|ini|ina|anu|nus|mua|s p|ut |lin| ta|us |ndu|da |pem|ami|sya|yar|nak|das|k s|kel|ese|mel| pu|ern|a n|aik|uar|t p|g p|ant|ili|dik| an|tin|ing|ipe|tak|iny|ain| um| ja|aks|sar|rse|aup|upu|seo|eor|g m|g t|dir|pel|ura|bai|aba|erd|eca|h p|kep|m m|jam|umu|mum","fra":" de|es |de |ion|nt |et |tio| et|ent| la|la |e d|on |ne |oit|le |e l| le|s d|t d|ati|e p|roi|it | dr|dro| à | co|té |ns |te |e s|men|re | to|tou| l’|con|que|les| qu| so| pe|des|son|ons|s l| un| pr|ue |s e| pa|e c|ts |t l|onn| au|e a|e e|eme| li|ant|ont|out|ute|ers|res|t à| sa| a |ce |per|tre|a d|er |cti| en|ité|lib| re|en |ux |lle|rso| in| ou|un |à l|nne|nat|une|ou |n d|us |par|nte|ur | se| d’|dan|ans|s s|pro|e t|s p|r l|ire|a p|t p|its|és |ond|sa |a l|nce|é d| dé|nal|aux|omm|me |ert| fo| na|iqu|ect|ale| da| ce|t a|s a|mme|ibe|ber|rté|s c|e r|al |t e| po|our|com|san|qui|e n|ous|r d| ne|fon|au |e o|ell|ali|lit| es| ch|iss|tes|éra|air|s n| di|ter|ui | pl|ar |aut|ien|soc|oci|tra|rat|êtr|int|été|pou|du |est|éga|ran|ain|s o|eur|ona|rs |anc|n c|rai|pri|cla|age|nsi|e m|s t| do|bre|sur|ure|ut | êt| ét|à u|ge |ess|ser|ens| ma|cia|l e| su|n p|a c|ein|st |bli| du|ntr|rés|sen|ndi|ir |n t|a s|soi| ég|ine|l’h|nda|rit| ré|t c|s i|il |l’a|e q| te|é e|t s|qu’|ass|ais|cun|peu|ée |tat|ind|t q|u d|n a| ac|tés|idé|l n|ill| as|’en|ign|gal|hom|nta| fa|lig|ins| on|ie |rel|ote|t i|n s|sse| tr|n e|oir|ple|l’e|s é|ive|a r|rec|nna|ssa| mo|s u|uni|t ê|pré|act| vi|era|sid| nu|e f|pay|’ho|cat|leu|ten|rot|tec|s m","deu":"en |er |der| un|nd |und|ein|ung|cht| de|ich|sch|ng | ge|ie |che| di|die|ech|rec|gen|ine|eit| re| da|ch |n d|ver|hen| zu|t d| au|ht | ha|lic|it |ten|rei| be|in | ei| in| ve|nde|auf|ede|den|n s|zu |uf |ter|ne |fre| je|jed|es | se| an|n u|and|sei|run| fr|at |s r|das|hei|hte|e u|ens|r h|nsc|as |nge| al|ere|hat|men|lle|nte|rde|t a|ese|ner| od|ode| we|g d|n g|all|t u|ers| so|d d|n a|nen|te |lei| vo|wer| gr|ben|ige|e a|ion| st|ege|le |cha| me|ren|n j|haf|aft| er|erk|bei|ent|erd| si|kei|tig|eih|ihe|r d|len|on |n i|lun| gl|chu|e s|ist|st |unt|ern|tli|gem|ges|ft |ati|tio|gru|end|ies|mit|eic|sen|r g|e e|ei | wi|n n| na|sta|gun|ite|n z|r s|gle|chl|lie|mei|em |uch|nat|n w|urc|rch|de |hre| sc|sse|ale|ach|r m|des|n e|spr|t w|r e|d f| ni| du|dur|nie| mi|ied|fen|int|dar|e f|e g|geh|e d|f g|t s|ang|ste|hab|abe|h a|n v|alt|tz |hli|sic|her|nun|eme|ruc|taa|aat|he |e m|erf|ans|geg| is|tun|pru|d g|arf|rf |n o|ndl|ehe|e b|h d|d s|dig|arb|wie|r b| ih|r w|nsp|ber|t i|r a|r v|igk|gke|bes|n r|str|gew|rbe|ema|e v|n h| ar|rt |ind|n f|ins|esc|ieß|ken|ger|eru|ffe|ell|han|igu|man|sam|t g|ohn|hul|rst|tra|rli|lte|hut|utz|ls |ebe|von|r o|e i|nne|etz|d a|rn |isc|sel| fa|one|son|et |aus|r i|det|da |raf|iem|e z|lan|sow","jav":"ng |an |ang| ka|ing|kan| sa|ak |lan| la|hak| ha| pa| ma|ngg|ara|sa |abe|ne | in|ant|n k| ng|nin|tan|nga| an|ata|en |ran|man| ba|ban|ane|ong|ra |n u|hi |nth| da|ake|ke |thi|ung|uwo|won|ngs| uw|asa|ben|gsa|sab|ana|aka|beb|nan|a k|nda|g p|adi|at |awa|san|ni |pan| be|dan|eba|g k|e k|ani|bas|g s|dha|aya| pr|gan|mar|di |ya |wa |g u|n s|ta |a s| wa|arb|e h| na|a n|a l|n p|a b|yan| ut|n n|ah |asi| um|g d|as |han|g n| tu|dar|rbe|wen|ggo| di|dak|mat|sar|eni| un|und|iya|a a|k h|kab|ka |be |uma|art|ora|ngk|i h|ala|rta|n b| or|n m|gar|kar|yat|al |g b|na |a m|n i|ega|ina|kak|g a|pra| ta|gge|ger|ena|kat|kal|a p|i k|tum|oni|nya| ne|adh|g m|duw|uwe|dad|kas| pe| si|aga|uta|k k|pa |and|nun|i l|ngu|go |nal| ke|n a|uju|anu|ama|a d|i p|t m|er | li|per|iba|min|sak|apa|war|ha |pad|ggu|gay|ras|taw|ind|eng|a u|we | bi|n l|ali|awi|neg|awe|bak|g t|e p|ndu|bis| ku|ih |ase| me|iji|pri|bad|eh |i t|uwa|ron|ndh|mra|ar | pi|ur |isa|mba|sin|aba|g l|ebu|n t|ika|men|ini|lak|a w|arg|ku |ami|ayo|a i|nas|liy|e s| we|rib|ngl| ik|k b|e d|rga|rap|tin| lu|aku|bed|k a|h k|yom| as| nd|eka|il | te|umu|rak|ut |dil|i w|i s|jin|kon|jud|wae|ae |kap|uha|uto|tow|gka|umr|n d| ti|eda|gon|ona| mi|ate|mum|um |but|r k|wat|si |k p|k l|gaw","vie":"ng |̣c |́c | qu| th|à |nh | ng|̣i | nh| va|và|̀n |uyê| ph| ca|quy|yề|ền|̀i | ch|̀nh| tr| cu|ngư|i n|gươ|ườ|ời|́t | gi| co|ác|̣t |ó |c t|ự |n t|cá|ông| kh|ượ|ợc| tư| đư|đươ|iệ|ìn|́i | ha| đê|i đ|có|gia| mo|mọ|ọi|như|pha|n n|củ|ủa|̉a |̣n | ba|n c|̀u |̃ng|ân |ều| bi|hôn|ất|tự|g t| vi|n đ|đề|t c| la| ti|nhâ| đô|u c|hiê|bả|ên | tô|hân| do|do |́ q|ch |̀ t| na|́n |ới|ay | hi|àn|̣ d| đi|g n|hay|há| mô|ội|hữ|uố|ốc|n v|̣p |́p |quô|thư| ho|nà|ị |́ch|̀ng|ào|̀o |̉n |ôn |i c| hô|c đ|i v|khô|c h|i t|g v| đa|mộ|ột|́ng|tro|ữn|ướ|ia |̣ng|ản|̉ng|h t|hư |ện|ộc|g c|ả | đo|̉ c|là|c c|n h|n b|hà|iế|̣ t| cô| vê|ức|t t|ã |hộ| vơ|iên|g đ|̉i | bâ|̀y |ớc|a c|̉m | sư|áp|ật|viê|vớ|hươ|tha|ực|h v|ron|ong|g b|qua|iá|̀ c|ể |h c|a m|ế |uậ|ảo|̉o |sự|o v|cho|phâ|n l| mi|hạ|côn|o c|̃ h| cư|ục|̀ n| hơ|i h|c q|á |ại|bị|cả|c n| lu|ín|h đ| xa|g h|độ|bấ| nư|m v|thô| tâ|tộ|hả|oà|áo|́o |ốn|ệ |thu|mì| du|̣ c|xã|c p|ải| hư|́ c|ho |y t|o n|n p|ở |hứ|iể|y đ|hấ|ối|chi|án|ề |́ t|ệc|cũ|ũn|tiê|hợ|ợp|o h|hoa|ày|ai |ết|̉ n|c b|đó| đâ|luâ|đố|kha|về|̉ t|c l|̀ đ|i b|nươ| bă|dụ|họ| ta|thê|tri|hí|́nh|g q|p q|n g|o t|c g|hự|yên|i l|́u |an | cơ","ita":" di|to |ion| de| in|la |e d|ne |di | e |zio|re |le |ni |ell|one|lla|a d|rit|o d|itt|del| co|dir|iri|ti |ess|ent| al|azi|tto|te |i d|i i|ere|tà | pr|ndi|e l|ale|ind|o a|e e|gni|e i|nte|con|li |a s| un|i e|ogn|men|uo | og| ne|idu|ivi|e a|div|vid|duo| ha|tti| es|a p|no | li|za |pro|ato|all|sse|per|ser| so|i s| la| su|e p| pe|a l|na |ibe|ali| il|il |e n|lib|ber|e c|ia |ha |che|e s|o s|o e| qu|in |nza|ta |nto| ri|he |o i|oni|sta| o | a |o c|nel|e o|naz|so |o p|o h|gli| po|i u|ond|i p|ame|ers|i c|ver|ro |ri |era|un |lle|a c|ua | ch|ssi|una|el |i a|ert|rtà| l |a a|tat|ant|dis|ei |a e| si| ad|à e|nal| da| le|est|pri|nit|ter|ual| st|ona|are|ità|dei|cia|gua|anz|tut| pa|al | ed| re|sua|ono| na|uni|raz|si |ita|com|ist|man|ed |der|ad |i o|enz|soc|que|res| se|o o|ese| tu|i r|io |ett|à d|on |dic|sia|rso|se |uma|ani|rio|ari|ial|eri|ien|ll |oci|rat|tra|ich|pre|qua|do | um|a t|i l|zza|sci|tri|er |ico|pos|a n|ara|o n|son|att| fo|fon|nda|utt|par|nti|sti|nes|n c| i |chi|hia|iar|int|sen|e u|str|uzi|ati|a r|rop|opr|egu| me|ra |ann| ma| eg|ost|bil|isp|ues| no|ont|rà |tta|ina|ezz|l i|tal| ra|gio|nno|a i|d a|i m|ria| cu|ore|e r|izi|dev|tan|lit|cie|non|sso|sun|ite|ica|l d|ide|lia|cos|i n|nta|a f| is|l p|art","tur":" ve| ha|ve |ler|lar|ir |in |hak| he|her|bir|arı|er |an |eri| bi|ya |r h|ak |ın |eti|iye|ası| ka|yet| ol|tle|ını|ara|eya|akk|kkı|etl|sın|na |esi|de |ek | ta|nda|ini| bu|rın|ile|vey|kla|rin|ne |e h|ır |ine|e k|ına|sin|dır|ere| sa|n h|ama|ınd|nın|mas| ge|le |ı v| va|erk|rke|lma|nma|lan| te|tin|akl|rle|nin|en |e m|ard|a v|ill| de|let|da |k h| me|aya| şa|k v| hü|riy|e b|kın|nı |et |dan|san|e d|var|rdı|kes|si |mil|e a| il|hür|ana|ret|dir| se|şah|mes|irl| mi|ola|bu |ürr|rri|n e|n i|kı |n v|mek| ma|mak|lle|lik|nsa|li |ı h| iş| ed| iç|n b|kar| ba|ala| hi|eli|ulu|a h|eme|re |e s|ni |e t|n k|a b|iş |rak|evl|e i|etm|ik |r ş|ar | eş|olm|un |hai|aiz|izd|zdi|im |dil|n t|nde| gö|ilm|lme|tir|mal|hiç|e g|unm|ma |ele|a i|e e|eşi|şit|ık |mel| et| ko|n s|ahs|i v|sı | an|el |yla|la |ili|r v|rı |anı|ede|ket| ya|lun|may|se |ins|tim|edi|siy|t v|içi|çin|a k|nla|r b|miş|i b|yan|ame|tme| da|bul|mem|eml|eke|mle| ki| ke|lek| in| di|din|uğu|n m|it |ser|ind| mü|arş|rşı|es |ger|a s|len| ay| ku|vle|erd|eye|ye |oru|nam|ken| uy|a m|ün |r a|i i|tür|i m|kor| so|al |hsı|cak|rme|nun|lam|eni|dev|rde|ri |mey|a d|i o|kim|ims|mse|end|ndi|rek|ahi|il |hay|lık|e v|iç |sız| öğ|öğr|ğre| bü|büt|ütü|tün|anl|alı|şma|k g|at |den|i s","pol":" pr|nie| i |ie |pra| po|ani|raw|ia |nia|go |wie| do|ch |ego|iek|owi| ni|ści|ci |awo|a p|do | cz|ośc|ych| ma|ek |rze|prz| na|wo | za| w |ej |noś|czł|zło|eni| je|wa |łow|i p|wol|oln| lu|rod| ka|wsz| wo|lno|y c|ma |każ|ażd|ny |dy |o d|stw|owa|żdy| wy|rzy|ecz|sta| sw|e p|twa|czn|dzi|i w|szy|zys|na |ów |lub|ub |a w|k m|est| sp|kie|wan|ają| ws|pow|e w|spo|nyc|pos|rac|a i|cze|yst|ać |neg|sze|ne |mi |aro|ńst| ja|jak|o p|pod| z |acj|obo| ko|i i|nar|i n| ro|awa| ró|zy |dow|zen|zan|zne|zec|jąc|iej|cy |rów|nej|odn|nic|czy|o s|no |ony|aw |i z|ówn|odz|jeg|o w|edn|o z|aki|o o|a s| st|ni |bez|owo| in|ien|eńs|ami| or|dno|zie|mie| ob|kol|stę|tęp|i k|ez |w c|poł|ołe|łec|ym |orz|jed|o u| os|olw|lwi|wia|ka |owy|owe|y w| be|o n|jes|wob|wyc|a j| od|zna|inn|zyn|aln|któ|cji|ji |się|i s|raz|y s|lud| kr|ją |cza|zes|nik|st |swo|a o|sza|ora|icz|kra|a z|h p|i o|ost|roz|war|ara|że |lni|raj| si|ię |e o|a n|em |eka|stk|tki|pop|ą p|iec|ron|kow|odo|w p|peł|ełn|ran|wni|dni|ows|ech|gan|dów|zon|pie|a d|i l| kt|tór|ini|ejs| de|dek|ywa|iko|z w|god|ków|adz|dst|taw| to|trz|e i|ich|dzy|by |bod|iu |nan|h i|chn|zeń|y z|ano|udz|ieg|w z|ier|ale|a k|z p|zaw|ekl|kla|lar|any|du | zw| go|o r|to |az |y n|ods|ymi|ju |och|nau|wej|i m","gax":"aa |an |uu | ka|ni |aan|umm|ii |mma|maa| wa|ti | fi|nam|ta |tti| na|saa| mi|fi |rga|i k|a n| qa|dha|iyy|oot|mir|irg|in |raa|qab|a i|kan|a k|isa|chu|akk|amu|aba|a f|huu|kam| ta|kka|amn|ami| is|a a|mni|att| bi|yaa|ach|yyu|yuu|ee |miy|wal|waa|ga |aat|ata|a e|tii|oo | ni| ee|moo|ba |ota| ak|a h| ga|i q| dh|daa|a m|haa|ama|i a|a b|yoo|ka |kaa| hi|aas|sum|u n| uu|arg| hu|man| ha| ar| ke| yo| ba|ees|i i|taa|uuf|uf |ada|iin|i f|rra|ani|a w|i w| ad|da |nya|a u|irr|na |hun|isu|hin| ma| ho|ess|und|i m|i b|bar|is |een|ana|mu |bu |i d| sa|f m|add|sa |eeg| ir|i h|n h|u a|aad| la|al |ala|udh|ira|hoj|kee|goo| ya|ook|abu|gac|mum|as |itt|nda|see|n t|n i|uum|n k|ra |rgo|ara|a q|ums|muu|mat|a d|nii|sii|ssa|ati|a g|asu|biy|yya|eef|haw| da| mo|tum|a t|u h|gar|uma|a s|n a|n b|baa|awa|nis|eny|u y|roo|mmo|gam|sat|abs|n m|tee|nna|eer|bir| ku| qo|bil|ili|lis|otu| to|kko|n w|ali|rum|msa|rka| fu|amm|gaa|aaf|era|ya | ye|yer|ero|oti|kun|un |jii|ald|i y|ant|suu|n d|tok|okk|ame|mee|nni|tan| am|lii|n u|aru|lee|gum|ddu|i g|u m|oji|ura|lda|lab|ila|laa|aal|n y|ef |chi|uud| qi|qix|dar|ark|dda|gal|u b| ji|jir|han|art|arb|asa|ega|tam|hii|ffa| se| bu|faa|ndi|n g|bat|oka|kar| mu|mur|aja|uun|naa|sad|a l|lam|ken|enn|u f|egu","swh":"a k|wa |na | ya| ku|ya | na| wa|a m| ha|i y|a h|a n|ana|ki |aki|kwa| kw|hak| ka| ma|la |a w|tu |li |a u|ni |i k|a a|ila| ki|ali|a y|ati|za |ifa|ili| mt|ke | an|kil|kat|mtu|ake|ote|te |ma |ika|ka |we |a s|yo |i n|fa |ata|e k|ama|zi |u a|amb|ia |kut|ina|u w|azi| yo|i z|asi| za|o y|au |yak|uhu|ish|tik|ha |wat| au|u k|e a|mba|hur| bi|ara|sha|uru|mu | as| hi|u n|hi |ru |tai|aif|a b|hal|ayo|cha| uh|i h|yot| ch|awa|chi|atu|e n| zi|u y|ngi|mat|shi|ani|e y|sa |eri|ja |uli| am|ele|i a|end|o k| sh|ima|ami|oja|a t| ta| nc|nch|any|a j|ham|wan|ada|uta|i w|iki|ra |moj|ii |ari|kuw|uwa|ye | la| wo|o h| sa|ti |wak|she|iwe|kan|nay|eza|iri|iwa|fan|bu |i m|uto|lim|ao |her|ria|wen|kam|di | ja|jam| ni|ing|a l|wot|bin|amu|dha|o w|ahi|kaz|zo |da |adh|si | hu|ri |bil|e m|aka|e w|ang|ini|agu|sta|a z|kup|kul|lin|ind|ne |aji|zim|nya|kus|har|nye|asa|nad|dam|rik|iyo| ba|bar| nd|nde|ita|ta |gin|ine|uu |mwe|maa|ndi|kuf|o n|u h|i s|uzi|nga| ye|tah|sil|imu| ut|azo|esh|uni|taa|aar|rif|hii|wez|uba|wam|ush|mbo|bo |ibu|lez|wal|saw|kos|e b|a c| si|aza|tok|oka|tak|eng|dhi|ala|hir|yan|izo|ten|guz| mw|liw|ndo|oa |laz|aha|uku|ian|eli|mam|ua |ndw|zin|aba|pat|del|i b|ufu|nda|a i|mai|ais| um|man|ba |u m|kuh|zwa|sia|tan|taw|e i","sun":"an |na |eun| ka|ng | sa|ana|ang| di| ha|ak |nga|hak|un |ung|keu| ba|anu| an|nu |a b| bo| je|a h|ata|asa|jeu|ina| ng|ara|nan|gan|sa |a k|awa|ah | na|n k|kan|aha|ga |a s|a p|ban| ma|a n|bog|oga|ing|sar| ku| pa|man|a a|ha |san|bae|ae |din|g s|sah|tan|aga|ra | si|ala|kat|n s| pe|ma | ti|per|aya|sin| te| pi| at|n a|aan|pan|lah|gar|n n|u d|ta |eu |kum|ari|ngs|ran|a d|n d|n b|gsa|a m|wa |ama|ku |ike|taw|n p|k h|al | ja|eba|bas|a t|at |ika|beb|asi|atu|pik|kab|una|nda|a j|e b|n h|nag|oh |aba|en |ila|g k|boh|aku|ngg|art|rta|abe|ar |ima|n j|um |di |usa|udu|geu|k a|adi|ola|sak|aca|u s|rim| ay|car|h k|aka|eh |teu|tin| me| po|ti |awe|ngt|sac|jen|u a|uma|ent|k n|gaw|law|dan|uku|ur |teh|h s|bar|aru|ate| hu|nar|n t|jal|aja|dil|ere|iba|ieu|pol|nya|ut |wan|are|mas|ake|upa|pa |yan|huk| so|nus|ngk| du|ura|tun|ya |mpa|isa|lan| ge| mi|u m|kal|uan|ern|tut|tay|h b|hna|kaw|kud|us |und|ena|n m|han|nte|lak| ie|ula|ka | ke|rup| tu|u k| nu|g n|umn|mna|h p|g d|u n|gta|ayu|yun|mba|gam| be|du | ta| wa|wat|eus|a u|ren|umu|i m|ri |eri|rik|u p|dit|ali|h a|k k|k d|ngu|rua|ua | da|amp|men|sal|nge| ra|sas|nas|ona| bi|ame|sab|alm|lma|ami|min|il |kas|ter|mum|rak|mer|ksa|k j|yat|wil|mar|eur|g b|war|gal|kaa|we |tur|e a|r k","ron":" de|și | și|re | în|are|te |de |ea |ul |rep|le |dre|ept|e d| dr|ie |e a|ate|în |tul|ptu| sa| pr|e p|or | pe|la |e s|ori| la| co|lor| or|ii |rea|ce |tat|au | a |ați| ca|ent|ale| fi|ă a| ar|a s|ice|per|ers|uri| li|a d|al |ric| re|e c|e o|nă |i s|ei |tur|men|con| să|lib|ibe|ber|să |rso|tăț|ilo| ac|sau|pri|ăți|i a|i l|l l|car| in|ter|ție|lă |că |tea|a p|ții|soa|oan|ri |nal|in | al|e ș|i î|ril|ană|pre|ui |uni|e f|se |ile|ere|i d|ita| un|ert|e î|a o|ia |i c|fie|ele|ace|i ș|nte|tă |pen|ntr| se|a l|pro| că|ire|ală|eni|est| ni|ă d|lui|a c| cu|n c| nu|ona|sal| as|eri|naț|ând|ră | om| su|ecu|i p|rin|e n|ici|i n|nu |oat|inț|ni |tre| to|tor|ări|soc|oci|ste| na|iun| di| po|l d|va |ega|gal| tr|ă p|ulu|n m|ă î|a a|rec|res|i o| so|fi |sta|sa |uie| au|lit| ce| mo|din|ces|nic|int|nd |i e|cla|ara|ons| îm| eg|a î|rel|e l|ial|i f| fa|ță |leg|e e|tar|ra |ă f|a f|rar|iei|nit|ă c|tru|ru |u d|act|at |rtă|ți |nta|nde|eme|ntu|ame|reb|ebu|bui|toa|l c| o |ion|ă ș|dep|ali|ât |ili|ect|ite|i i|pli|n a|dec|rta|cu |împ|cți|ane|e r|văț|nt |u c|ța |l ș|cia|țio|ită|bil|r ș|poa|ca | st|t î|tri|riv|man|ne |omu|rie|rit|înv|nvă|ăță|mân|mod|od |rot| ma|cur|u a|oar|uma|a ș|rii|era| ex|tra|iil|ani|țiu|lic|t s|nța|eze|ta | va","hau":"da | da|in |a k|ya |an |a d|a a| ya| ko| wa| a |sa |na | ha|a s|ta |kin|wan|wa | ta| ba|a y|a h|n d|n a|iya|ko |a t|ar |ma | na|yan| sa|ba |asa| za| ma|hak|a w| ka|ata|ama|akk|i d|a m| mu|su |owa|a z|iki| ƙa|nci|a b| ci|ai | sh|kow|anc|nsa|a ƙ|a c| su|shi|ka | ku| ga|ne |ani|ci |e d|kum|uma|‘ya|cik| du|uwa|ana| ‘y|i k|ali|ɗan| yi|ada|ƙas|aka|kki|utu|n y|hi |a n| ad| do| ra|mut|tar| ɗa| ab|nda|a g|man|nan|ars|cin|ane|and|n k|min|yi |i a|ke |sam|ins|a i|nin|yin|ki |tum|ni |aɗa|ann|e m|ami|dam|za |en |kan|um |yar|mi |duk|oka|n h| ja|dai|kam|ewa|mat|i y|nna|abi|ash|n s|waɗ|ida|am |re |ga |sar|kok|oki|una|mas|ra |i b|dun|uni|abu|a ‘| ƙu|n j|awa|ce |a r|e s|ara|a ɗ|san|li |aba|cew|she|ƙun|kar|ari|m n|niy| ai|aik|u d|kko|buw|n w| la| ne|rsa|zam|omi|rin|hal|bub|ubu|aya|a l|han|ban|o n|are|add|i m|zai| hu|me |bin|tsa|sas|i s|ake|n ‘| fa|kiy|n m|ans|dom| ce|r d|uns|ƙar| an|jam|ɗin|i w| am|n t|wat|ika|yya|nce|har|ame|gan|hen|n b|n ƙ|dok|fa | ki|yak|ray|abb|din|on |bay|aid|ayi|aci|dan|aur|ili|u k| al|rsu| ts|ukk|kka|aye|nsu|ayu|bba| id|ant|n r|o d|sun|tun|unc|sha| lo|lok|kac|aif|fi |gam|aga|un |lin|aɗi|yuw|aja|fan|i i|ace|uka|n i|war|riy|imi|sak| ir|yay|tab|bat|mar| iy|sab|nta|afi|o a| ak|bi ","fuv":"de | e |e n|nde| ha|la |e e|akk| ka| nd|ina| wa|al |hak|na | in|ndi|ɗo |kke|ii |di |aad|ade|um |ko |i h|ala| mu| ne|lla|ji |wal| jo|mum| fo|all|neɗ|eɗɗ| le| ko|e h|kal|taa|re |aaw| ng|e k|aa |e w|ee |ley|jog|ke |e m|laa|nnd|eed|e l|ɗɗo|aag|ol | ta|o k|kee|gu |ti |dee|a j|ogi|waa|m e|am |le |eji|ond|nga|gal| wo|ɓe |ɗe |e d|awa|gii|ede|eej| re|gol|aan| go|agu|i e|oti|ann|fot|eyd|e t|ɗee|naa|oto|ydi| po|pot|maa| he|een|i n|enn|ni |taw|a i|e j|e f|a k|goo|to |dim|der|ele| aa|o n| de| fa| ba|ngu|oot|er |dir|won|oor| sa|ngo|ka |ndo|i k|a n|ay |ota|a f|ima|e ɓ| to|i f|a e|tee|ren| ja|i w|wa |o f|fof|ore|eyɗ|yɗe|a w|too|ma |o t|awi|i m|kam|o e|hay|and|nan|ñaa|e y|of |eel|e s|hee|aak|nka| do|l e|e g|ira| la| so| ɓe|a t|dii|e i| te|tin|e r|e p|o w|ani|aar|are| na|ral| ña| yi|awo| ya|so |aam|i l| ho|oo |ooj|nng|nge|woo| ma|faw|kaa| mo|u m|und|dow|gaa|en |o i| li|lig|igg|e a|ita|e b| o | nj| mb|o h|nda|ude|ɗi | no|haa|a h| fe| di|iin|iti|tii|yan| tu|tuu|inn|ama|baa|iiɗ|den|tal|aaɗ|yim|imɓ|njo|edd|ine|nee| je|jey|lli|lit|uug|ugn|no |bel|go | hu|ank|je |do |guu| da|mii| ke|a d|ano|non|l n|y g| ɗu|gna|mɓe|ete|i a|wit|jaŋ|aŋd|ŋde| su|alt| ɗe|nna|a a| ɓa|ɓam|amt|tde|ago|l h|m t|ind|ɗɗa|aga|eɗe|ow ","bos":" pr| i |je |rav| na|pra|na |da |ma |ima| sv|a s|nje|a p| da| po|anj|a i|vo |ko |ja |va | u |ako|o i|no | za|ju |e s| im|avo|ti |sva|ava|o n|i p|li |ili|i s|ost|van|vak| ko|ih |ne |a u| sl|nja|jed| ne| dr|koj|ije|i d| bi|stv|im |u s| il|slo|lob|obo|bod| je| ra|pri|sti|vje| ob|a d|om |se | su|e i|a n| se|i i|dru|enj| os|a b|e p|voj|cij|u p|o d|a o|raz|su |i n|uje|ova|u i|edn| nj| od|i u|u o|lo |ran|lju|ni |jen|ovo|aci|iti|o p|a k|oje|žav|nos|dje|e o|bra|pre|a j|pro|ji |i o| ka|nih|bit|jeg| tr|tre|bud|u z|og |sta|drž|rža|e d|u n|pos|mij|elj|svo|reb| bu|avn|jem|ija|e b|ći |aro|rod|red|ba |a z|šti|ka |de |em |aju|iva|lje|ve |e u|jel|jer|bil|ilo| iz|eni|du | do| st|a t|za |tu |nar|tva|odn|gov| sa|nim|m i|e n|vim| ni|u d|o k|oji| sm|dna|ući|ist|i m|eba|ičn|vno| dj|oda|nak|e k|an |nov|sno|stu|aln|nst|eno|eđu|čno|ani|nom|olj|tiv|nac|ave|i b|smi|čov|ovj|osn|a r|nap|ovi|ans|dno|jan|nju|oja|nog|m s|edi|ara|oj |nu |kri| kr|odu|iko|lja|sto|rad|nik|tup| čo|jek|tvo| vj| mi|tel|obr|živ|tit|una|ego|pod|sam|o o|rug| op|nji|din| mo|vu | ov|h p|udu|riv|dst|te | te|a č|vni|svi|i v|ina|i t|ite|o s|u u|m n|zaš|ašt|itu|ak |dni|nic|nič|odr|vol|avi|g p| ta|rim|kla|e t|ao | vr|akv|tno|mje|duć|ona|ada|obi|eds","hrv":" pr| i |je |rav|pra|ma | na|ima| sv|na |ti |a p|nje| po|a s|anj|a i|vo |ko |da |vat|va |no |o i| za|ja |i s|avo| im|sva| u |i p|e s| bi|tko|ju |o n|li |ili|van|ava| sl|ih |ije| dr|ne |ost|jed| ne|u s|ova|nja| os| da| ra| ko|slo|lob|obo|bod|atk|i d|koj|iti| il|stv|pri|im |om | ob| je| su|vje|i u|i n|e i|i i| ka|bit|dru|ati|se |voj|i o|a b|a o|ćen|ući|a n| se|o p|enj|edn|a u|sti| mo|ćav|lo |dje|raz| od|ran|u p|rod|a k|ni |su |mij|u i|svo|ako|a j|aro|drć|rća|pos|eno|e p|pre| nj|e o|ćiv|nar|ji |oje|e n|eni|nih|oda|ći |nov|bra|ra |nim|a d|avn|og |aju|iva|ovo|nos|i b|bil|sno|za |ovi|red|tva|a z|mor|ora|ka |sta|jem|pro|jen|u o|cij|ve |e d|jel|jer|ilo| do|osn|i m|odn| iz|nom|lju|em |lje| ni|aci|oji|o d|du | st|nit|elj|u z|jeg| sa|o o|m i|vno|vim|uje|e b|oj | dj|rad| sm|dna|nak|e k|an |stu|o s|tit|tu |aln|nst|eću|dno|gov|ani|juć|u d|m s|e u|a ć|u u|nju| bu|bud|te |ćov|ovj|tvo|a r|nap|šti|ist|ću |ans|m p|jan|nić|olj|u n|edi|ara|nu |o k|udu|ona|smi|odu|ada|oja|tup| ćo|jek| vj|ina| mi|tel|i v|obr|zaš|ašt|una|dni|ija|pod|sam|duć|rug| op| ta|nji|e m|oso|sob|h p|itk|svi|ite|elo|itu|meć|jim|odr|di |vol|avi|nog|štv|rim|din|kla|će |ao |tno| ći|kak|akv|ave|nac|lja|sto|obi| te|to |vi |ovn|vni|odi|lji","nld":"en |de |an | de|van| va| en| he|ing|cht|der|ng |n d|n v|et |een|ech| ge|n e|ver|rec|nde| ee| re| be|ede|er |e v|gen|het|den| te|ten| op| in|n i| ve|lij| zi|zij|ere|eli|ijk|oor|ht |te |ens|n o|and|t o|ied|ijn| on|ke |op |eid| vo|jn |id |ond|in |sch| vr|n z|rde|aan| ie|aar|ren|men|rij|hei|ord|hte|eft| we|ft |n g|n w|or |n h|eef| me|wor|vri|t r|hee|al |le |of |ati| of|g v|lle|e b| wo|eni| aa|voo|r h|n a| al|nd |e o|n t|ege|erk|t h|jke| na|sta|at | da|e e|end|nat| st|nge|ste|e g|tie|n b|om |die|e r|r d|erw|ij |dig|e s| om|wel|t e|ige|ter|gel|ie |e m|re |t d| za|ers|ijh|jhe|d v|zal|nig|nie|bes|ns |e w|est|d e|g e|e n|ele| do|ge |vol|che|e d|ig |gin|eze|nst|ona|eke|cha|hap|dat|lke|e a| di|waa| to|min|jk |tel| gr|len|eme|lin|elk|ard|doo| wa|eve|ven|n s|str|gro|han|del|ich| ov|ove|n n|t v|tio|ion|wet|it |gem|ijd|met| zo|uit|aat|dez|ze |rin|e i|all|st |ach| ni|toe|n m|ies|es |taa|per|hed|heb|ebb|bbe|ien|sti| ma|nte|ale|kin|nin|mee|daa|el |ben|ema|man|s e|e h|esc|her|lan|ang|ete|g o|wer|is | er|pen|nsc|beg|igd|t g|ont|iet|tig|ron|tin|p v|r e|rwi|wij|ijs| hu|erm|nal|bij|eer|edi|ite|t a|t w|d o|naa|weg|iem|g d|teg|ert|arb|als|d z|tan|tre| la|ar |ame|js |rmi|t b|app|rwe| bi|t z|ker|eri|ken| an","srp":" pr| i |rav|pra| na|na | sv|ma | po|je |da |ima|a p|ja |a i|vo |nje|ko |va |anj|ti |i p|ako| u |a s| da|avo|ju |i s|ost| za|o i|sva| im|vak|o n|e s|ava|nja| sl| ko|om |no | ne|ne |li |u s| dr|ili|a n|slo|obo|koj|ih |lob|bod|im |sti|stv|a o| il| bi|pri|a u| ra| je|og |jed|enj|e p|u p|van|ni |a d|i u|edn|iti|nos|a k|o d|ova|pro| su|i i| os|ran|sta|dru|e i|cij|se |rod| ob|i o|aju|e o|i n|ove| de|aci| ka|ovo| ni| od|ve | se|i d| st|m i|voj|avn|uje|eni|ija|dna|žav|u i|red|su |nov|odi|tva|e b|oja|što|lju|u o|ara|a b|ji |drž|rža|odn|jan|nim|poš|ošt|a j|ka |jen| ov|u u| nj|du |ave|osn|sno|šti|aro|raz|bit|a z|u z|de | iz|nih|o p|u d|e d|pre|vu |u n|lja| tr|tu |eđu|nar|gov|svo|bez|ičn|lje|e n|za |vno|lo |oji| sa|to |an |nak| me|čno|đen|vim|nac|oda|ani|me |iko|nik|ika|e k|pos| kr|tre|reb|nst|stu|e u|ku | do|ašt|tit|aln|dno|jeg|nom|olj|nog|m s| vr|o k|oj |čov|ans|ovi|o s|bra|te |tav|tup|eno|živ|zaš|em |i m|dni|šen|var|riv|rug|vol|avi|tan|štv|kao|ao | li|st |ilo|nju|sme|o j| sm| čo|odu|vre|dst|od |a t|kri| bu|bud| ve|ver|a r|m n|del|tvo|međ|oje|jem|m p|avl|vlj|ego|u v|pod|ena|ugi|la |jav|por| op|ruš|ušt|kom|edi|ba |kla| mo|oju|i b|kak|akv|rad|nu |vek|rim|gla|juć|ude|vni|eba|e r|svi|i v|itu|ter","ckb":" he| û |ên | bi| ma|in | di|na |maf|an | ku|ku | de| ji|xwe|her|iya| xw|ya |kes|kir|rin|iri| ne|ji |bi |yên|afê|e b|de |tin|ke |iyê|e h|es |ye | we|er |di |we |i b|ê d|erk| na|î û| an|ina| be|yê |eye|rke|î y|nê |kî |diy|ete|hey|hem| ci|eke| li|wek|ber|fê |n d|li | bê| se|yî | te|ne |rî |sti|net|tew|yek|af |hev|yan|n b|kar| ki|re |e k|wî |i h| ew|n û|û b|aza|n k| wî| mi|î b|dan|e d|î a|ekî|a m| az|zad|mir|iro|rov|nav|n h|ser|est|a w|ara|bin|ewe|anê|adi|tê |be |emû|mû | yê| ya|ta |ast|tî |ev |ewl|s m|n m|wey| tu|wle| bo|bo | tê|n j| me|ê h|din|ras|î d|n n| da|n w|bat|wed|ema|ê b|cih|st | ge|iye|ing|ar |în |r k| ke| pê|îna|î h|ekh|khe|vî |ana|par|û m|ûna|civ|vak|n e|dî |nge|geh| ye|ê t|ê k|û a|fên|hî |e û|av |eyî|bûn|erb|î m|bik|ê m|a x|iva| re|e n|eyê|vê |ane|man|nên|ela|end| pa|erî|n x| ta|jî |ika|kê |a k|f û|f h|e j|î n|ra |ehî|tiy|tên|û h|a s|rbe|bes|mî |ari|eza| ni|nek|n a|ov |i n|erw|rwe|erd|aye|e e|riy| a |ike|ê x|ovî|û d|inê|etê|tem|yet|eta|ek |ê j|a n|e t|i d|zan|bê |anî|nîn| ra|ama|ere| hi|i a|tuk|uke|bib|lat|awa|u d|ibe|xeb|atê|i m|mal|nda|ewa|a d|a b|arî| ba|edi| hî|hîn|rti| za|ist|e m| wi|mam| şe| qa|qan|anû|nûn|asî|han| ên|a g|u h|tu |dew|let|are|ine|pêş|êr |e a|wel|ger","yor":"ti | ní|ó̩ | è̩|ní | lá|̩n |o̩n|é̩ |wo̩|àn | e̩|kan|an |tó̩| tí|tí | kò|ò̩ | àw|̩tó|è̩ | àt|è̩t|bí |e̩n|àti|lát|áti| gb|lè̩| ló| ó |s̩e|àwo|gbo|̩nì|n l| a | tó|í è|ra | s̩|n t|ò̩k|tó |sí |kò̩|̩ka|o̩ | sí|ìyà|orí|ílè|ì k|̩‐è|dè |yàn|ni |̩ à|ún | or|èdè|jé̩|ríl|è̩‐|‐èd|í à|àbí|n à|nì |ò̩ò|̩ò̩|í ó| tà|tàb| ti|̩ t|jo̩|̩ l|̩e | wo|í ì|nìy|ó n| jé|ló | sì|kò |n è|wó̩|n n| bá|̩ s|rè̩|sì | fú|fún|í a| pé|̩ni| òm| kí|gbà| èn|ènì|pé |in |ba |òmì|nir|ira|ìí |ràn| ìg|ìgb|n o|bá |mìn|ìni|gba|kí |n e| rè|e̩ |̩ n|un |̩ p| o̩|í ò|nín|nú |fi |gbé|yé | ka|ínú|a k|bé̩|mo̩| fi|̩ ì|í i|ó s|i l|wà |o̩d|̩dò|dò̩|̩ o|bò |dá |i ì|bo̩|hun|i ò|o̩m|̩mo|̩ k|áà |̩wó|bo |àgb|ló̩| ò̩|ó j| bí| oh|ohu|í k|n s|írà|bà |ara| ìb|ogb|pò̩|ú ì|yìí|rú |kó̩|ó̩n|i t|̩ ò| lè|lè |̩ e|à t|à l|bog|a w|gé̩| yó|yóò|óò |ò l|̩gb|ò̩r|̩ y|í w|̩ f|í t| wà|ó̩w|yí |ó b|̩ a|ìké|i n|i è|láà|àbò|fin|wùj|ùjo|n k|í e|é̩n| òf|òfi| mì|mìí|ìír|jú |rin|̩é̩|i j|ó t| ar| ir| ná|náà| ìk|̩ b|i s|ú à| yì|kàn|irú|rí | i |è̩k|̩kó|fé̩|é à|i o|s̩é|̩ m| ìd|è̩d|̩dá|i à|àwù|à n|ú è|wù | èt|áyé|í g|í o| mú|a l|láb|ábé|̩è̩|ìn | kú|láì| àà|i g|bé |níp|ípa| ìm|níg|ígb|wò̩|báy|ké̩|mú |í n|de |è̩s|mó̩| dá|i a|dó̩|ó̩g| ni|i p| wó|ayé|ùn |̩ w|a n|n f|n ì|je̩|ò t|n g","uzn":"lar|ish|an |ga |ar | va| bi|da |va |ir | hu|iga|sh |uqu|bir|shi|huq|quq|gan| ha| bo|ini|ng |a e|r b|ni | ta|lis|lik|ing|ida|oʻl|ili|ari|nin|on | in|ins|adi|nso|son|iy | oʻ|lan| ma|har|dir|hi |kin|ash|i b|boʻ| yo| mu|uqi|dan|ila|qig|ega|r i|qla|oʻz| eg|a b| er|erk|kla|qil|oli|ki |gad| ol|nli|lga|at |i h|a o|rki|oki|osh|lig|igi| qa|yok|ib |las|n m| ba| qi|n b|ara|atl|ri |iya| sh|ham|ala|lat|bil|in |r h|bos|a t|siy|a y|cha|n o|a h|ik |a s|inl|a q|yat|nis| et|eti|osi|h h|i v|ani|tla|til|mas|ʻli|asi|ati| qo|i m|ris|im |a i|uql|arn|rni|qar|ha |gi | da|sha|n h|i o|rch|mla|li |i t| xa|arc|bar|ʻz |hun|a a|rla| bu|a m|lin|lib|taʼ| tu| as|h v|tib|aro|un |tga|r v|ikl| be|mum|n q|ali| te|sid| to|mat|amd|mda|tas| ke|shu|lla|shg|hga|n e| ya|dam|aml|oya|xal|hla|ola|iri|irl|ill|rga|iro|tis| de|umk|mki| eʼ|ten|eng|rda| is| sa|gin|imo|tar|ush|ur |ayo|rak| so|alq| ki|aza|k b|oda|oʻr|a k|tni|ʻlg|n v|hda|nda|shq|hqa|zar|miy|i q| mi|mil|r t| si|ak |ada|rat|or |kat|era|siz|am |ch |aso|sos|yot|atn|shl|n t|nid|y t|ana|ti |rin|asl|bu |sin|dav|ilg|as |i y|ech|nga|lak|h k|ino|ʼti|gʻi|muh|a v|bor|uch|lim|a u|uni|lli|n i|uri|si |i e| ka| ch|a d| ja|ami|qon|na |rig|lma|ker|avl|vla|i a|dek|ekl|liy|aka| em|ema|eʼt","zlm":"an |ang| ke| se|ng | da|ada|dan|ara| pe|ak | be|ran|ber| me|ah |nya|hak|per|n s|ata|ala|ya |a s|kan|asa|lah|n k| di|da |aan|gan|nga|dal|erh| ma|n d|eba|rha|a p| ha|kep|pad|yan|ap |ama| ba| ya|nda| te|ra |a b|tia|man|eng|a d|ora|men|iap|n p|ter|epa|san| or|eti|pen| ad| at|n a|a a|h b|set|tan|sia|tau|n t|n b|ta |dak| sa|sa |at |au |ela|apa|pa |beb|bas|p o|h d|n m|keb|end|aka|ega|a k|am |sam|ana|gar|k k|ban|ole|leh|neg| un|lam|di |g a|eh |n y|aha|han|a m|eri|any|ma | ti|a t|uan|mas|ngs|atu|seb|ebe|ing|ian|car|bag| ne|mem|kes|mat|gsa|ia |ika|i d|nan|asi|und| la|epe|ert|agi|emb|na |ers| de|emu|pem|ngg|anu|i m|ind|erk|ung|n h|tu |gi |kla|g b|pun|iha| in|nus|usi|tin|al |si |as |akl|dap|erl|era|sec|eca|i s|lan|bar|k m|ena|aya| as|sas|nny|rta|sem|awa| su|bol|rat|den|ini|ni | ta| he|hen| an|tar|g m|ai |kem|adi|had|in |ti |i k| bo|uka| ap|g t|ka |ann|ema|g s|ain|k h|rka|ri |n i|aga|un |ses|dun|enu|emp|elu|lai|kat|ent|nta|rsa|iad|ua |dia|ira|a n|mpu|ntu|uk |mel|k d|har|ker|dil|mar|h m|aja|ila|k a|mba|lua|i a|rak|uat|jua|rma| pu|t d|rga|i p|uma|ser|esi|ar |esa|nak|bah|rli|lin|ndu|dar|ari|ese|l d|ant|ngk| ol|sua|g d|ati|tuk|erm|saa|erj|rja|kea|raa|gam|g u|tik|ida|sek|eka|sat|i b|mbe|unt|dir|iri","ibo":"a n|e n|ke | na|na | ọ | bụ|nwe| n |ere|ọ b|re |nye| nk|ya |la | nw| ik| ma|ye |e ọ|ike|a o|nke|ụ n|a m| ya|a ọ|ma |bụl|ụla|e i| on| a |iki|kik|ka |ony|ta |bụ |kwa|i n|a i| nd|di |a a|wa |wer|do | mm|dụ |e a|any|ha | ga| ok|e m| ob|he |ndi|e o|a e|ite|ọ n|rụ |hi |ga‐|mma|wu | dị|aka|ara|che|oke|o n|we |n o| ih|mad|adụ|obo|bod|odo|a g|te | ez|hị | ka|ụta|be | an|akw|zi |a‐e|dị | oh|gba|nya|u n|ihe| ak|me |i m|ala|ri | ọz|ghi|ohe|her| mb|ba | nt| si| iw|weg|pụt|ra |iri|chi|ụrụ|rị |zọ |oro|ro |iwu|a‐a|ụ ọ|ụ i| eb|ebe|e ị|a y| in|ezi|kpa|kpe|inw|mba|sit|ịrị|ile|le | ha|e e|bi |n e|chị| en| e |i ọ|asị|mak| ni|nil|ghị|si |ide|a u|o i|i o|i i|apụ|a s|e y|u o|ụ m|ahụ|hụ |a ụ|nkw|edo|n a|ru |ụ o|ozu|enw|ọzọ|kwu|gid|sor|egh|yer|tar|n i|pa |eny|uru|kwe|toz|ị o| mk|ama|de |uso|tu | im|ime| me|i a|ịch|ọ d| ịk|obi| ọn|hed| ọr|ọrụ| to| ch|gas|wet|mkp| kw|osi|a d| nh|nha|ọnọ|nọd| al| nc|nch|sir| o |n u|sịr|eta|u ọ|ị m|n ụ| us|nọ | ot|otu| gb|ọdụ|nwa|o m| ag|ali|lit|ọta|ega|ị n|e k|e s|ji |a k|ikp|ọch| ug|ban|ekọ|pe |nta|agb|na‐|n ọ|hu |i e|e g|a b|zu |chọ|u a|kwụ|ram|esi|uch|onw| nọ|ị k|u m|eme|wan|e h|dịg|ịgh|hịc|ugw|gwu| di|ich|cha| og|okp|kpu| nn|zụz|zụ |i ị|o y|ach| ng|pụr|ị e|a h|meg|nat|uwa","ceb":"sa | sa|ng |ang| ka|an | pa|ga | ma|nga|pag| ng|a p|on |kat|a k|od |ug | ug|g m| an|ana|n s|ay |ata|ung|ngo|a m|atu|ala|san|ag |tun|g s|g k|d s|god|a s|ong| mg|mga|g p|n u|yon|pan|a a|usa|ing|tag|tan|una|mat|ali|aga|g u|han| us|nan|y k|man|ina|non|kin| na|lan|syo|a b|asa|nay|a i|n n| ta|awa|nas|taw| o |nsa|gaw|a n|agp|dun|iya|ban|isa|was| ad|adu| gi|ili|ini|asy|bis|nag|g a|a t|o s| bi|nah|lin| ki|al |sam|lay|ahi|nal| ba|ano| wa|wal|asu|agt| di|yan|ama|a u|n a|ags| iy|gan|n k|kan|him|kag|ya | un|gpa|kas|aha| su|g t|awh|wha|gsa|l n|agk|gka|a g|gla|kal|gal|ran|sud|ud |imo|d u|aba|aka|ika|ig |ngl|ipo|g d|ara|g n|uka|uns|uta|d n|og |i s|y s|kau|li |n o|aki|o p|kab| og|ot |mta|gik| si|n m|gpi| la|g i|aho|ayo|iin|ok |awo|hat|o a|gon|ip |a w|apa|lip|na |a h|bal|la |ad | ga| ti| hu|uba|wo |ati|uga|hon|hin|ma |sal| ub|agb|gba|nin| bu|buh|uha|t n|ahu|may|pin|as |ni |mak|ihi|abu|uma| in|say|d a| pi|dil| ni|ins| pu|agh|at |hun|but|aug|lak|bah|sak|o u|mal|s s|os |amt|t s|pod|sos|ngp|lam|aod|ila|a d|ami|k s|tin|ura|mo |agi|tra| at|bat|aan|ulo|iha|ha |n p|kar|oon|sya|ona|aya|in |inu| hi|it |agl|amb|mbo|mag|a l|ho |lao| al| il|iko|ngb|mah|lih|g b|gta|gtu|y p|rab|ato|tar|nab| re| so|osy|yal|aw |gda","tgl":"ng |ang| pa|an |sa | sa|at | ka| ng| ma|ala|g p|apa| na|ata|pag|pan| at| an|ay |ara|ga |a p|tan|g m| mg|mga|n n|pat| ba|aya|n a|na |ama|g k|kar|awa|a k|lan|rap|gka|nga|n s|g n|g b|a a|aha| ta|agk|gan|asa|tao|aka|yan|ao |a m|may|man|kal|ing|nan|a s| la|aga|ban|ali|g a|ana|y m|kat|san|kan|pam|g i|ong|mag|a n|baw|o a|wat| y |isa|lay|y k|t t|ila|g s|in |kas|o y|aan| ay|ina|t n|t p|wal|ag |una|yon| it| o |nag|tay|pin|ili|ans|lal|ito|any|nsa|kak|a i|lah|mam|nta|nya|gal|hay|to |ant|aba|ran|agt|on |han|agp|kap| ga|t s| wa|gaw|o m|ya |as |g t|lip|y n|hat|g l|ung|ngk|no |gpa|lag|gta|t m|wa |yaa|ari|sal|a l|kai|pap|lin| pi|ita|ahi| is| di|agi|ipi|bat|mak|pun|a b|y s|aki|tat|la |hin|pah|yag|gay|o n|ags|iti|di |i n|sas| si|t a|al |a t|ika|mal|s n|ipu|t k|ais|hal|i a|sap|lit|od |ihi|alo|y p|ani|ig |par|ap | ip|tas|gin|gga|nin|uma|gsa|ano|ira|a g|nah|uka|syo| bu|ini|o s|nap|ngi|o p| ha|a h|mah|a o|li |ipa|uha|asy|lam|iba|aru|mba|g e|usa|lim|sam|pil| da|kin|duk|sin|dai|aig|igd|gdi|dig| tu|d n|ba |nas|pak|iga|kil|n o|nak|ad |lig|git|lab|ma |kab|nar|tag| ed|edu|aho|buh|and|nda|mas|pas| ib|it |ri |lun|ula|agb|g g|ain|pul|ino|gi |sar|g w|abu|s a|api|nil|iyo|siy|iya|anl|uli|aun|agg|amb|g d|ati| li|i m","hun":" sz| a |en | va|és | és|min|ek | mi| jo|jog|ind|an |nek|sze|ság| az|gy |nde|ala|sza|den|az |a v|val|ele| el|mél|oga|egy|n a| eg|ga |zem|zab| me|emé|van|int|tel|aba|bad|tet|ak | te|tás| ne|gye|t a|ény|ély|tt |n s|ben|zet|ség|lam|meg|nak|ni |ete| se|lyn|yne|s a| al|let|z e|ra |et |agy|sen|eté|k j|tek|mel|kin|ok | ki|ez |hoz|oz |n m|re |vag|ett|emb|mbe|es | kö| le|nem|ell|em |ely|hog|ogy|s s|gok|atá|k a|nt |köz| ho|z a|hez|el |len|yen|ásá|ads|dsá|tés| em|a m|a s|nte| ál|k m|ás |a t|szt|áll|a h|y a|ogo|sem|ber|ban|enk|nki|nye|lap|t s|ese|ame|nyi|k é|ágo|ló |ág |t m|on | vé|i m|ami|ébe|s e|lat|lla|ly |mén|fel|tat|eri|lő |a n|eki|n v|yes|emz|mze|lle|a a| cs|át |kül|elő|l a|nd | ke|ég |i é|lis|vet|éte|ért|rés|yil|ésé|enl|szo| am|tar|art|alá|elé|a j| ny|koz|het|ész|ja |lem|nlő|ri |i j|s é|éle|ól |aló|kel| ha|ges|zás|más|s t|tár|s k|t é|vel|tko|zés|ése|se |tő |ot |ott|sít| fe|n k|lek|tte|olg|áza|ssá|e a|eve|szá|ti |n e|ül |zte|ána|zto|tos|árs|os |k k|eze|leh|ehe|t n|tes|kor|atk|del|t k|tot|ány|ége|fej|i v| né|ház|leg|k e|ll |nev|is |ába|t t|véd|éde|d a|zer|ere|kif|ife|téb|ny |ai | bi|biz|izt|i e|sül|lt |zat|at |elm| ar|arr|rra|sel|t e|ágá|s n|csa| mu|nél|it |esz| há|zas|ass|üle| ta|nyo|alk","azj":" və|və |ər |lar| hə|in |ir | ol| hü|hüq|üqu| bi|quq|na |lər|də |hər| şə|bir|an |lik| tə|r b|mal|lma|ası|ini|r h|ən |şəx|əxs|qla|arı|a m|dir|ali|aq |uqu| ma|ilə|ın |una|yət| ya|ara|ikd|ar |əri|əsi|r ş|rin|əti|dən|nin|n h| az|yyə|sin| mü|tin|ni |zad|iyy| mə|ərə|mək|ün |nda|ət |i v|ını|nın|ndə|ə a|aza|rın|qun|olu| et| qa|lıq|ilm|kdi|lə |ə y|ək |lmə|ına|ind|olm|xs |mas|sın|lun| in|ə b|da |n t|əmi| bə|adl|dlı|n m|nə |q v|ya |tmə|bər| on|ə h|əya|sı |nun|etm|dan|inə|maq|un |raq|ə v| va|n a|n b|rlə|ə m|si |əra|n i|ınd| öz|anı|nma|ama|rı |ığı|li |il | al|ala| di|ə d|ik |irl|ins|lət|a b|bil|ıq |müd| sə|ə i|nı |nla|ələ|dil|alı|ə e|unm|n v|ola|asi|üda|ili| də|nsa|san|uql|ə o|xsi| he|uq |ətl|həm|əni|eyn|u v| da|tər|min|yin|kil|dır| bu|lan|iş | ha|məs| ki|mi |lığ|ə q|q h|i s|daf|afi|fiə|r v| iş| əs|sos|osi|sia|xal|alq| ta| as| ed|bu |heç|eç |rə |yan|ı h|kim|iyi|ı o|ina|siy|əsa|sas|a q|yar|lı |tün| is|ist| so|al |n ə|ifa|əmə|ə t|mil|ill|lıd|ıdı|ır |ədə|ıql|liy|tlə|a h|məz| bü|büt|ütü|iya|iə | üç|üçü|çün|t v|dax|axi|xil|r a|ılı|man|sil| se|seç|adə|ial|onu|öz | cə|miy|əyi|n e|edi| mi| nə|a v|mən|ril|əz |ild|rab|abə|şər|ğın|aya|zam| ni|ulm| xa|təh|əhs|hsi|i h|sti|qu |var|ad |tam|uğu|z h|qan|rəf|n d","ces":" pr| a |ní | ne|prá|ráv|ost| sv| po|na |ho |ch | na|nos|o n|ání| ro|ti |vo |neb|má |ávo| má|ou | ka|kaž|ažd|ebo|bo | je| za|ždý|dý | př|svo|a s|sti| st|á p| v |vob|obo| sp|bod|pro| zá|rod|ých|ván|ý m|né | by|ení|ého|spo| ná|í a|ová|o p|roz|mi |ně |ter| li|a p|nár|áro| ja|jak|by |to |lid|u p| vš|ny |ím |í p|i a|a z|o v|kte|mu |at |odn| vy| ma| so|ví |zák|tní|a v|oli|li | kt|í n|kla|do |je |pod|en |em |byl|mí |áva|stá| do|t s|rov|í s|tví|vše|it |dní|o s| ve|pol|í b| bý|být|ýt | se|čin| k |sou|a n|stn|ran|vol|nou|ejn|nes|se |ci |nýc|du |ným|stv|žen|své|vé |ají|jeh|eho|va |mez|ním|ích|ým |ké |ečn|pří|u s|tát|i s|kol|ova|e s|ech|í v|ids| i |maj| to|nu |hra|ave|ole|i v|kon|m p|ému|y s|o z|eré| ze|o d| že|chn|ovn|len|dsk|lad|vat|chr| ta|m a| ab|aby|sta|pra|néh|esm|smí| ni|i n|že |ako| os|sob|aké|i p|st |rac|kdo|zem|m n|odu| ji|bez|ste|ákl|ens|ými|í m| vz|i k| oc|och|jí |oci|áln|lní|a m|dy |lně|vou|při|rav|leč| s |t v| či|čen|áv |slu|jin|oko|nez|tej|řís|stu|ské|ský|nit|ivo|a j|věd|iál| me|ezi|ven|oln|zen|í z|y b|zac|níc|ky |u a|a o|u k|inn|est| tr|svě|nik|ikd|í k| mu|u v|kéh|jno|jíc| dů| od|tup|ože|i j|odi|děl|ího|rok|anu|soc|ciá|ve |é v|něn|din| vo| pl|pln|vin|u o|h p|tak|adn|a t|cho|ává","run":"ra |we |wa | mu|e a| n |se |a k|ira|ntu|tu | ku| um|ko |a i|mu |ye |hir|iri|mun|ing|unt|ere|ash|shi|a n|umu|zwa| bi|gu |ege|a a|za |teg|e k|ama|go |aba|uba|ngo| ba|o a| ar|ung|ish|ora|a m|e n| we|sho|na |ese| kw|nga|e m|mwe| ab|ugu|ate|ndi|kwi| gu|ger|riz|wes| at|di |u w|n u|yo |gih|ban|ngi|iza|e b|ara| am|ri |ka |a b|e i|hob|obo| ca|ro |u b|can|nke|ezw|a u| in|bor|bah|ahi|rez|iwe|gir|iki|igi|ihu|ke |ari|ang|aku|a g|hug|ank|ose|u n|o n|rwa| ak|and|kan| vy|ngu|nta| ub|aka|ran| nt|n i|ata|kur|kun|i n|ana| ko|e u|iye| ka|re |any|amw|ta |nye|uko|gin| zi|ite|era|ga |aha| ib| ng|n a|o u|o k| iv|ivy|ho | as|sha|o m|o b| bu|mak|ako|o i| ig|o z|o y| uk|ubu|aga|izw|i b|vyi|ba |aho|kir|nya| is|kub|hin| it|uri|gan|rik| im|u m|guk|bat|nge|kug|ani|vyo|ene|imi|imw| y |jwe|ze |agi|e c|u a|gek|ush|i i|uru|ham|uza|e y|ibi|amb|bur|ina|eme|i a|abi|ha | nk|eye|gus|ber|u g|no |rah|zi |w i|ma |tun|ind|ron|ras|wo |ne |wub| gi|gen|kiz|y i|kor|ura| zu|zub|zin|je |iro|mat|eko|bwa|ika| bo|bak|onk| ma|ugi|mbe|ihe| mw|eka|ukw|wir|ryo| ic|a z| ry|bwo| ag|yiw| ki|gis| yo|bik|ni |nka|rek| bw| ya|tse| ha| ah|umw|he |eng|bir|aro|ury|twa|ant|a c|tar|uki|mw |bih|ku |tan|bos|nde|uro|y a|utu| no|i y| yi|ya |puz|zam|eny","plt":"ny |na |ana| ny|y f|a n|sy |aha|ra |a a| fa|n n|a m|y n|an | fi|tra|any| ma|han|nan|ara|y a| am|in |ka |y m|ami|olo| ts|min|lon| mi| sy| na|a t| ol|fan|a i| ha| iz|iza|man|ina|ona|aka|y h|ian|o a|a h|reh|a s|etr|het|a f|on |ire|fah|tsy|mba|ay |zan| hi| ar|ndr|ira|y o|y t|ehe| an|o h|y i|afa|ren|ran| zo|ena|dia|amb|amp|ala|zo |ika|y s| di|tan| az|y z|m p|rin|ia |n j| jo|jo | dr|a d|zy |ao |ry |and| ka|dre|mpi|rah|nen|haf|n d| ir|eo |elo| ta|omb|rai|oan|fa |am | pi|ene|ho | ho|ant|iny|itr|azo|dra|ava|tsa| to|tsi|zon|asa|van|a k|ari|ha |n i|mbe|ray|fia| fo|sa |ony|isy|ova|lal|ly |azy|o f|bel|lom|ham|mis|sam|zay| ra|oto|fir|ban|a r|nat|kan| vo| he|ito|ary|nin|iha| re|a e| ko|tok|fit| no|ita|iar|fot|nam|voa|isa|y v| sa|y r|o n|no |aly|mah|har|ain|kam|aza|n o|otr|eri|hev|oka|sia|ial|atr|y l| la|ila|oa |y d|ano|ata|its|tov|pia|y k|pan|fam|oko|aro|nto|pir| ao|ty |anj|nja|reo| as|o s|hia|o t|mpa|mit| eo|ais|sir|air|ba |tin| it|ver|ino|vah|vy |ton|tao|ank|era|rak|kon|a z|tot|ive|ame|aho|hoa|hit|ati|ity|o m|mik|a v|ani|ori|koa|hah|nga|dri|eha|dy | mo|oni| za|ato|bar|jak|n t|nao|end|eve|lah|aov|mia|izy|lan|nar|ria|ama| pa| mb|aln|lna|ifa|za |to |dro|va | in|ind|ehi|n k|iva|nta| va| al|via|rar","qug":"una|ta | ka|na |ka |ash|cha|a k|ari|ish|kun|kta|pak|ana|hka|mi |shk|apa|ach|hay|akt|shp|man|ak | ch| ha|ata|rin|lla|tak|ita|ami|ama|aku| pa|har|pas|ayñ|yñi|ina| ma| ru|uku|sh |hpa|run|kuy|all|aka| tu|tuk|an |chi|yta|a c|chu|in |ñit|ris|a h|nka|nak|tap|kan| ki|ayt|pi |pa | sh|i k|nap|a p|pay|kaw|kam|nam|ayp|aws|wsa|a s|ank|nta|iri|uy |a t|hin|a m|ay | li|ant|kay|lia|nat|a r|shi|iak| wa|lak|uya|say|yuy|y r|ypa|kis|a a|hun| yu|n t|tam| ti|n k| ya|yay|lli|a w|hpi|api| al|un |yku|ipa|a i|iku|ayk|shu| sa|ush|pir|ich|kas|kat| il|huk|ill|a y|hu |rik|yac|a l|kac| ku|hik|tan|ypi|wan|ika|i c| ni|ima|ila|ink|ayl|yll|mac|nis| ta| wi|kus|i y|i p|n s|llu|tin|la |yan|kpi|awa|li | ri|may|tik|iks|lan| pi|aya|kin|yas|ksi|kll|kak|lat|aym|ura|war| ay|k h|uch|akp|sha|ukt|nch|h k|i t|ull|uma|mas|iya|kir| ii|h m|pip|n p|kik|iki|i s|kar|aki|riy|han|y h| su|mak|n m|tac|nal|nac| ña|k k|k t|k a|iwa|mam|i m|nki|yma|wil|his|pal|i i|asi|nmi|i w|sam|k l| hu|sum|pam|kap|k i|pan|iia|huc|ik | mu|mun|pik|was|k m|ma |hat| im|k r|akl|u t|ha |llp|a u|wak|has|anc| ak|imi|mal|y k|ian|iña|tar|yka| iñ|iñi| mi|n y|ywa|uyk|unk|a n|arm|rmi|h p|pur|akk|kim|san|ati|uti|uri| ar|sak|i a|hap|iyt|ayw|si |yar|las|lpa|ñaw|awp|wpa|i r","mad":"an |eng|ban|ng | sa| ka|dha| ba|ren|ak |ang| se| ha|hak| dh|na | pa|adh|se |a s|aba|n s|ara|ngg|are|ha |aga|sa | or|sar|ore|asa|ana| ma|a k|aan|gi |ale| ag|gad|a b|n o|n k|ra |ala|eba|gan| ke|dhu|aja|ota|bas|man|dhi|n b|tab|ka |sab|ama|beb|abb|at |nga| ta|ggu|ako|pan|huw|uwi|wi | ot|san|a d|ata|eka|i h|bba|agi|ba |lak|hal|ong|kab|em |g a|lem|a o| pe| na|par|ane|ngs|nge|gar|a p|tan|gsa|a a|ran|ken|i s|guy|uy |k h|n p|n a|ada|al |apa| ga|on | an|g s|ta |kaa| e |e d|pon|nek|ssa|a m|kal|a e|e e| la|kat|ona|abe|nan|asi|jan|ate|lab|ri |sal|lan|i p|sad|aka|e a|a h|ari|ena| bi|oss|si |daj|i k| ng|har|gen|ton|e k|epo|ano|bad|car|n d|ar |era| be|nag|kon|g k|ase|nya|nos|n n|mat| kl|mas|ela| da| al|n t|uwa|wan|sae|pad|ggi| so|as |hi |adi|a n|i d|g e|k k|ne |oan|uan|k s|k a|e b|ah |ina|kla|ter|om |gap|le |koa|yat|per|neg|ega| ja|bi |abi|aha| ep|aon| as| mo|n h|i a|one| di|ma |kas|m p|di |aya|nto|int|n e|te |bat|epa|nda| ca|pam|e s|amp|to |dra|ann|oko|rga|nna|e p|g p|nta| ra|and|i b|nao|k d|pen|aen|ste|ila|yar|a t|mpo|ok |set|n m|k b|isa|kom|raj|arg|ika|bin|ant|ga |hid|idh|aju|i m|nas|kar|mos|ost| ho|lae|dil|t s|a l|das|rek|tad| a | po|ett|tto| to|bis| dr|jat|add| ko|ent|gam|e m|ndh|hig|iga|maj","nya":"ndi|ali|a k|a m| ku| nd|wa |na |nth| mu|yen| al|ra |thu|se |hu |nse|di |a n|la | pa| wa|mun|unt|nga| la|a u|u a|e a| ma|za |ons|ace|ce | lo|iye|a l|idw|ang| ka|kha|liy|ens|li |ala|ira|pa |ene|i n|we |e m|era|ana|dwa|lo |hal|ulu|ko |dzi|iko|yo |o w| ci|a p|ga |chi| mo|o l|lu |o m|zik| um|moy|oyo|ufu|ner| an|and|iri|umo|ka |a a|dan|ena| uf|ful| nc|nch|hit|ito|to |a c|kuk|dwe| da|fun|wac| dz|e l|kap|ape|a z|e k|ti |u w|ere| za|lir|pen|aye|tha|kut|ro |mu |lid| zo|ofu|ing|i m|amu|mal|o c|kwa|mwa|so |o a|o n|i p|eza| mw|nso|iro|zo |i d|lin|ri |edw| a |i l| li|a d|kul|ati|uti|una|lan|i k|o k|ung|alo|dza|i c|o z|a b|uni|iki|lam|mul|ulo| ca|nkh|nzi|gan| na|ant|e n|san|tsa|wir|oli|u k|lon|dip|ipo|unz|yan|gwi|ca |ome| ko|aku|akh|pon|ngw|kir| po|uli|gwe|cit|mer|pan|kup|ame|mba|tsi|bun|ukh|ope|siy|iya| ya| am|han| bu|ama|bvo|vom|rez|lac| kw|men|u n|ao |pez| on|zid|osa|u o|i a|nda|e p|ne |ank|hun|o o|nik|ku |its|adz|u d|aka|diz| kh|ina|ezo|ndu|kho|okh|ya |awi|izo|ans|pat|eze|khu|zi |phu|kus|eka|o p| ad|mol|ets|sa |iza|kwe|wez| un|izi|oma|ma |oci|du |ula|ani|lok|haw|ika|ja |say|nji|jir|amb|ats|sid|mai|aik|mak|aph|i u|isa|lal|u m|ogw|no |oye|ukw|osi|sam| si|win| zi|ni |tse|si |e o|opa|emb| ba|ban","zyb":"bou|aeu|enz|nz |eng|iz |ih |uz |uq |ing| bo|oux| di| ca|z g|dih|ux |ngh|cae|gen|euq|z c|ng |you|ung|ngz|ij | mi| gi|miz|aen| ge|z d| ci|gya| yi| de|ouj|uj | gu|cin|ien|ngj| mb|mbo|dae|zli|gij| se|j g|ang|z y|j d|ouz| cu| ba|nae|h g| da|yin|oz |de |z b|nzl|li |nj |x m|euz| cw| yo|iq |gz |q g|x b|yau|h c|vun|inh|ix | ga|cwy|wyo| nd|vei|nda| ro|rox|oxn|z m|i c|j b| si|wz |gh | gy|cun|gue|xna|unz|hoz|can|bau|ei |z h|yen| li|inz|dan|q c| hi|gj |uh | vu|faz|yie| bi|zci|hin|goz|uek| fa|gun|aej|ej |ya |nh | ae| go|au |ciz|den|h m|nq |ngq|ouq|gva|z s| do|ci | wn|q d|eix|h d|ekg|kgy|q s|hu |u d|j n|auj|j c|gai| ha|az |nhy|z l|gjs|jso|sou|ou |bin|sin|lij|h s|sev|eve|nei|q y|aiq|sen|h y| la|enj|ouh|i b|vih|din|q n|awz|j y|z r|enh|en |uen|bwn|wng|ozc|z n|anj|j s|liz|g g|g b|i d| ne|bae|awj|sei|eiq|hye|anz|oen|hix|zda|gak|ez |anh|u c|z v| ya|h f|x d|in |ghg|bie|enq|zsi|ghc|hci|siz|i g|n d|h b| du|cou|ngg|ngd|cuz|eiz| ho|dun|g c|law|j m| dw|env|nvi|dei|a d|ek |yaw|wn |giz|gzd|nzg|wnj|gda|ak |nde|auy|yuz|hgy| co|ujh|jhu|e c|hen|ujc|min|izy|g d|gzs|daw|aw |g y|ozg|ai |iuz|x l| na|iet|aih|gih|iuj|zbi|uyu|coz|sae|i m| he|zdi|dwg|q b| fu| ve|guh|iqg|qgy|yai|yoe| so|biu|vaq|aq |yun|izc| ra|cie|zge|n g","kin":"ra | ku| mu|se |ntu|a k|tu |nga|umu|ye |li | um|mun|a n|unt|ira| n |ere|wa |we | gu|e n|mu |ko |a b|e a|o k|a u|a a|u b|e k|ose|uli|ro | ab|aba|gom|e b| ag|omb|ba |ugu|ang|o a|gu |mba| ib| ub|eng|ihu|za | bu|ama| by|hug| ba|o b|e u|kwi|ga |ash|ndi| ka|yo |e i|ren| cy| ak|iye| bi|re |ora|igi|gih|ban|ubu|di | nt| kw|gan|a g|aka|aga|nta|a m|iro|a i| am|ku |i m|ago|byo|ta |ka |cya|ibi|and|na |ali|uba|sha| bw|ili|yan|no |ese| ig|u m|o n|kan|ish|ana|sho|obo|era| we|ya |aci|i a|ura|wes|uko|e m|ran|o i|u w|uru|wo |kub|n a| im|ber|hob|bor|ure| no|ani|u a|gac|cir|o m|ush|bur|eke|ne |wiy|ara|nge|rwa|yos|e y| y |uga|bwa|ho |zo |ind|ane|mwe|iza|are|rag|ge |mo |bwo|bul|teg|ege|u k|u n|n i|ze |aha| uk|bye|anz| al| ki|bah|uha|ite|kug|gir|ngo|go |age|ger|u g|zir| ry|ugo|bih|akw|o g|guh|iki|bat|iby|gar|imi|mbe|y i|n u|ha |atu|mul|tan|eye|e c|kim| ni|shy|aho|tur|kir|ate|abo|je |bo | ng|u u|ata|o u|iko|gus| bo|bos| gi|a s|nir| ru|gek|i b|eza|i n|nzi|i i|rez|kur|ako|any| as|ung| se|bis|nya|o r|uki| ya|ngi|mat|eko|ugi| in|o y|kor|imw|rer|bak|yam|bit| ik|kar|ire|ige|shi|hin|ing|byi|nu |mug| at|yem|eme|gaz|irw|yer|rek|key|ihe|gen| ic|icy|hak|but|ets|tse|eze| ur| na|bag|awe|ubi| yi|i k|ezo|tek|ubw|rya|uza","zul":"nge|oku|lo | ng|a n|ung|nga|le |lun| no|elo|la |wa |e n|ele|ntu|tu |gel|we |ngo| um|e u|thi|uth|ke |hi |ni |ezi|lek| ku|nom|ma |o n|onk|nke|pha|gok|a u|nel|ulu|unt|o l|kwe|oma|o e|ang|lul| uk|kul|a k|eni|uku| wo|kel|hla|mun| lo|ama| ne|ath|ho |umu|ela|won|elw|lwa|ban|a i|ule|zwe|ana| un|une|ing|lok|aka|elu|wen| kw|aba|tho|akh|khe|ala|gan|o y|enz|ko |thu|na |u u|a e|gen|i n|zin|kho|enk|kun|mal|alu|e k|lel| na|kat|e a|nku|eko|he |hak|lan|kwa| ez|o a|o o|kub|ane|ayo|yo |lwe|eth|obu| em|nzi| ok|okw|kut| ba|ile|ben|het|eki|nok|nye|ike|i k|so |isi|ise|esi| ab|mph|nhl| is|aph|fan|ga |isa|ini| ye|e i|nen|uba|ba |zi |hol|ka |ant| fu|fut|uhl|abe|and|do |ukh|kuk|eke|a a|kil|e w|the| ya|nda|za | im| in|olo|ekh|eli|ith|khu|eng|yok|nis|sa |kuh|o u|any|ye |e e|i w| ak|olu|ndl|a o| le|ne |ume|mel|eka|mth| ko|emp|isw|amb|emi|no |uny|iph|i i|zo |kuf|nay|ind|ezw|kuz|vik|alo|o w|hul|ebe|lin| yo|kan|eze|ndo|uph|hlo|yen|enh|phe|ufa|ake|ale|kug|fun|und|wez|li |seb|a l|ula|wam|din|ahl|nez|yez|nya|bus|bo |azw|o k|ink|kek|nan|i e|ola|izi|mbi|ili|han|kuv|ase|hel|hut|a y|kis|kuq|da |omp|swa|kup|nem|ano|phi| ol|azi|ubu|o i|kol|oko| el|e l|huk|ani|nje|sek|uke|lon|pho|kom|lak|kus|zis|ham|mba|izw|ulo|hun|i u|u n","swe":" oc|och|ch |er |ing|för|ar |tt |en |ätt|nde| fö|rät|ill|et |and| en| ti| rä| de|til|het|ll |de |om |var|lig|gen| fr|ska|ell|nin|ng | ha|ter|as | in|ka |att|lle|der|und| i |sam|lla|fri|ghe|ens|all|ör |na |ler| at|ete|den| el| so| av|av |igh|r h|nva|la |r r|env|ga |tig|nsk|iga|har|t a|som| ut|tti|nge|t t|ion|a s|ns |a f| sk|a o|r s|män|an |är |isk|rna| st| si| vi| sa| al|t f|ra | be|a r| är| me|ati|n s|lan| va| an|med|tio|ern|nna|t e| un|äns|ta |nat|sta|ig | åt|ten|kli| gr|vis|t s| la|äll|one|änd|han| ge| li|ans|stä|ner|t i| må|gru|ver|rih|ihe| mä|sni|lik|n f| re|r a| na|må |ers|t o|ad |r e|da |det| vä|ent|run|rkl|kla|ri |h r|nom|kap|igt|gt |n e|dig|uta|tan|e s|dra|s f|ed |d f|lar|rin|ran|upp|erk|tta|ika|änn|r o|erv|rvi|kte|vid|a i|lag| på|g o|id |ari|s s|r u|lin| om|ro |a m|els|isn|del|sky|r d|e m|mot|ot |vil|på | mo|r m|str|örk|ndl|on |i o|nd |tni|n m|ber|nad|gan|örs|r f|kal|era|a d|dd |je |itt| up|sin|nga|täl|ras|n o|ärd|i s|r i|enn|a n|n a| hä|bet|ski|kil|n i|lse|rel|t b|g a|kyd|ydd|arj|rje|l v|s e|end|amt| fa|nas| så|inn|tat|per|t v|l a|int|tet|öra|e f|tra|r g|yck|r ä|vär|ege|arb|d e|re |nis|ap |ara|bar|l s|t l|lit|när|lke|h f|ckl|v s|rän|gar|ndr|mt |se |häl|h a|llm|lmä|ess|sa ","lin":"na | na| ya|ya |a m| mo|a b|to | ko| bo|li |o n| li|i n| pe|i y|ngo|a n|a y|ki | ba| ma|kok|pe |la |a l|zal|oki|ali|nso|oto|ala|ons|so |mot|a k|nyo|eng|kol|go | ny|yon|nge|o e|ang|eko|te |o y|olo|oko|ma |a e|iko|e m|e b|lik|ko |o a|ako| ye|ye |ong|mak|si |isa| ek|aza|lo |sal|ama| te|o p|bat| az|e n|oyo|ani|ela|sen|o m|a p|ta |ban|i k|amb|ni | es|yo |aka|mba|osa| oy|mi |a t|eli|lis|i p|i m|ba |mok| to|mbo|bok|isi| mi|ing|lon|ato|o b| nd|ge |bot|ota| ez|nga|nde|eza|o t|kan|ka |gel|e k|bo |ese|sa |lam|koz|den|oba|omb| po|ga |mos|kop|oli|e e|yan|bon|oka|kob|lin|bik|po |kos| lo|sam|e a| ’t|’te|kot|ti |ngi| bi|e y|omi|esa|i b| el|elo|lok|gom|som|i t|ate|ika|kam|ope|a s|kat|ati|ata|wa |iki|i e|bom|tal| ka|oza|o l|bos|zwa|ola|pes| se|oke|bek|o o|ndi|bal|nda|nza|oso|omo|lak|bak|mis| at|bis|sus|usu|su |osu|lib|and|ozw|asi|ele|tel|mu |i l|e t|ase|mol|mob| nz|kel|ene|ne |mbi|ami|aye|nis|a ’|tan|le |obo|baz|pon|wan| ep|yeb|kum|sem|emb|mal|gi |nya|ote|e l|oku|bas| ta| ak| ti|tin|ina|gis|opo|ana|mab|bol|u y|mat|ebi|oti|mib|obe|a o|san| so|mbe|be | mb|ibo| et|ike|da | en|ben|za |yok|eni|tey|bwa|bi |kom|i o|gob|mik|umb|se |eba|e p|ibe|ale|lel|boy|eta|i a|bu |ime|sik|mon|ona|mel|ose|mwa|sol|geb|ebe","som":" ka|ay |ka |an |oo |uu |da |yo |aha| iy|ada|aan|iyo|a i| wa| in|sha| ah| u |a a| qo|ama| la|ga |hay| dh|ma |aad| xa|ah |a d| da|qof|in |aa |iya|a s|a w| si| oo|isa|eey|yah|xaq| le|ku |lee|u l| ku|taa| ma|la |dha|ta |aq |q u|eya|y i|ast|sta|a k|ha |of | wu|wux|uxu|xuu|kas|sa |u x|ara|doo|wax| am|iis|ro |a q|inu|nuu|ala|a x|o a|maa|nay| sh| qa|o i| aa|kal|le | lo|loo|f k|o d|ana|a u|o x| xu| xo| ba| uu|yad|iga|a l|si |dii|a m|yaa|gu |ash|u d|ale|ima|adk|aas| ca|o m|do |lag|add|na |lo |o k|san| is| so|adi| mi| fa|xor|dka|aqa|iin| he|aar|had|rka|a o|ado|dad|soo|mid|kar|aro|baa|qaa| ha|nta|o h|ad |u k|aga|dda| ga|hii| sa|u s| ay|har|axa|mad|n k|eed|quu|haa|daa|o q|aal|o s|n l|xuq|uqu|n i|id |hel|aya| ee| ho|nka|i k|uuq|nim|ina|ihi|elo|waa|dan|agu|ays|a h|saa|mar|ark|ya |ank|o w|naa|gga|ee |ax | bu|uqd|qda|rri|riy|n a| no|u h|n s|oon|lka|u a|laa|o l|ab |haq|uur|int| gu|ida|iri|lad|dhi|yih|ysa|dah|to |aam|ofk| xi|arc|rci|eli|ood|ool|orr|alk|goo|ayn|e u|n x|h q|asa|sag|a c|sho|ami|i a|n q|siy| ug|kii|o u| ta| ge|gel|agg|a g| di|ido| ji|hoo|a f|al |jee|dal|ago|ii |a b|mo |iir|ooc|bar| ci|caa|xir|ra |aqo|sig| mu|aba|oob|oba|u q|aaq|aab|sad| ra|cad|dar|imo|ar |y k|fka| du|xay|y d|ras|o c|ari","hms":"ang|ngd|gd |ib | na|nan|ex |id | ji|ad |eb |nl |b n|d n|ud | li|jid| le|leb| ga|ot |anl|aot|d g|l l|b l| me|ob |x n|ngs|gs |mex|nd |d d| ne|jan|ul | ni| nj|nja| gu| zh|lib|l n|ong| gh|gao|b j|b g|nb |l g| je|jex|gan|ngb| ad|end|el |gb |han| sh|ub | da|d j|t n|d l| nh|nha|b m|is |d z|x g| ya| wu|she|l j|oul|il |nex| ch|b y|d s|gho|gue|uel|wud| gi|d y|hob|nis|d b|s g| zi|lie| yo|es |it |nx |ies|aob|gia| de|eib|you|ian| hu|s j|d m| ba|zib|oud|b d|chu|ut |t j| do|ol |at |hud|nen|hen|s n|iad|ab |zha|t g|dao| go| mi|enl|x j|enb|b z|hei|eit|nt |b s| ze|d c|al |inl| xi| se| re|ren|hao|d h| fa|ngx|gx |anb|gua|yad| ho|x z|fal|b w|nib|ix |b h|and|had|t l|x m|gou|d x|bao|ant|don| xa|yan|d p|s z|hib|anx|zhe|ox |l d| pu| du|dan|gha|od |s m|sen|xin|lil|hui|uib|uan| we| di|b x|oub|t h|hub|zhi|t z| ju| ge| ng|t m|hol|xan|pud|x l| ma|jul|eud|hea|l s|enx|l z|jil|zen|aos|os |s l|d r|dei|ngt|gt | yi| he| si|nga|heb|zho|hon|did|d a| lo|b a|x c|dud|b b|lou| bi|dou|geu|b c|d k|x a|d w|wei|x b|l h|x d| qi|bad|t w| bl|blo|aod| nd|nia|deb| ja| sa|eut|ax |eab|s a| bo|lol|sat|ngl|gl | to|l m| pa|pao|b f|lia|x s|heu|t s|che| ca|can|s w|s y|sib|mis|zei|ux | pi|x r|gon|t p|jib|iel|d f| cu|ghu|unb|t c|inb| ko|x x","hnj":"it | zh| ni|ab |at | sh|ang|nit|os | do|uat|ox |ax |nx |ol |ob | nd|t d|x n|nf |zhi|as | ta|tab|ef |if |d n|ad | cu| mu|cua|uax|mua|uf |b n|ib |s d|dos|id |enx|hit|nb | lo|f n|t l|ngd|gd |inf|us | go|ux |ed |she|b d|t n|b z| ho| yi|x z|aob|l n|t z|ong| zi|ix |nda|d z|yao|uab|enb|ut | de|f g| dr|dol| yo|zhe| le|euf|x d|inx| ne|nen|das|dro|ngb|gb | ge|d s|s n|f z|uef|hox|len|b g|il |ud |nd |gox| ua| na| du|x j|f y|oux|x c|han|ndo|of |f h| ja| gu| ny|zha|s z| da|uad|heu|lob|shi|ik | bu| ji|hai|ged|od |b h|t g| ya|ngf|gf | hu|ex |bua|you|rou|nil|hen|yin|zhu|out|ous|nya|is |f d|enf|b c|af |dou|lol|nad| re| ha| xa|uk |t s| id|xan|sha|hua|jai|b y|aib| qi| la|s s|d d|l m|ot |hue| xi|x g|x l|ren| kh| dl|ait| ba|aod| zo| ju|jua|zif| nz| ga| di|bao|x y|b s|x s|xin|aof| li|b b|x m|x t|eb |b l|ngx|gx |dax|b t|hef|gua| be|las|d j|s t|hed|nzh|l d|t y|hif| pi|f b|d l| ib|t h|f l|hou|dus|hun|und|s l|t r|el |uas|gai|ngt|gt |hab|aos| mo| zu| bi|f t| za|d y|x h|aik|k n|end|aid|ros| gh|zos|pin|ak |s x|d g|f s|s y| ao|k z|s b|due|mol| fu|dex|iao|x b|hik|x i|deu|l b| bo|b k|s m| lb|lb | hl|lan|uaf|d b|zho|al |eut| ro|ub |et |t c|d m|x x|d h| ch|d p|f x|t b| nt| su|uak|zis|shu|t t|gha|yua| we|oud|gon|d t","ilo":"ti |iti|an |nga| ng|ga | pa| it|en | ka| ke| ma|ana| a | ti|pan|ken|agi|ang|a n|a k|aya|gan|n a|int|n t|ali|lin|a m|dag|git|a a|i p|teg|a p|nte| na|man|awa|kal|da |ng |ada|ega|nag|way|na | da|n i|sa |i k|n k|ysa|n n|al |a i|no |add|aba| me|eys|i a|nna|dda|ngg|mey| sa|ann|pag|ya |gal| ba|mai| tu|gga|ung|i s|kad|yan|tun|nak|wen| ad|aka|aan|enn|nan| ag|asa|i n|wan| we|nno|yaw|i t|l m|ata| ta|ami|a t|apa|ong| si|li |i m|kas|aki|ina|ay | an|n d|ala|a s|g k|gpa|mak|eng|ili|n p|et |ara|at |ika|ipa|dad|ama|nai|g i|yon| aw|in |ao |toy|oy |ta |on |aen|ag |bab|ket|aik|ily|lya|sin|tao|ani|agp| ki|a d|bal|oma|ngi|uma|g a|i i|kin|naa|bae|o k|y n|daa|gil|o t|iwa|ags|pad| am|syo|i b|kab|sab|ida| um|mil|aga|gim|ar |ram|yto|san|tan|min|pap|n m|eg |agt|o n|a b|aar|asi|ino|nom|nia|n w| wa| de|dey|pam|i e|sal|bag|saa|iam|eyt|day|kit|ak |ed |gsa|lak|t n|ari|nay|kan|nat|t k|i l|i u|sap| gi|g n|aw |sia|o p|o i|dum|i g|to |uka|agb|bia|aib|lub|ubo|ged| li|apu|pul|lan|imo|mon|y a|ma |pak|ias|sta|den|i d| id|bas|kai|gin|i w|kap|ita|asy|kni|kar|bon|abi|ad |umi|ban|agk|akd| ar|mid|din|sar|iba|nnu|inn|o m|ibi|ing|ran|akn|nib|isu|abs|maa|kda|aip|as | la|o a|t i|idi|nto|lal|amm|aad|or |adu|kua|ais|nal|w k|ulo|y i"},"Cyrillic":{"rus":" пр| и |рав|ств| на|пра|го |ени|ове|во |ани| ка|ть | по| в | об|ия |лов| св|сво|на | че|о н|ело|ост| со|чел|ие |ого|ния|ет |ест|аво|ажд|ый | им|век|ние| не|льн|име|ова|ли |ать|т п|при|каж|и п| ра|или|обо|жды| до|ых |дый|ек |воб|бод|й ч|его|ва |ся |и и|мее|еет|но |и с|аци|ии |тва|ой |лен|то | ил|ных|к и|енн|ми |тво| бы| за|ию | вс|аль|о с|ом |о п|о в|и н|ван|сто|их |ьно|нов|ног|и в|про|ако|сти|ий |и о|бра|пол|ое |дол|олж|тор| во|раз|ти |я и|я в| ос|ным|нос|жен|все|и р| ег|не |ред|тел|ель|ей |сно|оди|о и|а и|чес|общ|тве|щес| ко|ним|има|как| ли| де|шен|нно|е д|пре|осу| от|тьс|ься|вле|нны|аст|осн|а с|одн|ран|бще|лжн|быт|ыть|сов|нию| ст|сту|ват|рес|е в|оль|ном|чен|иче| ни|ак |ым |что|стр|ден|туп|ду |а о|ля |зов|ежд|нар|род|е и| то|ны |вен|м и|рин|нац|вер|оже|ую | чт|она|обр|ь в|й и| ме|аро|ото|лич|нии|бес|есп|я п|х и|о б|ем |е м| мо|дос|ьны|тоя|еоб|ая | вы| ре|и к|кот|ное|под| та|жно|ста| го|гос|суд|ам |ава|я н| к |ав |авн|ход|льс|нст| бе|ово|и д|ели| дл|для|ной|вов|ами|ате|оро|дно|ен |печ|ече|ка |еск|ве |уще|в к|нен|мож|уда|о д|ю и|ции|ког|вно|оду|жде|и б|тра|сре|дст|от |ьст|е п|нал|пос|о о|вны|сем|азо|тер|соц|оци|циа|ь п|олн|так|кон|ите|обе|изн| др|дру|дов|е о| эт|х п|ни |еди|дин|му ","ukr":"на | пр| і |пра|рав| на|ння|ня | за|ого| по|го |ти |люд| лю|во | ко| ма|юди|льн|их |аво|о н| не|анн|дин| св|сво|кож|ожн|пов|енн|жна| до|ати|ина|ає |а л|ува|не | бу|обо|аці|має| як| ос| ви|є п| та|аль|або|них|ні |ть | ві|ови| аб|бо |а м|ере|і п|без|вин|при|о п|ног|іль|ми |ом |та |ою | бе|ста|воб|бод|до |ост|ті | в | об|ва |о в| що|ий |ся | сп|і с|від|нов|кон|и п|ств|инн|нан|ван| у |дно|она|ват|езп|пер|но |ій | де|ії |ідн|и і|сті|під|ист|нні|ако|ьно| мо|бут|ути|ід |род|і в|що |ава|тис|а з|вно|ну |и с|ої |і д|ду |а в|ів |аро| пе|ний|а п|му |соб|яко|спр|і н| рі|рів|чи |ним|ля |нар|лен| ін|у в|нен|ому|нац|ися|и д|ова|ав |і р| ст|ові|нос| пі|ють|сть|ово|про|одн|у п|віл|овн|вни| ро| її|її | вс|ном|і з| ра| су|мож|чен|ві |буд|іст|івн|оду|а о|ни |сно|ими|а с| со|ьни|роз|и з|зна|я і|о д|х п|е п|о с|и в|дер|ерж|им |чин|рац|ції|і б| од|а н|сі |сту|тер|ніх|ди |їх |нна|так|о з|я н|заб|зпе|у с|спі| ні|е б|ржа|осо|я п|в і|кла|то |а б|осн|рим|сві|віт| дл|для|тва|ами|зах|рес| ре|ков|тор|соц|оці|ціа|і м|ки |тан|абе|печ|ког|ага|гал|ту |ї о|е м|оже|же |удь|ніс|ара|руч|авн|и щ|ною|я в|всі|кої|ини|ь п|осв|і і|ахи|хис|іал|а і|оди|тво|жен|нь |нал|ваг|аги|ги |інш|лив|х в|заг|роб|піл|в я|ком|об |о у|жав|і о","bos":" пр| и |рав| на|пра|на |да |ма |има| св|а с|а п| да| по|а и|је |во |ко |ва | у |ако|о и|но | за|е с| им|аво|ти |сва|ава|о н|и п|ли |или|и с|вак|ост| ко|их |не |а у| сл|вањ| не| др|ње |кој|ије|ња |и д| би|ств|им |у с|јед| ил|сло|лоб|обо|бод| је| ра|при|ање|вје| об|а д|ом |се | су|е и|ју | се|сти|и и|а б|дру| ос|е п|вој|циј|у п|о д|а о|раз|су |ања|а н|ује|ова|у и| од|и у|ло |едн|ни |у о|ово|аци|ити|о п|а к|оје|жав|нос|дје|е о|бра|пре|шти|а ј|про|и о| ка|них|бит| тр|тре| бу|буд|у з|ог |ста|ја |држ|ржа|е д|миј|сво|реб|авн|ија|и н|е б|ђи |пос|ту |аро|род|ред| ње|ба |а з|ка |де |ем |ају|ива|ве |е у|јер|бил|ило| из|ени|ду | до|а т|за |еђу|нар|тва|одн|њег|гов| са|ним|м и|вим| ни|у д|јел|о к|оји| см|дна|уђи| ст|алн|ист|и м|еба|ран|ичн|вно| дј|у н|ода|нак|е к|ан |нов|сно|сту|нст|ено|чно|ани|ном|е н|тив|нац|аве|и б|сми|чов|овј|осн|а р|нап|ови|анс|дно|оја|ног|м с|еди|ара|ој |ну |кри| кр|оду|ико|рад|ник|туп| чо|јек|тво| вј| ми|тељ|обр|жив|заш|ашт|тит|уна|его|под|сам|о о|руг|ји | мо|ву | ов|х п|уду|рив|ење|дст|те | те|а ч|вни|сви|и в|ина|и т|ра |ите|у у|иту|међ|ак |дни|ниц|њу |нич|одр|вољ|ави|г п| оп| та|рим|кла|е т|ао | вр|акв|тно|мје|дуђ|она|ада|сто|оби|едс|то |оди|о с|ку |риј|у м|од |ичк|вен","srp":" пр| и |рав|пра| на|на |ма | по| св|да |има|а п|а и|во |ко |ва |ти |и п|ако| у |а с| да|аво|ост|и с| за|о и|сва| им|вак|је |е с|ава| сл|о н| ко|ња |ом |но | не|не |ли |у с| др|или|сло|обо|кој|их |лоб|бод|им |а н|сти|ств|а о|ју | ил| би|при|а у| ра| је|ог |јед|ње |е п|у п|ни |а д|и у|едн|ити|нос|а к|о д|ање|ова|про| су|и и| ос|вањ|ста|дру|е и|циј|се |род| об|и о|ања|ају|е о|ове| де|аци| ка|ово|ја | ни| од|ве | се|и д| ст|м и|авн|и н|ује|ени|ија|дна|жав|у и|ред|су |нов|оди|вој|тва|е б|оја|што|у о|ара|а б|држ|ржа|одн|ним|ран|пош|ошт|а ј|ка | ов|у у|ду |аве|осн|сно|шти|аро|раз|бит|а з|у з|ења|де | из|них|о п|у д|е д|пре|ву | тр|ту |еђу|нар|гов|без|ичн|за |вно|ло |у н|оји| са|то |ан |нак| ме| ње|чно|сво|вим|нац|ода|ји |ани|ме |ико|ник|ика|е к|пос| кр|тре|реб|нст|сту|е у|ку | до|ашт|тит|алн|дно|њег|ном|ног|м с| вр|о к|ој |чов|анс|ови|о с|бра|те |тав|туп|ено|жив|заш|ем |и м|дни|вар|рив|руг|вољ|ави|штв|е н|као|ао | ли|ст |ило|њу |сме|о ј| см| чо|оду|вре|дст|од |а т|кри| бу|буд|и в| ве|вер|а р|дел|тво|међ|оје|м п|ављ|его|под|ена|уги|ла |пор| оп|руш|ушт|ком|еди|ба |кла| мо|и б|как|акв|рад|ну |век|рим|гла|јућ|уде|вни|еба|е р|сви|м н|иту|тер|ист|а ч|пот|рем|ниц|у в|х п|ива|сам|о о| он|езб|збе","uzn":"лар|ан |га |ар | ва| би|да |ва |ир | ҳу|ига|уқу|бир|ҳуқ|қуқ|ган| ҳа|ини|нг |р б|иш |ни | та|лик|инг|ида|а э|или|лиш|ари|нин|иши| ин|инс|он |ади|нсо|сон|ий |лан| ма|дир|кин|и б|ши | бў|ҳар|бўл| му|уқи|дан|ила|қиг|р и|қла| эг|эга| ўз|а б| эр|эрк|кла|қил|оли|ки |гад| ол|нли|лга|и ҳ|рки|лиг|иги| қа| ёк|ёки|иб |н м| ба| қи|н б|ри |ара|атл| бо|ҳам|лат|бил|ин |р ҳ|а т|ала|лаш|бош|ик |инл| эт|ш ҳ|а ҳ|и в|ниш|тла|эти|тил|мас|а қ|и м|оси|им |ат |уқл|арн|рни|қар|ани|а и|ўли|ги | да|н ҳ|риш|мла|ли |и т| ха|арч|рча|ча |бар|аси|ўз |а а|рла| бу|а м|лин|ати|ият|либ|таъ| ту| ас|тиб|аро|а о|ун |тга|р в|икл| бе|мум|н қ|али| те|сид|ш в|мат|амд|мда| ке|лла|шга|н э|дам|амл|хал|ола| қо|ири|ирл|илл|а ш|рга|иро| шу|тиш| де|умк|мки| эъ|тен|енг|а ў|рда| са|гин|имо|тар|а ё|ур |рак|алқ| ки|аза|к б|ода|сий|а к|тни|ўлг|н в|нда|шқа|зар|н о|и қ| ми|мил|р т| си|ак | ша|ор |кат|ера|сиз|ам |асо|сос|н ў|шла|н т|нид|ошқ|й т|ана|ти |рин|асл|бу |син|дав|илг| со|ас |нга|лак|ино|ъти|муҳ|а в|аш |бор|лим|уни|лли|н и|си |и э| ка| то|а д| жа|ами|қон|на |риг|лма|кер|авл|вла|и а|дек|екл|ят |ака| эм|эма|эът| ҳе|ҳеч|еч |ким|икд|кда|сит|лад|и ў| ни|ник|ага|и о|и с| уч|учу|чун|аъл|ъли|анл|аёт| иш|а у|ўзи|диг|ай |ада|оий|мия|тда|а с","azj":" вә|вә |әр |лар| һә|ин |ир | ол| һү|һүг|үгу| би|гуг|на |ләр|дә |һәр| шә|бир|ан |лик| тә|р б|мал|лма|асы|ини|р һ|ән |шәх|әхс|гла|ары|а м|дир|али|аг |угу| ма|илә|ын |уна|јәт| ја|ара|икд|ар |әри|әси|р ш|рин|әти|дән|нин|н һ| аз|јјә|син| мү|тин|ни |зад|ијј| мә|әрә|мәк|үн |нда|әт |и в|ыны|нын|ндә|ә а|аза|рын|гун|олу| ет| га|лыг|илм|кди|лә |ә ј|әк |лмә|ына|инд|олм| ин|хс |мас|сын|лун|ә б|да |н т|әми| бә|адл|длы|н м|нә |г в|ја |тмә|бәр| он|ә һ|әја|сы |нун|етм|дан|инә|маг|ун |раг|ә в| ва|н а|н б|рлә|ә м|си |әра|н и|ынд| өз|аны|нма|инс|ама|ры |ығы|ли |ил | ал|ала| ди|ә д|ик |ирл|ләт|а б|бил|ыг |мүд| сә|ә и|ны |нла|әлә|дил|алы|ә е|унм|н в|ола|аси|үда|или| дә|нса|сан|угл|ә о|хси| һе|уг |әтл|һәм|әни|ејн|у в| да|тәр|мин|јин|кил|дыр| бу|лан|иш | һа|мәс| ки|ми |лығ|ә г|г һ|и с|даф|афи|фиә|р в| иш| әс|сос|оси|сиа|хал|алг| та| ас| ед|бу |һеч|еч |рә |јан|ы һ|ким|ији|ы о|ина|сиј|әса|сас|а г|јар|лы |түн| ис|ист| со|ал |н ә|ифа|әмә|ә т|мил|илл|лыд|ыды|ыр |әдә|ыгл|лиј|тлә|а һ|мәз| бү|бүт|үтү|ија|иә | үч|үчү|чүн|т в|дах|ахи|хил|р а|ылы|ман|сил| се|сеч|адә|иал|ону|өз | ҹә|миј|әји|н е|еди| ми| нә|а в|мән|рил|әз |илд|раб|абә|шәр|ғын|аја|зам| ни|улм| ха|тәһ|әһс|һси|и һ|сти|гу |вар|ад |там|уғу|з һ|ган|рәф|н д","koi":"ны |ӧн | бы|да | пр|пра|лӧн| мо|рав| да|быд|лӧ |орт|мор|ӧм |аво|ӧй | ве|нӧй|ыд |ыс | не|сӧ |ын |тӧм|во |сь |эз |льн|ьнӧ|тны| ас|д м|ыны|м п| и |сьӧ| по| ӧт|то |бы | эм| кы|тлӧ|эм | от|аль|н э|вер|ртл| кӧ|ӧ в| ко|ерм|ств|воэ| до|тшӧ|ола|ылӧ|вол|ӧс |ы с|ліс|ісь|а с|ас |кыт|тво|кӧр| се|нет|ето|шӧм|ӧдн| ме|мед| ол|злӧ| вы|ӧ д|ӧ к|та |аци|ӧ б|вны|лас| на|з в|ӧрт| во|на |а в|ась|ыдӧ| сы|едб|дбы| вӧ|лан|рмӧ| оз|оз | сі|ытш|оэз|ӧтл|ы а|оти|тир|с о|олӧ| чу|ись| эт|ция|рты|тыс|ы б|кол|ы п| го|сет|кӧт|тӧг|ост|тӧн|н б| со| сь|рті|ӧтн|н н|дз | ке|кер|о с|мӧ |ӧ м| мы|ис |а д|ӧг |дӧс|ест|нӧ |пон|онд|ы н|сис|нац|итӧ|н п|суд| уд|удж|выл| ви|эта|н м| эз|ана|ӧны|с с|ть |орй|йын|сси|рре|рез|ьӧр|ті |сыл|ысл|нда|мӧд|з к|а п|с д|ӧр |чук|укӧ|рны|ӧмӧ|кин|рт |овн|ӧт |она|нал| об|ӧ о|отс|лӧт|й о| тӧ|тӧд|дны|асс|кон|слӧ|ы д|скӧ|с в|с м|ытӧ|езл| ло|быт|осу|эзл|кӧд| ум|умӧ|мӧл|ӧ п|асл|тра| ст|ь м|сьн|ьны|ь к| ов|код|сть|а н|ы к|тла|а к|ӧтч|дор|иал|а о| пы|н к|оль| за|аса| дз|нек|а м|н о|етӧ|ӧ н|ерн| сэ|ы м| де| чт|что|йӧ |ы ч|еки|поз|озь|езӧ|вес|ськ|исӧ|ӧтк|тко|рйӧ|ион|ннё|з д|ӧмы|тсӧ|са |кыд|енн|соц|оци|циа|й д|пыр|зын|нӧя|ӧя |зак|ако| мӧ| а |еск|а б|ан |тӧ |гос|уда|дар|арс|рст|рлӧ|ӧ с| ли|эсӧ|оля|мӧс|ӧсь|дек","bel":" і | пр|пра|ава| на|на | па|рав|ць |ны |або|ва | аб|ацы|ае |аве| ча|анн|льн|ння| ма| св|ала|сва|не |чал|лав|ня |ых |ай |га | як|век|е п| ад|а н| не| ко|ага|пры|кож|ожн|а п| за|жны|ы ч|дна|бод|а а|цца|ца |ваб| ў |мае|ек |і п|ных|нне|пав|а с|асц|бо |ам |ста| са|ьна|ван| вы|одн|го |аць|наг|він| да|дзе|ара|мі |цыя|оўн|тва| ра|і а|то |ад |ств|аві|лен| ас|і с|най|аль|енн|і н|ці |аро|аво|рац|сці|пад|к м| яг|яго|іх |ама| бы|рым|род|і і|ым |энн|што| та|я а|нан|ана|нас| дз|ні | гэ|гэт|а ў|інн|а б|ыць|чын|да |оў | шт|ыі |а і|агу|які|ным|дзя|я п|цыі|і д|ьны|нар| у |ўна|оль| ўс|х п|нац|ыя |ах | ус|ымі|ля |амі|ыма| ні| гр|воў|ў і|адз|эта|іна|ход|о п| ка| ін|ы п|зна|нен|аба|быц|рад|ўле|чэн|ь с|чы |сам| ст|асн|і р|ду |аў |ера|ры |нал|жна|уль|рам| су|аны|кла|аюч|ючы|оду|ую |а р|ўны|маю|ука|кац| дл|для|ь у|пер|е і|нае|ако|і з|гра|адс|ыцц|яўл|і ў|яко|а з|кан| ро|роў|нст| шл|адн|ода|аса|аду|нав|вы |ы і| пе|і м|кі |але|х і|авя|алі|раб|мад|дст|жыц|раз|зе |нна|ані|х н|е м|ада|нні|ы ў|о н|дзі|я я|люб|аюц|бар|дук|ахо|а в|сац|авы|так|я ў|тан|зак|чна|заб|бес|я і|ваг|гул|ім |ган|зяр|ярж|ржа|жав|ве |е а|м п|ацц|од |ены| дэ|ну |у ш|нах|вол|а т|ога|о с| бе|інш|ака|усе|яна|ека|ка |сно|рас| рэ|ь п|ніч|чац|се |і к","bul":" на|на | пр|то | и |рав|да | да|пра|а с|ва |ств|та |а п|ите|но |во |ени|а н|е н| за|о и|ото|ван| вс|не |ки |те | не|ове|о н| по|а и|ава|чов|ия |ане|ни | чо|ие |аво| св| об|а д|е п|век|ест|сво| им|има|и ч|ани|ост|и д|ние|все|тво|или|ли |и с|вот|а в|ма | ра|ват|и п|сек|еки|ек |а о|и н| в |е и| ил|ова|при| се|ето|ата|аци|воб|обо|бод|к и|пре|ат |оди|раз| съ| ос|а б| бъ|ред| ка| ко|лно|ния|о д|бъд|о п|се | от|за |о в|ъде|ята| е | тр|и и|о с|тел|и в|от |ран|е с|нит| де|ка |бра|ен |общ|де |алн|и о|ява|ият|ция|про| до|нег|его|а т|нов|ден|как|ато|ст | из|а ч|тря|ряб|ябв|бва|а р|а к|вен|о о|щес|а з|ено|гов|тве|нац|дър|ърж|ржа|е д|нос|лен|ежд|род|е о|и з|вит| та|зи |акв|ез |она|обр|нар|нот|иче|о т| ни|кат|т с| с |йст|авн| бе|осн|сно|вни|пол|рес|аро|кой|зак|е в|тва|нен|е т|ува| ли|ейс|жав|едв|стр| ст|без|вси|сич|ичк|чки|вид|си |жен|под|еоб|нст| те|ди |ри |сто|ган| дъ|а е|и к| че|ода| ср|сре|ака|чес|и р|и м|т н|одн|о р|лич|елн| ре|бще|ник|ели|че |дви|еме|ира|жда|кри|лни| си|са | то|ой | ме|оет|гра|ход|дру|ичн|еди|дос|ста|дей|я н| къ|ан |ико|чре|й н|ави|нал|пос|тъп|ра |азо|зов|рез|той| со|меж|тно|т в|и у|нет|нич|кон|клю|люч|нео|чит|ита|а у|а м|дно|оят|елс|лит|ине|таз|ази| мо|що |т и|изв|тви|чен","kaz":"ен |не | құ|тар|ұқы| ба| қа|ға |ада|дам|құқ|ық | ад| бо|ына|ықт|қта| жә|ар |ың |ылы|жән|әне|мен| не|лық|на |р а|де |ін |ары|а қ| жа|ан | әр|қыл|ала|ара| ме|уға|н қ|еме|ның| де|іне|ам |асы|тан|лы |әр |да |ста|нды|еке|ығы| өз|ған|анд|ын | бі|мес| қо|бол|бас|ің |ды |етт|ып |ілі|н б|нде|ері|е қ|қық|бір|лар|алы|нем|есе|се |а ж|ы б| ке|тын| ар|е б|бар|ге |ост| ти|тиі|олы|ік |інд| та|аты|сы |е а|дық| бе|ы т|нда| те|ры |ғы |бос|ғын|луы|иіс|сын|рде|рын|еті|қығ|алу|іс |рін|іні|е ж|дар|ім |егі|н к|қар| ер|тті|н ж|ыры|аны|лға| са|уын|ынд|ыны|ы м|рға|ген|ей |тік|тер|нің|ана|уы |аза| от|нан| на|е н|гіз|тық|мыс|ы ә|мны|м б|өзі|сқа|қа |е т|ң қ|еге|ке |ард|нег|луғ|лан|амн|кін|і б|асқ|рал|ті |ру |айд|тта| же|а б|р м|рды|кет|аса|ді |өз |ама|дей|н н|тыр|ауд|ігі|лып| мү| ал|зін|лік|дай|мет|жас|бер|тең|арқ|рқы|а о|е ө|қам|елі|рлы|ы а|а т|дер|біл|р б|еле|қор|ден|тін|уда| тү| жү|кел|і т|ір |лге|ы ж|ең |а д|тты|оны|гін| ха|ркі|лде|е м|н т|түр|оға|ікт|кті|зде|жағ|уге|ауы|рыл|ұлт|лтт| ос|осы| то|ция|ы е|н а|ау | ау|ені| ел|н е|оты|шін|ыс |қты|імд| да|сіз|лма|кім|ң б|лім|қат|зі |орғ| әл|хал|ерк|ек |құр|тте|е д|ағд|ғда|елг| ас|ірі| ұл|ағы|амд|тал| со|рып|ылм|лін|ным|мас|сыз|дан|із |ірд|ай |гі |сты|ым‐|ң ж|с б"},"Arabic":{"arb":" ال|ية | في|في |الح| وا|وال| أو|ة ا|أو |الم|الت|لحق|حق |كل |لى |ان |ة و|الأ| لك|لكل|ن ا|ها |ق ف|ات |مة |اء |ما |و ا|ون |ته |الع|أن |ي ا|ي أ|شخص|ة ل|الإ| عل| أن|م ا|حري|الا|من |على|حقو|قوق|ت ا| شخ|لا |ق ا| لل|فرد|رد | أي|أي |رية| كا|د ا| ول| من| إل|خص |ا ا|وق |نسا|ل ف|ا ي|ه ا|ة أ|كان|ن ي|امة|جتم| حق|الق|ام |دة | لا|ل ش|إنس|سان|ين |ة م|اية|ن ت|ا ل|ذا | فر|ن أ|هذا|لة |اً | عن|ى ا|لتع|اسي| دو| حر|ع ا|ه ل|لك |ه و|ترا|له |ماع|د أ|ي ح|إلى|الج|الد|، و| با|ن و|ي ت|نون|لعا|مع | هذ|ة ع|لحر|يات|عية|ص ا| وي|لإن|لأس|أسا|ساس|سية|بال|ي و|حما|ماي| إن|الف|انو|ير |رام|ا و|عام|دول|مل |الو| مت| له|الب|ساو|ة ب|هم |ع ب|علي|ك ا|لقا|قان|تما|ة ت|ى أ|ول |ة ف|ا ب|اد |الر|ل و|ل ا|انت| قد|لجم|لمي|لتم|تمت|اعي|ليه|لمج|ه أ|ا ك|ال |لأم|لمت|لإع| يج|لدو|ق و|ريا|يه |رة |ن ل|دون|تمي|كرا|يد |ذلك| يع|ر ا|تعل|عال|تسا|لاد|اة |قدم|متع|تع |اجت| كل|مان|غير|اته|م و|مجت|تمع| مع|مم |لان|يجو|جوز|وز |عمل|دم |فيه|الض|ميي|ييز|متس| عا|أسر|ن م|معي|لات| مس|لاج|عن |ي إ|ليم|يم | أس| تع|يز |مية|جمي|ميع|الش|اعا|ة، |الس|شتر|لمس|لما|ني |لي |يها|ملا|ود |تي |لضم|ضما|اعت|ر و|اق |ي م|ي ي| بح| تم|تنا|أمم|تحد|حدة|إعل|علا|ه ع| جم|عة |م ب|ولم|الن|ل إ| به|ب ا|اوي|قد |أية|قيد|د ب|اك |وية|إلي|لزو|د م|مست|كاف|وله|ه ف| ذل| وس|لحم|نت | أم| مر|مرا| وأ| وع","urd":"ور | او|اور|کے | کے| کی|یں | کا|کی | حق|ے ک|کا | کو|یا |نے | اس|سے |ئے |کو | ہے|میں| می|ے ا| کر| ان|وں | ہو|اس |ر ا| شخ|شخص|ی ا| جا| سے|حق |ہر |خص |ے م|ام | یا|ں ک|ہیں|سی | آز|آزا|زاد|ادی|ائے|ہ ا|ص ک|ا ح|جائ|ہے |کہ |ر ش|ت ک| پر|ی ک|م ک|۔ہر|پر |ا ج|ان |دی |س ک|ق ہ|ہے۔|ر م|ں ا|ی ح|و ا|ار |ری |ن ک|کسی|حقو|قوق| مع|ے گ|ی ج|وق | ہی|ر ک|سان|نی |کرن| حا| نہ|تی |ی ت| جو|ئی |انس|نسا| کہ|اپن|ل ک|جو | اپ|ے ب|یت |نہ |ہ ک| مل|ہو |می |ل ہ|رے |ی ش|رنے|ے ل|ے ہ| کس| ای|ا ا|۔ ا|حاص|اصل|صل |معا|نہی|ی م|وہ |یں۔| تع|انہ|ق ک|د ک|ی ب|ات |ملک|ایس|ی ہ| بن| قو|قوم|کیا|ے، |عاش|اشر|ر ہ| گا| دو|یہ |وام|دہ |ں م|ا م| من|بر |انی|ے۔ہ|ر ب|دار|ے ج| وہ| لئ|لئے| عا|اقو|قوا|مل |ائی|علا|اد |ی س| جس|ر ن|ے ح|ہ م|کر |و ت|لیم| و | قا|انو|ا ہ|جس |یوں| یہ|لک |ریق|ے۔ |نیا|تعل| گی|گی |ر پ|دوس|ی آ|یم |، ا| اق|وئی|یر |پنے|ے پ|م ا|گا۔|یاد| رک|علی| مس|ی، |ین |ن ا|انے|وری|ی ن|لاق|ر ع|ون |خلا| با|ا س| سک| دی| چا|رائ|ومی|ہ و|نا |اری| بر|رکھ|ندگ|دگی|ر س|رتی| بی| شا|س م|ق ح|ادا| مم| ہر|ا پ|و گ|وسر|سب | پو|قان|نون| بھ|ے خ|اف | اع| مر|یسے| پی|غیر|ے س|ال |ت ا|، م| مح|ں، |بنی| ذر|ذری|ریع|ہوں| عل|تما|مام|ونک|نکہ|دان|پنی|ر ح| ام|من |عام|پور| طر|ے ع|ائد|بھی|ھی | مت| مق|د ا| خل|لاف|اعل|کوئ| لی|و ک|ے ی|ا ک|ر آ|دیو|اں |چون|، چ|یاس|برا|کرے|ی ع|ر ج","fas":" و | حق| با|که | که|ند | در|در |رد | دا|دار|از |هر | از|یت | هر|ر ک|حق |د ه|ای |ان |د و| را|ود |ین |یا |ارد|کس |ی و|را | یا| کس| بر|باش|د ک|ه ب| آز|آزا| خو|ه ا| اس|د ب|زاد|ار | آن|ق د|شد |حقو|قوق|ی ب|ه د|ده |وق |ید |ی ک|ر م|خود|ور |و ا|رای|اشد|ام |تما| اج|ری |ادی|س ح|دی |اید|است| ان|نه |و م|د ا|ر ا| بی|با |انه|ی ا|د، |ون | تا| هم| نم|ات |مای|ا ب|ایت|ر ب| بش| کن|انو|اسا| مر|ست | مو| مل|برا|وان|این|جتم| می|ورد| شو| ای|ن ا| اع| به|ت و|، ا|اجت|ماع|عی |ا م|ائی|ئی |و ب|نی |ملل|ت ا|و آ|آن |بشر| زن|ی، |کند|ن م|ن و|بای|شود|ی ی|های| من|شور| مس|کار|ت ب| بد|دان|اری|اعی|د آ|مل |ز آ|یگر|ی ر|ت م|مور| گر|گرد| مق|توا|ی م|علا|یه |ن ب|میت| شد| کش|کشو|ه و|ق م|د ش| مج| اح|ن ت|و د| حم|لی | کا|ت ک|هٔ |نون|مین|دیگ| عم|انی|ر خ|ه م| مت|ن ح|ی د|لام|رند|اه |نجا|بعی|نوا|ساس|ساو|د م| آم|ادا|وی |گی |هد |ا ک|اد |ی ح| مح| قا|قان|می |یده|مقا|لل |ر ش|ق و|اعل|ا د|شده|ع ا| بع|اسی|د ت|همه|سان|شر | عق|ر و|دگی|حما|ا ه|خوا|‌ها|ه‌ا| او|او |اده|اً |ر ت| دی|ومی| شر|نمی|بر | هی|هیچ|یر |ز ح|مند|بین|تی |جا |عقی|یتو|م و|مسا|و ت|سی |اوی|بهر|م م|ر د|انت|زش |ارن|زند|ندگ|و ه|رفت|رار|واه|ا ر| بو|تأ|أم|ٔمی|ران|عمو|موم|ی ن|اند|ل م|ردد|ه ح|عیت| فر| بم|دیه|ا ا|نما|آنج|کلی|احد|حدی|مال| تع|و ح|مرد|ت، |ملی|ق ا|واد|م ا|د د| خا| ار|اشن|شند","zlm":" دا|ان |دان| بر| او|ن س|له | ڤر|كن |ن ك|دال|ن ا|ن د|رڠ |حق |يڠ | كڤ|ارا| يڠ|أن |تيا|ڤد |ورڠ|ڠن |اله|ياڤ| تر|ولي|ن ڤ|اور|كڤد|برح|رحق|ين |ستي|اڤ |را |ليه| ات|ه ب| ست|يه |اتا| عد|عدا|ن ب|تاو|ڤ ا|او |ن ت|بيب|يبس|سي | كب|ه د|ن م| من| سو| سا| حق|ق ك|اسا|سام| تي|ن ي|الم|لم | اي|ن، |رن |اتو| ما|د س| با|باڬ|نڬا|ڬار| مم|كبي|بسن|سن |اين|ڠ ع|ڽ س|چار| سب|ي د|ندق|د ڤ|اڽ |اڬي|سبا| ڤم| د |نسي|ا ڤ|هن |قله|يند|تا |ي ا|ام | بو|ڬي | نڬ|اون|تن |وان|ا س|مأن|أنس|ڠ ب| كس| سم| سچ|سچا|ا ب|بول| مأ|سيا|ساس|اسي| ڤڠ|بڠس| دڠ|دڠن| ڤو|ڤا |ت د|رتا| هن|هند|دقل|ي م| اس|ادي|نڽ |ات |تره|رها|هاد|ادڤ| لا|تي |ڤرل|مان|، ك|بار|ارڠ|ق م|ڤون|ون |، د|اي |اول|ق٢ |٢ د|ڠسا|تو |يكن|وين|ن ه|اكن|يأن|وڠن|دڤ |وا |ا د|ن٢ |نتو|وق | سس|ماس|اس |ه م|مرا|ندو| ان| بي| مڠ|ڠ٢ |ائن|رات|يك |حق٢|برس|اد |ي س| كو|مڤو|ري | مل|وات|واس|ڤمب|، ت| سر|سرت|امر|سمو|اڬا|رلي|لين|دوڠ|ل د|تار|ڠ م|، س|وند|ي ك|لوا|سوا|ارك|تيك|ڤري|رسا|ياد|ريك|ا، |ونت|ڠ ت|ترم|ڤرا|سأن|اڤا|ي ڤ|ا ا| در|رأن| ڤن|سوس|ورو|ڠ س|لائ| بڠ|٢ ب|توق|دير|يري|وكن|جوا|هار|ندي|ارأ|وه |كرج|ڠڬو|ي، |موا| كأ|اجر|جرن| به|بها| مر|راس| كم|و ك|نن |ڤرك|ندڠ|دڠ٢|ا م| سڤ|ا٢ |سات|ق ا|ڤ٢ |شته|تها|سال|ينڠ|سسي|وهن|مول|منو|وبو| دل|وار|كور|د ك|ا ك| ڤل|لاج|ڠ ا|مبي|نتي|تيڠ|وسي|يال|ال |انت|نتا|بس |هڽ |ن ح|ه ا|كڤر|ڠ د|م س","skr":"تے |اں | تے|دے |دی |وں | دا| کو| حق|کوں|ے ا| دے|دا | دی|یاں| کی|ے ۔|یں |ہر | ۔ | ہے|ہے | وچ|کیت| ان|وچ | شخ|شخص|ال |ادی| حا|اصل| نا|ے م|خص |ں د|حق |حاص|صل |یا | ای|ل ہ|اتے|ق ح|ے و| ات|ں ک|سی |ہیں| مل|ی ت|نال| از|ازا|زاد| او|حقو|قوق|ار |ا ح| ۔ہ|۔ہر|ر ش|ے ج|ص ک|وق |دیا|نہ |یند|ندے| یا| کر|ئے | جو|کہی|ی د|انس|نسا|سان|وند|ی ا|یتے|و ڄ|ڻ د|یسی| وی|ا ا|ملک|ے ح|ے ک| ہو|ے ب|ں ا|ا و|ئی |ر ک|تی |آپڻ|وڻ |ندی| نہ|ویس| آپ| جی|اون| کن|انہ|ن ۔|جو |ی ن|ان | کہ|ری | تھ|ے ہ| ڄئ|۔ ا|ے ن|ی ۔|ڻے | ہر|ام |دہ |ں ت|ں و|ں م|تھی| من|کو |ی ح|کنو|نوں|ہاں| بچ|ے ت|رے |ون |ی ک|ور |ہکو|نی |یاد|ت د|یتا|ی ہ|نہا|ن د|اری|تا |لے |ڄئے|ے د| ہک| قو|پڻے|می |ی م|قوا|وام| ون|ق ت|اف |ل ک|اے | تع|ین |چ ا|خلا|ل ت|لک |ہو |ارے| و |انی|جیا|ے س| سا|ن ا|دار|یت |ی ج|ئو |ی و| اق|علا|کرڻ|ونڄ|ات | اے|ر ت|ق د|الا|ہوو| چا| رک|بچئ|چئو|وری| وس| لو| پو|پور|قنو|نون|ہ د|ے خ|ایہ|و ا|این| ڋو| خل|لاف|ڻ ک| جا| ۔ک| عز|عزت|ا ک| مع|ے ع|یر |قوم|ں آ|او |اد |ب د|ریا|مل |رکھ|وسی|سیب|یب |کاں| قن|اقو|رڻ |وئی|ں ج|ا ت|ل ا|زت |ت ت|ر ا| سی|لا |وے |ہی |ا م|ے ر|تعل|ں س| سم|یوڻ|ر ہ|ڻی |اوڻ|لوک|م م| مت|متح|تحد|حدہ|ایں| اع|ے ذ| جھ|جھی|کوئ|کار| کھ|ہ ا|ھین|م ت| کم| ہن|ہن |ی، |ں ب|د ا|سار|ن ک|علی|لیم|نڄے|ڄے |ی س|یہو|ھیو|ائد|و ک|ائی|ے ق| مط| سڱ|سڱد| ذر|ذری|ھیا|نے |کیو","pbu":" د | او|او |په | په| چې|چې | حق|ي ا|ره |ې د|نه |و ا|و د|ه ا|هر |ه و| څو|ه د|ري |حق |ي چ| کښ|څوک|وک |وي | شي|له |غه |کښې|ښې | سر| لر|لري|و پ|ه پ|ټول|لو |يت |سره|کړي|ي۔ه|ه ک|ي، |ر څ| ټو|ق ل| له|يا | هغ| از|۔هر|د م|ازا| کړ|دي |هغه| کو|نو |د ا|حقو|قوق|زاد|ه ت| پر| وا|ولو|خه |ه ه| وي| څخ|يو |ه م| يا|ول |د د|څخه| دي|ه ش|کول|ي د|ته |ه ب|ګه |و ي|ړي |اد |و م|ونو|شي۔|د ه|دې |خپل|واد| مل| هي| نه| تر| تو|د پ|ک ح|ې پ|ان |ولن|ني |ه ح|يوا|تون| با|ادي| هر| يو| مس|ي و|ې ا|لي |ې و|ي پ|د ت|يد |امي|وقو|شي |ړي۔|دان|انه|وګه| عم|هيو| دا| دغ|قو |ي۔ |ه چ|ار | خپ|بشر|توګ|اند|هغو|لني|باي|ايد| ده|ه ن|وي،|و ه|، د|ي ح| بر|غو | تا|ين |ايت| شو|شوي|دغه|مي |م د|دهغ| من|و ح| لا| ډو|ډول|بعي|پل | بش| ته|اوي|ه ګ|د ب|نيز|پر |ده |و ت|انو|نون|ون |ومي|رو |هيڅ|يڅ |ي ت|علا|ه ي|ه ل|وم |کار|ساو|تر |وند|ونه|يه |ن ک|مين|موم|و ک|اتو| اع|اعل|لام|اره| ځا|مسا| ان|د ټ|ټه | ګټ|ي ش| بي| مح|قان| پي|و ر|اخل|تو |اسي|سي | وک|ديو|ځاي|عقي| ور|لان|ل ت|ه س|ې چ| وس|و س|وون| ژو|ژون|يز |وکړ|کي |ن ش|ندې|ک د| اس| قا| نو|عمو|لتو|و ب|پار|ولے|لے |ې ک| عق|۔هي|څ څ| را|بل | بل|وسي|ت ا|ر د| ار| هم|هم |دو |ي م|مان|اسا|رته|شري|ا د|ر م|ښوو| رو|ګټه| غو|ونک| وړ|مل | شخ|شخص| اج|د ق|تام|وق |ملت|و ن|من |و څ|ا ب|ن ا|قيد| چا|ل ه| تب|تبع|ر پ|حما| کا|د خ|ر س|اني|نځ "},"Devanagari":{"hin":"के |प्र| के| और|और |ों | का|कार| प्|का | को|ं क|या |ति |ार |को | है|िका|ने |है |्रत| अध|धिक|की |अधि|ा क| कि| की| सम|ें |व्य|्ति|क्त|से | व्|्यक|ा अ|में|मान|ि क| स्| मे|सी |न्त|े क| हो|ता |यक्|ै ।|क्ष|त्य|िक | कर| या|्य |भी | वि|रत्|ी स| जा|र स|्ये|येक|ेक |रों|स्व|िया|ा ज|त्र|क व|र ह| अन|्रा|ित |किस|ा स|िसी|ा ह| से|ना |र क| पर| सा|गा |देश| । | अप|ान |समा|्त |े स|्त्|ी क|ा प| ।प|वार| रा|न क|षा |अन्|।प्|था |ष्ट| मा|्षा|्वा|ारो|तन्| इस|े अ|ाप्|प्त|राष|ाष्|्ट्|ट्र|्वत|वतन| उस|राप|त ह|कि | सं|ं औ|हो | दे|किय|ा ।|े प|ार्| भी|करन| न |री |र अ|जाए|क स|ी प|िवा|सभी|्तर|अपन| नि| तथ|तथा|रा |यों|े व|ाओं|ओं |पर |सम्|्री|ीय |सके|व क| द्|द्व|ारा|िए | ऐस|रता| सभ|िक्|ो स|रक्|र प|माज|्या|होग|र उ|ा व|रने| जि|ं म|े म|ाव |ाएग| भा|पने| लि|स्थ|पूर|इस |त क|ाने|रूप|भाव|लिए|े ल|कृत|र्व|ा औ|ो प|द्ध| घो|घोष|श्य|ेश |। इ| रू|ूप |एगा|शिक|े ब|दी | उन|रीय|रति|ूर्|न्य|्ध |णा |ी र|ं स|र्य|य क|परा| पा|े औ|ी अ|ेशो|शों|ानव|ियो|म क| शि| सु|तर्|जो |्र |तिक|सार|चित| पू|ी भ|जिस|ा उ|दिय|राध|चार|र द|विश|स्त|ारी|परि| जन|वाह|नव | बु|म्म|ले |्म |र्ण| जो|ानू|नून|िश्|गी |साम|ोगा|रका|्रो|ोषण|षणा|ाना|ो क|े य| यह|चूं|ूंक|ंकि|अपर|कोई|ोई |ाह |ी म| ।क|ी न|ा ग|ध क|े ज|न स|बन्|निय|याद|ादी|्मा| सद|जीव|हित|य ह|कर |ास |ी ज|ाज |ं न|्था|ामा|कता","mar":"्या|या |त्य|याच|चा | व |ण्य|प्र|कार|ाचा| प्|धिक|िका| अध|च्य|अधि|ार | आह|आहे|हे |ा अ| स्|्रत|स्व|्ये|ा क| कर|्वा|ता |ास | त्|ा स|त्र|ा व|िक |यां|ांच|वा |मान| या|्य | अस| का|रत्|ष्ट|येक|ल्य|र्य|र आ|ाहि|क्ष| सं| को|कोण|ामा|ाच्|ात | रा|ा न|ेका| सा|ून |ंत्| मा|चे |तंत|राष|ाष्|्ट्|ट्र|ने |े स|वात|करण| कि|किं|िंव|ंवा|व्य|ा प|कास|ना | मि| सम|क्त|ये |मिळ|समा|र्व|ातं|्र्|े प| जा|यास|व स|ोणत|ीय |ा आ|रण्|काम| दे|ांन|े क|ा म|रां| व्|्यक|हि |ान | पा|्षण|िळण| आप|ार्|ही |े अ|ा द|ली |ळण्|े व|ची | आण|ंच्| वि|ारा|्रा|ाही|मा |ा ह|द्ध|्री| नि|णे |ला | सर|सर्| नय|नये|ाचे|ी अ|्व |ंना|षण |आपल|ले |माज|बंध|ी प|्त |त क|लेल| हो|ील | शि|शिक|ध्य|ी स|आणि|णि |े ज|देश|न क|ानव|पाह|हिज|िजे|जे |रीय|क स|व त|यक्|ा ज|यात|िक्|त स|े आ|रक्|पल्|वी |संब|ंबं|न्य| ज्|ज्य|स्थ| के|्वत|असल| उप|य अ|क व|त्व|ीत |त व|केल|ाने|य क|णत्|ासा|रति|भाव|े त|व म|ेण्|िष्|साम|क आ|सार|कां|याय|साठ|ाठी|ठी |े य|ंचा|करत|रता|र व|्ती|ीने|याह|र्थ|च्छ|ी आ|स स|ोणा|संर|ंरक|त आ|ंधा|ायद|ी व|ेशा|ित | अश|जाह|हीर|तील|ा ब| अथ|अथव|थवा|ी म|स्त|ा त|ती |नवी|ाची|िवा|देण|याव|ांत|ण म|व आ|य व| हक|हक्|क्क|ा य|ेत |वस्|पूर|ूर्|ारण|द्य|ंचे|ेले|ेल्|कृत|शा |तीन| अर|अर्|्थी|थी |्रद|राध|यत्|ाला|तिष|ष्ठ|श्र|ण स|रून| आल|्ध |सले|े म| शा|्रक|रका|तिक|ाजि|जिक|्क |ाजा| इत|इतर|तो |साध","mai":"ाक |प्र|कार|धिक|िका|ार | आʼ|आʼ |्रत|ेँ |्यक|क अ|िक |्ति| अध|व्य|अधि|क स| प्| व्|क्त|केँ|यक्|तिक|हि | स्|न्त|क व|मे |बाक| सम|मान|त्य|क्ष| छै|छैक|ेक |रत्|स्व|त्र|्ये|येक| अप|ष्ट|सँ |र छ|ैक।| वि| एह|वा |ित |ति |िके|ट्र| जा|्त्|राष|ाष्|्ट्| हो| सा| रा|्य | अन|अपन| कर|।प्|कोन| अछ|अछि|क आ|्वत|वतन|तन्| पर|था | को| वा|ताक|ार्|एहि|पन |ा आ|नहि| मा|्री|समा|नो |रता| दे|्षा|रक |देश|क प| नि| नह| कए| का|छि |न्य|्त |ि क| सं|ोनो| तथ|तथा|्वा|ारक|ान्|ल ज|ा स|ान |िवा|क ह|ीय |र आ| आ |्या|ँ क|वार|ता |ना |जाए| जे|करब| एक| आओ|आओर|ओर |ानव|परि|ँ अ|रीय|ा प|धार|ारण|स्थ|माज|साम|ामा|्रस|र्व|कएल|घोष|अन्|्तर|त क|स्त| सभ|्रा|रण |ँ स|द्ध|एबा|नक |ा अ|िक्|षा |रक्|क।प|ʼ स|चित|पूर|ʼ अ|यक |ाहि|रबा|क ज|कर | घो|ोषण|सम्|र प| हे|हेत|ेतु|तु |शिक|त अ| उप| अव|ूर्|एल |िमे|एहन|हन |षणा|ाधि|सभ |च्छ|अनु| शि|ेल |रूप|क क|भाव|प्त|्ध |ि ज|वक | सक|र अ|रति|निर|िर्|जाह|हो |ँ ए|े स|होए|चार|ण स|र्य|ि आ|सभक|्रक|ाजि|जिक|ाप्|र्ण|त स|क उ|रा |त आ|एत।|त ह| जन|ैक |विव|ोएत|वाध|क ब|री |न प| भा|य आ|राप| ओ |न व|ʼ प|्ण |न अ|कृत|िश्|ा व|कान|ारा|ि स|हु |रसं| उद|उद्|श्य|ाएत|िसँ|जे |ि घ|जेँ| कि|कि |ेश |केओ|ेओ |त्त|सार|क ए|रिव|वास|य प|्थि|विश|ओ व|यता|पर | भे|क ल|नवा| बी| सह|िष्|ि द| रू| ले| पए|पएब| अथ|अथव|थवा|क र|न स|हिम|ास |ए स|ि अ| दो|षाक| पू| द्|द्व|धक ","bho":" के|के |ार |े क|कार|धिक|िका|ओर | आओ|आओर| अध|अधि|े स|ा क|े अ| सं|र क| हो| मे|में|ें |र स|िक | कर|र ह|ा स| से|मान| सम|न क|रा |से |क्ष|े ब|नो |वे | चा|ता |्रा| रा|ति |खे |चाह|ष्ट| सा|राष|ाष्|प्र| का| मा|्ट्|ट्र|े आ| प्| सक| स्| जा| बा|पन |था |त क|ि क|कौन|ौनो|करे|होख| कौ|ेला|्त |ाति|ला |तथा| आप| ओक|आपन|रे |र म| तथ|सबह| हव|हवे|र आ|कर |ोखे|जा |े ओ|तिर|िर |बहि| ह।|ही |सके|केल|ना |हे | और|त्र|ान | खा|खात|।सब| पर|े म|े च|ा आ|षा |ावे|र ब|न स|ओकर|ी क| लो|ाहे|ल ज| सब|्षा|संग|ं क|ित |माज|मिल|े ज|रक्|हिं|िं |ा प|वे।|े ह|ाज |और |स्व|ंत्|ला।|ो स| नइ|नइख|इखे|हु |ानव|िया|्र |लोग|क स|समा|कान|क्त| जे|करा|्रत|े। | ओ |ी स|े न|्री|रीय|पर |े उ|ाही|ानू|नून|स्थ|े व|ाम |्वत|वतं|तंत|रता|केह|या |े ख|। स| सु|प्त| दे|े त|साम|र अ|ीय |र प|बा।|ा।स|सभे|भे | वि|योग|दी | आद|ून |ा म|्य |व्य|ए क|ेहु| या|री |र न| बि|राप|ाप्|ु क| मि|यता|आदि|दिम|मी |नवा|ाधि|े द|चार|ले | नि| पा|ोग | ही| दो|ादी|हि |तिक|पूर| इ |ा ह|्ति|ल ह|खल |ाव | अप| सभ|िमी|देश|ुक्| सह|शिक|िक्|ि म|जे |षण |ाजि|जिक|क आ|्तर|े प| उप|जाद|े भ|्या| जर|म क|ेकर| अं|े र|।के|न आ|सब |साथ|ंगठ|गठन|ठन |रो | जी|ा। |्म |ी ब|हो |न ह|े ल|न म|वाध|निय|ेश | शि|ज क| ले|ने |बा |संर|ंरक|्षण|ामा|य क|ास |उपय|पयो|दोस| आज|आजा| भी| उच|चित|र व| पू| घो|घोष| व्| शा|िल |ा।क| कई| को|होए|्थि","nep":"को | र |कार|प्र|ार |ने |िका|क्त|्यक|धिक|व्य| गर| प्|्रत|अधि|्ति| अध| व्|यक्|मा |िक |ाई |त्य|न्त|लाई|मान| सम|त्र|गर्|र्न|क व|्ने| वा|वा | स्|रत्|र स|्ये|येक|ेक |छ ।|तिल|हरू|क्ष|ो स| वि|ा स|्त्|िला| । |स्व|हुन|ति | हु| मा| रा|ले |र छ| छ |ष्ट|समा|वतन|तन्|्ट्|ट्र| सं|ो अ|राष|ाष्|्वत|नेछ|ुने|ान |े अ|ता | का|्र |हरु|गरि|ाको|िने| अन|ना | नि|े छ| सा|क स|तिक|ित |नै |र र|रता|रू |था |ा र|कुन|ुनै|ा अ|स्त|्त | छै|छैन| तथ|तथा|ा प|ार्|वार| पर|ा व|एको|्षा|परि|रक्|। प|माज|रु |द्ध|का |्या|ो प|ामा|्रा|सको|ेछ | ला|धार|नि |ाहर|देश| यस|र ह|िवा|सबै|र म|भाव|्य |र व|रहर|रको|न अ|सम्|े र|संर|ंरक|अन्|ताक|्रि|्वा|ा भ|त र| कु| त्|री |ो व|न स|रिन|लाग|ारक|ानव| सब| शि|शिक|िक्|ै व|रिय|रा |ा न|पनि|ारा|श्य|ा त|्यस|यस्|ाउन|्न | अप|चार|ाव | भए|ारम| सु|ुद्|षा |ि र|रूक| सह|बाट|्षण|साम|्तर|िय |रति|ो आ|र प|ो ल|कान|द्व|ुक्|ान्| उप|द्द|ुन |ैन |ेछ।|ैन।|ारह| भे|ागि|गि |निज|वाह|्ध |र्य| आध|रमा|ा म|नको|बै |न ग|ाट |।प्|ाजि|जिक|त्प|िको|ाय |र त|ात्| उस|ूर्| अभ| अर|जको|स्थ| आव|त स|ित्| पन|िएक|्तो|तो | पा|ा ग| भन|ानु|परा|राध| छ।| मत|अपर|भेद|ि स|रुद|ो ह|रिव|रका|न्य| जन|यता|े स|र्म|ारी| दि|क अ|नमा|ूको|हित|ा क|क र|र अ|ा ब|उसक|पूर|त्व|र्द|सार|णको|युक|।कु|विध| घो|घोष| सक|भएक|नुन|्यह|ि व|ो भ| पु| मन|नी |विच| दे|राज|विर|िरु|काम|र न|यहर|िश्"}}')
            },
            2903: e => {
                e.exports = {
                    cmn: /[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DB5\u4E00-\u9FEF\uF900-\uFA6D\uFA70-\uFAD9]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/g,
                    Latin: /[A-Za-z\xAA\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02B8\u02E0-\u02E4\u1D00-\u1D25\u1D2C-\u1D5C\u1D62-\u1D65\u1D6B-\u1D77\u1D79-\u1DBE\u1E00-\u1EFF\u2071\u207F\u2090-\u209C\u212A\u212B\u2132\u214E\u2160-\u2188\u2C60-\u2C7F\uA722-\uA787\uA78B-\uA7BF\uA7C2-\uA7C6\uA7F7-\uA7FF\uAB30-\uAB5A\uAB5C-\uAB64\uAB66\uAB67\uFB00-\uFB06\uFF21-\uFF3A\uFF41-\uFF5A]/g,
                    Cyrillic: /[\u0400-\u0484\u0487-\u052F\u1C80-\u1C88\u1D2B\u1D78\u2DE0-\u2DFF\uA640-\uA69F\uFE2E\uFE2F]/g,
                    Arabic: /[\u0600-\u0604\u0606-\u060B\u060D-\u061A\u061C\u061E\u0620-\u063F\u0641-\u064A\u0656-\u066F\u0671-\u06DC\u06DE-\u06FF\u0750-\u077F\u08A0-\u08B4\u08B6-\u08BD\u08D3-\u08E1\u08E3-\u08FF\uFB50-\uFBC1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFD\uFE70-\uFE74\uFE76-\uFEFC]|\uD803[\uDE60-\uDE7E]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB\uDEF0\uDEF1]/g,
                    ben: /[\u0980-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09FE]/g,
                    Devanagari: /[\u0900-\u0950\u0955-\u0963\u0966-\u097F\uA8E0-\uA8FF]/g,
                    jpn: /[\u3041-\u3096\u309D-\u309F]|\uD82C[\uDC01-\uDD1E\uDD50-\uDD52]|\uD83C\uDE00|[\u30A1-\u30FA\u30FD-\u30FF\u31F0-\u31FF\u32D0-\u32FE\u3300-\u3357\uFF66-\uFF6F\uFF71-\uFF9D]|\uD82C[\uDC00\uDD64-\uDD67]|[㐀-䶵一-龯]/g,
                    kor: /[\u1100-\u11FF\u302E\u302F\u3131-\u318E\u3200-\u321E\u3260-\u327E\uA960-\uA97C\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uFFA0-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/g,
                    tel: /[\u0C00-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C77-\u0C7F]/g,
                    tam: /[\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BFA]|\uD807[\uDFC0-\uDFF1\uDFFF]/g,
                    guj: /[\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AF1\u0AF9-\u0AFF]/g,
                    kan: /[\u0C80-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2]/g,
                    mal: /[\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4F\u0D54-\u0D63\u0D66-\u0D7F]/g,
                    mya: /[\u1000-\u109F\uA9E0-\uA9FE\uAA60-\uAA7F]/g,
                    ori: /[\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B77]/g,
                    pan: /[\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A76]/g,
                    amh: /[\u1200-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u137C\u1380-\u1399\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E]/g,
                    tha: /[\u0E01-\u0E3A\u0E40-\u0E5B]/g,
                    sin: /[\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2-\u0DF4]|\uD804[\uDDE1-\uDDF4]/g,
                    ell: /[\u0370-\u0373\u0375-\u0377\u037A-\u037D\u037F\u0384\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03E1\u03F0-\u03FF\u1D26-\u1D2A\u1D5D-\u1D61\u1D66-\u1D6A\u1DBF\u1F00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FC4\u1FC6-\u1FD3\u1FD6-\u1FDB\u1FDD-\u1FEF\u1FF2-\u1FF4\u1FF6-\u1FFE\u2126\uAB65]|\uD800[\uDD40-\uDD8E\uDDA0]|\uD834[\uDE00-\uDE45]/g
                }
            },
            8349: (e, a, t) => {
                "use strict";
                var n = t(4812),
                    o = t(2903),
                    i = t(7943);

                function r(e, a) {
                    return s(e, a)[0][0]
                }

                function s(e, a) {
                    var t, r = a || {},
                        s = 10,
                        g = [].concat(r.whitelist || [], r.only || []),
                        b = [].concat(r.blacklist || [], r.ignore || []);
                    return null !== r.minLength && void 0 !== r.minLength && (s = r.minLength), !e || e.length < s ? u() : (t = function(e, a) {
                        var t, n, o, i = -1;
                        for (n in a)(o = l(e, a[n])) > i && (i = o, t = n);
                        return [t, i]
                    }(e = e.slice(0, 2048), o))[0] in i ? function(e, a) {
                        for (var t = a[0][1], n = 300 * e.length - t, o = -1, i = a.length; ++o < i;) a[o][1] = 1 - (a[o][1] - t) / n || 0;
                        return a
                    }(e, function(e, a, t, n) {
                        var o, i = [];
                        for (o in a = function(e, a, t) {
                                var n, o;
                                if (0 === a.length && 0 === t.length) return e;
                                for (o in n = {}, e) m(o, a, t) && (n[o] = e[o]);
                                return n
                            }(a, t, n)) i.push([o, c(e, a[o])]);
                        return 0 === i.length ? u() : i.sort(h)
                    }(n.asTuples(e), i[t[0]], g, b)) : 0 !== t[1] && m(t[0], g, b) ? d(t[0]) : u()
                }

                function l(e, a) {
                    var t = e.match(a);
                    return (t ? t.length : 0) / e.length || 0
                }

                function c(e, a) {
                    for (var t, n, o = 0, i = -1, r = e.length; ++i < r;)(t = e[i])[0] in a ? (n = t[1] - a[t[0]] - 1) < 0 && (n = -n) : n = 300, o += n;
                    return o
                }

                function m(e, a, t) {
                    return 0 === a.length && 0 === t.length || (0 === a.length || -1 !== a.indexOf(e)) && -1 === t.indexOf(e)
                }

                function u() {
                    return d("und")
                }

                function d(e) {
                    return [
                        [e, 1]
                    ]
                }

                function h(e, a) {
                    return e[1] - a[1]
                }
                r.all = s, e.exports = r,
                    function() {
                        var e, a, t, n, o, r;
                        for (o in i)
                            for (a in e = i[o]) {
                                for (r = (n = e[a].split("|")).length, t = {}; r--;) t[n[r]] = r;
                                e[a] = t
                            }
                    }()
            },
            8495: (module, exports, __webpack_require__) => {
                var __WEBPACK_AMD_DEFINE_RESULT__;
                (function() {
                    "use strict";
                    var ERROR = "input is invalid type",
                        WINDOW = "object" == typeof window,
                        root = WINDOW ? window : {};
                    root.JS_MD5_NO_WINDOW && (WINDOW = !1);
                    var WEB_WORKER = !WINDOW && "object" == typeof self,
                        NODE_JS = !root.JS_MD5_NO_NODE_JS && "object" == typeof process && process.versions && process.versions.node;
                    NODE_JS ? root = __webpack_require__.g : WEB_WORKER && (root = self);
                    var COMMON_JS = !root.JS_MD5_NO_COMMON_JS && module.exports,
                        AMD = __webpack_require__.amdO,
                        ARRAY_BUFFER = !root.JS_MD5_NO_ARRAY_BUFFER && "undefined" != typeof ArrayBuffer,
                        HEX_CHARS = "0123456789abcdef".split(""),
                        EXTRA = [128, 32768, 8388608, -2147483648],
                        SHIFT = [0, 8, 16, 24],
                        OUTPUT_TYPES = ["hex", "array", "digest", "buffer", "arrayBuffer", "base64"],
                        BASE64_ENCODE_CHAR = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),
                        blocks = [],
                        buffer8;
                    if (ARRAY_BUFFER) {
                        var buffer = new ArrayBuffer(68);
                        buffer8 = new Uint8Array(buffer), blocks = new Uint32Array(buffer)
                    }!root.JS_MD5_NO_NODE_JS && Array.isArray || (Array.isArray = function(e) {
                        return "[object Array]" === Object.prototype.toString.call(e)
                    }), !ARRAY_BUFFER || !root.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW && ArrayBuffer.isView || (ArrayBuffer.isView = function(e) {
                        return "object" == typeof e && e.buffer && e.buffer.constructor === ArrayBuffer
                    });
                    var createOutputMethod = function(e) {
                            return function(a) {
                                return new Md5(!0).update(a)[e]()
                            }
                        },
                        createMethod = function() {
                            var e = createOutputMethod("hex");
                            NODE_JS && (e = nodeWrap(e)), e.create = function() {
                                return new Md5
                            }, e.update = function(a) {
                                return e.create().update(a)
                            };
                            for (var a = 0; a < OUTPUT_TYPES.length; ++a) {
                                var t = OUTPUT_TYPES[a];
                                e[t] = createOutputMethod(t)
                            }
                            return e
                        },
                        nodeWrap = function(method) {
                            var crypto = eval("require('crypto')"),
                                Buffer = eval("require('buffer').Buffer"),
                                nodeMethod = function(e) {
                                    if ("string" == typeof e) return crypto.createHash("md5").update(e, "utf8").digest("hex");
                                    if (null == e) throw ERROR;
                                    return e.constructor === ArrayBuffer && (e = new Uint8Array(e)), Array.isArray(e) || ArrayBuffer.isView(e) || e.constructor === Buffer ? crypto.createHash("md5").update(new Buffer(e)).digest("hex") : method(e)
                                };
                            return nodeMethod
                        };

                    function Md5(e) {
                        if (e) blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0, this.blocks = blocks, this.buffer8 = buffer8;
                        else if (ARRAY_BUFFER) {
                            var a = new ArrayBuffer(68);
                            this.buffer8 = new Uint8Array(a), this.blocks = new Uint32Array(a)
                        } else this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                        this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = this.hBytes = 0, this.finalized = this.hashed = !1, this.first = !0
                    }
                    Md5.prototype.update = function(e) {
                        if (!this.finalized) {
                            var a, t = typeof e;
                            if ("string" !== t) {
                                if ("object" !== t) throw ERROR;
                                if (null === e) throw ERROR;
                                if (ARRAY_BUFFER && e.constructor === ArrayBuffer) e = new Uint8Array(e);
                                else if (!(Array.isArray(e) || ARRAY_BUFFER && ArrayBuffer.isView(e))) throw ERROR;
                                a = !0
                            }
                            for (var n, o, i = 0, r = e.length, s = this.blocks, l = this.buffer8; i < r;) {
                                if (this.hashed && (this.hashed = !1, s[0] = s[16], s[16] = s[1] = s[2] = s[3] = s[4] = s[5] = s[6] = s[7] = s[8] = s[9] = s[10] = s[11] = s[12] = s[13] = s[14] = s[15] = 0), a)
                                    if (ARRAY_BUFFER)
                                        for (o = this.start; i < r && o < 64; ++i) l[o++] = e[i];
                                    else
                                        for (o = this.start; i < r && o < 64; ++i) s[o >> 2] |= e[i] << SHIFT[3 & o++];
                                else if (ARRAY_BUFFER)
                                    for (o = this.start; i < r && o < 64; ++i)(n = e.charCodeAt(i)) < 128 ? l[o++] = n : n < 2048 ? (l[o++] = 192 | n >> 6, l[o++] = 128 | 63 & n) : n < 55296 || n >= 57344 ? (l[o++] = 224 | n >> 12, l[o++] = 128 | n >> 6 & 63, l[o++] = 128 | 63 & n) : (n = 65536 + ((1023 & n) << 10 | 1023 & e.charCodeAt(++i)), l[o++] = 240 | n >> 18, l[o++] = 128 | n >> 12 & 63, l[o++] = 128 | n >> 6 & 63, l[o++] = 128 | 63 & n);
                                else
                                    for (o = this.start; i < r && o < 64; ++i)(n = e.charCodeAt(i)) < 128 ? s[o >> 2] |= n << SHIFT[3 & o++] : n < 2048 ? (s[o >> 2] |= (192 | n >> 6) << SHIFT[3 & o++], s[o >> 2] |= (128 | 63 & n) << SHIFT[3 & o++]) : n < 55296 || n >= 57344 ? (s[o >> 2] |= (224 | n >> 12) << SHIFT[3 & o++], s[o >> 2] |= (128 | n >> 6 & 63) << SHIFT[3 & o++], s[o >> 2] |= (128 | 63 & n) << SHIFT[3 & o++]) : (n = 65536 + ((1023 & n) << 10 | 1023 & e.charCodeAt(++i)), s[o >> 2] |= (240 | n >> 18) << SHIFT[3 & o++], s[o >> 2] |= (128 | n >> 12 & 63) << SHIFT[3 & o++], s[o >> 2] |= (128 | n >> 6 & 63) << SHIFT[3 & o++], s[o >> 2] |= (128 | 63 & n) << SHIFT[3 & o++]);
                                this.lastByteIndex = o, this.bytes += o - this.start, o >= 64 ? (this.start = o - 64, this.hash(), this.hashed = !0) : this.start = o
                            }
                            return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0, this.bytes = this.bytes % 4294967296), this
                        }
                    }, Md5.prototype.finalize = function() {
                        if (!this.finalized) {
                            this.finalized = !0;
                            var e = this.blocks,
                                a = this.lastByteIndex;
                            e[a >> 2] |= EXTRA[3 & a], a >= 56 && (this.hashed || this.hash(), e[0] = e[16], e[16] = e[1] = e[2] = e[3] = e[4] = e[5] = e[6] = e[7] = e[8] = e[9] = e[10] = e[11] = e[12] = e[13] = e[14] = e[15] = 0), e[14] = this.bytes << 3, e[15] = this.hBytes << 3 | this.bytes >>> 29, this.hash()
                        }
                    }, Md5.prototype.hash = function() {
                        var e, a, t, n, o, i, r = this.blocks;
                        this.first ? a = ((a = ((e = ((e = r[0] - 680876937) << 7 | e >>> 25) - 271733879 << 0) ^ (t = ((t = (-271733879 ^ (n = ((n = (-1732584194 ^ 2004318071 & e) + r[1] - 117830708) << 12 | n >>> 20) + e << 0) & (-271733879 ^ e)) + r[2] - 1126478375) << 17 | t >>> 15) + n << 0) & (n ^ e)) + r[3] - 1316259209) << 22 | a >>> 10) + t << 0 : (e = this.h0, a = this.h1, t = this.h2, a = ((a += ((e = ((e += ((n = this.h3) ^ a & (t ^ n)) + r[0] - 680876936) << 7 | e >>> 25) + a << 0) ^ (t = ((t += (a ^ (n = ((n += (t ^ e & (a ^ t)) + r[1] - 389564586) << 12 | n >>> 20) + e << 0) & (e ^ a)) + r[2] + 606105819) << 17 | t >>> 15) + n << 0) & (n ^ e)) + r[3] - 1044525330) << 22 | a >>> 10) + t << 0), a = ((a += ((e = ((e += (n ^ a & (t ^ n)) + r[4] - 176418897) << 7 | e >>> 25) + a << 0) ^ (t = ((t += (a ^ (n = ((n += (t ^ e & (a ^ t)) + r[5] + 1200080426) << 12 | n >>> 20) + e << 0) & (e ^ a)) + r[6] - 1473231341) << 17 | t >>> 15) + n << 0) & (n ^ e)) + r[7] - 45705983) << 22 | a >>> 10) + t << 0, a = ((a += ((e = ((e += (n ^ a & (t ^ n)) + r[8] + 1770035416) << 7 | e >>> 25) + a << 0) ^ (t = ((t += (a ^ (n = ((n += (t ^ e & (a ^ t)) + r[9] - 1958414417) << 12 | n >>> 20) + e << 0) & (e ^ a)) + r[10] - 42063) << 17 | t >>> 15) + n << 0) & (n ^ e)) + r[11] - 1990404162) << 22 | a >>> 10) + t << 0, a = ((a += ((e = ((e += (n ^ a & (t ^ n)) + r[12] + 1804603682) << 7 | e >>> 25) + a << 0) ^ (t = ((t += (a ^ (n = ((n += (t ^ e & (a ^ t)) + r[13] - 40341101) << 12 | n >>> 20) + e << 0) & (e ^ a)) + r[14] - 1502002290) << 17 | t >>> 15) + n << 0) & (n ^ e)) + r[15] + 1236535329) << 22 | a >>> 10) + t << 0, a = ((a += ((n = ((n += (a ^ t & ((e = ((e += (t ^ n & (a ^ t)) + r[1] - 165796510) << 5 | e >>> 27) + a << 0) ^ a)) + r[6] - 1069501632) << 9 | n >>> 23) + e << 0) ^ e & ((t = ((t += (e ^ a & (n ^ e)) + r[11] + 643717713) << 14 | t >>> 18) + n << 0) ^ n)) + r[0] - 373897302) << 20 | a >>> 12) + t << 0, a = ((a += ((n = ((n += (a ^ t & ((e = ((e += (t ^ n & (a ^ t)) + r[5] - 701558691) << 5 | e >>> 27) + a << 0) ^ a)) + r[10] + 38016083) << 9 | n >>> 23) + e << 0) ^ e & ((t = ((t += (e ^ a & (n ^ e)) + r[15] - 660478335) << 14 | t >>> 18) + n << 0) ^ n)) + r[4] - 405537848) << 20 | a >>> 12) + t << 0, a = ((a += ((n = ((n += (a ^ t & ((e = ((e += (t ^ n & (a ^ t)) + r[9] + 568446438) << 5 | e >>> 27) + a << 0) ^ a)) + r[14] - 1019803690) << 9 | n >>> 23) + e << 0) ^ e & ((t = ((t += (e ^ a & (n ^ e)) + r[3] - 187363961) << 14 | t >>> 18) + n << 0) ^ n)) + r[8] + 1163531501) << 20 | a >>> 12) + t << 0, a = ((a += ((n = ((n += (a ^ t & ((e = ((e += (t ^ n & (a ^ t)) + r[13] - 1444681467) << 5 | e >>> 27) + a << 0) ^ a)) + r[2] - 51403784) << 9 | n >>> 23) + e << 0) ^ e & ((t = ((t += (e ^ a & (n ^ e)) + r[7] + 1735328473) << 14 | t >>> 18) + n << 0) ^ n)) + r[12] - 1926607734) << 20 | a >>> 12) + t << 0, a = ((a += ((i = (n = ((n += ((o = a ^ t) ^ (e = ((e += (o ^ n) + r[5] - 378558) << 4 | e >>> 28) + a << 0)) + r[8] - 2022574463) << 11 | n >>> 21) + e << 0) ^ e) ^ (t = ((t += (i ^ a) + r[11] + 1839030562) << 16 | t >>> 16) + n << 0)) + r[14] - 35309556) << 23 | a >>> 9) + t << 0, a = ((a += ((i = (n = ((n += ((o = a ^ t) ^ (e = ((e += (o ^ n) + r[1] - 1530992060) << 4 | e >>> 28) + a << 0)) + r[4] + 1272893353) << 11 | n >>> 21) + e << 0) ^ e) ^ (t = ((t += (i ^ a) + r[7] - 155497632) << 16 | t >>> 16) + n << 0)) + r[10] - 1094730640) << 23 | a >>> 9) + t << 0, a = ((a += ((i = (n = ((n += ((o = a ^ t) ^ (e = ((e += (o ^ n) + r[13] + 681279174) << 4 | e >>> 28) + a << 0)) + r[0] - 358537222) << 11 | n >>> 21) + e << 0) ^ e) ^ (t = ((t += (i ^ a) + r[3] - 722521979) << 16 | t >>> 16) + n << 0)) + r[6] + 76029189) << 23 | a >>> 9) + t << 0, a = ((a += ((i = (n = ((n += ((o = a ^ t) ^ (e = ((e += (o ^ n) + r[9] - 640364487) << 4 | e >>> 28) + a << 0)) + r[12] - 421815835) << 11 | n >>> 21) + e << 0) ^ e) ^ (t = ((t += (i ^ a) + r[15] + 530742520) << 16 | t >>> 16) + n << 0)) + r[2] - 995338651) << 23 | a >>> 9) + t << 0, a = ((a += ((n = ((n += (a ^ ((e = ((e += (t ^ (a | ~n)) + r[0] - 198630844) << 6 | e >>> 26) + a << 0) | ~t)) + r[7] + 1126891415) << 10 | n >>> 22) + e << 0) ^ ((t = ((t += (e ^ (n | ~a)) + r[14] - 1416354905) << 15 | t >>> 17) + n << 0) | ~e)) + r[5] - 57434055) << 21 | a >>> 11) + t << 0, a = ((a += ((n = ((n += (a ^ ((e = ((e += (t ^ (a | ~n)) + r[12] + 1700485571) << 6 | e >>> 26) + a << 0) | ~t)) + r[3] - 1894986606) << 10 | n >>> 22) + e << 0) ^ ((t = ((t += (e ^ (n | ~a)) + r[10] - 1051523) << 15 | t >>> 17) + n << 0) | ~e)) + r[1] - 2054922799) << 21 | a >>> 11) + t << 0, a = ((a += ((n = ((n += (a ^ ((e = ((e += (t ^ (a | ~n)) + r[8] + 1873313359) << 6 | e >>> 26) + a << 0) | ~t)) + r[15] - 30611744) << 10 | n >>> 22) + e << 0) ^ ((t = ((t += (e ^ (n | ~a)) + r[6] - 1560198380) << 15 | t >>> 17) + n << 0) | ~e)) + r[13] + 1309151649) << 21 | a >>> 11) + t << 0, a = ((a += ((n = ((n += (a ^ ((e = ((e += (t ^ (a | ~n)) + r[4] - 145523070) << 6 | e >>> 26) + a << 0) | ~t)) + r[11] - 1120210379) << 10 | n >>> 22) + e << 0) ^ ((t = ((t += (e ^ (n | ~a)) + r[2] + 718787259) << 15 | t >>> 17) + n << 0) | ~e)) + r[9] - 343485551) << 21 | a >>> 11) + t << 0, this.first ? (this.h0 = e + 1732584193 << 0, this.h1 = a - 271733879 << 0, this.h2 = t - 1732584194 << 0, this.h3 = n + 271733878 << 0, this.first = !1) : (this.h0 = this.h0 + e << 0, this.h1 = this.h1 + a << 0, this.h2 = this.h2 + t << 0, this.h3 = this.h3 + n << 0)
                    }, Md5.prototype.hex = function() {
                        this.finalize();
                        var e = this.h0,
                            a = this.h1,
                            t = this.h2,
                            n = this.h3;
                        return HEX_CHARS[e >> 4 & 15] + HEX_CHARS[15 & e] + HEX_CHARS[e >> 12 & 15] + HEX_CHARS[e >> 8 & 15] + HEX_CHARS[e >> 20 & 15] + HEX_CHARS[e >> 16 & 15] + HEX_CHARS[e >> 28 & 15] + HEX_CHARS[e >> 24 & 15] + HEX_CHARS[a >> 4 & 15] + HEX_CHARS[15 & a] + HEX_CHARS[a >> 12 & 15] + HEX_CHARS[a >> 8 & 15] + HEX_CHARS[a >> 20 & 15] + HEX_CHARS[a >> 16 & 15] + HEX_CHARS[a >> 28 & 15] + HEX_CHARS[a >> 24 & 15] + HEX_CHARS[t >> 4 & 15] + HEX_CHARS[15 & t] + HEX_CHARS[t >> 12 & 15] + HEX_CHARS[t >> 8 & 15] + HEX_CHARS[t >> 20 & 15] + HEX_CHARS[t >> 16 & 15] + HEX_CHARS[t >> 28 & 15] + HEX_CHARS[t >> 24 & 15] + HEX_CHARS[n >> 4 & 15] + HEX_CHARS[15 & n] + HEX_CHARS[n >> 12 & 15] + HEX_CHARS[n >> 8 & 15] + HEX_CHARS[n >> 20 & 15] + HEX_CHARS[n >> 16 & 15] + HEX_CHARS[n >> 28 & 15] + HEX_CHARS[n >> 24 & 15]
                    }, Md5.prototype.toString = Md5.prototype.hex, Md5.prototype.digest = function() {
                        this.finalize();
                        var e = this.h0,
                            a = this.h1,
                            t = this.h2,
                            n = this.h3;
                        return [255 & e, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255, 255 & a, a >> 8 & 255, a >> 16 & 255, a >> 24 & 255, 255 & t, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255, 255 & n, n >> 8 & 255, n >> 16 & 255, n >> 24 & 255]
                    }, Md5.prototype.array = Md5.prototype.digest, Md5.prototype.arrayBuffer = function() {
                        this.finalize();
                        var e = new ArrayBuffer(16),
                            a = new Uint32Array(e);
                        return a[0] = this.h0, a[1] = this.h1, a[2] = this.h2, a[3] = this.h3, e
                    }, Md5.prototype.buffer = Md5.prototype.arrayBuffer, Md5.prototype.base64 = function() {
                        for (var e, a, t, n = "", o = this.array(), i = 0; i < 15;) e = o[i++], a = o[i++], t = o[i++], n += BASE64_ENCODE_CHAR[e >>> 2] + BASE64_ENCODE_CHAR[63 & (e << 4 | a >>> 4)] + BASE64_ENCODE_CHAR[63 & (a << 2 | t >>> 6)] + BASE64_ENCODE_CHAR[63 & t];
                        return e = o[i], n + (BASE64_ENCODE_CHAR[e >>> 2] + BASE64_ENCODE_CHAR[e << 4 & 63] + "==")
                    };
                    var exports = createMethod();
                    COMMON_JS ? module.exports = exports : (root.md5 = exports, AMD && (__WEBPACK_AMD_DEFINE_RESULT__ = function() {
                        return exports
                    }.call(exports, __webpack_require__, exports, module), void 0 === __WEBPACK_AMD_DEFINE_RESULT__ || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)))
                })()
            },
            2290: e => {
                "use strict";

                function a(e) {
                    if ("number" != typeof e || isNaN(e) || e < 1 || e === 1 / 0) throw new Error("`" + e + "` is not a valid argument for n-gram");
                    return function(a) {
                        var t, n = [];
                        if (null == a) return n;
                        if ((t = (a = a.slice ? a : String(a)).length - e + 1) < 1) return n;
                        for (; t--;) n[t] = a.slice(t, t + e);
                        return n
                    }
                }
                e.exports = a, a.bigram = a(2), a.trigram = a(3)
            },
            5666: e => {
                var a = function(e) {
                    "use strict";
                    var a, t = Object.prototype,
                        n = t.hasOwnProperty,
                        o = "function" == typeof Symbol ? Symbol : {},
                        i = o.iterator || "@@iterator",
                        r = o.asyncIterator || "@@asyncIterator",
                        s = o.toStringTag || "@@toStringTag";

                    function l(e, a, t) {
                        return Object.defineProperty(e, a, {
                            value: t,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }), e[a]
                    }
                    try {
                        l({}, "")
                    } catch (e) {
                        l = function(e, a, t) {
                            return e[a] = t
                        }
                    }

                    function c(e, a, t, n) {
                        var o = a && a.prototype instanceof p ? a : p,
                            i = Object.create(o.prototype),
                            r = new T(n || []);
                        return i._invoke = function(e, a, t) {
                            var n = u;
                            return function(o, i) {
                                if (n === h) throw new Error("Generator is already running");
                                if (n === g) {
                                    if ("throw" === o) throw i;
                                    return z()
                                }
                                for (t.method = o, t.arg = i;;) {
                                    var r = t.delegate;
                                    if (r) {
                                        var s = A(r, t);
                                        if (s) {
                                            if (s === b) continue;
                                            return s
                                        }
                                    }
                                    if ("next" === t.method) t.sent = t._sent = t.arg;
                                    else if ("throw" === t.method) {
                                        if (n === u) throw n = g, t.arg;
                                        t.dispatchException(t.arg)
                                    } else "return" === t.method && t.abrupt("return", t.arg);
                                    n = h;
                                    var l = m(e, a, t);
                                    if ("normal" === l.type) {
                                        if (n = t.done ? g : d, l.arg === b) continue;
                                        return {
                                            value: l.arg,
                                            done: t.done
                                        }
                                    }
                                    "throw" === l.type && (n = g, t.method = "throw", t.arg = l.arg)
                                }
                            }
                        }(e, t, r), i
                    }

                    function m(e, a, t) {
                        try {
                            return {
                                type: "normal",
                                arg: e.call(a, t)
                            }
                        } catch (e) {
                            return {
                                type: "throw",
                                arg: e
                            }
                        }
                    }
                    e.wrap = c;
                    var u = "suspendedStart",
                        d = "suspendedYield",
                        h = "executing",
                        g = "completed",
                        b = {};

                    function p() {}

                    function w() {}

                    function y() {}
                    var f = {};
                    f[i] = function() {
                        return this
                    };
                    var k = Object.getPrototypeOf,
                        v = k && k(k(S([])));
                    v && v !== t && n.call(v, i) && (f = v);
                    var _ = y.prototype = p.prototype = Object.create(f);

                    function N(e) {
                        ["next", "throw", "return"].forEach((function(a) {
                            l(e, a, (function(e) {
                                return this._invoke(a, e)
                            }))
                        }))
                    }

                    function E(e, a) {
                        function t(o, i, r, s) {
                            var l = m(e[o], e, i);
                            if ("throw" !== l.type) {
                                var c = l.arg,
                                    u = c.value;
                                return u && "object" == typeof u && n.call(u, "__await") ? a.resolve(u.__await).then((function(e) {
                                    t("next", e, r, s)
                                }), (function(e) {
                                    t("throw", e, r, s)
                                })) : a.resolve(u).then((function(e) {
                                    c.value = e, r(c)
                                }), (function(e) {
                                    return t("throw", e, r, s)
                                }))
                            }
                            s(l.arg)
                        }
                        var o;
                        this._invoke = function(e, n) {
                            function i() {
                                return new a((function(a, o) {
                                    t(e, n, a, o)
                                }))
                            }
                            return o = o ? o.then(i, i) : i()
                        }
                    }

                    function A(e, t) {
                        var n = e.iterator[t.method];
                        if (n === a) {
                            if (t.delegate = null, "throw" === t.method) {
                                if (e.iterator.return && (t.method = "return", t.arg = a, A(e, t), "throw" === t.method)) return b;
                                t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                            }
                            return b
                        }
                        var o = m(n, e.iterator, t.arg);
                        if ("throw" === o.type) return t.method = "throw", t.arg = o.arg, t.delegate = null, b;
                        var i = o.arg;
                        return i ? i.done ? (t[e.resultName] = i.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = a), t.delegate = null, b) : i : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, b)
                    }

                    function x(e) {
                        var a = {
                            tryLoc: e[0]
                        };
                        1 in e && (a.catchLoc = e[1]), 2 in e && (a.finallyLoc = e[2], a.afterLoc = e[3]), this.tryEntries.push(a)
                    }

                    function C(e) {
                        var a = e.completion || {};
                        a.type = "normal", delete a.arg, e.completion = a
                    }

                    function T(e) {
                        this.tryEntries = [{
                            tryLoc: "root"
                        }], e.forEach(x, this), this.reset(!0)
                    }

                    function S(e) {
                        if (e) {
                            var t = e[i];
                            if (t) return t.call(e);
                            if ("function" == typeof e.next) return e;
                            if (!isNaN(e.length)) {
                                var o = -1,
                                    r = function t() {
                                        for (; ++o < e.length;)
                                            if (n.call(e, o)) return t.value = e[o], t.done = !1, t;
                                        return t.value = a, t.done = !0, t
                                    };
                                return r.next = r
                            }
                        }
                        return {
                            next: z
                        }
                    }

                    function z() {
                        return {
                            value: a,
                            done: !0
                        }
                    }
                    return w.prototype = _.constructor = y, y.constructor = w, w.displayName = l(y, s, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                        var a = "function" == typeof e && e.constructor;
                        return !!a && (a === w || "GeneratorFunction" === (a.displayName || a.name))
                    }, e.mark = function(e) {
                        return Object.setPrototypeOf ? Object.setPrototypeOf(e, y) : (e.__proto__ = y, l(e, s, "GeneratorFunction")), e.prototype = Object.create(_), e
                    }, e.awrap = function(e) {
                        return {
                            __await: e
                        }
                    }, N(E.prototype), E.prototype[r] = function() {
                        return this
                    }, e.AsyncIterator = E, e.async = function(a, t, n, o, i) {
                        void 0 === i && (i = Promise);
                        var r = new E(c(a, t, n, o), i);
                        return e.isGeneratorFunction(t) ? r : r.next().then((function(e) {
                            return e.done ? e.value : r.next()
                        }))
                    }, N(_), l(_, s, "Generator"), _[i] = function() {
                        return this
                    }, _.toString = function() {
                        return "[object Generator]"
                    }, e.keys = function(e) {
                        var a = [];
                        for (var t in e) a.push(t);
                        return a.reverse(),
                            function t() {
                                for (; a.length;) {
                                    var n = a.pop();
                                    if (n in e) return t.value = n, t.done = !1, t
                                }
                                return t.done = !0, t
                            }
                    }, e.values = S, T.prototype = {
                        constructor: T,
                        reset: function(e) {
                            if (this.prev = 0, this.next = 0, this.sent = this._sent = a, this.done = !1, this.delegate = null, this.method = "next", this.arg = a, this.tryEntries.forEach(C), !e)
                                for (var t in this) "t" === t.charAt(0) && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = a)
                        },
                        stop: function() {
                            this.done = !0;
                            var e = this.tryEntries[0].completion;
                            if ("throw" === e.type) throw e.arg;
                            return this.rval
                        },
                        dispatchException: function(e) {
                            if (this.done) throw e;
                            var t = this;

                            function o(n, o) {
                                return s.type = "throw", s.arg = e, t.next = n, o && (t.method = "next", t.arg = a), !!o
                            }
                            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                                var r = this.tryEntries[i],
                                    s = r.completion;
                                if ("root" === r.tryLoc) return o("end");
                                if (r.tryLoc <= this.prev) {
                                    var l = n.call(r, "catchLoc"),
                                        c = n.call(r, "finallyLoc");
                                    if (l && c) {
                                        if (this.prev < r.catchLoc) return o(r.catchLoc, !0);
                                        if (this.prev < r.finallyLoc) return o(r.finallyLoc)
                                    } else if (l) {
                                        if (this.prev < r.catchLoc) return o(r.catchLoc, !0)
                                    } else {
                                        if (!c) throw new Error("try statement without catch or finally");
                                        if (this.prev < r.finallyLoc) return o(r.finallyLoc)
                                    }
                                }
                            }
                        },
                        abrupt: function(e, a) {
                            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                var o = this.tryEntries[t];
                                if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                    var i = o;
                                    break
                                }
                            }
                            i && ("break" === e || "continue" === e) && i.tryLoc <= a && a <= i.finallyLoc && (i = null);
                            var r = i ? i.completion : {};
                            return r.type = e, r.arg = a, i ? (this.method = "next", this.next = i.finallyLoc, b) : this.complete(r)
                        },
                        complete: function(e, a) {
                            if ("throw" === e.type) throw e.arg;
                            return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && a && (this.next = a), b
                        },
                        finish: function(e) {
                            for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                                var t = this.tryEntries[a];
                                if (t.finallyLoc === e) return this.complete(t.completion, t.afterLoc), C(t), b
                            }
                        },
                        catch: function(e) {
                            for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                                var t = this.tryEntries[a];
                                if (t.tryLoc === e) {
                                    var n = t.completion;
                                    if ("throw" === n.type) {
                                        var o = n.arg;
                                        C(t)
                                    }
                                    return o
                                }
                            }
                            throw new Error("illegal catch attempt")
                        },
                        delegateYield: function(e, t, n) {
                            return this.delegate = {
                                iterator: S(e),
                                resultName: t,
                                nextLoc: n
                            }, "next" === this.method && (this.arg = a), b
                        }
                    }, e
                }(e.exports);
                try {
                    regeneratorRuntime = a
                } catch (e) {
                    Function("r", "regeneratorRuntime = r")(a)
                }
            },
            4812: (e, a, t) => {
                "use strict";
                var n = t(2290).trigram,
                    o = t(9514),
                    i = t(2745),
                    r = {}.hasOwnProperty;

                function s(e) {
                    return null == e ? "" : i(o(String(e).replace(/[\u0021-\u0040]+/g, " "))).toLowerCase()
                }

                function l(e) {
                    return n(" " + s(e) + " ")
                }

                function c(e) {
                    for (var a, t = l(e), n = t.length, o = {}; n--;) a = t[n], r.call(o, a) ? o[a]++ : o[a] = 1;
                    return o
                }

                function m(e, a) {
                    return e[1] - a[1]
                }
                a.clean = s, a.trigrams = l, a.asDictionary = c, a.asTuples = function(e) {
                    var a, t = c(e),
                        n = [];
                    for (a in t) n.push([a, t[a]]);
                    return n.sort(m), n
                }, a.tuplesAsDictionary = function(e) {
                    for (var a, t = e.length, n = {}; t--;) n[(a = e[t])[0]] = a[1];
                    return n
                }
            },
            2745: (e, a) => {
                (a = e.exports = function(e) {
                    return e.replace(/^\s*|\s*$/g, "")
                }).left = function(e) {
                    return e.replace(/^\s*/, "")
                }, a.right = function(e) {
                    return e.replace(/\s*$/, "")
                }
            }
        },
        __webpack_module_cache__ = {};

    function __webpack_require__(e) {
        if (__webpack_module_cache__[e]) return __webpack_module_cache__[e].exports;
        var a = __webpack_module_cache__[e] = {
            id: e,
            loaded: !1,
            exports: {}
        };
        return __webpack_modules__[e](a, a.exports, __webpack_require__), a.loaded = !0, a.exports
    }
    __webpack_require__.amdO = {}, __webpack_require__.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), __webpack_require__.nmd = e => (e.paths = [], e.children || (e.children = []), e);
    var __webpack_exports__ = {};
    (() => {
        "use strict";
        __webpack_require__(5666);
        var e, a, t = __webpack_require__(3717),
            n = __webpack_require__(8349),
            o = __webpack_require__(8495),
            i = (a = !1, e = navigator.userAgent || navigator.vendor || window.opera, (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))) && (a = !0), a),
            r = function(e) {
                return {
                    pt: "Este sáite tem Audíma, para navegar pelo audio utilize control ponto virgula para avançar, control virgula para retroceder, control ponto para pausar ou tocar o áudio e alti igual para retornar o áudio ao início.",
                    en: "This website uses Audeema. And is more accessible through audio. Now you can hear the articles, and enjoy the audible version of the content. Enjoy!",
                    es: "Este sáite tem Audíma, e géra inclusão digital através do áudio! Agora você pode navegar nos artigos e aproveitar a versão em áudio dos conteúdos. Aproveite!"
                } [e] || "This website uses Audeema. And is more accessible through audio. Now you can hear the articles, and enjoy the audible version of the content. Enjoy!"
            },
            s = function(e) {
                "open" === e.data.asideMessage ? (document.querySelector("#audima-iframe").height = 192, document.querySelector("#audima-iframe").width = 155) : "closed" === e.data.asideMessage && window.setTimeout((function() {
                    document.querySelector("#audima-iframe").height = 62, document.querySelector("#audima-iframe").width = 50
                }), 300)
            },
            l = function(e) {
                var a, t, n, o;
                if ("www.cnnbrasil.com.br:politica:2020:03:15:apesar-de-coronavirus-atos-pro-governo-ocorrem-no-pais" !== e.object_id) {
                    var l = e.article,
                        c = e.target,
                        m = e.res,
                        d = e.audioServer,
                        h = m.properties.player_engine,
                        g = m.properties.ads_type,
                        b = m.properties.generate_statistics,
                        p = m.properties.update_post,
                        w = m.properties,
                        y = w.player_background,
                        f = w.player_color,
                        k = w.type,
                        v = m.feed,
                        _ = "" === l.title && 1 === (null === (a = m.language) || void 0 === a ? void 0 : a.length) ? m.language[0] : null !== (t = null === (n = m.language) || void 0 === n ? void 0 : n.find((function(e) {
                            return e.substr(0, 2) === l.language.substr(0, 2)
                        }))) && void 0 !== t ? t : l.language,
                        N = i ? m.properties.player_skin_mobile : m.properties.player_skin,
                        E = e.originHostname ? e.originHostname.replace("www.", "") : window.location.hostname.replace("www.", ""),
                        A = m.properties.voice_command,
                        x = m.properties.product_newsletter,
                        C = "50",
                        T = "100%",
                        S = "",
                        z = "";
                    if (c.style.maxWidth = null !== (o = m.properties.player_max_width) && void 0 !== o ? o : null, "audima.co" === document.location.hostname && "/player/natura/" === document.location.pathname && (N = "dev-natura"), "audima.co" !== document.location.hostname || "/player/coca-cola/" !== document.location.pathname && "/player/coca-cola/brasil.html" !== document.location.pathname || (N = "coca-cola"), "audima.co" !== document.location.hostname || "/player/dorsey/" !== document.location.pathname && "/player/dorsey/index.html" !== document.location.pathname && "/player/vibra-energia/" !== document.location.pathname && "/player/vibra-energia/index.html" !== document.location.pathname && !document.location.pathname.includes("/player/pao-de-acucar") || (N = "aside"), "folha-vitoria" !== N && "folha-vitoria-amp" !== N || (C = 68), "los-andes" !== N && "los-andes-amp" !== N || (C = 60), "eletrolux" !== N && "eletrolux-amp" !== N || (C = 85), "noticias-agricolas" !== N && "noticias-agricolas-amp" !== N || (T = 216), "abc-paraguay" !== N && "abc-paraguay-amp" !== N || (C = 60), "new-omelete" !== N && "new-omelete-amp" !== N || (C = 100), "new-theenemy" !== N && "new-theenemy-amp" !== N || (C = 120), "el-espectador" === N && (C = 32), "via-varejo" === N) {
                        var L = window.screen.width;
                        T = L >= 633 ? 567 : "".concat(.89 * L)
                    }
                    if ("aside" !== N && "aside-player" !== N || (C = 192, T = 155, "mockup" !== k && (C = 62, T = 50, c.setAttribute("style", "top: 20vh !important;"), c.style.right = "0", c.style.position = "fixed", c.style.zIndex = "10000000", c.style.background = "transparent !important", window.addEventListener("message", s))), "left" === m.properties.player_side && (c.style.left = "0"), "coca-cola" === N && (C = 192, T = 155, "mockup" !== k && (C = 62, T = 50, c.style.right = "0", c.style.position = "fixed", c.style.top = "35vh", c.style.zIndex = "9999", c.style.background = "transparent !important", window.addEventListener("message", s))), "grancursos" === N && (C = 116), "cnn" === N && (T = 240, C = 40), "via-varejo" === N && (C = 58), "terra" === N && (T = 135, C = 32), "terra-mobile" === N && (N = "terra", T = 96, C = 37, S = "terraMobile"), "estado-de-minas" === N && (T = 90, C = 32), "estado-de-minas-mobile" === N && (N = "estado-de-minas", T = 32, C = 32), "estado-de-minas-amp" === N && (T = 43, C = 32), "extra" === N && (T = 280, C = 55, S = "extra", "m.extra.globo.com" === document.location.hostname || "m.infoecedsvextra2.globoi.com" === document.location.hostname || "m.extrastg.globoi.com" === document.location.hostname) && (T = 60, c.style.marginTop = "-8px", c.style.marginLeft = "-8px", c.style.position = "relative", e.object_id = e.object_id.replace(/m\./, ""), E = E.replace(/m\./, ""), N = "extra", S = "extra-mobile", window.addEventListener("message", (function(e) {
                            "play" === e.data.clickPlayExtra ? document.querySelector("#audima-iframe").width = 280 : "pause" === e.data.clickPlayExtra && (document.querySelector("#audima-iframe").width = 60)
                        }))), "revistapegn.globo.com" !== document.location.hostname && "m.revistapegn.globo.com" !== document.location.hostname && "www.revistapegn.globo.com" !== document.location.hostname && "revistapegn.qa01.globoi.com" !== document.location.hostname && "m.revistapegn.qa01.globoi.com" !== document.location.hostname && "www.revistapegn.qa01.globoi.com" !== document.location.hostname || (S = "pegn"), "epocanegocios.globo.com" !== document.location.hostname && "m.epocanegocios.globo.com" !== document.location.hostname && "www.epocanegocios.globo.com" !== document.location.hostname && "epocanegocios.qa01.globoi.com" !== document.location.hostname && "m.epocanegocios.qa01.globoi.com" !== document.location.hostname && "www.epocanegocios.qa01.globoi.com" !== document.location.hostname || (S = "epoca"), "www.tribunadonorte.com.br" !== document.location.hostname && "tribunadonorte.com.br" !== document.location.hostname || (S = "tribuna-do-norte"), "amaro.com" !== document.location.hostname && "staging.amaro.com" !== document.location.hostname || (z = "margin-top: -8px; margin-left: -8px; margin-right: -8px; min-width: -webkit-fill-available; min-width: -moz-available; min-width: fill-available;"), "brasil247-nicolas.s-lab.sourcefabric.org" !== document.location.hostname || "/blog/fantastica-vitoria-politica-de-uma-guerreira-pela-auditoria-da-divida-publica-brasileira" === document.location.pathname) {
                        var j = r(_.toLowerCase().slice(0, 2)),
                            q = "skin=".concat(N, "&statistic=").concat(b, "&clientAlias=").concat(S, "&background=").concat(y, "&color=").concat(f, "&type=").concat(k),
                            D = '\n        <iframe\n        aria-label="'.concat(j, '"\n        id="audima-iframe"\n        width=').concat(T, "\n        height=").concat(C, '\n        scrolling="no"\n        frameborder="no"\n        src="').concat(d, "/iframe-later-").concat(N, "-").concat(h, ".html?").concat(q, '"\n        style="').concat(z, '"\n        >\n        </iframe>\n    ');
                        m.properties.banner_active && (D = D.concat('<div id="audima-banner" style="margin: 0 auto;  width: 320px; height: 60px;"> </div>'), u(g)), c.innerHTML = D, "m.lance.com.br" === window.location.hostname && (e.object_id = e.object_id.replace(/m/, "www"));
                        var H = {
                            text: l.excerpt,
                            title: l.title,
                            language: _ || l.language,
                            domain: E,
                            objectId: e.object_id,
                            post_url: e.href,
                            character_count: l.textAll.length.toString(),
                            content: l.textAll,
                            hash: l.hash,
                            device: i ? "mobile" : "desktop",
                            skin: N,
                            isLocal: e.isLocal,
                            is_updated: m.is_updated,
                            blog_id: m.blog_id,
                            player_engine: h,
                            update_post: p,
                            voice_command: A,
                            product_newsletter: x,
                            text_listen_message: m.properties.text_listen_message,
                            feed: v
                        };
                        if (c.querySelector("#audima-iframe:not(.checked)").addEventListener("load", (function() {
                                var e = c.querySelector("#audima-iframe:not(.checked)");
                                c.querySelector("#audima-iframe:not(.checked)").contentWindow.postMessage(JSON.stringify(H), d), e.classList.add("checked")
                            })), ("aws.homolog.inf.br" === document.location.hostname || "www.aws.homolog.inf.br" === document.location.hostname || "www.itaucultural.org.br" === document.location.hostname || "itaucultural.org.br" === document.location.hostname) && document.location.pathname.includes("/ocupacao/")) {
                            var B = !1;
                            window.addEventListener("message", (function(e) {
                                var a, t, n, o;
                                "true" === e.data.receiveDataPost && (-1 !== (null === (a = c.parentElement.dataset.url) || void 0 === a ? void 0 : a.indexOf(e.data.dataUrl)) && (c.childNodes[1].classList.add("aud-message-received"), B = !0), -1 !== (null === (t = c.parentElement.parentElement.dataset.url) || void 0 === t ? void 0 : t.indexOf(e.data.dataUrl)) && (c.childNodes[1].classList.add("aud-message-received"), B = !0), -1 !== (null === (n = c.parentElement.parentElement.parentElement.dataset.url) || void 0 === n ? void 0 : n.indexOf(e.data.dataUrl)) && (c.childNodes[1].classList.add("aud-message-received"), B = !0)), setTimeout((function() {
                                    document.querySelector("#audima-iframe:not(.aud-message-received)") && !B && (o = document.querySelector("#audima-iframe:not(.aud-message-received)"), B = !0, o.parentNode.removeChild(o), c.classList.remove("checked"))
                                }), 2e3)
                            }))
                        }
                        "ocupacao.wp.h5.homolog.inf.br" !== document.location.hostname && "www.ocupacao.wp.h5.homolog.inf.br" !== document.location.hostname || window.addEventListener("message", (function(e) {
                            var a, t, n, o = (null === (a = e.data.dataUrl) || void 0 === a ? void 0 : a.includes(c.parentElement.dataset.url)) || (null === (t = e.data.dataUrl) || void 0 === t ? void 0 : t.includes(c.parentElement.parentElement.dataset.url)) || (null === (n = e.data.dataUrl) || void 0 === n ? void 0 : n.includes(c.parentElement.parentElement.parentElement.dataset.url));
                            "true" === e.data.receiveDataPost && o && c.childNodes[1].classList.add("aud-message-received"), setTimeout((function() {
                                Array.from(c.childNodes[1].classList).some((function(e) {
                                    return "aud-message-received" === e
                                })) || c.classList.remove("checked")
                            }), 3e3)
                        }));
                        var M = !1; - 1 !== document.location.hostname.indexOf("r7.com") && window.addEventListener("message", (function(e) {
                            var a;
                            "true" === e.data.receiveDataPost && -1 !== c.parentElement.dataset.url.indexOf(e.data.dataUrl) && (c.childNodes[1].classList.add("aud-message-received"), M = !0), setTimeout((function() {
                                document.querySelector("#audima-iframe:not(.aud-message-received)") && !M && (a = document.querySelector("#audima-iframe:not(.aud-message-received)"), M = !0, a.parentNode.removeChild(a), c.classList.remove("checked"))
                            }), 2e3)
                        }))
                    }
                }
            },
            c = function(e) {
                if ("https://euunica.com.br/apimentar-a-relacao-guia-completo/" !== e.href) {
                    var a = e.article,
                        t = e.target,
                        n = e.res,
                        o = e.audioServer,
                        l = i ? n.properties.player_skin_mobile : n.properties.player_skin,
                        c = n.properties.player_engine,
                        m = (n.ads_audio_url, n.ads_audio_confirmation, n.properties.ads_type),
                        d = !0 === n.properties.generate_statistics,
                        h = "50",
                        g = "100%";
                    "aside" === l && (h = 62, g = 50, t.setAttribute("style", "top: 20vh !important;"), t.style.position = "fixed", t.style.right = "0", t.style.zIndex = "10000000", t.style.background = "transparent !important", window.addEventListener("message", s));
                    var b = r(a.language.toLowerCase().slice(0, 2)),
                        p = '\n        <iframe\n        aria-label="'.concat(b, '"\n        id="audima-iframe"\n        width=').concat(g, "\n        height=").concat(h, '\n        scrolling="no" \n        frameborder="no" \n        src="').concat(o, "/iframe-").concat(l, "-").concat(c, ".html?skin=").concat(l, "&statistic=").concat(d, '">\n        </iframe>\n    ');
                    n.properties.banner_active && (p = p.concat('<div id="audima-banner" style="margin: 0 auto;  width: 320px; height: 60px;"></div>'), u(m)), t.innerHTML = p;
                    var w = {
                        text: a.excerpt,
                        title: a.title,
                        language: a.language,
                        domain: window.location.hostname.replace("www.", ""),
                        objectId: e.object_id,
                        post_url: e.href,
                        character_count: a.textAll.length.toString(),
                        content: a.textAll,
                        hash: a.hash,
                        device: i ? "mobile" : "desktop",
                        skin: l,
                        isLocal: e.isLocal,
                        is_updated: n.is_updated,
                        blog_id: n.blog_id,
                        player_engine: c
                    };
                    t.querySelector("#audima-iframe:not(.checked)").addEventListener("load", (function() {
                        var e = t.querySelector("#audima-iframe:not(.checked)");
                        t.querySelector("#audima-iframe:not(.checked)").contentWindow.postMessage(JSON.stringify(w), o), e.classList.add("checked")
                    }))
                }
            };

        function m(e, a, i, r, s, l) {
            var c = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
                m = {
                    spec: i,
                    host: e,
                    prePath: a + "//" + s,
                    scheme: a.substr(0, a.indexOf(":")),
                    pathBase: a + "//" + s + r.substr(0, r.lastIndexOf("/") + 1)
                },
                u = document.cloneNode(!0);
            if (c) {
                var d = l.parentNode;
                "intranet.espro.org.br" !== e && "intranet.hom.espro.org.br" !== e || (d = l.parentNode.parentNode), "www.elliberal.com.ar" !== e && "elliberal.com.ar" !== e && "www.goiania.go.gov.br" !== e && "goiania.go.gov.br" !== e || (d = l.parentNode.parentNode.parentNode.parentNode), "omelete.com.br" !== e && "staging.omelete.com.br" !== e && "www.omelete.com.br" !== e && "www.staging.omelete.com.br" !== e || (d = l.parentNode.parentNode.parentNode.parentNode.parentNode), "theenemy.com.br" !== e && "staging.theenemy.com.br" !== e && "www.theenemy.com.br" !== e && "www.staging.theenemy.com.br" !== e || (d = l.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode), "aws.homolog.inf.br" !== e && "www.aws.homolog.inf.br" !== e && "ocupacao.wp.h5.homolog.inf.br" !== e && "www.ocupacao.wp.h5.homolog.inf.br" !== e && "www.itaucultural.org.br" !== e && "itaucultural.org.br" !== e || (d = l.parentNode.parentNode.parentNode);
                var h = document.createElement("div");
                h.appendChild(d.cloneNode(!0));
                var g = h.innerHTML;
                u.getElementsByTagName("body")[0].innerHTML = g
            } - 1 !== e.indexOf("r7.com") && (u.getElementsByTagName("H3")[0] || (u = document.cloneNode(!0)));
            var b = new t(m, u, {
                classesToPreserve: ["caption", "hidden-title", "hidden-url"]
            }).parse();
            b || (b = {
                textContent: "",
                title: ""
            });
            var p = b.textContent.split(/^\s*$(?:\r\n?|\n)/gm).filter((function(e) {
                    return 0 != e
                })),
                w = p = "mybest-brazil.com.br" === document.location.hostname || "www.mybest-brazil.com.br" === document.location.hostname ? p.map((function(e) {
                    return e.replace(/\s{2,}/gm, "")
                })) : p.map((function(e) {
                    return e.replace(/\s{2,}/gm, ". ")
                })),
                y = b.textContent,
                f = "mybest-brazil.com.br" === document.location.hostname || "br-recepedia-com.netlify.app" === document.location.hostname || "mx-recepedia-com.netlify.app" === document.location.hostname || "br.recepedia.com" === document.location.hostname || "mx.recepedia.com" === document.location.hostname || "preview-3340--br-recepedia-com.netlify.app" === document.location.hostname || "preview-3340--mx-recepedia-com.netlify.app" === document.location.hostname || "dev--br-recepedia-com.netlify.app" === document.location.hostname || "dev--mx-recepedia-com.netlify.app" === document.location.hostname || "www.mybest-brazil.com.br" === document.location.hostname;
            y = f ? y.replace(/([a-zA-Zá-úÀ-Ú0-9]|\%)([\.!?:;])([a-zA-Zà-úÀ-Ú])/gm, "$1$2 $3").replace(/[\.;]\.\s/gm, ". ").replace(/(\w)\s>>>(\w)/gm, "$1. $2").replace(/[!\.]\s?\./gm, "!") : y.replace(/([^\.!?,:;])(\s+\n+\s?[\s\w\n])/gm, "$1.$2").replace(/^\s?\.\s/gm, "").replace(/(\s{2,})/gm, " ").replace(/\.\s\./gm, ".").replace(/:\s/gm, ". ").replace(/\. \./gm, ". ").replace(/!\s\.\s?\s?\.?/gm, ". ").replace(/[;!:?,]\.\s?/gm, ". ").replace(/\s{2,}/gm, " ").replace(/\,\s\./, ",").replace(/([^\.])\.\.\s/gm, "$1. ");
            var k = ["hmg-sustentabilidade.hotsitespetrobras.com.br", "www.hmg-sustentabilidade.hotsitespetrobras.com.br", "sustentabilidade.petrobras.com.br", "www.sustentabilidade.petrobras.com.br"],
                v = n(y.substring(0, 1e3)),
                _ = b,
                N = _.title,
                E = k.includes(e) ? o(N + y) : o(y.trim()),
                A = "";
            switch (v) {
                case "por":
                    A = "pt-BR";
                    break;
                case "eng":
                    A = "en-US";
                    break;
                case "spa":
                    A = "es-ES";
                    break;
                case "fra":
                    A = "fr-FR";
                    break;
                case "ita":
                    A = "it-IT";
                    break;
                case "pol":
                    A = "pl-PL";
                    break;
                case "ces":
                    A = "cs-CZ";
                    break;
                case "deu":
                    A = "de-DE";
                    break;
                case "hin":
                    A = "hi-IN";
                    break;
                case "ind":
                    A = "id-ID";
                    break;
                case "jpn":
                    A = "ja-JP";
                    break;
                case "kor":
                    A = "ko-KR";
                    break;
                case "nld":
                    A = "nl-NL";
                    break;
                case "rus":
                    A = "ru-RU";
                    break;
                case "cmn":
                    A = "zh-CN";
                    break;
                case "src":
                case "sco":
                    A = "en-US";
                    break;
                default:
                    A = document.documentElement.lang
            }
            var x = ["funbio.wp.h5.homolog.inf.br", "www.funbio.org.br", "funbio.org.br", "preprodbondinho.eleventickets.com", "www.preprodbondinho.eleventickets.com", "bondinho.com.br", "www.bondinho.com.br", "www.mattosfilho.com.br", "mattosfilho.com.br", "hm.mattosfilho.com.br"];
            return "pt-br" !== document.documentElement.lang.toLowerCase() || x.includes(e) || (A = "pt-BR"), "https://mosaicbr.levisssd.com/Oportunidade" === document.location.href && (A = "pt-BR"), {
                excerpt: w,
                hash: E,
                language: A,
                title: N,
                textAll: y
            }
        }

        function u(e) {
            "publy" === e ? setTimeout((function() {
                var e = document.querySelector("#audima-banner:not(.checked)");
                e.classList.add("checked");
                var a = document.createElement("iframe");
                a.border = 0, a.frameBorder = 0, a.width = 320, a.height = 50, e.appendChild(a);
                var t = function() {
                    try {
                        return new XMLHttpRequest
                    } catch (e) {}
                    try {
                        return new ActiveXObject("Msxml2.XMLHTTP")
                    } catch (e) {}
                    try {
                        return new ActiveXObject("Microsoft.XMLHTTP")
                    } catch (e) {}
                    throw new Error("Could not create HTTP request object.")
                }();
                t.open("GET", "https://audima.co/dfp_frame_new.txt", !0), t.send(null), t.onreadystatechange = function() {
                    4 == t.readyState && (a.contentWindow.document.open("text/html"), a.contentWindow.document.write(t.responseText), a.contentWindow.document.close())
                }
            }), 500) : setTimeout((function() {
                var e = document.querySelector("#audima-banner:not(.checked)");
                e.classList.add("checked");
                var a = document.createElement("iframe");
                a.border = 0, a.frameBorder = 0, a.width = 320, a.height = 50, e.appendChild(a);
                var t = function() {
                    try {
                        return new XMLHttpRequest
                    } catch (e) {}
                    try {
                        return new ActiveXObject("Msxml2.XMLHTTP")
                    } catch (e) {}
                    try {
                        return new ActiveXObject("Microsoft.XMLHTTP")
                    } catch (e) {}
                    throw new Error("Could not create HTTP request object.")
                }();
                t.open("GET", "https://audima.co/dfp_frame_new_google.txt", !0), t.send(null), t.onreadystatechange = function() {
                    4 == t.readyState && (a.contentWindow.document.open("text/html"), a.contentWindow.document.write(t.responseText), a.contentWindow.document.close())
                }
            }), 500)
        }
        var d = __webpack_require__(1490);

        function h(e) {
            var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                t = document.location,
                n = t.hostname,
                o = t.pathname,
                i = t.protocol,
                r = t.href,
                s = t.host;
            if (t.origin, "localhost" !== n && "127.0.0.1" !== n) {
                var u = m(n, i, r, o, s, e, a),
                    h = o,
                    g = n + h.replace(/\//g, ":");
                if (document.getElementById("audimaScriptEn") && (g += "en-us"), document.getElementById("audimaScriptPt") && (g += "pt-br"), n === d.pediatra_online || n === d.noticias_r7 || n === d.esportes_r7 || n === d.podcasts_r7 || n === d.estudio_r7 || n === d.diversao_r7 || n === d.recordtv_r7 || n === d.lifestyle_r7 || n === d.videos_r7 || n === d.r7 || n === d.ava_uninove || n === d.aapa_uninove || n === d.aluno_uninove) {
                    if (!e.parentElement.dataset.url) return;
                    g = e.parentElement.dataset.url.replace(/^(http|https):\/\//g, "").replace(/\//g, ":")
                } else window.is_infinite ? e.parentElement.dataset.url && (g = n + (h = e.parentElement.dataset.url.replace(/^(http|https):\/\//g, "").replace(n, "")).replace(/\//g, ":")) : window.is_infinite = !0;
                var b, p, w = "https://audio.audima.co";
                switch (n) {
                    case "correiodopovo.com.br":
                    case "ativo.com":
                    case "ativosaude.com":
                    case "www.r7.com":
                    case "noticias.r7.com":
                    case "esportes.r7.com":
                    case "podcasts.r7.com":
                    case "estudio.r7.com":
                    case "diversao.r7.com":
                    case "recordtv.r7.com":
                    case "lifestyle.r7.com":
                    case "videos.r7.com":
                    case "olhardigital.com.br":
                    case "catracalivre.com.br":
                    case "istoe.com.br":
                    case "www.lance.com.br":
                    case "lance.com.br":
                    case "m.lance.com.br":
                    case "sundaycooks.com":
                    case "angelo.ecolabore.net":
                    case "soropositivo.org":
                    case "revistaforum.com.br":
                    case "br.ign.com":
                    case "www.altoastral.com.br":
                    case "altoastral-stg.us-east-1.elasticbeanstalk.com":
                    case "joaobidu.com.br":
                    case "guiadacozinha.com.br":
                    case "conjur.com.br":
                    case "www.conjur.com.br":
                        p = "local" === (b = {
                            plan: "pro",
                            properties: {
                                player_engine: "audima",
                                player_skin: "thin",
                                player_skin_mobile: "thin",
                                generate_statistics: !0,
                                banner_active: !0,
                                ads_type: "publy"
                            }
                        }).properties.player_engine, l({
                            target: e,
                            article: u,
                            res: b,
                            href: r,
                            isLocal: p,
                            object_id: g,
                            audioServer: w
                        });
                        break;
                    case "www.astrocentro.com.br":
                    case "noticias.portaldaindustria.com.br":
                    case "www.qconcursos.com":
                    case "drauziovarella.uol.com.br":
                    case "blog.cestanobre.com.br":
                    case "portal.coc.com.br":
                    case "entretantoeducacao.com.br":
                    case "natura.com.br":
                    case "www.natura.com.br":
                    case "pediatraonline.com.br":
                    case "www.pediatraonline.com.br":
                    case "portal.fgv.br":
                    case "www.engie.com.br":
                    case "www.fenae.org.br":
                    case "fenae.org.br":
                    case "www.lumis.com.br":
                    case "lumis.com.br":
                    case "fenae-qa.lumis.com.br":
                    case "www.fenae-qa.lumis.com.br":
                    case "www2.fenae.org.br":
                    case "www.infoescola.com":
                    case "oglobo.globo.com":
                    case "forbes.com.br":
                    case "www.forbes.com.br":
                    case "deusesemonstros.com":
                    case "digitalks.com.br":
                    case "diariodeconteudojuridico-porelanesouza.com":
                    case "www.osmelhoresinvestimentos.com.br":
                    case "absurtos.com":
                    case "rooseveltvilela.com.br":
                    case "cnpa.com":
                    case "iqaraislam.com":
                    case "apexbrasil.com.br":
                    case "thehedonistmagazine.com":
                    case "pediatraonline.ef5.com.br":
                    case "portal-coc.k12.mouts.info":
                    case "coc.pearsonbr.info":
                    case "portalcoc.pearsonbr.com":
                    case "portal-dombosco.k12.mouts.info":
                    case "www.drrisadinha.org.br":
                    case "brasil.estadao.com.br":
                    case "salonline.com.br":
                    case "transformese.com.br":
                    case "temploestreladooriente.com":
                    case "fiesc.com.br":
                    case "sintepe.org.br":
                    case "blog.dako.com.br":
                    case "thomasadvocacia.com.br":
                    case "pcdemfocoblog.com":
                    case "falaroca.com":
                    case "www.falaroca.com":
                    case "grupoedsonqueirozhom.geq.com.br":
                    case "grupoedsonqueiroz.com.br":
                    case "atlas.ind.br":
                    case "digital.icatuseguros.com.br":
                    case "blog.ukor.com.br":
                    case "nexojornal.com.br":
                    case "sputnik.works":
                    case "blog.sputnik.works":
                    case "www.relvaverde.online":
                    case "www.metropoles.com":
                    case "www.cbf.com.br":
                    case "uninove.br":
                        p = "local" === (b = {
                            plan: "pro",
                            properties: {
                                player_engine: "audima",
                                player_skin: "thin",
                                player_skin_mobile: "thin",
                                generate_statistics: !0,
                                banner_active: !1
                            }
                        }).properties.player_engine, l({
                            target: e,
                            article: u,
                            res: b,
                            href: r,
                            isLocal: p,
                            object_id: g,
                            audioServer: w
                        });
                        break;
                    case "oncoguia.org.br":
                    case "www.oncoguia.org.br":
                        p = "local" === (b = {
                            plan: "pro",
                            properties: {
                                player_engine: "audima",
                                player_skin: "thin",
                                player_skin_mobile: "thin",
                                generate_statistics: !0,
                                banner_active: !1,
                                update_post: !0
                            }
                        }).properties.player_engine, l({
                            target: e,
                            article: u,
                            res: b,
                            href: r,
                            isLocal: p,
                            object_id: g,
                            audioServer: w
                        });
                        break;
                    case "diarioonline.com.br":
                    case "m.diarioonline.com.br":
                    case "portaltemponovo.com.br":
                    case "bemparana.com.br":
                    case "osaogoncalo.com.br":
                    case "bonde.com.br":
                    case "m.bonde.com.br":
                    case "d.emtempo.com.br":
                    case "emtempo.com.br":
                    case "tribunadonorte.com.br":
                    case "gazetaesportiva.com":
                    case "alagoas24horas.com.br":
                    case "otvfoco.com.br":
                    case "campograndenews.com.br":
                    case "contilnetnoticias.com.br":
                    case "carros.ig.com.br":
                    case "leouve.com.br":
                    case "deles.ig.com.br":
                    case "delas.ig.com.br":
                    case "meionorte.com":
                    case "gente.ig.com.br":
                    case "correio24horas.com.br":
                    case "revistaplaneta.com.br":
                    case "jornaldebrasilia.com.br":
                    case "tecnologia.ig.com.br":
                    case "cidadeverde.com":
                    case "jb.com.br":
                    case "netflu.com.br":
                    case "jornalcruzeiro.com.br":
                    case "economia.ig.com.br":
                    case "esporte.ig.com.br":
                    case "igay.ig.com.br":
                    case "receitas.ig.com.br":
                    case "turismo.ig.com.br":
                    case "ultimosegundo.ig.com.br":
                    case "acidadeon.com":
                    case "www.acidadeon.com":
                    case "acritica.com":
                    case "ibahia.com":
                    case "schoje.com.br":
                    case "diretoaopontonews.com.br":
                    case "enfermagemcomamor.com.br":
                    case "tucnews.com.br":
                    case "noticiasconcursos.com.br":
                    case "pastoreginaldosilva.blogspot.com":
                    case "lemann.servershot.com.br":
                    case "portaldoaz.net":
                    case "agenciatocantins.com.br":
                    case "urandionline.com.br":
                    case "mstododia.com.br":
                    case "portal.ricsc.com.br":
                        p = "local" === (b = {
                            plan: "pro",
                            properties: {
                                player_engine: "local",
                                player_skin: "thin",
                                player_skin_mobile: "thin",
                                generate_statistics: !0,
                                banner_active: !0,
                                ads_type: "publy"
                            }
                        }).properties.player_engine, c({
                            target: e,
                            article: u,
                            res: b,
                            href: r,
                            isLocal: p,
                            object_id: g,
                            audioServer: w
                        });
                        break;
                    case "brasilescola.uol.com.br":
                    case "tvjornal.ne10.uol.com.br":
                    case "alunosonline.uol.com.br":
                    case "blog.mobly.com.br":
                    case "educador.brasilescola.uol.com.br":
                    case "guerras.brasilescola.uol.com.br":
                    case "mundoeducacao.bol.uol.com.br":
                    case "vestibular.brasilescola.uol.com.br":
                    case "vestibular.mundoeducacao.bol.uol.com.br":
                    case "manualdaquimica.com":
                    case "www.manualdaquimica.com":
                    case "netlusa.com.br":
                    case "colegiohelioalonso.com.br":
                    case "yachtclubedabahia.com.br":
                    case "apaebrasil.org.br":
                    case "camarasorocaba.sp.gov.br":
                    case "oitodedezembro.com.br":
                    case "humanpro.com.br":
                    case "opolo.com.br":
                    case "facsete.edu.br":
                    case "guerreirosdaamazonia.com.br":
                    case "hcnoticias.com.br":
                    case "tce.ap.gov.br":
                    case "uemasul.edu.br":
                    case "grupojasf.com.br":
                    case "portugues.uol.com.br":
                    case "fia.com.br":
                    case "castrodigital.com.br":
                    case "ocurioso.guru":
                    case "teldoctor.com.br":
                    case "amagis.com.br":
                    case "extensao.facha.edu.br":
                    case "revendaroupafeminina.com.br":
                    case "domingoscosta.com.br":
                    case "ak9.com.br":
                    case "emagrecendosemmisterios.com.br":
                    case "portalconstrucao.com.br":
                    case "usf.edu.br":
                    case "faceli.edu.br":
                    case "hospitalvisaosc.com.br":
                    case "blog.visitesaopaulo.com":
                    case "ead.uems.br":
                    case "blog.genialinvestimentos.com.br":
                    case "itamarandiba.mg.gov.br":
                    case "representacaodigital.com.br":
                    case "otimogestor.com.br":
                    case "barradao.com":
                    case "nsctotal.com.br":
                    case "riopreto.sp.gov.br":
                    case "escoladematematicapontal.com.br":
                    case "catho.com.br":
                    case "prefeiturademossoro.com.br":
                    case "teatroxpinvestimentos.com.br":
                    case "folhadelondrina.com.br":
                    case "recode.org.br":
                    case "fuv.edu.br":
                    case "escolakids.uol.com.br":
                    case "mprj.mp.br":
                    case "cbginastica.com.br":
                    case "manole.com.br":
                    case "blog.vindi.com.br":
                    case "minhavida.com.br":
                    case "institutorodrigomendes.org.br":
                    case "exercicios.mundoeducacao.bol.uol.com.br":
                    case "fucap.edu.br":
                    case "cbnribeirao.com.br":
                    case "brasil.cambly.com":
                    case "bcpovo.com.br":
                    case "crcms.org.br":
                    case "lms.infnet.edu.br":
                    case "intranet.valepub.net":
                    case "cmnovalondrina.pr.gov.br":
                    case "experience.hsm.com.br":
                    case "arte.estadao.com.br":
                    case "pcdemfoco.com.br":
                    case "hugogloss.uol.com.br":
                    case "digital.futurecom.com.br":
                    case "cebds.org":
                    case "cieds.org.br":
                    case "inca.gov.br":
                    case "intranet.rio.rj.gov.br":
                    case "midianinja.org":
                    case "apaebh.org.br":
                    case "apaecampinagrande.org.br":
                    case "academia.org.br":
                    case "www.academia.org.br":
                    case "agrolink.com.br":
                    case "portal.fiero.org.br":
                    case "gfarias.com":
                    case "refreshbrazil.com":
                    case "www.tribunadonorte.com.br":
                    case "tribunadonorte.com.br":
                    case "biologianet.com":
                    case "www.biologianet.com":
                    case "m.brasilescola.uol.com.br":
                    case "m.mundoeducacao.bol.uol.com.br":
                    case "m.vestibular.mundoeducacao.bol.uol.com.br":
                    case "m.vestibular.brasilescola.uol.com.br":
                    case "m.biologianet.com":
                    case "m.manualdaquimica.com":
                    case "m.educador.brasilescola.uol.com.br":
                    case "m.guerras.brasilescola.uol.com.br":
                    case "www.historiadomundo.com.br":
                    case "historiadomundo.com.br":
                    case "m.historiadomundo.com.br":
                    case "jcnet.com.br":
                    case "m.jcnet.com.br":
                    case "www.jcnet.com.br":
                        p = "local" === (b = {
                            plan: "pro",
                            properties: {
                                player_engine: "local",
                                player_skin: "thin",
                                player_skin_mobile: "thin",
                                generate_statistics: !0,
                                banner_active: !1
                            }
                        }).properties.player_engine, c({
                            target: e,
                            article: u,
                            res: b,
                            href: r,
                            isLocal: p,
                            object_id: g,
                            audioServer: w
                        });
                        break;
                    case "www.nutrition-institute.org":
                    case "nutrition-institute.org":
                    case "www.nestlenutrition-institute.org":
                    case "nestlenutrition-institute.org":
                    case "www.coopererving.com":
                    case "arquivonacional.gov.br":
                    case "www.arquivonacional.gov.br":
                    case "ava.uninove.br":
                    case "aluno.uninove.br":
                    case "aapa.uninove.br":
                        p = "local" === (b = {
                            plan: "pro",
                            properties: {
                                player_engine: "audima",
                                player_skin: "aside",
                                player_skin_mobile: "aside",
                                generate_statistics: !0,
                                banner_active: !1
                            }
                        }).properties.player_engine, l({
                            target: e,
                            article: u,
                            res: b,
                            href: r,
                            isLocal: p,
                            object_id: g,
                            audioServer: w
                        });
                        break;
                    case "abrhrj.org.br":
                    case "agencialettera.com.br":
                    case "alumni.facha.edu.br":
                    case "aluno.facha.edu.br":
                    case "bienal.org.br":
                    case "colaboramerica.org":
                    case "pos.facha.edu.br":
                    case "doutoresdaalegria.org.br":
                    case "ricmais.com.br":
                    case "rioinfo.com.br":
                    case "acessoparatodos.com.br":
                    case "feirapanamazonica.com.br":
                        p = "local" === (b = {
                            plan: "pro",
                            properties: {
                                player_engine: "local",
                                player_skin: "aside",
                                player_skin_mobile: "aside",
                                generate_statistics: !0,
                                banner_active: !1
                            }
                        }).properties.player_engine, c({
                            target: e,
                            article: u,
                            res: b,
                            href: r,
                            isLocal: p,
                            object_id: g,
                            audioServer: w
                        });
                        break;
                    case "www.rio2c.com":
                    case "rio2c.com":
                        p = "local" === (b = {
                            plan: "pro",
                            properties: {
                                player_engine: "audima",
                                player_skin: "aside",
                                player_skin_mobile: "aside",
                                generate_statistics: !1,
                                banner_active: !1
                            }
                        }).properties.player_engine, l({
                            target: e,
                            article: u,
                            res: b,
                            href: r,
                            isLocal: p,
                            object_id: g,
                            audioServer: w
                        });
                        break;
                    case "blog.grancursosonline.com.br":
                    case "www.blog.grancursosonline.com.br":
                    case "blog-dev.grancursosonline.com.br":
                    case "www.blog-dev.grancursosonline.com.br":
                        p = "local" === (b = {
                            plan: "pro",
                            properties: {
                                player_engine: "audima",
                                player_skin: "grancursos",
                                player_skin_mobile: "grancursos",
                                generate_statistics: !0,
                                banner_active: !1
                            }
                        }).properties.player_engine, l({
                            target: e,
                            article: u,
                            res: b,
                            href: r,
                            isLocal: p,
                            object_id: g,
                            audioServer: w
                        });
                        break;
                    case "ricardo-dantas.000webhostapp.com":
                        p = "local" === (b = {
                            plan: "pro",
                            properties: {
                                player_engine: "audima",
                                player_skin: "thin",
                                player_skin_mobile: "thin",
                                generate_statistics: !1,
                                banner_active: !1,
                                voice_command: !0
                            }
                        }).properties.player_engine, l({
                            target: e,
                            article: u,
                            res: b,
                            href: r,
                            isLocal: p,
                            object_id: g,
                            audioServer: w
                        });
                        break;
                    case "ricardodantasdev.blogspot.com":
                        p = "local" === (b = {
                            plan: "pro",
                            properties: {
                                player_engine: "audima",
                                player_skin: "slim",
                                player_skin_mobile: "slim",
                                generate_statistics: !1,
                                banner_active: !0,
                                update_post: !0,
                                voice_command: !1
                            }
                        }).properties.player_engine, l({
                            target: e,
                            article: u,
                            res: b,
                            href: r,
                            isLocal: p,
                            object_id: g,
                            audioServer: w
                        });
                        break;
                    case "audima.co":
                        p = "local" === (b = {
                            plan: "pro",
                            properties: {
                                player_engine: "audima",
                                player_skin: "thin",
                                player_skin_mobile: "thin",
                                generate_statistics: !1,
                                banner_active: !1,
                                voice_command: !1
                            }
                        }).properties.player_engine, l({
                            target: e,
                            article: u,
                            res: b,
                            href: r,
                            isLocal: p,
                            object_id: g,
                            audioServer: w
                        });
                        break;
                    case "www.brastemp.com.br":
                    case "brastemp.com.br":
                    case "atendimento.consul.com.br":
                    case "www.atendimento.consul.com.br":
                        p = "local" === (b = {
                            plan: "pro",
                            properties: {
                                player_engine: "audima",
                                player_skin: "thin",
                                player_skin_mobile: "thin",
                                generate_statistics: !0,
                                banner_active: !1
                            }
                        }).properties.player_engine, l({
                            target: e,
                            article: u,
                            res: b,
                            href: r,
                            isLocal: p,
                            object_id: g,
                            audioServer: w
                        });
                        break;
                    case "aws.homolog.inf.br":
                    case "www.aws.homolog.inf.br":
                        p = "local" === (b = {
                            plan: "pro",
                            properties: {
                                player_engine: "audima",
                                player_skin: "itau-cultural",
                                player_skin_mobile: "itau-cultural",
                                generate_statistics: !0,
                                banner_active: !1
                            }
                        }).properties.player_engine, l({
                            target: e,
                            article: u,
                            res: b,
                            href: r,
                            isLocal: p,
                            object_id: g,
                            audioServer: w
                        });
                        break;
                    default:
                        p = "local" === (b = {
                            plan: "free",
                            properties: {
                                player_engine: "local",
                                player_skin: "thin",
                                player_skin_mobile: "thin",
                                generate_statistics: !1,
                                banner_active: !0,
                                ads_type: "google"
                            }
                        }).properties.player_engine, c({
                            target: e,
                            article: u,
                            res: b,
                            href: r,
                            isLocal: p,
                            object_id: g,
                            audioServer: w
                        })
                }
            }
        }
        console.log("%cAUDIMA #audioinclui", "color:#000; background: #56b7b5; font-weight: bold;");
        var g = "#audimaWidget:not(.checked)",
            b = document.location,
            p = b.hostname,
            w = b.href,
            y = b.pathname,
            f = !0;
        setTimeout((function() {
            if ("extra.globo.com" !== p && "www.extra.globo.com" !== p && "m.extra.globo.com" !== p)
                if ("www.pediatraonline.com.br" !== p && "pediatraonline.ef5.com.br" !== p || (g = "#AudimaWidget:not(.checked)"), "www.otempo.com.br" !== p) {
                    if ("portalcoc.pearsonbr.com" === p) return setTimeout((function() {
                        var e = document.querySelector("#audimaWidget");
                        h(e), e.classList.add("checked")
                    }), 650), void setInterval((function() {
                        if ("" !== sessionStorage.getItem("location_href") && sessionStorage.getItem("location_href") !== w) {
                            var e = document.querySelector("#audimaWidget");
                            h(e), e.classList.add("checked"), window.speechSynthesis.cancel()
                        }
                        sessionStorage.setItem("location_href", w)
                    }), 2500);
                    "www.jornalcontabil.com.br" !== p && "jornalcontabil.com.br" !== p ? "noticiasconcursos.com.br" === p || "glamurama.uol.com.br" === p || "hugogloss.uol.com.br" === p || "www.obuxixogospel.com.br" === p || "https://noticias.r7.com/economia/cdb-escalonado-com-liquidez-diaria-rende-ate-133-do-cdi-22072021" === w || y.includes("/hoje-em-dia/receitas-do-guga") || y.includes("/topchef-brasil-3") || "recordtv.r7.com" === p && y.includes("/canta-comigo-teen-2") || "lifestyle.r7.com" === p && y.includes("/cuidando-da-imunidade") || N(document.body.querySelectorAll(g)) : window.onload = function() {
                        N(document.body.querySelectorAll(g))
                    }
                } else {
                    var e = document.querySelector("#audimaWidget:not(.checked)");
                    e && (h(e, !0), e.classList.add("checked")), setInterval((function() {
                        "" !== sessionStorage.getItem("location_href") && sessionStorage.getItem("location_href") !== w && (e = document.querySelector("#audimaWidget:not(.checked)")) && (h(e, !0), e.classList.add("checked")), sessionStorage.setItem("location_href", w)
                    }), 1e3)
                }
            else setInterval((function() {
                var e = document.querySelector("#audimaWidget:not(.checked)"),
                    a = document.querySelector("#AudimaWidget:not(.checked)");
                e && (h(e), e.classList.add("checked")), a && (h(a), a.classList.add("checked"))
            }), 1e3)
        }), 1e3);
        var k = !1;
        window.onscroll = function() {
            k = !0
        };
        var v = !1,
            _ = !1;

        function N(e) {
            Array.from(e).map((function(e) {
                h(e, _), e.classList.add("checked")
            }))
        } - 1 !== p.indexOf("r7.com") && (v = !0, _ = !0), "intranet.espro.org.br" !== p && "intranet.hom.espro.org.br" !== p || (_ = !0), "preprodbondinho.eleventickets.com" !== p && "www.preprodbondinho.eleventickets.com" !== p && "theenemy.com.br" !== p && "staging.theenemy.com.br" !== p && "www.theenemy.com.br" !== p && "www.staging.theenemy.com.br" !== p && "omelete.com.br" !== p && "staging.omelete.com.br" !== p && "www.omelete.com.br" !== p && "www.staging.omelete.com.br" !== p && "www.elliberal.com.ar" !== p && "elliberal.com.ar" !== p && "www.goiania.go.gov.br" !== p && "goiania.go.gov.br" !== p || (_ = !0), "ocupacao.wp.h5.homolog.inf.br" !== p && "www.ocupacao.wp.h5.homolog.inf.br" !== p || (_ = !0), "aws.homolog.inf.br" !== p && "www.aws.homolog.inf.br" !== p && "www.itaucultural.org.br" !== p && "itaucultural.org.br" !== p || !y.includes("/ocupacao/") || (_ = !0), ["hmg-sustentabilidade.hotsitespetrobras.com.br", "www.hmg-sustentabilidade.hotsitespetrobras.com.br", "sustentabilidade.petrobras.com.br", "www.sustentabilidade.petrobras.com.br"].includes(p) && (f = !1), setInterval((function() {
            if (k || v || f) {
                if ("noticiasconcursos.com.br" === p || "glamurama.uol.com.br" === p || "hugogloss.uol.com.br" === p || "www.obuxixogospel.com.br" === p || "www.otempo.com.br" === p || "https://noticias.r7.com/economia/cdb-escalonado-com-liquidez-diaria-rende-ate-133-do-cdi-22072021" === w || y.includes("/hoje-em-dia/receitas-do-guga") || y.includes("/topchef-brasil-3") || "recordtv.r7.com" === p && y.includes("/canta-comigo-teen-2") || "lifestyle.r7.com" === p && y.includes("/cuidando-da-imunidade")) return;
                k = !1, N(document.body.querySelectorAll(g))
            }
        }), 650)
    })()
})();
