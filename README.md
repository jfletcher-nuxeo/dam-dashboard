# DAM Dashboard

A dashboard for Nuxeo applications that contain the DAM add-on.

These are Polymer Web components.

## Requirements

The DAM add-on must be installed in the Nuxeo application.

By default a proxy is created to localhost, to handle Nuxeo authentication.  Alternatively you can modify "Gruntfile.js" and change the proxy settings.

Install Node.js (I use Homebrew) then:

    npm install -g bower
    npm install -g grunt
    npm install
    bower install

## Usage

You can run it via:

    grunt

## About Nuxeo

Nuxeo dramatically improves how content-based applications are built, managed and deployed, making customers more agile, innovative and successful. Nuxeo provides a next generation, enterprise ready platform for building traditional and cutting-edge content oriented applications. Combining a powerful application development environment with SaaS-based tools and a modular architecture, the Nuxeo Platform and Products provide clear business value to some of the most recognizable brands including Verizon, Electronic Arts, Netflix, Sharp, FICO, the U.S. Navy, and Boeing. Nuxeo is headquartered in New York and Paris. More information is available at [www.nuxeo.com](http://www.nuxeo.com).