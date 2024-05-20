(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    411: function (e, r, a) {
      e.exports = a(805);
    },
    792: function (e, r, a) {},
    805: function (e, r, a) {
      "use strict";
      a.r(r);
      a(412);
      var t = a(1),
        n = a.n(t),
        c = a(14),
        s = a(91),
        o = a.n(s),
        l = a(142),
        i = a(809),
        u = a(829),
        m = a(824),
        d = a(59),
        E = function (e) {
          return { type: "USER_REDIRECT", url: e };
        },
        p = function (e, r) {
          return { type: "OPEN_MODAL", form: e, formType: r };
        },
        f = a(823),
        b = a(825),
        O = a(826),
        _ = a(808),
        h = a(827),
        g = a(822),
        w = a(828),
        j = a(136),
        v = function () {
          var e = Object(t.useState)({}),
            r = Object(d.a)(e, 2),
            a = r[0],
            s = r[1],
            o = Object(c.b)(),
            l = Object(c.c)(function (e) {
              return e.usersReducer.errors.authError;
            });
          return n.a.createElement(
            f.a,
            { header: n.a.createElement("h3", null, "Login"), bordered: !0 },
            n.a.createElement(
              b.a,
              {
                fluid: !0,
                onChange: function (e) {
                  s(e);
                }
              },
              !(!l || 500 !== l.status) &&
                n.a.createElement(O.a, {
                  className: "login-form__login-error",
                  type: "error",
                  description: l.message
                }),
              n.a.createElement(
                _.a,
                null,
                n.a.createElement(h.a, null, "Username"),
                n.a.createElement(g.a, { name: "login" })
              ),
              n.a.createElement(
                _.a,
                null,
                n.a.createElement(h.a, null, "Password"),
                n.a.createElement(g.a, { name: "password", type: "password" })
              ),
              !(!l || 401 !== l.status) &&
                n.a.createElement(O.a, {
                  className: "login-form__login-error",
                  type: "error",
                  description: l.message
                }),
              n.a.createElement(
                _.a,
                null,
                n.a.createElement(
                  w.a,
                  null,
                  n.a.createElement(
                    j.a,
                    {
                      appearance: "primary",
                      onClick: function () {
                        return o({ type: "AUTH_USER", loginForm: a });
                      }
                    },
                    "Sign in"
                  )
                )
              )
            )
          );
        },
        R = function () {
          return n.a.createElement(
            "div",
            { className: "show-fake-browser login-page" },
            n.a.createElement(
              i.a,
              null,
              n.a.createElement(
                u.a,
                null,
                n.a.createElement(
                  m.a,
                  { justify: "center" },
                  n.a.createElement(
                    m.a.Item,
                    { colspan: 12 },
                    n.a.createElement(v, null)
                  )
                )
              )
            )
          );
        },
        S = "https://app-qeue.onrender.com/",
        y = "https://app-qeue.onrender.com/",
        D = "".concat(S, "/getClientData/"),
        C = "".concat(S, "/authUser/"),
        N =
          ("".concat(S, "/addUser/"),
          "".concat(S, "/changeUser/"),
          "".concat(S, "/removeUser/"),
          "".concat(S, "/getUsersData/")),
        T = "".concat(S, "/getClients/"),
        M = "/statistics/",
        V = "".concat(S, "/admin/"),
        U = a(832),
        A = a(819),
        L = a(70),
        x = function () {
          var e = Object(c.c)(function (e) {
              return e.usersReducer.user;
            }),
            r = Object(c.b)();
          return e.url === M
            ? n.a.createElement(
                A.a,
                null,
                !!e.admin &&
                  n.a.createElement(
                    "a",
                    { href: V },
                    n.a.createElement(
                      A.a.Item,
                      {
                        eventKey: "1",
                        icon: n.a.createElement(L.a, { icon: "id-card" })
                      },
                      "Django admin"
                    )
                  ),
                !!e.admin &&
                  n.a.createElement(
                    A.a.Item,
                    {
                      onClick: function () {
                        return r(E("/users/"));
                      },
                      eventKey: "2",
                      icon: n.a.createElement(L.a, { icon: "group" })
                    },
                    "Users"
                  ),
                n.a.createElement(
                  A.a.Item,
                  {
                    onClick: function () {
                      r({ type: "LOGOUT" });
                    },
                    eventKey: "3",
                    icon: n.a.createElement(L.a, { icon: "sign-out" })
                  },
                  "Sign out"
                )
              )
            : "/users/" === e.url &&
                n.a.createElement(
                  A.a,
                  null,
                  !!e.admin &&
                    n.a.createElement(
                      "a",
                      { href: V },
                      n.a.createElement(
                        A.a.Item,
                        {
                          eventKey: "1",
                          icon: n.a.createElement(L.a, { icon: "id-card" })
                        },
                        "Django admin"
                      )
                    ),
                  !!e.admin &&
                    n.a.createElement(
                      A.a.Item,
                      {
                        onClick: function () {
                          return r(E("/users/"));
                        },
                        eventKey: "2",
                        icon: n.a.createElement(L.a, { icon: "group" })
                      },
                      "Users"
                    ),
                  n.a.createElement(
                    A.a.Item,
                    {
                      onClick: function () {
                        return r(E(M));
                      },
                      eventKey: "3",
                      icon: n.a.createElement(L.a, { icon: "group" })
                    },
                    "Statistics"
                  ),
                  n.a.createElement(
                    A.a.Item,
                    {
                      onClick: function () {
                        r({ type: "LOGOUT" });
                      },
                      eventKey: "4",
                      icon: n.a.createElement(L.a, { icon: "sign-out" })
                    },
                    "Sign out"
                  )
                );
        },
        k = a(830),
        H = a(810),
        I = {
          padding: 18,
          fontSize: 16,
          height: 56,
          background: "#34c3ff",
          color: " #fff",
          whiteSpace: "nowrap",
          overflow: "hidden"
        },
        G = {
          padding: 18,
          fontSize: 16,
          height: 56,
          background: "white",
          color: "#575757",
          whiteSpace: "nowrap",
          overflow: "hidden"
        },
        Y = function () {
          var e = Object(c.c)(function (e) {
            return e.usersReducer.user;
          });
          return n.a.createElement(
            k.a,
            {
              style: { display: "flex", flexDirection: "column" },
              width: 260,
              collapsible: !0
            },
            n.a.createElement(
              H.a.Header,
              null,
              n.a.createElement(
                "div",
                { style: I },
                n.a.createElement(L.a, {
                  icon: "logo-analytics",
                  size: "lg",
                  style: { verticalAlign: 0 }
                }),
                n.a.createElement(
                  "span",
                  { style: { marginLeft: 12 } },
                  "BREWAHOY"
                )
              )
            ),
            n.a.createElement(
              H.a,
              { defaultOpenKeys: ["3"], appearance: "subtle" },
              n.a.createElement(
                H.a.Body,
                null,
                n.a.createElement(
                  "div",
                  { style: G },
                  n.a.createElement(L.a, {
                    icon: "user",
                    size: "lg",
                    style: { verticalAlign: 0 }
                  }),
                  n.a.createElement(
                    "span",
                    { style: { marginLeft: 12 } },
                    e.name
                  )
                ),
                n.a.createElement(x, null)
              )
            )
          );
        },
        B = a(112),
        P = a(9),
        F = a(385),
        K = a(831),
        z = a(818),
        J = (a(767), a(821)),
        W = function () {
          var e = Object(c.b)(),
            r = Object(c.c)(function (e) {
              return e.clientsReducer.clients;
            }),
            a = Object(c.c)(function (e) {
              return e.clientsReducer.client;
            }),
            s = r.map(function (e) {
              return { label: "".concat(e.name), value: "".concat(e.id) };
            });
          return (
            Object(t.useEffect)(
              function () {
                (r && r.length) || e({ type: "GET_CLIENTS" });
              },
              [r]
            ),
            !!r.length &&
              n.a.createElement(J.a, {
                cleanable: !1,
                className: "clients__picker",
                onChange: function (r) {
                  e(
                    (function (e) {
                      return { type: "SELECT_CLIENT", id: e };
                    })(r)
                  );
                },
                data: s,
                style: { width: 224 },
                defaultValue: "".concat(a.id)
              })
          );
        },
        Z = {
          labels: [],
          pointDot: !0,
          showLines: !1,
          datasets: [
            {
              label: "People",
              fill: !1,
              lineTension: 0.1,
              backgroundColor: "rgba(75,192,192,0.4)",
              borderColor: "rgba(75,192,192,1)",
              borderCapStyle: "butt",
              borderDash: [],
              borderDashOffset: 0,
              borderJoinStyle: "miter",
              pointBorderColor: "rgba(75,192,192,1)",
              pointBackgroundColor: "rgba(75,192,192,1)",
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "rgba(75,192,192,1)",
              pointHoverBorderColor: "rgba(220,220,220,1)",
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              cubicInterpolationMode: "monotone",
              data: []
            },
            {
              label: "Hide",
              fill: !1,
              lineTension: 0.1,
              backgroundColor: "rgba(75,192,192,0.4)",
              borderColor: "blue",
              borderCapStyle: "butt",
              borderDash: [],
              borderDashOffset: 0,
              borderJoinStyle: "miter",
              pointBorderColor: "rgba(75,192,192,1)",
              pointBackgroundColor: "blue",
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "rgba(75,192,192,1)",
              pointHoverBorderColor: "rgba(220,220,220,1)",
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              cubicInterpolationMode: "monotone",
              showLine: !1
            },
            {
              label: "Hide",
              fill: !1,
              lineTension: 0.1,
              backgroundColor: "rgba(75,192,192,0.4)",
              borderColor: "red",
              borderCapStyle: "butt",
              borderDash: [],
              borderDashOffset: 0,
              borderJoinStyle: "miter",
              pointBorderColor: "rgba(75,192,192,1)",
              pointBackgroundColor: "red",
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "rgba(75,192,192,1)",
              pointHoverBorderColor: "rgba(220,220,220,1)",
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              cubicInterpolationMode: "monotone",
              showLine: !1
            }
          ]
        },
        X = {
          scales: {
            xAxes: [
              {
                type: "time",
                time: {
                  displayFormats: {
                    millisecond: "YYYY MMM DD HH:MM:SS",
                    second: "YYYY MMM DD HH:MM:SS",
                    minute: "YYYY MMM DD HH:MM:SS",
                    hour: "YYYY MMM DD HH:MM:SS",
                    day: "YYYY MMM DD HH:MM:SS",
                    week: "YYYY MMM DD HH:MM:SS",
                    month: "YYYY MMM DD HH:MM:SS",
                    quarter: "YYYY MMM DD HH:MM:SS",
                    year: "YYYY MMM DD HH:MM:SS"
                  },
                  ticks: { autoSkip: !0, maxTicksLimit: 10 }
                }
              }
            ]
          },
          title: { display: !0, text: "Queue of people" },
          legend: {
            labels: {
              filter: function (e) {
                return !e.text.includes("Hide");
              }
            }
          }
        },
        $ = function () {
          var e = Object(c.b)(),
            r = Object(t.useState)({}),
            a = Object(d.a)(r, 2),
            s = a[0],
            o = a[1],
            l = Object(c.c)(function (e) {
              return e.clientsReducer.client;
            });
          Object(t.useEffect)(
            function () {
              l &&
                l.name &&
                (console.log(l.range),
                e({
                  type: "GET_CLIENT_DATA",
                  params: {
                    changeInterval: l.changeInterval,
                    id: l.id,
                    range: l.range
                  }
                }));
            },
            [l.id, l.changeInterval, l.range]
          ),
            Object(t.useEffect)(
              function () {
                o(u(l.clientData, l.changeInterval));
              },
              [l.clientData]
            );
          var i = function (e) {
              return (
                e.getFullYear() +
                "-" +
                (e.getMonth() + 1) +
                "-" +
                e.getDate() +
                " " +
                e.getHours() +
                ":" +
                e.getMinutes() +
                ":" +
                e.getSeconds()
              );
            },
            u = function (e, r) {
              if (
                ((Z.datasets[0].data = []),
                (Z.datasets[1].data = []),
                (Z.datasets[2].data = []),
                (Z.labels = []),
                !r)
              ) {
                (Z.datasets[0] = Object(P.a)(
                  Object(P.a)({}, Z.datasets[0]),
                  {},
                  {
                    label: "People",
                    borderColor: "rgba(75,192,192,1)",
                    pointBackgroundColor: "rgba(75,192,192,1)"
                  }
                )),
                  (Z.datasets[1] = Object(P.a)(
                    Object(P.a)({}, Z.datasets[1]),
                    {},
                    { label: "Hide", showLine: !1 }
                  )),
                  (Z.datasets[2] = Object(P.a)(
                    Object(P.a)({}, Z.datasets[2]),
                    {},
                    { label: "Hide", showLine: !1 }
                  ));
                var a,
                  t = Object(B.a)(e);
                try {
                  for (t.s(); !(a = t.n()).done; ) {
                    var n = a.value,
                      c = new Date(n.time);
                    Z.datasets[0].data.push(n.value), Z.labels.push(i(c));
                  }
                } catch (m) {
                  t.e(m);
                } finally {
                  t.f();
                }
                return Object(P.a)({}, Z);
              }
              if (r) {
                (Z.datasets[0] = Object(P.a)(
                  Object(P.a)({}, Z.datasets[0]),
                  {},
                  {
                    label: "Minimum",
                    borderColor: "green",
                    pointBackgroundColor: "green"
                  }
                )),
                  (Z.datasets[1] = Object(P.a)(
                    Object(P.a)({}, Z.datasets[1]),
                    {},
                    { label: "Medium", showLine: !0 }
                  )),
                  (Z.datasets[2] = Object(P.a)(
                    Object(P.a)({}, Z.datasets[2]),
                    {},
                    { label: "Maximum", showLine: !0 }
                  ));
                var s,
                  o = Object(B.a)(e);
                try {
                  for (o.s(); !(s = o.n()).done; ) {
                    var l = s.value,
                      u = new Date(l.time);
                    Z.datasets[0].data.push(l.min),
                      Z.datasets[1].data.push((l.max + l.min) / 2),
                      Z.datasets[2].data.push(l.max),
                      Z.labels.push(i(u));
                  }
                } catch (m) {
                  o.e(m);
                } finally {
                  o.f();
                }
                return Object(P.a)({}, Z);
              }
            };
          return n.a.createElement(
            "div",
            { className: "chart" },
            n.a.createElement(
              "div",
              { className: "chart__tools" },
              n.a.createElement(
                "div",
                { className: "chart__clients-wrapper" },
                n.a.createElement(
                  "h5",
                  { className: "chart__clients-headline" },
                  "Choose client:"
                ),
                n.a.createElement(W, null)
              ),
              n.a.createElement(
                "div",
                { className: "chart__toggle-wrapper" },
                n.a.createElement(
                  "h5",
                  { className: "chart__toggle-headline" },
                  "Show min, max:"
                ),
                n.a.createElement(K.a, {
                  className: "chart__toggle",
                  defaultChecked: l.changeInterval,
                  onChange: function (r) {
                    e(
                      (function (e) {
                        return { type: "CHANGE_INTERVAL", change: e };
                      })(r)
                    );
                  }
                })
              ),
              n.a.createElement(
                "div",
                { className: "chart__range-wrapper" },
                n.a.createElement(
                  "h5",
                  { className: "chart__range-headline" },
                  "Choose date:"
                ),
                n.a.createElement(z.a, {
                  cleanable: !1,
                  className: "chart__range",
                  value: l.range,
                  onChange: function (r) {
                    var a = new Date(Date.parse(r[0])),
                      t = new Date(Date.parse(r[1]));
                    e({ type: "CHANGE_RANGE", range: [a, t] });
                  }
                })
              )
            ),
            n.a.createElement(
              "div",
              { className: "chart__graph" },
              n.a.createElement(F.Line, { data: s, options: X })
            )
          );
        },
        q = function () {
          var e = Object(c.b)(),
            r = Object(c.c)(function (e) {
              return e.usersReducer.user;
            });
          return (
            Object(t.useEffect)(
              function () {
                r && !r.name && e({ type: "LOAD_USER_FROM_STORAGE" });
              },
              [r]
            ),
            n.a.createElement(
              "div",
              { className: "sidebar-page" },
              n.a.createElement(
                i.a,
                null,
                n.a.createElement(Y, null),
                n.a.createElement(
                  i.a,
                  null,
                  n.a.createElement(
                    U.a,
                    null,
                    n.a.createElement("h2", null, "Statistics page")
                  ),
                  n.a.createElement(
                    u.a,
                    { className: "content" },
                    n.a.createElement($, null)
                  )
                )
              )
            )
          );
        },
        Q = a(79),
        ee = (a(792), a(817)),
        re = a(816),
        ae = a(410),
        te = ee.a.Column,
        ne = ee.a.HeaderCell,
        ce = ee.a.Cell,
        se = function () {
          var e = Object(c.b)(),
            r = Object(c.c)(function (e) {
              return e.usersReducer.users;
            }),
            a = Object(t.useState)(r),
            s = Object(d.a)(a, 2),
            o = s[0],
            l = s[1];
          return (
            Object(t.useEffect)(
              function () {
                (r && r.length) || e({ type: "GET_USERS" }), l(r);
              },
              [r]
            ),
            n.a.createElement(
              "div",
              null,
              n.a.createElement(
                "div",
                { className: "table__header" },
                n.a.createElement(
                  re.a,
                  { className: "table__header-search" },
                  n.a.createElement(ae.a, {
                    onChange: function (e) {
                      var a = r.filter(function (r) {
                        return (
                          r.username.includes(e) ||
                          r.first_name.includes(e) ||
                          r.last_name.includes(e) ||
                          r.email.includes(e)
                        );
                      });
                      l(a);
                    }
                  }),
                  n.a.createElement(
                    re.a.Addon,
                    null,
                    n.a.createElement(L.a, { icon: "search" })
                  )
                ),
                n.a.createElement(
                  j.a,
                  {
                    appearance: "primary",
                    className: "table__header-add-user",
                    size: "sm",
                    onClick: function () {
                      return e(p(null, "ADD"));
                    }
                  },
                  "Add user"
                )
              ),
              n.a.createElement(
                ee.a,
                { data: o, virtualized: !0, height: 400 },
                n.a.createElement(
                  te,
                  { width: 120, align: "center", fixed: !0 },
                  n.a.createElement(ne, null, "id"),
                  n.a.createElement(ce, { dataKey: "id" })
                ),
                n.a.createElement(
                  te,
                  { width: 120, align: "center", fixed: !0 },
                  n.a.createElement(ne, null, "Username"),
                  n.a.createElement(ce, { dataKey: "username" })
                ),
                n.a.createElement(
                  te,
                  { width: 70, align: "center" },
                  n.a.createElement(ne, null, "Admin"),
                  n.a.createElement(ce, { dataKey: "admin" })
                ),
                n.a.createElement(
                  te,
                  { width: 120, align: "center" },
                  n.a.createElement(ne, null, "First name"),
                  n.a.createElement(ce, { dataKey: "first_name" })
                ),
                n.a.createElement(
                  te,
                  { width: 120, align: "center" },
                  n.a.createElement(ne, null, "Last name"),
                  n.a.createElement(ce, { dataKey: "last_name" })
                ),
                n.a.createElement(
                  te,
                  { width: 220, align: "center" },
                  n.a.createElement(ne, null, "Email"),
                  n.a.createElement(ce, { dataKey: "email" })
                ),
                n.a.createElement(
                  te,
                  { width: 120, fixed: "right" },
                  n.a.createElement(ne, null, "Action"),
                  n.a.createElement(ce, null, function (r) {
                    return n.a.createElement(
                      "span",
                      null,
                      n.a.createElement(
                        "a",
                        {
                          onClick: function () {
                            e(p(r, "EDIT"));
                          }
                        },
                        " Edit "
                      ),
                      " |",
                      " ",
                      n.a.createElement(
                        "a",
                        {
                          onClick: function () {
                            e(p(r, "DELETE"));
                          }
                        },
                        " Remove "
                      )
                    );
                  })
                )
              )
            )
          );
        },
        oe = a(820),
        le = a(409),
        ie = function () {
          var e = Object(c.c)(function (e) {
              return e.modalReducer.modal.form;
            }),
            r = Object(c.b)(),
            a = Object(P.a)({}, e);
          (a.newpassword = ""),
            (a.confirmpassword = ""),
            (a.changepassword = !1);
          var s = Object(t.useState)(Object(P.a)({}, a)),
            o = Object(d.a)(s, 2),
            l = o[0],
            i = o[1],
            u = Object(t.useState)(
              Object(P.a)(
                {},
                {
                  usernameErrorValid: "",
                  emailErrorValid: "",
                  newpasswordErrorValid: "",
                  confirmpasswordErrorValid: ""
                }
              )
            ),
            m = Object(d.a)(u, 2),
            E = m[0],
            p = m[1],
            f = Object(c.c)(function (e) {
              return e.usersReducer.errors.changeUserError;
            }),
            v = function (e) {
              var r = !1;
              return (
                R(e) && (r = !0), S(e) && (r = !0), p(Object(P.a)({}, E)), !r
              );
            },
            R = function (e) {
              return (
                e.username
                  ? (E.usernameErrorValid = "")
                  : (E.usernameErrorValid = "Username must be not empty"),
                e.email
                  ? (E.emailErrorValid = "")
                  : (E.emailErrorValid = "Email must be not empty"),
                e.first_name
                  ? (E.first_nameErrorValid = "")
                  : (E.first_nameErrorValid = "First name must be not empty"),
                e.last_name
                  ? (E.last_nameErrorValid = "")
                  : (E.last_nameErrorValid = "Last name must be not empty"),
                e.changepassword &&
                  (e.newpassword
                    ? (E.newpasswordErrorValid = "")
                    : (E.newpasswordErrorValid = "Password must be not empty"),
                  e.confirmpassword
                    ? (E.confirmpasswordErrorValid = "")
                    : (E.confirmpasswordErrorValid =
                        "Confirm password must be not empty")),
                C(E)
              );
            },
            S = function (e) {
              var r;
              return (
                E.emailErrorValid ||
                  ((r = e.email),
                  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                    r
                  )
                    ? (E.emailErrorValid = "")
                    : (E.emailErrorValid = "Not valid email")),
                E.newpasswordErrorValid ||
                  E.confirmpasswordErrorValid ||
                  !e.changepassword ||
                  (e.newpassword !== e.confirmpassword &&
                    ((E.newpasswordErrorValid = "Password not coincide"),
                    (E.confirmpasswordErrorValid = "Password not coincide"))),
                C(E)
              );
            },
            y = function (e) {
              return {
                id: e.id,
                username: e.username,
                first_name: e.first_name,
                last_name: e.last_name,
                email: e.email,
                password: e.newpassword,
                is_superuser: e.is_superuser,
                changepassword: e.changepassword
              };
            },
            D = function (e) {
              for (var r in e) e[r] = "";
            },
            C = function (e) {
              for (var r in e) if (e[r]) return !0;
            };
          return n.a.createElement(
            b.a,
            {
              fluid: !0,
              className: "form__edit",
              formValue: l,
              onChange: function (e) {
                i(e);
              }
            },
            n.a.createElement(
              _.a,
              null,
              n.a.createElement(
                h.a,
                { className: "form__edit-headline" },
                "Username"
              ),
              n.a.createElement(
                _.a,
                null,
                n.a.createElement(g.a, {
                  name: "username",
                  errorMessage: E.usernameErrorValid ? E.usernameErrorValid : ""
                })
              )
            ),
            n.a.createElement(
              _.a,
              null,
              n.a.createElement(
                h.a,
                { className: "form__edit-headline" },
                "Email"
              ),
              n.a.createElement(
                _.a,
                null,
                n.a.createElement(g.a, {
                  name: "email",
                  errorMessage: E.emailErrorValid ? E.emailErrorValid : ""
                })
              )
            ),
            n.a.createElement(
              _.a,
              null,
              n.a.createElement(
                h.a,
                { className: "form__edit-headline" },
                "Admin"
              ),
              n.a.createElement(g.a, {
                name: "is_superuser",
                value: !!l.is_superuser,
                accepter: le.a,
                inline: !0,
                checked: l.is_superuser,
                onChange: function () {
                  (l.is_superuser = !l.is_superuser), i(Object(P.a)({}, l));
                }
              })
            ),
            n.a.createElement(
              _.a,
              null,
              n.a.createElement(
                h.a,
                { className: "form__edit-headline" },
                "First name"
              ),
              n.a.createElement(
                _.a,
                null,
                n.a.createElement(g.a, {
                  name: "first_name",
                  errorMessage: E.first_nameErrorValid
                    ? E.first_nameErrorValid
                    : ""
                })
              )
            ),
            n.a.createElement(
              _.a,
              null,
              n.a.createElement(
                h.a,
                { className: "form__edit-headline" },
                "Last name"
              ),
              n.a.createElement(
                _.a,
                null,
                n.a.createElement(g.a, {
                  name: "last_name",
                  errorMessage: E.last_nameErrorValid
                    ? E.last_nameErrorValid
                    : ""
                })
              )
            ),
            n.a.createElement(
              _.a,
              null,
              n.a.createElement(
                h.a,
                { className: "form__edit-headline" },
                "Change password"
              ),
              n.a.createElement(g.a, {
                name: "changepassword",
                value: !!l.changepassword,
                accepter: le.a,
                inline: !0,
                checked: l.changepassword,
                onChange: function () {
                  (l.changepassword = !l.changepassword), i(Object(P.a)({}, l));
                }
              })
            ),
            !!l.changepassword &&
              n.a.createElement(
                _.a,
                null,
                n.a.createElement(
                  h.a,
                  { className: "form__edit-headline" },
                  "New password"
                ),
                n.a.createElement(g.a, {
                  name: "newpassword",
                  errorMessage: E.newpasswordErrorValid
                    ? E.newpasswordErrorValid
                    : "",
                  type: "password"
                }),
                n.a.createElement(
                  h.a,
                  { className: "form__edit-headline" },
                  "Confirm password"
                ),
                n.a.createElement(g.a, {
                  name: "confirmpassword",
                  errorMessage: E.confirmpasswordErrorValid
                    ? E.confirmpasswordErrorValid
                    : "",
                  type: "password"
                })
              ),
            !!f &&
              n.a.createElement(O.a, {
                className: "login-form__login-error",
                type: "error",
                description: f.message
              }),
            n.a.createElement(
              _.a,
              null,
              n.a.createElement(
                w.a,
                null,
                n.a.createElement(
                  j.a,
                  {
                    className: "toolbar__button",
                    appearance: "primary",
                    onClick: function () {
                      if ((D(E), v(l))) {
                        var e = y(l);
                        r({ type: "CHANGE_USER", changeUserForm: e });
                      }
                    }
                  },
                  "Update"
                ),
                n.a.createElement(
                  j.a,
                  {
                    className: "toolbar__button",
                    onClick: function () {
                      return r({ type: "CLOSE_MODAL" });
                    }
                  },
                  "Cancel"
                )
              )
            )
          );
        },
        ue = function () {
          var e = Object(c.b)(),
            r = Object(c.c)(function (e) {
              return e.modalReducer.modal.form;
            }),
            a = Object(c.c)(function (e) {
              return e.usersReducer.errors.removeUserError;
            });
          return n.a.createElement(
            b.a,
            { fluid: !0, className: "form__delete" },
            n.a.createElement(
              _.a,
              null,
              n.a.createElement(
                "h3",
                { className: "form__delete-headline" },
                "Are you sure?"
              ),
              n.a.createElement(
                w.a,
                { className: "toolbar" },
                n.a.createElement(
                  j.a,
                  {
                    className: "toolbar__button",
                    color: "red",
                    appearance: "primary",
                    onClick: function () {
                      return e({ type: "REMOVE_USER", id: r.id });
                    }
                  },
                  "Delete"
                ),
                n.a.createElement(
                  j.a,
                  {
                    className: "toolbar__button",
                    onClick: function () {
                      return e({ type: "CLOSE_MODAL" });
                    }
                  },
                  "Cancel"
                )
              )
            ),
            !!a &&
              n.a.createElement(O.a, {
                className: "login-form__login-error",
                type: "error",
                description: a.message
              })
          );
        },
        me = function () {
          var e = Object(c.b)(),
            r = Object(c.c)(function (e) {
              return e.usersReducer.errors.addUserError;
            }),
            a = Object(t.useState)(
              Object(P.a)(
                {},
                {
                  username: "",
                  email: "",
                  is_superuser: !1,
                  first_name: "",
                  last_name: "",
                  password: "",
                  confirmpassword: ""
                }
              )
            ),
            s = Object(d.a)(a, 2),
            o = s[0],
            l = s[1],
            i = Object(t.useState)(
              Object(P.a)(
                {},
                {
                  usernameErrorValid: "",
                  emailErrorValid: "",
                  first_nameErrorValid: "",
                  last_nameErrorValid: "",
                  passwordErrorValid: "",
                  confirmpasswordErrorValid: ""
                }
              )
            ),
            u = Object(d.a)(i, 2),
            m = u[0],
            E = u[1],
            p = function (e) {
              var r = !1;
              return (
                f(e) && (r = !0), v(e) && (r = !0), E(Object(P.a)({}, m)), !r
              );
            },
            f = function (e) {
              return (
                e.username
                  ? (m.usernameErrorValid = "")
                  : (m.usernameErrorValid = "Username must be not empty"),
                e.email
                  ? (m.emailErrorValid = "")
                  : (m.emailErrorValid = "Email must be not empty"),
                e.first_name
                  ? (m.first_nameErrorValid = "")
                  : (m.first_nameErrorValid = "First name must be not empty"),
                e.last_name
                  ? (m.last_nameErrorValid = "")
                  : (m.last_nameErrorValid = "Last name must be not empty"),
                e.password
                  ? (m.passwordErrorValid = "")
                  : (m.passwordErrorValid = "Password must be not empty"),
                e.confirmpassword
                  ? (m.confirmpasswordErrorValid = "")
                  : (m.confirmpasswordErrorValid =
                      "Confirm password must be not empty"),
                y(m)
              );
            },
            v = function (e) {
              var r;
              return (
                m.emailErrorValid ||
                  ((r = e.email),
                  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                    r
                  )
                    ? (m.emailErrorValid = "")
                    : (m.emailErrorValid = "Not valid email")),
                m.passwordErrorValid ||
                  m.confirmpasswordErrorValid ||
                  (e.password !== e.confirmpassword &&
                    ((m.passwordErrorValid = "Password not coincide"),
                    (m.confirmpasswordErrorValid = "Password not coincide"))),
                y(m)
              );
            },
            R = function (e) {
              return {
                username: e.username,
                first_name: e.first_name,
                last_name: e.last_name,
                email: e.email,
                password: e.password,
                is_superuser: e.is_superuser
              };
            },
            S = function (e) {
              for (var r in e) e[r] = "";
            },
            y = function (e) {
              for (var r in e) if (e[r]) return !0;
            };
          return n.a.createElement(
            b.a,
            {
              fluid: !0,
              className: "form__edit",
              formValue: o,
              onChange: function (e) {
                l(e);
              }
            },
            n.a.createElement(
              _.a,
              null,
              n.a.createElement(
                h.a,
                { className: "form__edit-headline" },
                "Username"
              ),
              n.a.createElement(
                _.a,
                null,
                n.a.createElement(g.a, {
                  name: "username",
                  errorMessage: m.usernameErrorValid ? m.usernameErrorValid : ""
                })
              )
            ),
            n.a.createElement(
              _.a,
              null,
              n.a.createElement(
                h.a,
                { className: "form__edit-headline" },
                "Email"
              ),
              n.a.createElement(
                _.a,
                null,
                n.a.createElement(g.a, {
                  name: "email",
                  errorMessage: m.emailErrorValid ? m.emailErrorValid : ""
                })
              )
            ),
            n.a.createElement(
              _.a,
              null,
              n.a.createElement(
                h.a,
                { className: "form__edit-headline" },
                "Admin"
              ),
              n.a.createElement(g.a, {
                name: "is_superuser",
                value: !!o.is_superuser,
                accepter: le.a,
                inline: !0,
                checked: o.is_superuser,
                onChange: function () {
                  (o.is_superuser = !o.is_superuser), l(Object(P.a)({}, o));
                }
              })
            ),
            n.a.createElement(
              _.a,
              null,
              n.a.createElement(
                h.a,
                { className: "form__edit-headline" },
                "First name"
              ),
              n.a.createElement(
                _.a,
                null,
                n.a.createElement(g.a, {
                  name: "first_name",
                  errorMessage: m.first_nameErrorValid
                    ? m.first_nameErrorValid
                    : ""
                })
              )
            ),
            n.a.createElement(
              _.a,
              null,
              n.a.createElement(
                h.a,
                { className: "form__edit-headline" },
                "Last name"
              ),
              n.a.createElement(
                _.a,
                null,
                n.a.createElement(g.a, {
                  name: "last_name",
                  errorMessage: m.last_nameErrorValid
                    ? m.last_nameErrorValid
                    : ""
                })
              )
            ),
            n.a.createElement(
              _.a,
              null,
              n.a.createElement(
                h.a,
                { className: "form__edit-headline" },
                "password"
              ),
              n.a.createElement(g.a, {
                name: "password",
                errorMessage: m.passwordErrorValid ? m.passwordErrorValid : "",
                type: "password"
              }),
              n.a.createElement(
                h.a,
                { className: "form__edit-headline" },
                "Confirm password"
              ),
              n.a.createElement(g.a, {
                name: "confirmpassword",
                errorMessage: m.confirmpasswordErrorValid
                  ? m.confirmpasswordErrorValid
                  : "",
                type: "password"
              })
            ),
            !!r &&
              n.a.createElement(O.a, {
                className: "login-form__login-error",
                type: "error",
                description: r.message
              }),
            n.a.createElement(
              _.a,
              null,
              n.a.createElement(
                w.a,
                null,
                n.a.createElement(
                  j.a,
                  {
                    className: "toolbar__button",
                    color: "green",
                    appearance: "primary",
                    onClick: function () {
                      if ((S(m), p(o))) {
                        var r = R(o);
                        e({ type: "ADD_USER", addUserForm: r });
                      }
                    }
                  },
                  "Save"
                ),
                n.a.createElement(
                  j.a,
                  {
                    className: "toolbar__button",
                    onClick: function () {
                      return e({ type: "CLOSE_MODAL" });
                    }
                  },
                  "Cancel"
                )
              )
            )
          );
        },
        de = function () {
          var e = Object(c.b)();
          e({
            type: "RESET_USERS_ERRORS",
            errors: ["addUserError", "removeUserError", "changeUserError"]
          });
          var r = Object(c.c)(function (e) {
              return e.modalReducer.modal;
            }),
            a = { DELETE: "Delete user", EDIT: "Edit user", ADD: "Add user" }[
              r.formType
            ],
            t = { DELETE: "xs", EDIT: "sm", ADD: "sm" }[r.formType];
          return n.a.createElement(
            oe.a,
            {
              size: t,
              centered: !0,
              show: r.show,
              onHide: function () {
                return e({ type: "CLOSE_MODAL" });
              }
            },
            n.a.createElement(
              oe.a.Header,
              null,
              n.a.createElement(oe.a.Title, null, a)
            ),
            n.a.createElement(
              oe.a.Body,
              null,
              n.a.createElement(
                function (e) {
                  switch (e.formType) {
                    case "EDIT":
                      return n.a.createElement(ie, null);
                    case "DELETE":
                      return n.a.createElement(ue, null);
                    case "ADD":
                      return n.a.createElement(me, null);
                    default:
                      return null;
                  }
                },
                { formType: r.formType }
              )
            )
          );
        },
        Ee = function () {
          var e = Object(c.b)(),
            r = Object(c.c)(function (e) {
              return e.usersReducer.user;
            });
          return (
            Object(t.useEffect)(
              function () {
                r && !r.name && e({ type: "LOAD_USER_FROM_STORAGE" });
              },
              [r]
            ),
            n.a.createElement(
              "div",
              { className: "sidebar-page" },
              n.a.createElement(
                i.a,
                null,
                n.a.createElement(Y, null),
                n.a.createElement(
                  i.a,
                  null,
                  n.a.createElement(
                    U.a,
                    null,
                    n.a.createElement("h2", null, "Users page")
                  ),
                  n.a.createElement(
                    u.a,
                    { className: "content" },
                    n.a.createElement(se, null)
                  )
                ),
                n.a.createElement(de, null)
              )
            )
          );
        },
        pe = a(75),
        fe = a(408),
        be = a(21),
        Oe = a.n(be),
        _e = a(23);
      a(380);
      function he(e) {
        return (
          console.log(e),
          fetch(D, {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: { "Content-Type": "application/json" },
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: JSON.stringify({
              id: e.id,
              timeStart: e.range[0],
              timeEnd: e.range[1],
              changeInterval: e.changeInterval
            })
          }).then(function (e) {
            if (!e.ok) throw { status: e.status, message: "Server Error" };
            return e.json();
          })
        );
      }
      function ge(e) {
        return fetch(C, {
          method: "POST",
          mode: "cors",
          cache: "no-cache",
          credentials: "same-origin",
          headers: { "Content-Type": "application/json" },
          redirect: "follow",
          referrerPolicy: "no-referrer",
          body: JSON.stringify(e)
        }).then(function (e) {
          if (401 === e.status)
            throw { status: e.status, message: "Wrong username or password" };
          if (!e.ok) throw { status: e.status, message: "Server error" };
          return e.json();
        });
      }
      function we() {
        return fetch(N, {
          method: "GET",
          mode: "cors",
          cache: "no-cache",
          credentials: "same-origin",
          headers: { "Content-Type": "application/json" },
          redirect: "follow",
          referrerPolicy: "no-referrer"
        }).then(function (e) {
          if (!e.ok) throw { status: e.status, message: "Server error" };
          return e.json();
        });
      }
      function je() {
        return fetch(T, {
          method: "GET",
          mode: "cors",
          cache: "no-cache",
          credentials: "same-origin",
          headers: { "Content-Type": "application/json" },
          redirect: "follow",
          referrerPolicy: "no-referrer"
        }).then(function (e) {
          if (!e.ok) throw { status: e.status, message: "Server error" };
          return e.json();
        });
      }
      var ve = Oe.a.mark(He),
        Re = Oe.a.mark(Ie),
        Se = Oe.a.mark(Ge),
        ye = Oe.a.mark(Ye),
        De = Oe.a.mark(Be),
        Ce = Oe.a.mark(Pe),
        Ne = Oe.a.mark(Fe),
        Te = Oe.a.mark(Ke),
        Me = Oe.a.mark(ze),
        Ve = Oe.a.mark(Je),
        Ue = Oe.a.mark(We),
        Ae = Oe.a.mark(Ze),
        Le = Oe.a.mark(Xe),
        xe = Oe.a.mark($e),
        ke = Oe.a.mark(qe);
      function He() {
        return Oe.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(_e.d)("AUTH_USER", Ke);
              case 2:
              case "end":
                return e.stop();
            }
        }, ve);
      }
      function Ie() {
        return Oe.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(_e.d)("GET_CLIENT_DATA", ze);
              case 2:
              case "end":
                return e.stop();
            }
        }, Re);
      }
      function Ge() {
        return Oe.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(_e.d)("CHANGE_USER", Ze);
              case 2:
              case "end":
                return e.stop();
            }
        }, Se);
      }
      function Ye() {
        return Oe.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(_e.d)("REMOVE_USER", We);
              case 2:
              case "end":
                return e.stop();
            }
        }, ye);
      }
      function Be() {
        return Oe.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(_e.d)("ADD_USER", Je);
              case 2:
              case "end":
                return e.stop();
            }
        }, De);
      }
      function Pe() {
        return Oe.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(_e.d)("GET_USERS", Xe);
              case 2:
              case "end":
                return e.stop();
            }
        }, Ce);
      }
      function Fe() {
        return Oe.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(_e.d)("GET_CLIENTS", $e);
              case 2:
              case "end":
                return e.stop();
            }
        }, Ne);
      }
      function Ke(e) {
        var r;
        return Oe.a.wrap(
          function (a) {
            for (;;)
              switch ((a.prev = a.next)) {
                case 0:
                  return (
                    (a.prev = 0), (a.next = 3), Object(_e.b)(ge, e.loginForm)
                  );
                case 3:
                  return (
                    ((r = a.sent).url = M),
                    (a.next = 7),
                    Object(_e.c)({ type: "SET_USER", user: r })
                  );
                case 7:
                  ur.push(M), (a.next = 14);
                  break;
                case 10:
                  return (
                    (a.prev = 10),
                    (a.t0 = a.catch(0)),
                    (a.next = 14),
                    Object(_e.c)({ type: "LOGIN_ERROR", error: a.t0 })
                  );
                case 14:
                case "end":
                  return a.stop();
              }
          },
          Te,
          null,
          [[0, 10]]
        );
      }
      function ze(e) {
        var r;
        return Oe.a.wrap(
          function (a) {
            for (;;)
              switch ((a.prev = a.next)) {
                case 0:
                  return (a.prev = 0), (a.next = 3), Object(_e.b)(he, e.params);
                case 3:
                  return (
                    (r = a.sent),
                    (a.next = 6),
                    Object(_e.c)({ type: "LOAD_CLIENT_DATA", clientData: r })
                  );
                case 6:
                  a.next = 12;
                  break;
                case 8:
                  return (
                    (a.prev = 8),
                    (a.t0 = a.catch(0)),
                    (a.next = 12),
                    Object(_e.c)({ type: "GET_CLIENT_DATA_ERROR", error: a.t0 })
                  );
                case 12:
                case "end":
                  return a.stop();
              }
          },
          Me,
          null,
          [[0, 8]]
        );
      }
      function Je(e) {
        return Oe.a.wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (e.prev = 0),
                    (e.next = 3),
                    Object(_e.c)({ type: "GET_USERS" })
                  );
                case 3:
                  return (e.next = 5), Object(_e.c)({ type: "CLOSE_MODAL" });
                case 5:
                  e.next = 12;
                  break;
                case 7:
                  return (
                    (e.prev = 7),
                    (e.t0 = e.catch(0)),
                    console.log(e.t0),
                    (e.next = 12),
                    Object(_e.c)({ type: "ADD_USER_ERROR", error: e.t0 })
                  );
                case 12:
                case "end":
                  return e.stop();
              }
          },
          Ve,
          null,
          [[0, 7]]
        );
      }
      function We(e) {
        return Oe.a.wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (e.prev = 0),
                    (e.next = 3),
                    Object(_e.c)({ type: "GET_USERS" })
                  );
                case 3:
                  return (e.next = 5), Object(_e.c)({ type: "CLOSE_MODAL" });
                case 5:
                  e.next = 11;
                  break;
                case 7:
                  return (
                    (e.prev = 7),
                    (e.t0 = e.catch(0)),
                    (e.next = 11),
                    Object(_e.c)({ type: "REMOVE_USER_ERROR", error: e.t0 })
                  );
                case 11:
                case "end":
                  return e.stop();
              }
          },
          Ue,
          null,
          [[0, 7]]
        );
      }
      function Ze(e) {
        return Oe.a.wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (e.prev = 0),
                    (e.next = 3),
                    Object(_e.c)({ type: "GET_USERS" })
                  );
                case 3:
                  return (e.next = 5), Object(_e.c)({ type: "CLOSE_MODAL" });
                case 5:
                  e.next = 11;
                  break;
                case 7:
                  return (
                    (e.prev = 7),
                    (e.t0 = e.catch(0)),
                    (e.next = 11),
                    Object(_e.c)({ type: "CHANGE_USER_ERROR", error: e.t0 })
                  );
                case 11:
                case "end":
                  return e.stop();
              }
          },
          Ae,
          null,
          [[0, 7]]
        );
      }
      function Xe() {
        var e;
        return Oe.a.wrap(
          function (r) {
            for (;;)
              switch ((r.prev = r.next)) {
                case 0:
                  return (r.prev = 0), (r.next = 3), Object(_e.b)(we);
                case 3:
                  return (
                    (e = r.sent),
                    (r.next = 6),
                    Object(_e.c)({ type: "UPLOAD_USERS", users: e })
                  );
                case 6:
                  r.next = 12;
                  break;
                case 8:
                  return (
                    (r.prev = 8),
                    (r.t0 = r.catch(0)),
                    (r.next = 12),
                    Object(_e.c)({ type: "GET_USERS_ERROR", error: r.t0 })
                  );
                case 12:
                case "end":
                  return r.stop();
              }
          },
          Le,
          null,
          [[0, 8]]
        );
      }
      function $e() {
        var e;
        return Oe.a.wrap(
          function (r) {
            for (;;)
              switch ((r.prev = r.next)) {
                case 0:
                  return (r.prev = 0), (r.next = 3), Object(_e.b)(je);
                case 3:
                  return (
                    (e = r.sent),
                    (r.next = 6),
                    Object(_e.c)({ type: "UPLOAD_CLIENTS", clients: e })
                  );
                case 6:
                  r.next = 12;
                  break;
                case 8:
                  return (
                    (r.prev = 8),
                    (r.t0 = r.catch(0)),
                    (r.next = 12),
                    Object(_e.c)({ type: "GET_CLIENTS_ERROR", error: r.t0 })
                  );
                case 12:
                case "end":
                  return r.stop();
              }
          },
          xe,
          null,
          [[0, 8]]
        );
      }
      function qe() {
        return Oe.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (e.next = 2),
                  Object(_e.a)([Ie(), He(), Ge(), Ye(), Be(), Pe(), Fe()])
                );
              case 2:
              case "end":
                return e.stop();
            }
        }, ke);
      }
      var Qe = a(116),
        er = {
          users: [],
          user: { name: "", admin: !1, loggedIn: !1, url: null },
          errors: {}
        };
      var rr = new Date();
      rr = rr.setDate(rr.getDate() - 140);
      var ar = new Date();
      ar = ar.setDate(ar.getDate() - 130);
      var tr = {
        clients: [],
        client: {
          clientData: [],
          range: [new Date(rr), new Date(ar)],
          changeInterval: !1,
          name: null
        },
        errors: {}
      };
      var nr = { modal: { type: null, form: null, show: !1 }, errors: {} };
      var cr = Object(pe.c)({
          clientsReducer: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : tr,
              r = arguments.length > 1 ? arguments[1] : void 0;
            switch (r.type) {
              case "GET_CLIENTS":
                return e;
              case "UPLOAD_CLIENTS":
                return (
                  (e.clients = r.clients),
                  (e.client.id = r.clients[0].id),
                  (e.client.name = r.clients[0].name),
                  Object(P.a)(
                    Object(P.a)({}, e),
                    {},
                    {
                      clients: Object(Qe.a)(e.clients),
                      client: Object(P.a)({}, e.client)
                    }
                  )
                );
              case "GET_CLIENTS_ERROR":
                return (e.errors.getClientsError = r.error), Object(P.a)({}, e);
              case "GET_CLIENT_DATA":
                return e;
              case "LOAD_CLIENT_DATA":
                return (
                  (e.client.clientData = r.clientData),
                  Object(P.a)(
                    Object(P.a)({}, e),
                    {},
                    { client: Object(P.a)({}, e.client) }
                  )
                );
              case "GET_CLIENT_DATA_ERROR":
                return (
                  (e.errors.getClientDataError = r.error), Object(P.a)({}, e)
                );
              case "SELECT_CLIENT":
                return (
                  (e.client.id = r.id),
                  Object(P.a)(
                    Object(P.a)({}, e),
                    {},
                    { client: Object(P.a)({}, e.client) }
                  )
                );
              case "RESET_CLIENTS_ERRORS":
                var a,
                  t = Object(B.a)(r.errors);
                try {
                  for (t.s(); !(a = t.n()).done; ) {
                    var n = a.value;
                    e.errors[n] = "";
                  }
                } catch (c) {
                  t.e(c);
                } finally {
                  t.f();
                }
                return Object(P.a)(
                  Object(P.a)({}, e),
                  {},
                  { errors: Object(P.a)({}, e.errors) }
                );
              case "CHANGE_INTERVAL":
                return (
                  (e.client.changeInterval = r.change),
                  Object(P.a)(
                    Object(P.a)({}, e),
                    {},
                    { client: Object(P.a)({}, e.client) }
                  )
                );
              case "CHANGE_RANGE":
                return (
                  (e.client.range = r.range),
                  Object(P.a)(
                    Object(P.a)({}, e),
                    {},
                    { client: Object(P.a)({}, e.client) }
                  )
                );
              default:
                return e;
            }
          },
          usersReducer: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : Object(P.a)({}, er),
              r = arguments.length > 1 ? arguments[1] : void 0;
            switch (r.type) {
              case "ADD_USER":
                return e;
              case "UPLOAD_USER":
                return (
                  e.users.push(r.user),
                  Object(P.a)(
                    Object(P.a)({}, e),
                    {},
                    { users: Object(Qe.a)(e.users) }
                  )
                );
              case "ADD_USER_ERROR":
                return (e.errors.addUserError = r.error), Object(P.a)({}, e);
              case "REMOVE_USER":
                return Object(P.a)(Object(P.a)({}, e), {}, { errors: {} });
              case "UNLOAD_USER":
                return (
                  (e.users = e.users.filter(function (e) {
                    return e.id !== r.id;
                  })),
                  Object(P.a)(
                    Object(P.a)({}, e),
                    {},
                    { users: Object(Qe.a)(e.users) }
                  )
                );
              case "REMOVE_USER_ERROR":
                return (e.errors.removeUserError = r.error), Object(P.a)({}, e);
              case "AUTH_USER":
                return { state: e, errors: {} };
              case "SET_USER":
                return (
                  localStorage.setItem("user", JSON.stringify(r.user)),
                  Object(P.a)(Object(P.a)({}, e), {}, { user: r.user })
                );
              case "USER_REDIRECT":
                return (
                  e.user && (e.user.url = r.url),
                  ur.push(r.url),
                  Object(P.a)(Object(P.a)({}, e), {}, { user: e.user })
                );
              case "LOGIN_ERROR":
                return (e.errors.authError = r.error), Object(P.a)({}, e);
              case "LOAD_USER_FROM_STORAGE":
                return (
                  (e.user = JSON.parse(localStorage.getItem("user"))),
                  e.user
                    ? (e.user.url = window.location.href.replace(y, ""))
                    : ur.push("/"),
                  Object(P.a)({}, e)
                );
              case "LOGOUT":
                return (
                  localStorage.removeItem("user"),
                  (e.user = er.user),
                  ur.push("/"),
                  Object(P.a)({}, e)
                );
              case "GET_USERS":
                return Object(P.a)(Object(P.a)({}, e), {}, { errors: {} });
              case "UPLOAD_USERS":
                return (
                  (e.users = r.users),
                  Object(P.a)(
                    Object(P.a)({}, e),
                    {},
                    { users: Object(Qe.a)(e.users) }
                  )
                );
              case "GET_USERS_ERROR":
                return (e.errors.getUsersError = r.error), Object(P.a)({}, e);
              case "CHANGE_USER":
                return Object(P.a)(Object(P.a)({}, e), {}, { errors: {} });
              case "REFRESH_USER":
                return (
                  (e.users = e.users.map(function (e) {
                    return e.id === r.user.id && (e = r.user), e;
                  })),
                  Object(P.a)(
                    Object(P.a)({}, e),
                    {},
                    { users: Object(Qe.a)(e.users) }
                  )
                );
              case "CHANGE_USER_ERROR":
                return (e.errors.changeUserError = r.error), Object(P.a)({}, e);
              case "RESET_USERS_ERRORS":
                var a,
                  t = Object(B.a)(r.errors);
                try {
                  for (t.s(); !(a = t.n()).done; ) {
                    var n = a.value;
                    e.errors[n] = "";
                  }
                } catch (c) {
                  t.e(c);
                } finally {
                  t.f();
                }
                return Object(P.a)(
                  Object(P.a)({}, e),
                  {},
                  { errors: Object(P.a)({}, e.errors) }
                );
              default:
                return e;
            }
          },
          modalReducer: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : nr,
              r = arguments.length > 1 ? arguments[1] : void 0;
            switch (r.type) {
              case "OPEN_MODAL":
                return (
                  (e.modal.formType = r.formType),
                  (e.modal.form = r.form),
                  (e.modal.show = !0),
                  Object(P.a)(
                    Object(P.a)({}, e),
                    {},
                    { modal: Object(P.a)({}, e.modal) }
                  )
                );
              case "CLOSE_MODAL":
                return (
                  (e.modal.show = !1),
                  Object(P.a)(
                    Object(P.a)({}, e),
                    {},
                    { modal: Object(P.a)({}, e.modal) }
                  )
                );
              default:
                return e;
            }
          }
        }),
        sr = Object(fe.a)(),
        or = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || pe.d,
        lr = Object(pe.e)(cr, or(Object(pe.a)(sr)));
      sr.run(qe);
      var ir = lr;
      a.d(r, "history", function () {
        return ur;
      });
      var ur = Object(Q.a)();
      o.a.render(
        n.a.createElement(
          c.a,
          { store: ir },
          n.a.createElement(
            l.b,
            { history: ur },
            n.a.createElement(
              l.c,
              null,
              n.a.createElement(l.a, { exact: !0, path: "/", component: R }),
              n.a.createElement(l.a, {
                exact: !0,
                path: "/users",
                component: Ee
              }),
              n.a.createElement(l.a, { path: "/statistics", component: q })
            )
          )
        ),
        document.getElementById("root")
      );
    }
  },
  [[411, 1, 2]]
]);
//# sourceMappingURL=main.d912a2cd.chunk.js.map
