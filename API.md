# API Documentation

<a name="Handler"></a>

## Handler

Weeb.sh handler

**Kind**: Global Class
**Properties**:

| Name | Type | Description |
| --- | --- | --- |
| options | ``Object`` | various query options |
| options.keyType | ``String`` | type of key to use for the API. Can be Wolke or Bearer. |
| options.key | ``String`` | the Authorization key for weeb.sh |

* [Handler](#Handler)
    * [new Handler(key, [options])](#new_Handler_new)
    * [.getRandom(file)](#Handler+getRandom) ⇒ <code>Promise.&lt;Array.&lt;Object&gt;&gt;</code>

<a name="new_Handler_new"></a>

 ### new Handler(key, {options})

| Param | Type | Description |
| --- | --- | --- |
| options | ``Object`` | various query options |
| options.keyType | ``String`` | type of key to use for the API. Can be Wolke or Bearer. |
| options.key | ``String`` | the Authorization key for weeb.sh |

<a name="Handler+getRandom"></a>

### Handler.getRandom({options})

gets a random image from the API

**Kind**: Instance method of [``Handler``](#Handler)
**Returns**: <code>Promise.&lt;Array.&lt;Object&gt;&gt;</code> 

| Param | Type | Description |
| --- | --- | --- |
| options | ``Object`` | Options to pass to the query. |
| options.type | ``String`` | Category of the image to get. Either this or `options.tags` are required. |
| options.tags | ``Array<String>`` | Tags that the image should have. |
| options.allowHidden | ``Boolean`` | allow hidden images to be displayed.|
| options.allowNSFW | ``Boolean`` or ``String`` | Whether to allow NSFW results. If this is a string, it should be "only". |
| options.filetype | ``String`` |  The filetype the image should be. |
