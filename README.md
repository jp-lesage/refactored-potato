# refactored-potato
Project refactored-potato is a Chrome extension to hide posts on the Spiceworks Community forums.

# What does it do?
This extension will add a special link over posts (except yours, of course) labeled "Hide this post!". Clicking it will fetch the data-id of the post, add it to a collection that is persisted on disk, and remove the div element wrapping the post. The options page for the extension feature a hidden post counter, and a reset link to clear hidden posts data-id collection.

The extension only works on https://community.spiceworks.com.

# Why do this if the forum has a mute feature?
Sometimes, you may only want to hide individual posts, not hide everything a user posted.

The original idea was born from a comment made by a forum user.

# Tests
Testing so far is minimal, and all manual. The important part are working (until Spiceworks changes the layout), but persistance to multiple devices is not tested.

# How to install
There are two installation methods: either go the easy way and install from the package in \bin directly into Chrome, or load the unpacked extension from the \src directory from the Extensions->Load unpacked menu. Developer mode must be activated to load unpacked extensions.
