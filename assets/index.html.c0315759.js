import{_ as d,o as n,c as o,a as t,b as s,w as i,e as c,d as e,r}from"./app.360cc31a.js";const l={},p=c(`<h1 id="misskey-api" tabindex="-1"><a class="header-anchor" href="#misskey-api" aria-hidden="true">#</a> Misskey API</h1><p>Misskey\u306FAPI\u3092\u516C\u958B\u3057\u3066\u3044\u307E\u3059\u3002API\u3092\u4F7F\u3063\u3066Misskey\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u3001Misskey\u9023\u643AWeb\u30B5\u30FC\u30D3\u30B9\u3001Bot\u7B49(\u4EE5\u4E0B\u300C\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u300D\u3068\u547C\u3073\u307E\u3059)\u3092\u958B\u767A\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u30B9\u30C8\u30EA\u30FC\u30DF\u30F3\u30B0API\u3082\u3042\u308B\u306E\u3067\u3001\u30EA\u30A2\u30EB\u30BF\u30A4\u30E0\u6027\u306E\u3042\u308B\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u4F5C\u308B\u3053\u3068\u3082\u53EF\u80FD\u3067\u3059\u3002</p><div class="custom-container tip"><i class="fas fa-info"></i><p>Misskey\u516C\u5F0FSDK\u3084\u30B5\u30FC\u30C9\u30D1\u30FC\u30C6\u30A3\u30E9\u30A4\u30D6\u30E9\u30EA\u3092\u4F7F\u3046\u3053\u3068\u306B\u3088\u3063\u3066\u3001\u3053\u306E\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3067\u8AAC\u660E\u3059\u308B\u3044\u304F\u3064\u304B\u306E\u624B\u9806\u3092\u7C21\u7565\u5316\u3067\u304D\u308B\u306A\u3069\u3001\u3088\u308A\u4FBF\u5229\u306BAPI\u3092\u5229\u7528\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002<br> \u30E9\u30A4\u30D6\u30E9\u30EA\u306B\u3064\u3044\u3066\u306F<a href="TODO">\u3053\u3061\u3089</a>\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002</p></div><p>API\u3092\u4F7F\u3044\u59CB\u3081\u308B\u306B\u306F\u3001API\u3092\u5229\u7528\u3059\u308B\u30A2\u30AB\u30A6\u30F3\u30C8\u306B\u7D10\u3065\u3044\u305F<strong>\u30A2\u30AF\u30BB\u30B9\u30C8\u30FC\u30AF\u30F3</strong>\u3092\u53D6\u5F97\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 \u3053\u306E\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u3067\u306F\u3001\u30A2\u30AF\u30BB\u30B9\u30C8\u30FC\u30AF\u30F3\u3092\u53D6\u5F97\u3059\u308B\u624B\u9806\u3092\u8AAC\u660E\u3057\u305F\u5F8C\u3001\u57FA\u672C\u7684\u306AAPI\u306E\u4F7F\u3044\u65B9\u3092\u8AAC\u660E\u3057\u307E\u3059\u3002</p><h2 id="\u30A2\u30AF\u30BB\u30B9\u30C8\u30FC\u30AF\u30F3\u306E\u53D6\u5F97" tabindex="-1"><a class="header-anchor" href="#\u30A2\u30AF\u30BB\u30B9\u30C8\u30FC\u30AF\u30F3\u306E\u53D6\u5F97" aria-hidden="true">#</a> \u30A2\u30AF\u30BB\u30B9\u30C8\u30FC\u30AF\u30F3\u306E\u53D6\u5F97</h2><p>\u57FA\u672C\u7684\u306B\u3001API\u306F\u30EA\u30AF\u30A8\u30B9\u30C8\u306B\u306F\u30A2\u30AF\u30BB\u30B9\u30C8\u30FC\u30AF\u30F3\u304C\u5FC5\u8981\u3068\u306A\u308A\u307E\u3059\u3002 \u30A2\u30AF\u30BB\u30B9\u30C8\u30FC\u30AF\u30F3\u306F\u3001\u30E6\u30FC\u30B6\u30FC\u306B\u7D10\u3065\u3044\u305F\u8A8D\u8A3C\u60C5\u5831\u3067\u3001API\u3092\u5229\u7528\u3059\u308B\u30E6\u30FC\u30B6\u30FC\u3092\u8B58\u5225\u3059\u308B\u3068\u3068\u3082\u306B\u3001\u30A2\u30AF\u30BB\u30B9\u30C8\u30FC\u30AF\u30F3\u3054\u3068\u306B\u3069\u3046\u3044\u3063\u305F\u64CD\u4F5C\u306E\u6A29\u9650\u3092\u6301\u3063\u3066\u3044\u308B\u304B\u304C\u7BA1\u7406\u3055\u308C\u307E\u3059\u3002</p><div class="custom-container tip"><i class="fas fa-info"></i><p>\u30E6\u30FC\u30B6\u30FC\u3068\u305D\u306E\u30E6\u30FC\u30B6\u30FC\u306B\u7D10\u3065\u3044\u305F\u30A2\u30AF\u30BB\u30B9\u30C8\u30FC\u30AF\u30F3\u306F\u4E00\u5BFE\u591A\u306E\u95A2\u4FC2\u3067\u3042\u308A\u3001\u3042\u308B\u30E6\u30FC\u30B6\u30FC\u306B\u5BFE\u3057\u3066\u8907\u6570\u306E\u30A2\u30AF\u30BB\u30B9\u30C8\u30FC\u30AF\u30F3\u304C\u767A\u884C\u3055\u308C\u5F97\u307E\u3059\u3002</p></div><p>\u3042\u306A\u305F\u81EA\u5206\u81EA\u8EAB\u306E\u30A2\u30AF\u30BB\u30B9\u30C8\u30FC\u30AF\u30F3\u306F\u7C21\u5358\u306B\u53D6\u5F97\u3067\u304D\u308B\u307B\u304B\u3001\u3042\u306A\u305F\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u306B\u306A\u308B\u4E0D\u7279\u5B9A\u306E\u30E6\u30FC\u30B6\u30FC\u306E\u30A2\u30AF\u30BB\u30B9\u30C8\u30FC\u30AF\u30F3\u3092\u53D6\u5F97\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002</p><ul><li>\u524D\u8005\u306E\u5834\u5408: <strong>\u300C\u81EA\u5206\u81EA\u8EAB\u306E\u30A2\u30AF\u30BB\u30B9\u30C8\u30FC\u30AF\u30F3\u3092\u624B\u52D5\u767A\u884C\u3059\u308B\u300D</strong> \u306B\u9032\u3080</li><li>\u5F8C\u8005\u306E\u5834\u5408: <strong>\u300C\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u5229\u7528\u8005\u306B\u30A2\u30AF\u30BB\u30B9\u30C8\u30FC\u30AF\u30F3\u306E\u767A\u884C\u3092\u30EA\u30AF\u30A8\u30B9\u30C8\u3059\u308B\u300D</strong> \u306B\u9032\u3080</li></ul><h3 id="\u81EA\u5206\u81EA\u8EAB\u306E\u30A2\u30AF\u30BB\u30B9\u30C8\u30FC\u30AF\u30F3\u3092\u624B\u52D5\u767A\u884C\u3059\u308B" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5206\u81EA\u8EAB\u306E\u30A2\u30AF\u30BB\u30B9\u30C8\u30FC\u30AF\u30F3\u3092\u624B\u52D5\u767A\u884C\u3059\u308B" aria-hidden="true">#</a> \u81EA\u5206\u81EA\u8EAB\u306E\u30A2\u30AF\u30BB\u30B9\u30C8\u30FC\u30AF\u30F3\u3092\u624B\u52D5\u767A\u884C\u3059\u308B</h3><p>Misskey Web\u306E\u300C\u8A2D\u5B9A &gt; API\u300D\u3067\u3001\u81EA\u5206\u306E\u30A2\u30AF\u30BB\u30B9\u30C8\u30FC\u30AF\u30F3\u3092\u767A\u884C\u3067\u304D\u307E\u3059\u3002</p><div class="custom-container danger"><i class="fas fa-times"></i><p>\u30A2\u30AF\u30BB\u30B9\u30C8\u30FC\u30AF\u30F3\u306F\u4ED6\u4EBA\u306B\u77E5\u3089\u308C\u306A\u3044\u3088\u3046\u306B\u3057\u3066\u304F\u3060\u3055\u3044\u3002</p></div><h3 id="\u30A2\u30D5\u309A\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u5229\u7528\u8005\u306B\u30A2\u30AF\u30BB\u30B9\u30C8\u30FC\u30AF\u30F3\u306E\u767A\u884C\u3092\u30EA\u30AF\u30A8\u30B9\u30C8\u3059\u308B" tabindex="-1"><a class="header-anchor" href="#\u30A2\u30D5\u309A\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u5229\u7528\u8005\u306B\u30A2\u30AF\u30BB\u30B9\u30C8\u30FC\u30AF\u30F3\u306E\u767A\u884C\u3092\u30EA\u30AF\u30A8\u30B9\u30C8\u3059\u308B" aria-hidden="true">#</a> \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u5229\u7528\u8005\u306B\u30A2\u30AF\u30BB\u30B9\u30C8\u30FC\u30AF\u30F3\u306E\u767A\u884C\u3092\u30EA\u30AF\u30A8\u30B9\u30C8\u3059\u308B</h3><p>\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3092\u5229\u7528\u3059\u308B\u30E6\u30FC\u30B6\u30FC(\u4EE5\u4E0B\u5358\u306B\u300C\u30E6\u30FC\u30B6\u30FC\u300D\u3068\u547C\u3073\u307E\u3059)\u306E\u30A2\u30AF\u30BB\u30B9\u30C8\u30FC\u30AF\u30F3\u3092\u53D6\u5F97\u3059\u308B\u306B\u306F\u3001\u4EE5\u4E0B\u306E\u624B\u9806\u3067\u767A\u884C\u3092\u30EA\u30AF\u30A8\u30B9\u30C8\u3057\u307E\u3059\u3002</p><h4 id="step-1" tabindex="-1"><a class="header-anchor" href="#step-1" aria-hidden="true">#</a> Step 1</h4><p>UUID\u3092\u751F\u6210\u3059\u308B\u3002\u4EE5\u5F8C\u3053\u308C\u3092<strong>\u30BB\u30C3\u30B7\u30E7\u30F3ID</strong>\u3068\u547C\u3073\u307E\u3059\u3002</p><div class="custom-container danger"><i class="fas fa-times"></i><p>\u3053\u306E\u30BB\u30C3\u30B7\u30E7\u30F3ID\u306F\u6BCE\u56DE\u751F\u6210\u3057\u3001\u4F7F\u3044\u307E\u308F\u3055\u306A\u3044\u3088\u3046\u306B\u3057\u3066\u304F\u3060\u3055\u3044\u3002</p></div><h4 id="step-2" tabindex="-1"><a class="header-anchor" href="#step-2" aria-hidden="true">#</a> Step 2</h4><p>\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u8A8D\u8A3C\u30D5\u30A9\u30FC\u30E0\u3092\u30E6\u30FC\u30B6\u30FC\u306E\u30D6\u30E9\u30A6\u30B6\u3067\u8868\u793A\u3055\u305B\u308B\u3002\u8A8D\u8A3C\u30D5\u30A9\u30FC\u30E0\u306F\u3001\u4EE5\u4E0B\u306E\u5F62\u5F0F\u306EURL\u3067\u958B\u304F\u3053\u3068\u304C\u3067\u304D\u307E\u3059:</p><div class="language-text ext-text"><pre class="language-text"><code>https://{host}/miauth/{session}
</code></pre></div><p>\u3053\u3053\u3067\u3001</p><ul><li><code>{host}</code>\u306E\u90E8\u5206\u306F\u3001\u30E6\u30FC\u30B6\u30FC\u306E\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u306E\u30DB\u30B9\u30C8\u306B\u7F6E\u304D\u63DB\u3048\u307E\u3059\u3002\u901A\u5E38\u30DB\u30B9\u30C8\u306F\u30E6\u30FC\u30B6\u30FC\u304C\u5165\u529B\u3057\u307E\u3059\u3002</li><li><code>{session}</code>\u306E\u90E8\u5206\u306F\u3001\u30BB\u30C3\u30B7\u30E7\u30F3ID\u306B\u7F6E\u304D\u63DB\u3048\u307E\u3059\u3002</li></ul><p>\u307E\u305F\u3001URL\u306B\u30AF\u30A8\u30EA\u30D1\u30E9\u30E1\u30FC\u30BF\u3068\u3057\u3066\u3044\u304F\u3064\u304B\u306E\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u8A2D\u5B9A\u3067\u304D\u307E\u3059:</p><table><thead><tr><th>\u540D\u524D</th><th>\u8AAC\u660E</th></tr></thead><tbody><tr><td><code>name</code></td><td>\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u540D\u3002</td></tr><tr><td><code>icon</code></td><td>\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u30A2\u30A4\u30B3\u30F3\u753B\u50CFURL\u3002</td></tr><tr><td><code>callback</code></td><td>\u8A8D\u8A3C\u304C\u7D42\u308F\u3063\u305F\u5F8C\u306B\u30EA\u30C0\u30A4\u30EC\u30AF\u30C8\u3059\u308BURL\u3002<br>\u30EA\u30C0\u30A4\u30EC\u30AF\u30C8\u6642\u306B\u306F\u3001<code>session</code>\u3068\u3044\u3046\u30AF\u30A8\u30EA\u30D1\u30E9\u30E1\u30FC\u30BF\u3067\u30BB\u30C3\u30B7\u30E7\u30F3ID\u304C\u4ED8\u304D\u307E\u3059\u3002</td></tr><tr><td><code>permission</code></td><td>\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u304C\u8981\u6C42\u3059\u308B\u6A29\u9650\u3002<br>\u8981\u6C42\u3059\u308B\u6A29\u9650\u3092<code>,</code>\u3067\u533A\u5207\u3063\u3066\u5217\u6319\u3057\u307E\u3059\u3002\u6A29\u9650\u306E\u4E00\u89A7\u306F<a href="TODO">\u3053\u3061\u3089</a>\u3067\u78BA\u8A8D\u3067\u304D\u307E\u3059\u3002</td></tr></tbody></table><div class="custom-container tip"><i class="fas fa-info"></i><p class="custom-container-title">\u4F8B</p><div class="language-text ext-text"><pre class="language-text"><code>https://misskey.io/miauth/c1f6d42b-468b-4fd2-8274-e58abdedef6f?name=MyApp&amp;callback=https%3A%2F%2Fmyapp.example.com%2Fcallback&amp;permission=write:notes,write:following,read:drive
</code></pre></div></div><h4 id="step-3" tabindex="-1"><a class="header-anchor" href="#step-3" aria-hidden="true">#</a> Step 3</h4><p>\u30E6\u30FC\u30B6\u30FC\u304C\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u30A2\u30AF\u30BB\u30B9\u3092\u8A31\u53EF\u3057\u305F\u5F8C\u3001\u6B21\u306E\u5F62\u5F0F\u306EURL\u306BPOST\u30EA\u30AF\u30A8\u30B9\u30C8\u3059\u308B\u3068\u3001\u30EC\u30B9\u30DD\u30F3\u30B9\u3068\u3057\u3066\u30A2\u30AF\u30BB\u30B9\u30C8\u30FC\u30AF\u30F3\u3092\u542B\u3080JSON\u304C\u8FD4\u308A\u307E\u3059\u3002</p><div class="language-text ext-text"><pre class="language-text"><code>https://{host}/api/miauth/{session}/check
</code></pre></div><p>\u3053\u3053\u3067\u3001</p><ul><li><code>{host}</code>\u306E\u90E8\u5206\u306F\u3001\u30E6\u30FC\u30B6\u30FC\u306E\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u306E\u30DB\u30B9\u30C8\u306B\u7F6E\u304D\u63DB\u3048\u307E\u3059\u3002</li><li><code>{session}</code>\u306E\u90E8\u5206\u306F\u3001\u30BB\u30C3\u30B7\u30E7\u30F3ID\u306B\u7F6E\u304D\u63DB\u3048\u307E\u3059\u3002</li></ul><p>\u30EC\u30B9\u30DD\u30F3\u30B9\u306B\u542B\u307E\u308C\u308B\u30D7\u30ED\u30D1\u30C6\u30A3\u306F\u4EE5\u4E0B\u306E\u901A\u308A\u3067\u3059:</p><table><thead><tr><th>\u540D\u524D</th><th>\u8AAC\u660E</th></tr></thead><tbody><tr><td><code>token</code></td><td>\u30E6\u30FC\u30B6\u30FC\u306E\u30A2\u30AF\u30BB\u30B9\u30C8\u30FC\u30AF\u30F3\u3002</td></tr><tr><td><code>user</code></td><td>\u30E6\u30FC\u30B6\u30FC\u306E\u60C5\u5831\u3002</td></tr></tbody></table><h2 id="api\u306E\u5229\u7528" tabindex="-1"><a class="header-anchor" href="#api\u306E\u5229\u7528" aria-hidden="true">#</a> API\u306E\u5229\u7528</h2><p>\u30A2\u30AF\u30BB\u30B9\u30C8\u30FC\u30AF\u30F3\u304C\u53D6\u5F97\u3067\u304D\u305F\u3089\u3001\u5404\u7A2E\u30A8\u30F3\u30C9\u30DD\u30A4\u30F3\u30C8\u306B\u30EA\u30AF\u30A8\u30B9\u30C8\u3059\u308B\u3053\u3068\u3067API\u306E\u5229\u7528\u304C\u884C\u3048\u307E\u3059\u3002</p><div class="custom-container tip"><i class="fas fa-info"></i><ul><li>HTTP API\u306F\u3059\u3079\u3066POST\u3067\u3001\u30EA\u30AF\u30A8\u30B9\u30C8/\u30EC\u30B9\u30DD\u30F3\u30B9\u3068\u3082\u306BJSON\u5F62\u5F0F\u3067\u3059\uFF08drive/files/create\u3092\u9664\u304F\uFF09\u3002</li><li>\u8981\u6C42\u30D8\u30C3\u30C0\u30FC\u306B<code>Content-Type: application/json</code>\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002</li><li>\u30A2\u30AF\u30BB\u30B9\u30C8\u30FC\u30AF\u30F3\u306F\u3001<code>i</code>\u3068\u3044\u3046\u30D1\u30E9\u30E1\u30FC\u30BF\u540D\u3067\u30EA\u30AF\u30A8\u30B9\u30C8\u30DC\u30C7\u30A3JSON\u306B\u542B\u3081\u307E\u3059\u3002</li></ul></div><p>\u30A2\u30AF\u30BB\u30B9\u30C8\u30FC\u30AF\u30F3\u4ED8\u304D\u306E\u30DC\u30C7\u30A3\u306E\u4F8B\uFF08meta\u306E\u5834\u5408\uFF09:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;i&quot;</span><span class="token operator">:</span> <span class="token string">&quot;HogEFugA1341&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;detail&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,37),h=e("API\u306E\u8A73\u7D30\u306F\u3001"),u=e("API\u30EA\u30D5\u30A1\u30EC\u30F3\u30B9"),f=e("\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002"),m=t("div",{class:"custom-container warning"},[t("i",{class:"fas fa-exclamation"}),t("p",null,"Misskey\u306FREST\u3092\u63A1\u7528\u3057\u3066\u3044\u307E\u305B\u3093\u3002")],-1),v=e("\u307E\u305F\u3001Misskey\u306FHTTP API\u3060\u3051\u3067\u306A\u304F\u3001\u30B9\u30C8\u30EA\u30FC\u30DF\u30F3\u30B0API\u3082\u63D0\u4F9B\u3057\u3066\u3044\u307E\u3059\u3002\u30B9\u30C8\u30EA\u30FC\u30DF\u30F3\u30B0API\u306E\u8A73\u7D30\u306F"),b=e("\u3053\u3061\u3089\u306E\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8"),g=e("\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002");function _(x,k){const a=r("RouterLink");return n(),o("div",null,[p,t("p",null,[h,s(a,{to:"/docs/api/endpoints.html"},{default:i(()=>[u]),_:1}),f]),m,t("p",null,[v,s(a,{to:"/docs/api/streaming/"},{default:i(()=>[b]),_:1}),g])])}var P=d(l,[["render",_],["__file","index.html.vue"]]);export{P as default};
