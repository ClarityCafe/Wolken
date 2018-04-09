# API Documentation

<a name="Handler"></a>

## Handler
Weeb.sh handler

**Kind**: global class  

* [Handler](#Handler)
    * [new Handler(key, [keyType], [userAgent])](#new_Handler_new)
    * [.getTags([hidden])](#Handler+getTags) ⇒ <code>Promise.&lt;Array.&lt;String&gt;&gt;</code>
    * [.getTypes([hidden])](#Handler+getTypes) ⇒ <code>Promise.&lt;Array.&lt;String&gt;&gt;</code>
    * [.getInfo()](#Handler+getInfo) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.getRandom(options)](#Handler+getRandom) ⇒ <code>Promise.&lt;Object&gt;</code>

<a name="new_Handler_new"></a>

### new Handler(key, [keyType], [userAgent])

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| key | <code>String</code> |  | your API key for weeb.sh |
| [keyType] | <code>String</code> | <code>&#x27;Bearer&#x27;</code> | Type of key you're using. Either 'Bearer' or 'Wolke' |
| [userAgent] | <code>String</code> | <code>&#x27;Wolken/VERSION&#x27;</code> | The User-Agent to use for requests. Should be in the format `BotName/Version` or `BotName/Version/environment` |

<a name="Handler+getTags"></a>

### handler.getTags([hidden]) ⇒ <code>Promise.&lt;Array.&lt;String&gt;&gt;</code>
Gets a list of all the available tags in the API.

**Kind**: instance method of [<code>Handler</code>](#Handler)  
**Returns**: <code>Promise.&lt;Array.&lt;String&gt;&gt;</code> - All the available tags.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [hidden] | <code>Boolean</code> | <code>false</code> | Whether to retrieve hidden tags. |

<a name="Handler+getTypes"></a>

### handler.getTypes([hidden]) ⇒ <code>Promise.&lt;Array.&lt;String&gt;&gt;</code>
Gets a list of all the available types in the API.

**Kind**: instance method of [<code>Handler</code>](#Handler)  
**Returns**: <code>Promise.&lt;Array.&lt;String&gt;&gt;</code> - All the available types.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [hidden] | <code>Boolean</code> | <code>false</code> | Whether to retrieve hidden types. |

<a name="Handler+getInfo"></a>

### handler.getInfo() ⇒ <code>Promise.&lt;Object&gt;</code>
Gets a list of all the available tags in the API.

**Kind**: instance method of [<code>Handler</code>](#Handler)  
**Returns**: <code>Promise.&lt;Object&gt;</code> - Information about the API.  
<a name="Handler+getRandom"></a>

### handler.getRandom(options) ⇒ <code>Promise.&lt;Object&gt;</code>
Get's a random image from the API.

**Kind**: instance method of [<code>Handler</code>](#Handler)  
**Returns**: <code>Promise.&lt;Object&gt;</code> - .  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | Options to pass to the API. |
| options.type | <code>String</code> | Category of the image to get. Either this or `options.tags` are required. |
| options.tags | <code>Array.&lt;String&gt;</code> | Tags that the image should have. Either this or `options.type` are required. |
| [options.allowNSFW] | <code>Boolean</code> \| <code>String</code> | Whether to allow NSFW results. If this is a string, it should be 'only'. |
| [options.hidden] | <code>Boolean</code> | Whether to allow hidden results. |
| [options.filetype] | <code>String</code> | The filetype the image should be. |

