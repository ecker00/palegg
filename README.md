
# Christers PHP & Handlebars boilerplate

A PHP setup with Handlebars for serverside and client rendering. This is part
of a *lets build*, see it all in action on YouTube.

The live folder is the only folder exposed to the public.

## Logging and debug

To see the PHP console run the following command in a terminal window
> tail -f /home/ubuntu/lib/apache2/log/error.log

## Setup and config

To get you started:

1) Create a project folder in your Cloud9 sandbox.

2) Clone this repo into your project folder.

3) To setup Grunt, run:
> npm install -g grunt-cli
> npm install

4) Configure Apache
> sudo nano /etc/apache2/sites-available/001-cloud9.conf
Change 'DocumentRoot' to point to the 'live' folder in your project folder
> DocumentRoot /home/ubuntu/workspace/palegg/live

5) Press "Run Project" button and then "Preview"

That's all there is to it! You can use this as a base to start any fancy project. The method is tried and
proven to work well in production for us.

Happy coding!
- Christer @ Snuti