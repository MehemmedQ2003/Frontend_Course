videos
    - id
    - video_id
    - title
    - description
    - thumbnail
    - url

1. Connect to youtube api
2. Get all videos from the channel-$data
    - id
    - video_id
    - title
    - description
    - thumbnail
    - url
3. Create database table with the above fields
4. filter from $data array with only data that required in database $data-required
5. Add data from $data-required to the database (foreach)

