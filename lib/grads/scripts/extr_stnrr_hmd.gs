* Script to generate station rainfall from PAGASA-WRF
* version 1.0: 19 April 2011
* latest: 15 May 2018

'reinit'
'open infile.ctl'

* extract rainfall data for 209 stations
fstn='stnid_hmd.dat'
i=1
while(i<210)

   res=read (fstn)
   restr=sublin(res,2)
   stnid=subwrd(restr,1)
   xlat=subwrd(restr,2)
   xlon=subwrd(restr,3)

   'set lat 'xlat
   'set lon 'xlon

   'd apcpsfc'
   rain=subwrd(result,4)

* write results out to file

xline = i' 'xlat' 'xlon' 'rain
   if(i=1)
      head='Lat Lon Rainfall'
      res=write('extr_stnrr_hmd.dat',head)
   endif

   res=write('extr_stnrr_hmd.dat',xline,append)
   i=i+1

endwhile

last='0 0 0 0 0'
res=write('extr_stnrr_hmd.dat',last,append)
