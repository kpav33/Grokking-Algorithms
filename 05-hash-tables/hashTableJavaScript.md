# Hash tables in JavaScript

Most commonly used implementation of hash tables in JavaScript are *[Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)*. One can think of an Object as an associative array (a.k.a. map, dictionary, hash, lookup table). The keys in this array are the names of the Object's properties.<sup><cite>[1][1]</cite></sup>

However while we can say that in JavaScript Objects are real hash tables, so the complexity on search is O(1), but the way they are implemented internally depends from the browser's JavaScript engine (V8, SpiderMonkey, JScript.dll, etc...).<sup><cite>[2][2]</cite></sup> Despite many articles that would claim that Objects are not hashes they very much behave like hashes, and therefore could be used as such.<sup><cite>[3][3]</cite></sup> For example V8 (Chrome JavaScript engine) implements Objects properties using hidden classes.<sup><cite>[4][4]</cite></sup>

To learn more about how V8 engine implements Objects, here is an [in depth description how V8 handles JavaScript properties internally](https://v8.dev/blog/fast-properties).

A more "pure" implementation of hash tables in JavaScript are *[Maps](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)*. The ECMAScript specification says that Maps must be implemented using either hash tables or other mechanisms that, on average, provide access times that are sublinear on the number of elements in the collection.<sup><cite>[5][5]</cite></sup>

Object is similar to Map. Both let you set keys to values, retrieve those values, delete keys, and detect whether something is stored at a key. For this reason (and because there were no built-in alternatives), Object has been used as Map historically. [However, there are important differences that make Map preferable in some cases, which can be read on MDN docs Map page](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#objects_vs._maps).

[1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors#description
[2]: https://stackoverflow.com/questions/8877666/how-is-a-javascript-hash-map-implemented
[3]: https://stackoverflow.com/questions/12241676/javascript-objects-as-hashes-is-the-complexity-greater-than-o1
[4]: https://www.quora.com/Are-JavaScript-Objects-implemented-as-HashTables-Is-key-value-access-O-1
[5]: https://tc39.es/ecma262/#sec-map-objects