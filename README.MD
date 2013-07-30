Installing Ruby

Compass runs on any computer that has ruby installed.

For more advanced users you may want to install rvm. 

Setting up the ruby environment

    $ gem update --system
    $ gem install compass
    $ compass create shitty-project --syntax sass

You must compile your sass stylesheets into CSS when they change.
This can be done in one of the following ways:
  1. To compile on demand:
     compass compile [path/to/project]
  2. To monitor your project for changes and automatically recompile:
     compass watch [path/to/project]

