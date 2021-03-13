'use strict';
var uber_supports = function() {
    var d = document.createElement("div"),
        e = ["Khtml", "Ms", "O", "Moz", "Webkit"];
    return function(h) {
        var k = e.length;
        if (h in d.style) return !0;
        for (h = h.replace(/^[a-z]/, function(d) {
                return d.toUpperCase()
            }); k--;)
            if (e[k] + h in d.style) return !0;
        return !1
    }
}();

function uber_op(d, e, h) {
    if (!ubermenu_data.hasOwnProperty(d)) return h;
    d = ubermenu_data[d];
    if (e.hasOwnProperty("datatype")) switch (e.datatype) {
        case "numeric":
            d = parseInt(d);
            break;
        case "boolean":
            d = "on" == d || 1 == d || "1" == d ? !0 : !1
    }
    return d
}(function(d, e) {
    var h = function(d, e, h) {
        var k;
        return function() {
            var l = this,
                n = arguments;
            k ? clearTimeout(k) : h && d.apply(l, n);
            k = setTimeout(function() {
                h || d.apply(l, n);
                k = null
            }, e || 100)
        }
    };
    jQuery.fn[e] = function(d) {
        return d ? this.bind("resize", h(d)) : this.trigger(e)
    }
})(jQuery, "ubersmartresize");
(function(d, e, h, k) {
    function l(a, c) {
        var b = this;
        this.element = a;
        this.$ubermenu = d(this.element);
        this.orientation = this.$ubermenu.hasClass("ubermenu-vertical") ? "v" : "h";
        this.settings = d.extend({}, r, c);
        this._defaults = r;
        this._name = "ubermenu";
        this.settings.responsive = this.$ubermenu.hasClass("ubermenu-responsive") ? !0 : !1;
        this.settings.debug && this.settings.debug_onscreen && (d("body").append('<div id="uber-onscreen-debug" style="color:#eee;z-index:10000;background:#222;position:fixed;left:0; bottom:0; width:100%; height:50%; padding:10px;overflow:scroll;"> '),
            this.debug_target = d("#uber-onscreen-debug"), this.debug_target.on("click", function() {
                100 > d(this).height() ? d(this).height("50%") : d(this).height("50px")
            }));
        this.log("-- START UBERMENU DEBUG --");
        this.suppress_clicks = this.events_disabled = !1;
        (this.touchenabled = "ontouchstart" in e || 0 < navigator.maxTouchPoints || 0 < navigator.msMaxTouchPoints) ? this.$ubermenu.addClass("ubermenu-touch"): this.$ubermenu.addClass("ubermenu-notouch");
        e.navigator.pointerEnabled ? (this.touchStart = "pointerdown", this.touchEnd = "pointerup",
            this.touchMove = "pointermove", this.suppress_clicks = !0) : e.navigator.msPointerEnabled ? (this.touchStart = "MSPointerDown", this.touchEnd = "MSPointerUp", this.touchMove = "MSPointerMove", this.suppress_clicks = !0) : (this.touchStart = "touchstart", this.touchEnd = "touchend", this.touchMove = "touchmove");
        this.toggleevent = "touchend" == this.touchEnd ? this.touchEnd + " click" : this.touchEnd;
        this.transitionend = "transitionend.ubermenu webkitTransitionEnd.ubermenu msTransitionEnd.ubermenu oTransitionEnd.ubermenu";
        (this.transitions =
            uber_supports("transition") && !this.$ubermenu.hasClass("ubermenu-transition-none")) || this.$ubermenu.addClass("ubermenu-no-transitions");
        a = navigator.userAgent.toLowerCase();
        this.log(a);
        this.allow_trigger_overrides = !0;
        this.noTouchEnd = !1;
        c = this.settings.android = /android/.test(a);
        var f = this.settings.windowsmobile = /iemobile/.test(a);
        if (c || f)
            if (c && !(/chrome/.test(a) || /firefox/.test(a) || /opera/.test(a)) || f) this.settings.touchOffClose = !1, this.disableTransitions(), c && !f && (this.$ubermenu.removeClass("ubermenu-trigger-hover_intent").removeClass("ubermenu-trigger-hover").addClass("ubermenu-trigger-click"),
                this.allow_trigger_overrides = this.settings.touchEvents = !1);
        f && (this.log("disable touchoff close and accessibility"), this.settings.touchOffClose = !1, this.settings.accessible = !1, this.settings.mouseEvents = !1);
        !/chrome/.test(a) && /safari/.test(a) && /version\/5/.test(a) && this.disableTransitions();
        var g = this.last_width = e.innerWidth,
            p = b.$ubermenu.find(".ubermenu-item-level-0.ubermenu-align-right");
        p.length && d(e).ubersmartresize(function() {
            g = e.innerWidth;
            b.last_width <= b.settings.breakpoint && g >= b.settings.breakpoint &&
                (p.hide(), p[0].offsetHeight, p.show());
            b.last_width = g
        });
        this.settings.clicktest && (this.touchEnd = "click");
        this.init()
    }
    var r = {
            breakpoint: uber_op("responsive_breakpoint", {
                datatype: "numeric"
            }, 959),
            touchEvents: !0,
            mouseEvents: !0,
            retractors: !0,
            touchOffClose: uber_op("touch_off_close", {
                datatype: "boolean"
            }, !0),
            moveThreshold: 10,
            submenuAnimationDuration: 500,
            ignoreDummies: !0,
            clicktest: !1,
            windowstest: !1,
            debug: !1,
            debug_onscreen: !1,
            remove_conflicts: uber_op("remove_conflicts", {
                datatype: "boolean"
            }, !0),
            reposition_on_load: uber_op("reposition_on_load", {
                datatype: "boolean"
            }, !1),
            accessible: uber_op("accessible", {
                datatype: "boolean"
            }, !0),
            retractor_display_strategy: uber_op("retractor_display_strategy", {
                datatype: "string"
            }, "responsive"),
            intent_delay: uber_op("intent_delay", {
                datatype: "numeric"
            }, 300),
            intent_interval: uber_op("intent_interval", {
                datatype: "numeric"
            }, 100),
            intent_threshold: uber_op("intent_threshold", {
                datatype: "numeric"
            }, 300),
            scrollto_offset: uber_op("scrollto_offset", {
                datatype: "numeric"
            }, 0),
            scrollto_duration: uber_op("scrollto_duration", {
                    datatype: "numeric"
                },
                1E3),
            collapse_after_scroll: uber_op("collapse_after_scroll", {
                datatype: "boolean"
            }, !0),
            aria_role_navigation: uber_op("aria_role_navigation", {
                datatype: "boolean"
            }, !1),
            aria_expanded: uber_op("aria_expanded", {
                datatype: "boolean"
            }, !1),
            aria_hidden: uber_op("aria_hidden", {
                datatype: "boolean"
            }, !1),
            aria_responsive_toggle: uber_op("aria_responsive_toggle", {
                datatype: "boolean"
            }, !1)
        },
        t, m, n, q;
    l.prototype = {
        init: function() {
            this.log("Initializing UberMenu");
            this.$ubermenu.removeClass("ubermenu-nojs");
            this.removeConflicts();
            this.initializeSubmenuToggleTouchEvents();
            this.initializeSubmenuToggleMouseEvents();
            this.initializeRetractors();
            this.initializeResponsiveToggle();
            this.initializeTouchoffClose();
            this.initializeTabs();
            this.initializeSubmenuPositioning();
            this.initializeSegmentCurrentStates();
            this.initializeAccessibilityOnTab();
            this.initializeAccessibilityStates();
            this.initializeImageLazyLoad()
        },
        removeConflicts: function() {
            this.settings.remove_conflicts && this.$ubermenu.find(".ubermenu-item, .ubermenu-target, .ubermenu-submenu").add(this.$ubermenu).removeAttr("style").unbind().off()
        },
        initializeAccessibilityStates: function() {
            this.settings.aria_role_navigation && this.$ubermenu.attr("role", "navigation")
        },
        initializeAccessibilityOnTab: function() {
            if (this.settings.accessible) {
                var a = this;
                d("body").on("keydown.ubermenu", function(c) {
                    9 == (c.keyCode || c.which) && (d("body").off("keydown.ubermenu"), a.initializeAccessibility())
                })
            }
        },
        initializeImageLazyLoad: function() {
            var a = this;
            d(".ubermenu-item-level-0").one("ubermenuopen", function() {
                d(this).find(".ubermenu-image-lazyload").each(function() {
                    d(this).data("srcset") &&
                        d(this).attr("srcset", d(this).data("srcset")).attr("sizes", d(this).data("sizes"));
                    d(this).attr("src", d(this).data("src")).removeClass("ubermenu-image-lazyload")
                });
                setTimeout(function() {
                    a.clearTabSizes();
                    a.sizeTabs()
                }, 300)
            })
        },
        initializeAccessibility: function() {
            var a = this;
            a.$current_focus = !1;
            a.mousedown = !1;
            a.$ubermenu.addClass("ubermenu-accessible");
            a.$ubermenu.on("focus", ".ubermenu-target, a, input, select, textarea", function() {
                if (!a.mousedown) {
                    var c = d(this);
                    a.$current_focus = c;
                    var b = c.parent(".ubermenu-item");
                    b.length && (b.is(".ubermenu-item-level-0") && a.closeAllSubmenus(), b.is(".ubermenu-has-submenu-drop") && setTimeout(function() {
                        c.is(":focus") && (b.siblings(".ubermenu-has-submenu-drop").each(function() {
                            a.closeSubmenu(d(this), "umac", a)
                        }), a.openSubmenu(b, "umac", a))
                    }, 500), c.on("blur.ubermenu", ".ubermenu-target, a, input, select, textarea", function(b) {
                        a.mousedown || (a.$current_focus = !1, d(this).off("blur.ubermenu"), setTimeout(function() {
                            a.$current_focus || a.closeAllSubmenus()
                        }, 500));
                        a.mousedown = !1
                    }))
                }
                a.mousedown = !1
            });
            a.$ubermenu.on("focusout", function() {
                setTimeout(function() {
                    d(h.activeElement).closest(a.$ubermenu).length || a.closeAllSubmenus()
                }, 10)
            });
            a.$ubermenu.find(".ubermenu-item-level-0").on("keydown", function(c) {
                switch (c.which) {
                    case 39:
                        a.closeAllSubmenus();
                        d(this).next().find(">.ubermenu-target").focus();
                        break;
                    case 37:
                        a.closeAllSubmenus();
                        jQuery(this).prev().find(">.ubermenu-target").focus();
                        break;
                    case 27:
                        a.closeAllSubmenus()
                }
            });
            a.$ubermenu.on("mousedown", function(c) {
                a.mousedown = !0;
                setTimeout(function() {
                    a.mousedown = !1
                }, 100)
            })
        },
        initializeSubmenuPositioning: function() {
            var a = this;
            a.positionSubmenus();
            d(e).ubersmartresize(function() {
                a.positionSubmenus()
            });
            if (this.settings.reposition_on_load) d(e).on("load", function() {
                a.positionSubmenus()
            })
        },
        initializeSubmenuToggleTouchEvents: function() {
            if (this.settings.touchEvents) {
                var a = this;
                this.$ubermenu.on(this.touchStart, ".ubermenu-target:not(.shiftnav-toggle)", function(c) {
                    a.handleTouchInteraction(c, this, a)
                });
                this.$ubermenu.on("click", ".ubermenu-has-submenu-drop > .ubermenu-target, .ubermenu-tab.ubermenu-item-has-children > .ubermenu-target",
                    function(c) {
                        a.handleClicks(c, this, a)
                    })
            }
        },
        initializeSubmenuToggleMouseEvents: function(a) {
            a = a || this;
            if (a.settings.mouseEvents && !a.settings.clicktest && !a.settings.windowstest) {
                a.log("initializeSubmenuToggleMouseEvents");
                var c = "hover";
                a.$ubermenu.hasClass("ubermenu-trigger-click") ? c = "click" : a.$ubermenu.hasClass("ubermenu-trigger-hover_intent") && (c = "hover_intent");
                "click" == c ? this.suppress_clicks || (this.$ubermenu.on("click.ubermenu-submenu-toggle", ".ubermenu-item.ubermenu-has-submenu-drop:not([data-ubermenu-trigger]) > .ubermenu-target",
                    function(b) {
                        a.handleMouseClick(b, this, a)
                    }), this.$ubermenu.on("click.ubermenu-click-target", ".ubermenu-item:not(.ubermenu-has-submenu-drop):not([data-ubermenu-trigger]) > .ubermenu-target", function(b) {
                    a.handleLink(b, this, a)
                })) : "hover_intent" == c ? (this.$ubermenu.on("mouseenter.mouse_intent", ".ubermenu-item.ubermenu-has-submenu-drop:not([data-ubermenu-trigger])", function(b) {
                    a.handleMouseIntent(b, this, a)
                }), this.$ubermenu.on("click.ubermenu-click-target", ".ubermenu-item:not([data-ubermenu-trigger]) > .ubermenu-target",
                    function(b) {
                        a.handleLink(b, this, a)
                    })) : (this.$ubermenu.on("mouseenter.ubermenu-submenu-toggle", ".ubermenu-item.ubermenu-has-submenu-drop:not([data-ubermenu-trigger]) > .ubermenu-target", function(b) {
                    a.handleMouseover(b, this, a)
                }), this.$ubermenu.on("click.ubermenu-click-target", ".ubermenu-item:not([data-ubermenu-trigger]) > .ubermenu-target", function(b) {
                    a.handleLink(b, this, a)
                }));
                if (this.allow_trigger_overrides) a.$ubermenu.find(".ubermenu-item[data-ubermenu-trigger]").each(function() {
                    var b = d(this);
                    c = b.data("ubermenu-trigger");
                    if ("click" == c) {
                        if (!this.suppress_clicks) b.on("click.ubermenu-submenu-toggle", ".ubermenu-target", function(b) {
                            a.handleMouseClick(b, this, a)
                        })
                    } else if ("hover_intent" == c) b.on("mouseenter.mouse_intent", function(b) {
                        a.handleMouseIntent(b, this, a)
                    });
                    else b.on("mouseenter.ubermenu-submenu-toggle", ".ubermenu-target", function(b) {
                        a.handleMouseover(b, this, a)
                    })
                });
                else a.$ubermenu.find(".ubermenu-tab").on("click.ubermenu-submenu-toggle", ".ubermenu-target", function(b) {
                    a.handleMouseClick(b, this, a)
                })
            }
        },
        disableSubmenuToggleMouseEvents: function() {
            this.log("disableSubmenuToggleMouseEvents");
            this.events_disabled = !0
        },
        reenableSubmenuToggleMouseEvents: function(a) {
            a = a || this;
            a.log("reenableSubmenuToggleMouseEvents");
            a.events_disabled = !1
        },
        initializeRetractors: function() {
            if (this.settings.retractors) {
                var a = this;
                this.$ubermenu.on("click", ".ubermenu-retractor", function(c) {
                    a.handleSubmenuRetractorEnd(c, this, a)
                });
                if (this.settings.touchEvents) this.$ubermenu.on(this.touchStart, ".ubermenu-retractor", function(c) {
                    a.handleSubmenuRetractorStart(c, this, a)
                });
                this.touchenabled || "touch" != a.settings.retractor_display_strategy ||
                    (this.$ubermenu.find(".ubermenu-retractor-mobile").remove(), this.$ubermenu.find(".ubermenu-submenu-retractor-top").removeClass("ubermenu-submenu-retractor-top").removeClass("ubermenu-submenu-retractor-top-2"))
            }
        },
        initializeResponsiveToggle: function() {
            var a = this,
                c = ".ubermenu-responsive-toggle[data-ubermenu-target=" + a.$ubermenu.attr("id") + "], .ubermenu-responsive-toggle[data-ubermenu-target=_any_]";
            a.log("initializeResponsiveToggle " + this.toggleevent);
            if (a.settings.aria_responsive_toggle) {
                var b = e.innerWidth >
                    a.settings.breakpoint;
                d(c).attr("aria-hidden", b);
                d(e).ubersmartresize(function() {
                    d(c).attr("aria-hidden", e.innerWidth > a.settings.breakpoint)
                })
            }
            d(h).on(this.toggleevent, c, function(b) {
                a.handleResponsiveToggle(b, this, a)
            })
        },
        initializeTouchoffClose: function() {
            if (this.settings.touchOffClose) {
                var a = this;
                d(h).on(this.touchStart + ".ubermenu_touchoff", function(c) {
                    a.handleTouchoffCloseStart(c, this, a)
                });
                d(h).on(this.touchEnd + ".ubermenu_touchoff", function(c) {
                    a.handleTouchoffClose(c, this, "touch", a)
                });
                if (!this.suppress_clicks) d(h).on("mouseup.ubermenu_clickoff",
                    function(c) {
                        a.handleTouchoffClose(c, this, "click", a)
                    })
            }
        },
        initializeTabs: function() {
            var a = this,
                c = a.settings.responsive && e.innerWidth <= a.settings.breakpoint ? !0 : !1;
            a.$tab_blocks = a.$ubermenu.find(".ubermenu-tabs");
            a.$tab_blocks = d(a.$tab_blocks.get().reverse());
            d(e).on("load", function() {
                a.sizeTabs()
            });
            a.windowwidth = e.innerWidth;
            d(e).ubersmartresize(function() {
                a.oldwindowwidth = a.windowwidth;
                a.windowwidth = e.innerWidth;
                a.windowwidth != a.oldwindowwidth && (a.clearTabSizes(a), a.sizeTabs(), a.checkActiveTabs(a))
            });
            a.$ubermenu.find(".ubermenu-item-level-0.ubermenu-has-submenu-drop").on("ubermenuopen.sizetabs", function() {
                d(this).off("ubermenuopen.sizetabs");
                a.sizeTabs()
            });
            a.$ubermenu.find(".ubermenu-tabs.ubermenu-tabs-dynamic-sizing").on("ubermenuopen", "> .ubermenu-tabs-group > .ubermenu-tab", function() {
                a.sizeTabsDynamic(d(this).closest(".ubermenu-tabs"))
            });
            c || a.initializeActiveTab(a)
        },
        checkActiveTabs: function(a) {
            e.innerWidth <= a.settings.breakpoint ? a.$tab_blocks.find(".ubermenu-tab.ubermenu-active").removeClass("ubermenu-active") :
                a.initializeActiveTab(a)
        },
        initializeActiveTab: function(a) {
            a.$ubermenu.find(".ubermenu-tabs-show-default > .ubermenu-tabs-group").each(function() {
                0 === d(this).find("> .ubermenu-tab.ubermenu-active").length && a.openSubmenu(d(this).find("> .ubermenu-tab").first(), "tab default", a)
            })
        },
        clearTabSizes: function(a) {
            (a || this).$ubermenu.find(".ubermenu-submenu , .ubermenu-tabs , .ubermenu-tab-content-panel , .ubermenu-tabs-group").css("min-height", "")
        },
        sizeTabs: function() {
            var a = this,
                c = a.settings.responsive && e.innerWidth <=
                a.settings.breakpoint ? !0 : !1;
            c || (a.initializeActiveTab(a), a.$tab_blocks.each(function() {
                var b = !1;
                !d(this).hasClass("ubermenu-tab-layout-top") && !d(this).hasClass("ubermenu-tab-layout-bottom") || c || (b = !0);
                d(this).data("um-stacked", b);
                var f = 0,
                    b = c ? d(this).parentsUntil(".ubermenu").add(d(this).parents(".ubermenu")) : d(this).parentsUntil(".ubermenu-item-level-0");
                b.addClass("ubermenu-test-dimensions");
                var g;
                d(this).find(" > .ubermenu-tabs-group > .ubermenu-tab > .ubermenu-tab-content-panel").each(function() {
                    d(this).addClass("ubermenu-test-dimensions");
                    g = d(this).outerHeight();
                    g > f && (f = g);
                    d(this).data("um-oh", g);
                    d(this).removeClass("ubermenu-test-dimensions")
                });
                d(this).data("um-max-panel-height", f);
                d(this).hasClass("ubermenu-tabs-dynamic-sizing") ? a.sizeTabsDynamic(d(this), !1) : a.sizeTabsMax(d(this));
                b.removeClass("ubermenu-test-dimensions")
            }))
        },
        sizeTabsMax: function(a) {
            var c = a.data("um-max-panel-height"),
                b = a.data("um-stacked"),
                d = a.find("> .ubermenu-tabs-group");
            b ? a.css("min-height", c + d.outerHeight()) : (d.outerHeight() > c && (c = a.outerHeight()), d.css("min-height",
                c));
            d.find("> .ubermenu-tab > .ubermenu-tab-content-panel").css("min-height", c)
        },
        sizeTabsDynamic: function(a, c) {
            c === k && (c = !0);
            c && (c = a.hasClass("ubermenu-tabs-dynamic-sizing-animate"));
            if (!(this.settings.responsive && e.innerWidth <= this.settings.breakpoint)) {
                var b = a.data("um-stacked"),
                    d = a.find("> .ubermenu-tabs-group"),
                    g = d.outerHeight();
                d.css("min-height", "0");
                var p = d.find("> .ubermenu-active > .ubermenu-tab-content-panel"),
                    h = p.data("um-oh"),
                    h = d.outerHeight() > h ? a.outerHeight() : h;
                b ? c ? a.stop().animate({
                    "min-height": h +
                        d.outerHeight()
                }, 300, "swing", function() {
                    p.css("overflow", "auto")
                }) : a.css("min-height", h + d.outerHeight()) : c ? (d.css("min-height", g), d.stop().animate({
                    "min-height": h
                }, 300, "swing", function() {
                    p.css("overflow", "auto")
                })) : d.css("min-height", h)
            }
        },
        initializeSegmentCurrentStates: function() {
            this.$ubermenu.find(".ubermenu-current-menu-item").first().parents(".ubermenu-item:not( .ubermenu-nocurrent )").addClass("ubermenu-current-menu-ancestor")
        },
        disableTransitions: function() {
            this.transitions = !1;
            this.$ubermenu.removeClass("ubermenu-transition-slide").removeClass("ubermenu-transition-fade").removeClass("ubermenu-transition-shift").addClass("ubermenu-no-transitions").addClass("ubermenu-transition-none")
        },
        handleClicks: function(a, c, b) {
            d(c).data("ubermenu-killClick") && (a.preventDefault(), b.log("killed click after touchend ", a))
        },
        handleTouchInteraction: function(a, c, b) {
            a.stopPropagation();
            0 <= a.type.indexOf("pointer") && b.disableTransitions();
            c = d(c);
            c.parent().off("mouseleave.mouse_intent_none");
            b.log("touchstart " + a.type + " " + c.text(), a);
            c.on(b.touchEnd, function(a) {
                b.handleTap(a, this, b)
            });
            c.on(b.touchMove, function(a) {
                b.preventInteractionOnScroll(a, this, b)
            });
            a.originalEvent.touches ? (c.data("ubermenu-startX",
                a.originalEvent.touches[0].clientX), c.data("ubermenu-startY", a.originalEvent.touches[0].clientY)) : a.originalEvent.clientY && (c.offset(), c.data("ubermenu-startX", a.originalEvent.clientX), c.data("ubermenu-startY", a.originalEvent.clientY))
        },
        preventInteractionOnScroll: function(a, c, b) {
            b.log("touchmove interaction " + a.type, a);
            c = d(c);
            if (a.originalEvent.touches) Math.abs(a.originalEvent.touches[0].clientX - c.data("ubermenu-startX")) > b.settings.moveThreshold || Math.abs(a.originalEvent.touches[0].clientY - c.data("ubermenu-startY")) >
                b.settings.moveThreshold ? (b.log("Preventing interaction on scroll, reset handlers (standard)"), b.resetHandlers(c, "preventScroll touches", b)) : b.log("diff = " + Math.abs(a.originalEvent.touches[0].clientY - c.data("ubermenu-startY")));
            else if (a.originalEvent.clientY) {
                var f = c.data(f);
                Math.abs(a.originalEvent.clientX - c.data("ubermenu-startX")) > b.settings.moveThreshold || Math.abs(a.originalEvent.clientY - c.data("ubermenu-startY")) > b.settings.moveThreshold ? (b.log("Preventing interaction on scroll, reset handlers (standard)"),
                    b.resetHandlers(c, "preventScroll client", b)) : b.log("diff = " + a.originalEvent.clientY + " - " + c.data("ubermenu-startY") + " = " + Math.abs(a.originalEvent.clientY - c.data("ubermenu-startY")))
            } else b.log("no touch points found!")
        },
        handleTap: function(a, c, b) {
            a.preventDefault();
            a.stopPropagation();
            var f = d(c);
            if (f.data("ubermenu-killTouch")) b.log("kill tap"), a.preventDefault(), a.stopPropagation();
            else {
                var g = f.parent();
                b.log("handleTap [" + f.text() + "]", a.type);
                f.data("ubermenu-killClick", !0);
                f.data("ubermenu-killHover", !0);
                setTimeout(function() {
                    f.data("ubermenu-killClick", !1).data("ubermenu-killHover", !1)
                }, 1E3);
                b.closeSubmenuInstantly(g.siblings(".ubermenu-active"));
                g.hasClass("ubermenu-has-submenu-drop") ? g.hasClass("ubermenu-active") ? ((!g.hasClass("ubermenu-tab") || e.innerWidth <= b.settings.breakpoint) && b.closeSubmenu(g, "toggleUberMenuActive", b), b.handleLink(a, c, b, !0)) : b.openSubmenu(g, "toggle", b) : b.handleLink(a, c, b, !0)
            }
            f.data("ubermenu-killTouch", !1);
            b.resetHandlers(f, "handleTap", b)
        },
        handleLink: function(a, c, b, f) {
            f =
                f || !1;
            b.log("handleLink");
            var g = d(c);
            if (g.is("a")) {
                var h = g.attr("href"),
                    l = g.data("ubermenu-scrolltarget");
                if (l) {
                    c = d(l).first();
                    if (0 < c.length) {
                        a.preventDefault();
                        g.trigger("ubermenuscrollto");
                        a = g.parent(".ubermenu-item");
                        a.addClass("ubermenu-current-menu-item");
                        a.siblings().removeClass("ubermenu-current-menu-item").removeClass("ubermenu-current-menu-parent").removeClass("uberemnu-current-menu-ancestor");
                        var k = !1;
                        d("html,body").animate({
                                scrollTop: c.offset().top - b.settings.scrollto_offset
                            }, b.settings.scrollto_duration,
                            "swing",
                            function() {
                                k || (b.closeSubmenu(g.closest(".ubermenu-item-level-0"), "handeLink", b), b.settings.collapse_after_scroll && !b.$ubermenu.hasClass("ubermenu-responsive-nocollapse") && b.toggleMenuCollapse("toggle", !1, b), g.trigger("ubermenuscrollto_complete"), k = !0)
                            });
                        return !1
                    }
                    h && -1 == h.indexOf("#") && (-1 == l.indexOf("#") && (l = "#" + l), e.location = h + l, a.preventDefault())
                }
                h ? f && a.isDefaultPrevented() && (b.log("default prevented, follow link"), "_blank" == g.attr("target") ? e.open(h, "_blank") : e.location = h) : a.preventDefault()
            }
        },
        handleMouseClick: function(a, c, b) {
            b.log("handleMouseClick", a);
            var f = d(c);
            if (f.data("ubermenu-killClick")) b.log("handleMouseClick: killClick");
            else {
                var g = f.parent(".ubermenu-item");
                g.length && (g.hasClass("ubermenu-active") ? (f.is("a") && b.handleLink(a, c, b), g.hasClass("ubermenu-tab") || b.closeSubmenu(g, "retract")) : g.hasClass("ubermenu-has-submenu-drop") && (a.preventDefault(), b.closeSubmenuInstantly(g.siblings(".ubermenu-active")), b.openSubmenu(g, "click", b)))
            }
        },
        handleMouseIntent: function(a, c, b) {
            b.log("handleMouseIntent");
            var f = d(c);
            f.data("mouse_intent_timer") && f.data("mouse_intent_timer", clearTimeout(f.data("mouse_intent_timer")));
            var g = f.find(".ubermenu-target");
            g.data("ubermenu-killHover") ? (b.log("killHover MouseIntent"), a.preventDefault(), a.stopPropagation()) : (n = a.pageX, q = a.pageY, f.on("mousemove.mouse_intent", b.trackMouse), f.data("mouse_intent_timer", setTimeout(function() {
                b.compare(a, f, b.handleMouseIntentSuccess, b)
            }, b.settings.intent_interval)), f.on("mouseleave.mouse_intent_none", function() {
                d(this).data("mouse_intent_timer",
                    clearTimeout(d(this).data("mouse_intent_timer")));
                f.data("mouse_intent_state", 0);
                f.off("mouseleave.mouse_intent_none");
                g.data("ubermenu-killHover") ? (b.log("killHover MouseIntent_Cancel"), a.preventDefault(), a.stopPropagation()) : b.closeSubmenu(f, "mouse_intent_cancel", b)
            }))
        },
        handleMouseIntentSuccess: function(a, c, b) {
            b.log("handleMouseIntentSuccess");
            c.off("mouseleave.mouse_intent_none");
            var d = c.find(".ubermenu-target");
            if (d.data("ubermenu-killHover")) b.log("Kill hover on IntentSuccess"), a.preventDefault(),
                a.stopPropagation();
            else if (d.data("ubermenu-killHover", !1), b.triggerSubmenu(a, c, b), !c.hasClass("ubermenu-tab") || e.innerWidth <= b.settings.breakpoint) c.on("mouseleave.mouse_intent", function(a) {
                b.handleMouseIntentLeave(a, this, b)
            })
        },
        handleMouseIntentLeave: function(a, c, b) {
            var f = d(c);
            f.data("mouse_intent_timer") && f.data("mouse_intent_timer", clearTimeout(f.data("mouse_intent_timer")));
            f.off("mousemove.mouse_intent", b.trackMouse);
            1 == f.data("mouse_intent_state") && f.data("mouse_intent_timer", setTimeout(function() {
                b.delayMouseLeave(a,
                    f, b.handleMouseIntentLeaveSuccess, b)
            }, b.settings.intent_delay))
        },
        handleMouseIntentLeaveSuccess: function(a, c, b) {
            c.off("mouseleave.mouse_intent");
            c.find("> .ubermenu-target").data("ubermenu-killHover") || b.closeSubmenu(c, "mouse_intent_leave", b)
        },
        delayMouseLeave: function(a, c, b, d) {
            c.data("mouse_intent_timer", clearTimeout(c.data("mouse_intent_timer")));
            c.data("mouse_intent_state", 0);
            return b.apply(c, [a, c, d])
        },
        trackMouse: function(a) {
            t = a.pageX;
            m = a.pageY
        },
        compare: function(a, c, b, d) {
            c.data("mouse_intent_timer",
                clearTimeout(c.data("mouse_intent_timer")));
            if (Math.abs(n - t) + Math.abs(q - m) < d.settings.intent_threshold) return c.off("mousemove.mouse_intent", d.track), c.data("mouse_intent_state", 1), b.apply(c, [a, c, d]);
            n = t;
            q = m;
            c.data("mouse_intent_timer", setTimeout(function() {
                d.compare(a, c, b, d)
            }, d.settings.intent_interval))
        },
        triggerSubmenu: function(a, c, b) {
            b.closeSubmenuInstantly(c.siblings(".ubermenu-active, .ubermenu-in-transition"));
            b.openSubmenu(c, "mouseenter", b)
        },
        handleMouseover: function(a, c, b) {
            if (!b.events_disabled) {
                var f =
                    d(c);
                f.data("ubermenu-killTouch", !0);
                setTimeout(function() {
                    f.data("ubermenu-killTouch", !1)
                }, 1E3);
                b.log("handleMouseenter, add mouseleave", a);
                c = f.parent(".ubermenu-item");
                if (c.length && !c.hasClass("ubermenu-active") && (b.triggerSubmenu(a, c, b), !c.hasClass("ubermenu-tab") || e.innerWidth <= b.settings.breakpoint)) c.on("mouseleave.ubermenu-submenu-toggle", function(a) {
                    b.handleMouseleave(a, this, b)
                })
            }
        },
        handleMouseleave: function(a, c, b) {
            b.log("handleMouseleave, remove mouseleave", a);
            d(c).off("mouseleave.ubermenu-submenu-toggle");
            b.closeSubmenu(d(c), "mouseout")
        },
        handleSubmenuRetractorStart: function(a, c, b) {
            a.preventDefault();
            a.stopPropagation();
            d(c).on(b.touchEnd, function(a) {
                b.handleSubmenuRetractorEnd(a, this, b)
            });
            b.log("handleSubmenuRetractorStart " + d(c).text())
        },
        handleSubmenuRetractorEnd: function(a, c, b) {
            a.preventDefault();
            a.stopPropagation();
            a = d(c).closest(".ubermenu-item");
            b.closeSubmenu(a, "handleSubmenuRetractor");
            d(c).off(b.touchEnd);
            b.log("handleSubmenuRetractorEnd " + a.find("> .ubermenu-target").text());
            return !1
        },
        handleResponsiveToggle: function(a,
            c, b) {
            b.log("handleResponsiveToggle " + a.type, a);
            a.preventDefault();
            a.stopPropagation();
            if ("touchend" == a.type) b.$ubermenu.data("ubermenu-prevent-click", !0), setTimeout(function() {
                b.$ubermenu.data("ubermenu-prevent-click", !1)
            }, 500);
            else if ("click" == a.type && b.$ubermenu.data("ubermenu-prevent-click")) {
                b.$ubermenu.data("ubermenu-prevent-click", !1);
                return
            }
            b.toggleMenuCollapse("toggle", c, b)
        },
        handleTouchoffCloseStart: function(a, c, b) {
            b.touchoffclosestart = d(e).scrollTop()
        },
        handleTouchoffClose: function(a, c, b,
            f) {
            d(a.target).closest(".ubermenu").length || "click" != b && f.touchoffclosestart != d(e).scrollTop() || (f.log("touchoff close ", a), f.closeAllSubmenus() && (f.disableSubmenuToggleMouseEvents(), e.setTimeout(function() {
                f.reenableSubmenuToggleMouseEvents(f)
            }, f.settings.submenuAnimationDuration)))
        },
        toggleMenuCollapse: function(a, c, b) {
            b = b || this;
            c = c || ".ubermenu-resposive-toggle";
            c = "object" == typeof c ? d(c) : d(c + '[data-ubermenu-target="' + b.$ubermenu.attr("id") + '"]');
            a = a || "toggle";
            "toggle" == a && (a = b.$ubermenu.hasClass("ubermenu-responsive-collapse") ?
                "open" : "close");
            "open" == a ? (b.$ubermenu.removeClass("ubermenu-responsive-collapse"), c.trigger("ubermenutoggledopen"), c.toggleClass("ubermenu-responsive-toggle-open"), b.settings.aria_responsive_toggle && c.attr("aria-pressed", !0)) : (b.$ubermenu.addClass("ubermenu-responsive-collapse"), c.trigger("ubermenutoggledclose"), c.toggleClass("ubermenu-responsive-toggle-open"), b.settings.aria_responsive_toggle && c.attr("aria-pressed", !1));
            b.transitions && !b.$ubermenu.hasClass("ubermenu-responsive-nocollapse") && (b.$ubermenu.addClass("ubermenu-in-transition"),
                b.$ubermenu.on(b.transitionend + "_toggleubermenu", function() {
                    b.$ubermenu.removeClass("ubermenu-in-transition");
                    b.$ubermenu.off(b.transitionend + "_toggleubermenu")
                }))
        },
        positionSubmenus: function() {
            var a = this;
            "h" == a.orientation && a.$ubermenu.find(".ubermenu-submenu-drop.ubermenu-submenu-align-center").each(function() {
                var c = d(this).parent(".ubermenu-item"),
                    b = d(this);
                if (a.$ubermenu.hasClass("ubermenu-bound")) var f = c.closest(".ubermenu , .ubermenu-submenu");
                else if (a.$ubermenu.hasClass("ubermenu-bound-inner")) f =
                    c.closest(".ubermenu-nav , .ubermenu-submenu");
                else {
                    var g = c.closest(".ubermenu-submenu");
                    f = 0 === g.length ? a.$ubermenu.offsetParent() : g
                }
                var g = b.outerWidth(),
                    e = c.outerWidth(),
                    h = c.offset().left,
                    c = f.width();
                f = f.offset().left;
                e = h + e / 2 - (f + g / 2);
                e = 0 < e ? e : 0;
                g > c ? e = (g - c) / -2 : e + g > c && (b.css({
                    right: 0,
                    left: "auto"
                }), e = !1);
                !1 !== e && b.css("left", e)
            })
        },
        openSubmenu: function(a, c, b) {
            b = b || this;
            b.log("Open Submenu " + c);
            a.hasClass("ubermenu-active") || (a.addClass("ubermenu-active"), b.settings.aria_expanded && a.find(">.ubermenu-target,>.ubermenu-submenu").attr("aria-expanded",
                "true"), b.settings.aria_hidden && a.find(">.ubermenu-submenu").attr("aria-hidden", "false"), b.transitions && (a.addClass("ubermenu-in-transition"), a.find("> .ubermenu-submenu").on(b.transitionend + "_opensubmenu", function() {
                b.log("finished submenu open transition");
                a.removeClass("ubermenu-in-transition");
                d(this).off(b.transitionend + "_opensubmenu")
            })), a.trigger("ubermenuopen"))
        },
        closeSubmenu: function(a, c, b) {
            b = b || this;
            b.log("closeSubmenu " + a.find(">a").text() + " [" + c + "]");
            a.hasClass("ubermenu-item-has-children") &&
                a.hasClass("ubermenu-active") && (b.transitions && a.addClass("ubermenu-in-transition"), a.each(function() {
                    var a = d(this),
                        c = a.find("> .ubermenu-submenu");
                    if (b.transitions) c.on(b.transitionend + "_closesubmenu", function() {
                        b.log("finished submenu close transition");
                        a.removeClass("ubermenu-in-transition");
                        c.off(b.transitionend + "_closesubmenu")
                    })
                }));
            a.removeClass("ubermenu-active");
            a.trigger("ubermenuclose");
            b.settings.aria_expanded && a.find(">.ubermenu-target,>.ubermenu-submenu").attr("aria-expanded", "false");
            b.settings.aria_hidden && a.find(">.ubermenu-submenu").attr("aria-hidden", "true")
        },
        closeSubmenuInstantly: function(a) {
            0 !== a.length && (a.addClass("ubermenu-notransition"), a.removeClass("ubermenu-active").removeClass("ubermenu-in-transition"), a[0].offsetHeight, a.removeClass("ubermenu-notransition"), a.trigger("ubermenuclose"), this.settings.aria_expanded && a.find(">.ubermenu-target,>.ubermenu-submenu").attr("aria-expanded", "false"), this.settings.aria_hidden && a.find(">.ubermenu-submenu").attr("aria-hidden",
                "true"))
        },
        closeAllSubmenus: function() {
            var a = this.$ubermenu.find(".ubermenu-item-level-0.ubermenu-active");
            a.length && this.closeSubmenuInstantly(a);
            return a.length
        },
        resetHandlers: function(a, c, b) {
            b.log("ResetHandlers: " + c);
            a.off(this.touchEnd);
            a.off(this.touchMove);
            a = a.parent();
            a.off("mousemove.mouse_intent");
            a.off("mouseleave.mouse_intent_none");
            a.data("mouse_intent_timer", clearTimeout(a.data("mouse_intent_timer")));
            a.data("mouse_intent_state", 0)
        },
        log: function(a, c, b) {
            b = b || this;
            b.settings.debug && (b.settings.debug_onscreen ?
                this.debug_target.prepend('<div class="um-debug-content">' + a + "</div>") : console.log(a, c))
        }
    };
    d.fn.ubermenu = function(a) {
        var c = arguments;
        if (a === k || "object" === typeof a) return this.each(function() {
            d.data(this, "plugin_ubermenu") || d.data(this, "plugin_ubermenu", new l(this, a))
        });
        if ("string" === typeof a && "_" !== a[0] && "init" !== a) {
            var b;
            this.each(function() {
                var f = d.data(this, "plugin_ubermenu");
                f instanceof l && "function" === typeof f[a] && (b = f[a].apply(f, Array.prototype.slice.call(c, 1)));
                "destroy" === a && d.data(this,
                    "plugin_ubermenu", null)
            });
            return b !== k ? b : this
        }
    }
})(jQuery, window, document);
(function(d) {
    function e(e) {
        h || (h = !0, "undefined" != typeof console && "window.load" == e && console.log("Notice: UberMenu initialized via " + e + ".  This indicates that an unrelated error on the site prevented it from loading via the normal document ready event."), "." == window.location.hash.substring(1, 2) ? (e = d("body").find(window.location.hash.substring(1)), e.length && window.scrollTo(0, e.offset().top - ubermenu_data.scrollto_offset)) : window.location.hash.length && setTimeout(function() {
            try {
                var e = d("body").find(window.location.hash);
                e.length && window.scrollTo(0, e.offset().top - ubermenu_data.scrollto_offset)
            } catch (r) {}
        }, 100), d("#wp-admin-bar-ubermenu_loading").remove(), d(".ubermenu").ubermenu({}), "undefined" !== typeof google && "undefined" !== typeof google.maps && "undefined" !== typeof google.maps.LatLng && d(".ubermenu-map-canvas").each(function() {
            var e = d(this),
                h = e.attr("data-zoom") ? parseInt(e.attr("data-zoom")) : 8,
                k = e.attr("data-lat") ? new google.maps.LatLng(e.attr("data-lat"), e.attr("data-lng")) : new google.maps.LatLng(40.7143528, -74.0059731),
                m = new google.maps.Map(this, {
                    zoom: h,
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    center: k
                });
            e.attr("data-address") ? (new google.maps.Geocoder).geocode({
                address: e.attr("data-address")
            }, function(a, c) {
                c == google.maps.GeocoderStatus.OK && (m.setCenter(a[0].geometry.location), k = a[0].geometry.location, new google.maps.Marker({
                    map: m,
                    position: a[0].geometry.location,
                    title: e.attr("data-mapTitle")
                }))
            }) : new google.maps.Marker({
                map: m,
                position: k,
                title: e.attr("data-mapTitle")
            });
            var n = d(this).closest(".ubermenu-has-submenu-drop"),
                q = function() {
                    google.maps.event.trigger(m, "resize");
                    m.setCenter(k);
                    n.off("ubermenuopen", q)
                };
            n.on("ubermenuopen", q)
        }))
    }
    var h = !1;
    jQuery(function(d) {
        e("document.ready")
    });
    d(window).on("load", function() {
        e("window.load")
    })
})(jQuery);

function uberMenu_openMega(d) {
    jQuery(".ubermenu").ubermenu("openSubmenu", jQuery(d))
}

function uberMenu_openFlyout(d) {
    jQuery(".ubermenu").ubermenu("openSubmenu", jQuery(d))
}

function uberMenu_close(d) {
    jQuery(".ubermenu").ubermenu("closeSubmenu", jQuery(d))
}

function uberMenu_redrawSubmenus() {
    jQuery(".ubermenu").ubermenu("positionSubmenus")
};
