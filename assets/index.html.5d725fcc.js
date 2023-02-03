import{_ as i,o as n,c as d,a as e,b as s,w as o,e as c,d as a,r}from"./app.360cc31a.js";const p={},l=c(`<h1 id="misskey-api" tabindex="-1"><a class="header-anchor" href="#misskey-api" aria-hidden="true">#</a> Misskey API</h1><div class="custom-container tip"><i class="fas fa-info"></i><p>\uC774 \uBB38\uC11C\uB294 \uC544\uC9C1 \uAD6D\uBB38\uC73C\uB85C \uBC88\uC5ED\uB418\uC9C0 \uC54A\uC544, \uC77C\uBD80 \uC601\uBB38\uC73C\uB85C \uC81C\uACF5\uB429\uB2C8\uB2E4.</p><p>API \uB808\uD37C\uB7F0\uC2A4\uB294 <a href="/docs/api/endpoints">\uC5EC\uAE30</a>\uB97C \uCC38\uACE0\uD574\uC8FC\uC138\uC694.</p></div><p>Misskey\uB294 \uD074\uB77C\uC774\uC5B8\uD2B8, \uC5F0\uB3D9 \uC6F9 \uC11C\uBE44\uC2A4, \uBD07 \uB4F1(&quot;\uC5B4\uD50C\uB9AC\uCF00\uC774\uC158&quot;\uC774\uB77C \uD569\uB2C8\uB2E4)\uC744 \uAC1C\uBC1C\uD560 \uC218 \uC788\uB3C4\uB85D API\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4. \uC2A4\uD2B8\uB9AC\uBC0D API\uB3C4 \uC81C\uACF5\uD558\uACE0 \uC788\uC5B4, \uC2E4\uC2DC\uAC04 \uD638\uD658\uC131\uC744 \uAC00\uC9C4 \uC5B4\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uC81C\uC791\uD560\uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4.</p><div class="custom-container tip"><i class="fas fa-info"></i><p>\uACF5\uC2DD Misskey SDK\uB098 \uC11C\uB4DC\uD30C\uD2F0 \uB77C\uC774\uBE0C\uB7EC\uB9AC\uB97C \uC774\uC6A9\uD558\uBA74 \uC774 \uBB38\uC11C\uC758 \uBA87\uBA87 \uB2E8\uACC4\uB97C \uAC04\uC18C\uD654\uD558\uB294 \uB4F1 API\uB97C \uB354 \uAC04\uD3B8\uD558\uAC8C \uC774\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. <a href="TODO">\uC5EC\uAE30</a>\uB97C \uD1B5\uD574 \uC790\uC138\uD788 \uC54C\uC544\uBCF4\uC138\uC694.</p></div><p>API\uB97C \uC0AC\uC6A9\uD558\uB824\uBA74, \uBA3C\uC800 API\uB97C \uC0AC\uC6A9\uD558\uB824\uB294 \uACC4\uC815\uACFC \uC5F0\uACB0\uB41C <strong>\uC5D1\uC138\uC2A4 \uD1A0\uD070</strong>\uC744 \uC5BB\uC5B4\uC57C \uD569\uB2C8\uB2E4. \uC774 \uBB38\uC11C\uC5D0\uC11C\uB294 \uC5D1\uC138\uC2A4 \uD1A0\uD070\uC744 \uC5BB\uB294 \uACFC\uC815\uACFC API\uB97C \uD65C\uC6A9\uD558\uB294 \uAE30\uBCF8\uC801\uC778 \uBC29\uBC95\uC744 \uC54C\uC544\uBD05\uB2C8\uB2E4.</p><h2 id="\u110B\u1166\u11A8\u1109\u1166\u1109\u1173-\u1110\u1169\u110F\u1173\u11AB-\u110B\u1165\u11AE\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#\u110B\u1166\u11A8\u1109\u1166\u1109\u1173-\u1110\u1169\u110F\u1173\u11AB-\u110B\u1165\u11AE\u1100\u1175" aria-hidden="true">#</a> \uC5D1\uC138\uC2A4 \uD1A0\uD070 \uC5BB\uAE30</h2><p>API\uB294 \uC77C\uBC18\uC801\uC73C\uB85C \uC694\uCCAD\uC744 \uC0DD\uC131\uD558\uAE30 \uC704\uD574 \uC561\uC138\uC2A4 \uD1A0\uD070\uC774 \uD544\uC694\uD569\uB2C8\uB2E4. \uC561\uC138\uC2A4 \uD1A0\uD070\uC740 \uC0AC\uC6A9\uC790\uB97C \uC2DD\uBCC4\uD558\uACE0 API\uB97C \uD1B5\uD55C \uC791\uC5C5\uC744 \uC81C\uC5B4\uD558\uB294 \uC790\uACA9 \uC99D\uBA85 \uC9D1\uD569\uC785\uB2C8\uB2E4.</p><div class="custom-container tip"><i class="fas fa-info"></i><p>\uC0AC\uC6A9\uC790\uC640 \uC5D1\uC138\uC2A4 \uD1A0\uD070 \uC0AC\uC774\uC5D0\uB294 \uD55C \uAC1C\uC5D0\uC11C \uC5EC\uB7EC \uAC1C\uC758 \uC5F0\uACB0\uC774 \uC874\uC7AC\uD558\uBA70, \uD55C \uC0AC\uC6A9\uC790\uAC00 \uC5EC\uB7EC \uC5D1\uC138\uC2A4 \uD1A0\uD070\uC744 \uC0DD\uC131\uD558\uB294 \uAC83\uB3C4 \uAC00\uB2A5\uD569\uB2C8\uB2E4.</p></div><p>\uC5D1\uC138\uC2A4 \uD1A0\uD070\uC740 \uC190\uC27D\uAC8C <a href="#%EC%97%91%EC%84%B8%EC%8A%A4-%ED%86%A0%ED%81%B0-%EC%88%98%EB%8F%99%EC%9C%BC%EB%A1%9C-%EC%83%9D%EC%84%B1%ED%95%98%EA%B8%B0">\uC9C1\uC811 \uC5BB\uAC70\uB098</a> <a href="#%EC%97%91%EC%84%B8%EC%8A%A4-%ED%86%A0%ED%81%B0-%EC%83%9D%EC%84%B1-%EC%9A%94%EC%B2%AD%ED%95%98%EA%B8%B0">\uC5B4\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uC0AC\uC6A9\uD558\uB824\uB294 \uC720\uC800\uB85C\uBD80\uD130 \uC5BB\uC744</a> \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><h3 id="\u110B\u1166\u11A8\u1109\u1166\u1109\u1173-\u1110\u1169\u110F\u1173\u11AB-\u1109\u116E\u1103\u1169\u11BC\u110B\u1173\u1105\u1169-\u1109\u1162\u11BC\u1109\u1165\u11BC\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#\u110B\u1166\u11A8\u1109\u1166\u1109\u1173-\u1110\u1169\u110F\u1173\u11AB-\u1109\u116E\u1103\u1169\u11BC\u110B\u1173\u1105\u1169-\u1109\u1162\u11BC\u1109\u1165\u11BC\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> \uC5D1\uC138\uC2A4 \uD1A0\uD070 \uC218\uB3D9\uC73C\uB85C \uC0DD\uC131\uD558\uAE30</h3><p>\uC5D1\uC138\uC2A4 \uD1A0\uD070\uC740 Misskey Web\uC758 &#39;\uC124\uC815 &gt; API&#39;\uC5D0\uC11C \uC0DD\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><p>::: \uACBD\uACE0 \uC5D1\uC138\uC2A4 \uD1A0\uD070\uC740 \uB2E4\uB978 \uC0AC\uB78C\uACFC \uACF5\uC720\uD558\uC9C0 \uB9C8\uC2ED\uC2DC\uC624. :::</p><h3 id="\u110B\u1166\u11A8\u1109\u1166\u1109\u1173-\u1110\u1169\u110F\u1173\u11AB-\u1109\u1162\u11BC\u1109\u1165\u11BC-\u110B\u116D\u110E\u1165\u11BC\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#\u110B\u1166\u11A8\u1109\u1166\u1109\u1173-\u1110\u1169\u110F\u1173\u11AB-\u1109\u1162\u11BC\u1109\u1165\u11BC-\u110B\u116D\u110E\u1165\u11BC\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> \uC5D1\uC138\uC2A4 \uD1A0\uD070 \uC0DD\uC131 \uC694\uCCAD\uD558\uAE30</h3><p>\uC5B4\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uC0AC\uC6A9\uC790\uB85C\uBD80\uD130 \uC5D1\uC138\uC2A4 \uD1A0\uD070\uC744 \uC5BB\uC73C\uB824\uBA74, \uB4A4\uC5D0 \uC124\uBA85\uB418\uC5B4 \uC788\uB294 \uBC29\uBC95\uC73C\uB85C \uC694\uCCAD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><h4 id="_1\u1103\u1161\u11AB\u1100\u1168" tabindex="-1"><a class="header-anchor" href="#_1\u1103\u1161\u11AB\u1100\u1168" aria-hidden="true">#</a> 1\uB2E8\uACC4</h4><p>UUID\uB97C \uC0DD\uC131\uD558\uC138\uC694. \uC774 UUID\uB294 \uC55E\uC73C\uB85C <strong>\uC138\uC158 ID</strong>\uB77C \uBD80\uB974\uAC8C \uB429\uB2C8\uB2E4.</p><p>::: \uACBD\uACE0 \uC774 \uC138\uC158 ID\uB294 \uB9E4\uBC88 \uC0DD\uC131\uD574\uC57C \uD558\uBA70, \uC7AC\uC0AC\uC6A9\uB418\uC5B4\uC11C\uB294 \uC548 \uB429\uB2C8\uB2E4. :::</p><h4 id="_2\u1103\u1161\u11AB\u1100\u1168" tabindex="-1"><a class="header-anchor" href="#_2\u1103\u1161\u11AB\u1100\u1168" aria-hidden="true">#</a> 2\uB2E8\uACC4</h4><p>\uC5B4\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uC778\uC99D \uD3FC\uC774 \uC0AC\uC6A9\uC790\uC758 \uBE0C\uB77C\uC6B0\uC800\uC5D0 \uD45C\uC2DC\uB420 \uAC83\uC785\uB2C8\uB2E4. \uC778\uC99D \uD3FC\uC740 \uC774\uB7EC\uD55C URL\uB85C \uD45C\uC2DC\uB420 \uAC83\uC785\uB2C8\uB2E4:</p><div class="language-text ext-text"><pre class="language-text"><code>https://{host}/miauth/{session}
</code></pre></div><p>\uC5EC\uAE30\uC5D0\uC11C</p><ul><li><code>{host}</code>\uB294 \uC0AC\uC6A9\uC790\uC758 \uC778\uC2A4\uD134\uC2A4 \uD638\uC2A4\uD2B8(\uC8FC\uB85C \uC0AC\uC6A9\uC790\uB85C\uBD80\uD130 \uC9C1\uC811 \uC785\uB825\uBC1B\uC2B5\uB2C8\uB2E4)\uC774\uACE0,</li><li><code>{session}</code>\uC740 \uC138\uC158 ID\uC785\uB2C8\uB2E4.</li></ul><p>\uC774 URL\uC758 \uCFFC\uB9AC \uD30C\uB77C\uBBF8\uD130\uB85C \uBA87\uBA87 \uC635\uC158\uC744 \uC9C0\uC815\uD560 \uC218\uB3C4 \uC788\uC2B5\uB2C8\uB2E4:</p><table><thead><tr><th>\uC774\uB984</th><th>\uC124\uBA85</th></tr></thead><tbody><tr><td><code>name</code></td><td>\uC5B4\uD50C\uB9AC\uCF00\uC774\uC158 \uC774\uB984</td></tr><tr><td><code>icon</code></td><td>\uC5B4\uD50C\uB9AC\uCF00\uC774\uC158 \uC544\uC774\uCF58 \uC774\uBBF8\uC9C0 URL</td></tr><tr><td><code>callback</code></td><td>\uC778\uC99D \uD6C4 \uC0AC\uC6A9\uC790\uAC00 \uB3CC\uC544\uAC08 URL\uC785\uB2C8\uB2E4. \uCFFC\uB9AC \uD30C\uB77C\uBBF8\uD130\uB85C <code>session</code>\uC774 \uCD94\uAC00\uB429\uB2C8\uB2E4.</td></tr><tr><td><code>permission</code></td><td>\uC5B4\uD50C\uB9AC\uCF00\uC774\uC158\uC774 \uC694\uCCAD\uD558\uB294 \uAD8C\uD55C\uC785\uB2C8\uB2E4.<br>\uAD8C\uD55C\uC740 <code>,</code>\uB85C \uAD6C\uBD84\uB41C \uBAA9\uB85D\uC73C\uB85C \uC694\uCCAD\uB429\uB2C8\uB2E4. \uAD8C\uD55C \uBAA9\uB85D\uC740 <a href="TODO">\uC5EC\uAE30</a>\uC5D0\uC11C \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</td></tr></tbody></table><p>::: \uC608\uC2DC</p><div class="language-text ext-text"><pre class="language-text"><code>https://misskey.io/miauth/c1f6d42b-468b-4fd2-8274-e58abdedef6f?name=MyApp&amp;callback=https%3A%2F%2Fmyapp.example.com%2Fcallback&amp;permisson=write:notes,write:following,read:drive
</code></pre></div><p>:::</p><h4 id="_3\u1103\u1161\u11AB\u1100\u1168" tabindex="-1"><a class="header-anchor" href="#_3\u1103\u1161\u11AB\u1100\u1168" aria-hidden="true">#</a> 3\uB2E8\uACC4</h4><p>\uC0AC\uC6A9\uC790\uAC00 \uC5B4\uD50C\uB9AC\uCF00\uC774\uC158 \uC5D1\uC138\uC2A4 \uAD8C\uD55C\uC744 \uBD80\uC5EC\uD558\uBA74, \uB2E4\uC74C \uC591\uC2DD\uC73C\uB85C POST \uC694\uCCAD\uC744 \uC804\uC1A1\uD558\uBA74 \uD1A0\uD070\uC774 \uD3EC\uD568\uB41C JSON\uC774 \uC751\uB2F5\uC73C\uB85C \uC804\uC1A1\uB429\uB2C8\uB2E4.</p><div class="language-text ext-text"><pre class="language-text"><code>https://{host}/api/miauth/{session}/check
</code></pre></div><p>\uC5EC\uAE30\uC5D0\uC11C</p><ul><li><code>{host}</code>\uB294 \uC0AC\uC6A9\uC790\uC758 \uC778\uC2A4\uD134\uC2A4\uC774\uBA70</li><li><code>{session}</code>\uC740 \uC138\uC158 ID\uC785\uB2C8\uB2E4.</li></ul><p>\uC751\uB2F5\uC5D0 \uD3EC\uD568\uB41C \uD56D\uBAA9\uC740 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4:</p><table><thead><tr><th>\uC774\uB984</th><th>\uC124\uBA85</th></tr></thead><tbody><tr><td><code>token</code></td><td>\uC0AC\uC6A9\uC790\uC5D0 \uB300\uD55C \uC5D1\uC138\uC2A4 \uD1A0\uD070</td></tr><tr><td><code>user</code></td><td>\uC0AC\uC6A9\uC790 \uC815\uBCF4</td></tr></tbody></table><h2 id="using-the-api" tabindex="-1"><a class="header-anchor" href="#using-the-api" aria-hidden="true">#</a> Using the API</h2><p>Once you have your API access token, you can use the API by making requests to the various endpoints.</p><div class="custom-container tip"><i class="fas fa-info"></i><ul><li>All HTTP APIs are POST, and both request and response are in JSON format (excluding drive/files/create).</li><li>Specify <code>Content-Type: application/json</code> in the request header.</li><li>The access token is included in the request body JSON with the parameter name <code>i</code>.</li></ul></div><p>Example of a body with an access token (for meta):</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;i&quot;</span><span class="token operator">:</span> <span class="token string">&quot;HogEFugA1341&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;detail&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The access token is included in the request body JSON at the parameter <code>i</code>.</p>`,40),h=a("For more information on the API, see the "),u=a("API Reference"),f=a("."),m=e("div",{class:"custom-container warning"},[e("i",{class:"fas fa-exclamation"}),e("p",null,"Misskey does not use REST.")],-1),_=a("In addition to the HTTP API, Misskey also provides a streaming API. More information about the streaming API can be found "),b=a("here"),v=a("."),A=e("div",{class:"custom-container tip"},[e("i",{class:"fas fa-info"}),e("p",null,[a("Your Misskey instance also provides API documentation at "),e("code",null,"/api-doc"),a(".")])],-1);function k(g,x){const t=r("RouterLink");return n(),d("div",null,[l,e("p",null,[h,s(t,{to:"/ko/docs/api/endpoints.html"},{default:o(()=>[u]),_:1}),f]),m,e("p",null,[_,s(t,{to:"/ko/docs/api/streaming/"},{default:o(()=>[b]),_:1}),v]),A])}var I=i(p,[["render",k],["__file","index.html.vue"]]);export{I as default};
