<?php
// Define the API URL
$apiUrl = 'https://api.example.com/data';

// Make the API request
$response = file_get_contents($apiUrl);

// Check if the request was successful
if ($response === FALSE) {
    die('Error occurred');
}

// Decode the JSON data into a PHP array
$data = json_decode($response, true);

// Sample $data array structure
$data = [
    "kind" => "youtube#videoListResponse",
    "etag" => "etag_value",
    "items" => [
        [
            "kind" => "youtube#video",
            "etag" => "etag_value",
            "id" => "video_id",
            "snippet" => [
                "publishedAt" => "2023-10-01T00:00:00Z",
                "channelId" => "channel_id",
                "title" => "Sample Video Title",
                "description" => "This is a sample video description.",
                "thumbnails" => [
                    "default" => [
                        "url" => "https://example.com/default.jpg",
                        "width" => 120,
                        "height" => 90
                    ],
                    "medium" => [
                        "url" => "https://example.com/medium.jpg",
                        "width" => 320,
                        "height" => 180
                    ],
                    "high" => [
                        "url" => "https://example.com/high.jpg",
                        "width" => 480,
                        "height" => 360
                    ]
                ],
                "channelTitle" => "Sample Channel Title",
                "tags" => ["sample", "video", "tags"],
                "categoryId" => "22",
                "liveBroadcastContent" => "none",
                "localized" => [
                    "title" => "Sample Video Title",
                    "description" => "This is a sample video description."
                ]
            ],
            "statistics" => [
                "viewCount" => "1000",
                "likeCount" => "100",
                "dislikeCount" => "10",
                "favoriteCount" => "0",
                "commentCount" => "20"
            ]
        ]
    ],
    "pageInfo" => [
        "totalResults" => 1,
        "resultsPerPage" => 1
    ]
];

// Database connection
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "database_name";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Prepare and bind
$stmt = $conn->prepare("INSERT INTO videos (video_id, title) VALUES (?, ?)");
$stmt->bind_param("ss", $video_id, $title);

// Filter and insert data
foreach ($data['items'] as $item) {
    $video_id = $item['id'];
    $title = $item['snippet']['title'];
    $stmt->execute();
}

// Close connections
$stmt->close();
$conn->close();

// Print the decoded data
echo '<pre>';
print_r($data);
echo '</pre>';
?>
