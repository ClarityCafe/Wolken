# API Documentation

<a name="Handler"></a>

## Wolken

Weeb.sh handler

**Kind**: Global Class
**Properties**:

| Name | Type | Description |
| --- | --- | --- |
| key | ``String`` | API Key |
| options | ``Object`` | various query options |
| options.allowHidden | ``Boolean`` | allow hidden images to be displayed.|
| options.allowNSFW | ``Boolean`` or ``String`` | Whether to allow NSFW results. If this is a string, it should be "only". |

* [Wolken](#Wolken)
    * [new Wolken(key, [options])](#new_Wolken_new)
    * [.getSauce(file)](#Wolken+getRandom) ⇒ <code>Promise.&lt;Array.&lt;Object&gt;&gt;</code>

<a name="new_Wolken_new"></a>

 ### new Wolken(key, {options})

| Param | Type | Description |
| --- | --- | --- |
| key | ``String`` | API Key |
| options | ``Object`` | various query options |
| options.allowHidden | ``Boolean`` | allow hidden images to be displayed.|
| options.allowNSFW | ``Boolean`` or ``String`` | Whether to allow NSFW results. If this is a string, it should be "only". |

<a name="Wolken+getRandom"></a>

gets a random image from the API

**Kind**: Instance method of [``Wolken``](#Wolken)
**Returns**: <code>Promise.&lt;Array.&lt;Object&gt;&gt;</code> 

| Param | Type | Description |
| --- | --- | --- |
| options | ``Object`` | Options to pass to the query. |
| options.type | ``String`` | Category of the image to get. Either this or `options.tags` are required. |
| options.tags | ``Array<String>`` | Tags that the image should have. |
| options.filetype | ``String`` |  The filetype the image should be. |
