#!/usr/bin/python3
import config
from telethon import TelegramClient, events, sync

async def sendsticker(client):
    from telethon.tl.functions.messages import GetAllStickersRequest
    sticker_sets = await client(GetAllStickersRequest(0))

    # Choose a sticker set
    from telethon.tl.functions.messages import GetStickerSetRequest
    from telethon.tl.types import InputStickerSetID

    sticker_set = sticker_sets.sets[0]

    # Get the stickers for this sticker set
    stickers = await client(GetStickerSetRequest(
        stickerset=InputStickerSetID(
            id=sticker_set.id, access_hash=sticker_set.access_hash
        )
    ))
    await client.send_file('audreyleow', stickers.documents[3])
api_id = config.api_id
api_hash = config.api_hash 

client = TelegramClient('session_name', api_id, api_hash)
client.start()

client.loop.run_until_complete(sendsticker(client))

