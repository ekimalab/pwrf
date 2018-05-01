# pwrf
Operational post-processing system for WRF

This consists of a series of bash scripts to initially create control and index files for PAGASA's WRF model. The scripts function to plot different weather parameters, extract data for user-defined stations, archive WRF output, and share products to the bureau's public website, ftp servers, and international collaborating institutions.

Important libraries/binaries:
1. wgrib2
2. g2ctl (Perl script)
3. grads
4. ImageMagick
