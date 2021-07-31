var documenterSearchIndex = {"docs":
[{"location":"api/#API-1","page":"API","title":"API","text":"","category":"section"},{"location":"api/#","page":"API","title":"API","text":"Modules = [EarthOrientation]\nPrivate = false","category":"page"},{"location":"api/#EarthOrientation.EOParams-Tuple{String,String}","page":"API","title":"EarthOrientation.EOParams","text":"EOParams(iau1980file::String, iau2000file::String)\n\nParse IERS data files into a EOParams object. iau1980file and iau2000file are the paths to a 'finals.all' and a 'finals2000A.all' CSV file, respectively.\n\n\n\n\n\n","category":"method"},{"location":"api/#EarthOrientation.getdx-Tuple{Any,Any}","page":"API","title":"EarthOrientation.getdx","text":"getdx(date; outside_range=:warn)\n\nGet the celestial pole x-coordinate correction for a certain date in milliarcseconds.\n\ndate can either be a DateTime object or a Julian date represented by a number. The outside_range argument determines what to do if no data is available for date:\n\n:warn: The last valid value is returned and a warning will be displayed.\n:nothing: The last valid value is returned.\n:error: An OutOfRangeError is thrown.\n\n\n\n\n\n","category":"method"},{"location":"api/#EarthOrientation.getdx_err-Tuple{Any,Any}","page":"API","title":"EarthOrientation.getdx_err","text":"getdx_err(date; outside_range=:warn)\n\nGet the error in celestial pole x-coordinate correction for a certain date in milliarcseconds.\n\ndate can either be a DateTime object or a Julian date represented by a number. The outside_range argument determines what to do if no data is available for date:\n\n:warn: The last valid value is returned and a warning will be displayed.\n:nothing: The last valid value is returned.\n:error: An OutOfRangeError is thrown.\n\n\n\n\n\n","category":"method"},{"location":"api/#EarthOrientation.getdy-Tuple{Any,Any}","page":"API","title":"EarthOrientation.getdy","text":"getdy(date; outside_range=:warn)\n\nGet the celestial pole y-coordinate correction for a certain date in milliarcseconds.\n\ndate can either be a DateTime object or a Julian date represented by a number. The outside_range argument determines what to do if no data is available for date:\n\n:warn: The last valid value is returned and a warning will be displayed.\n:nothing: The last valid value is returned.\n:error: An OutOfRangeError is thrown.\n\n\n\n\n\n","category":"method"},{"location":"api/#EarthOrientation.getdy_err-Tuple{Any,Any}","page":"API","title":"EarthOrientation.getdy_err","text":"getdy_err(date; outside_range=:warn)\n\nGet the error in celestial pole y-coordinate correction for a certain date in milliarcseconds.\n\ndate can either be a DateTime object or a Julian date represented by a number. The outside_range argument determines what to do if no data is available for date:\n\n:warn: The last valid value is returned and a warning will be displayed.\n:nothing: The last valid value is returned.\n:error: An OutOfRangeError is thrown.\n\n\n\n\n\n","category":"method"},{"location":"api/#EarthOrientation.getdψ-Tuple{Any,Any}","page":"API","title":"EarthOrientation.getdψ","text":"getdψ(date; outside_range=:warn)\n\nGet the ecliptic nutation correction for a certain date in milliarcseconds.\n\ndate can either be a DateTime object or a Julian date represented by a number. The outside_range argument determines what to do if no data is available for date:\n\n:warn: The last valid value is returned and a warning will be displayed.\n:nothing: The last valid value is returned.\n:error: An OutOfRangeError is thrown.\n\n\n\n\n\n","category":"method"},{"location":"api/#EarthOrientation.getdψ_err-Tuple{Any,Any}","page":"API","title":"EarthOrientation.getdψ_err","text":"getdψ_err(date; outside_range=:warn)\n\nGet the error in the ecliptic nutation correction for a certain date in milliarcseconds.\n\ndate can either be a DateTime object or a Julian date represented by a number. The outside_range argument determines what to do if no data is available for date:\n\n:warn: The last valid value is returned and a warning will be displayed.\n:nothing: The last valid value is returned.\n:error: An OutOfRangeError is thrown.\n\n\n\n\n\n","category":"method"},{"location":"api/#EarthOrientation.getdϵ-Tuple{Any,Any}","page":"API","title":"EarthOrientation.getdϵ","text":"getdϵ(date; outside_range=:warn)\n\nGet the ecliptic obliquity correction for a certain date in milliarcseconds.\n\ndate can either be a DateTime object or a Julian date represented by a number. The outside_range argument determines what to do if no data is available for date:\n\n:warn: The last valid value is returned and a warning will be displayed.\n:nothing: The last valid value is returned.\n:error: An OutOfRangeError is thrown.\n\n\n\n\n\n","category":"method"},{"location":"api/#EarthOrientation.getdϵ_err-Tuple{Any,Any}","page":"API","title":"EarthOrientation.getdϵ_err","text":"getdϵ_err(date; outside_range=:warn)\n\nGet the error in the ecliptic obliquity correction for a certain date in milliarcseconds.\n\ndate can either be a DateTime object or a Julian date represented by a number. The outside_range argument determines what to do if no data is available for date:\n\n:warn: The last valid value is returned and a warning will be displayed.\n:nothing: The last valid value is returned.\n:error: An OutOfRangeError is thrown.\n\n\n\n\n\n","category":"method"},{"location":"api/#EarthOrientation.getlod-Tuple{Any,Any}","page":"API","title":"EarthOrientation.getlod","text":"getlod(date; outside_range=:warn)\n\nGet the excess length of day for a certain date in milliseconds.\n\ndate can either be a DateTime object or a Julian date represented by a number. The outside_range argument determines what to do if no data is available for date:\n\n:warn: The last valid value is returned and a warning will be displayed.\n:nothing: The last valid value is returned.\n:error: An OutOfRangeError is thrown.\n\n\n\n\n\n","category":"method"},{"location":"api/#EarthOrientation.getlod_err-Tuple{Any,Any}","page":"API","title":"EarthOrientation.getlod_err","text":"getlod_err(date; outside_range=:warn)\n\nGet the error in the excess length of day for a certain date in milliseconds.\n\ndate can either be a DateTime object or a Julian date represented by a number. The outside_range argument determines what to do if no data is available for date:\n\n:warn: The last valid value is returned and a warning will be displayed.\n:nothing: The last valid value is returned.\n:error: An OutOfRangeError is thrown.\n\n\n\n\n\n","category":"method"},{"location":"api/#EarthOrientation.getxp-Tuple{Any,Any}","page":"API","title":"EarthOrientation.getxp","text":"getxp(date; outside_range=:warn)\n\nGet the x-coordinate of Earth's north pole w.r.t. the CIO for a certain date in arcseconds.\n\ndate can either be a DateTime object or a Julian date represented by a number. The outside_range argument determines what to do if no data is available for date:\n\n:warn: The last valid value is returned and a warning will be displayed.\n:nothing: The last valid value is returned.\n:error: An OutOfRangeError is thrown.\n\n\n\n\n\n","category":"method"},{"location":"api/#EarthOrientation.getxp_err-Tuple{Any,Any}","page":"API","title":"EarthOrientation.getxp_err","text":"getxp_err(date; outside_range=:warn)\n\nGet the error for the x-coordinate of Earth's north pole w.r.t. the CIO for a certain date in arcseconds.\n\ndate can either be a DateTime object or a Julian date represented by a number. The outside_range argument determines what to do if no data is available for date:\n\n:warn: The last valid value is returned and a warning will be displayed.\n:nothing: The last valid value is returned.\n:error: An OutOfRangeError is thrown.\n\n\n\n\n\n","category":"method"},{"location":"api/#EarthOrientation.getyp-Tuple{Any,Any}","page":"API","title":"EarthOrientation.getyp","text":"getyp(date; outside_range=:warn)\n\nGet the y-coordinate of Earth's north pole w.r.t. the CIO for a certain date in arcseconds.\n\ndate can either be a DateTime object or a Julian date represented by a number. The outside_range argument determines what to do if no data is available for date:\n\n:warn: The last valid value is returned and a warning will be displayed.\n:nothing: The last valid value is returned.\n:error: An OutOfRangeError is thrown.\n\n\n\n\n\n","category":"method"},{"location":"api/#EarthOrientation.getyp_err-Tuple{Any,Any}","page":"API","title":"EarthOrientation.getyp_err","text":"getyp_err(date; outside_range=:warn)\n\nGet the error for the y-coordinate of Earth's north pole w.r.t. the CIO for a certain date in arcseconds.\n\ndate can either be a DateTime object or a Julian date represented by a number. The outside_range argument determines what to do if no data is available for date:\n\n:warn: The last valid value is returned and a warning will be displayed.\n:nothing: The last valid value is returned.\n:error: An OutOfRangeError is thrown.\n\n\n\n\n\n","category":"method"},{"location":"api/#EarthOrientation.getΔUT1-Tuple{Any,Any}","page":"API","title":"EarthOrientation.getΔUT1","text":"getΔUT1(date; outside_range=:warn)\n\nGet the difference between UTC and UT1 for a certain date in seconds.\n\ndate can either be a DateTime object or a Julian date represented by a number. The outside_range argument determines what to do if no data is available for date:\n\n:warn: The last valid value is returned and a warning will be displayed.\n:nothing: The last valid value is returned.\n:error: An OutOfRangeError is thrown.\n\n\n\n\n\n","category":"method"},{"location":"api/#EarthOrientation.getΔUT1_TAI-Tuple{Any,Any}","page":"API","title":"EarthOrientation.getΔUT1_TAI","text":"getΔUT1_TAI(date; outside_range=:warn)\n\nGet the difference between TAI and UT1 for a certain date in seconds.\n\ndate can either be a DateTime object or a Julian date represented by a number. The outside_range argument determines what to do if no data is available for date:\n\n:warn: The last valid value is returned and a warning will be displayed.\n:nothing: The last valid value is returned.\n:error: An OutOfRangeError is thrown.\n\n\n\n\n\n","category":"method"},{"location":"api/#EarthOrientation.getΔUT1_err-Tuple{Any,Any}","page":"API","title":"EarthOrientation.getΔUT1_err","text":"getΔUT1_err(date; outside_range=:warn)\n\nGet the error in the difference between UTC and UT1 for a certain date in seconds.\n\ndate can either be a DateTime object or a Julian date represented by a number. The outside_range argument determines what to do if no data is available for date:\n\n:warn: The last valid value is returned and a warning will be displayed.\n:nothing: The last valid value is returned.\n:error: An OutOfRangeError is thrown.\n\n\n\n\n\n","category":"method"},{"location":"api/#EarthOrientation.polarmotion-Tuple{Any,Any}","page":"API","title":"EarthOrientation.polarmotion","text":"polarmotion(date; outside_range=:warn)\n\nGet the coordinates of Earth's north pole w.r.t. the CIO for a certain date in arcseconds.\n\ndate can either be a DateTime object or a Julian date represented by a number. The outside_range argument determines what to do if no data is available for date:\n\n:warn: The last valid value is returned and a warning will be displayed.\n:nothing: The last valid value is returned.\n:error: An OutOfRangeError is thrown.\n\n\n\n\n\n","category":"method"},{"location":"api/#EarthOrientation.precession_nutation00-Tuple{Any,Any}","page":"API","title":"EarthOrientation.precession_nutation00","text":"precession_nutation00(date; outside_range=:warn)\n\nGet the celestial pole coordinate corrections for a certain date in milliarcseconds.\n\ndate can either be a DateTime object or a Julian date represented by a number. The outside_range argument determines what to do if no data is available for date:\n\n:warn: The last valid value is returned and a warning will be displayed.\n:nothing: The last valid value is returned.\n:error: An OutOfRangeError is thrown.\n\n\n\n\n\n","category":"method"},{"location":"api/#EarthOrientation.precession_nutation80-Tuple{Any,Any}","page":"API","title":"EarthOrientation.precession_nutation80","text":"precession_nutation80(date; outside_range=:warn)\n\nGet the ecliptic corrections for a certain date in milliarcseconds.\n\ndate can either be a DateTime object or a Julian date represented by a number. The outside_range argument determines what to do if no data is available for date:\n\n:warn: The last valid value is returned and a warning will be displayed.\n:nothing: The last valid value is returned.\n:error: An OutOfRangeError is thrown.\n\n\n\n\n\n","category":"method"},{"location":"#EarthOrientation.jl-1","page":"Home","title":"EarthOrientation.jl","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"Calculate Earth orientation parameters from IERS tables in Julia.","category":"page"},{"location":"#Installation-1","page":"Home","title":"Installation","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"The package can be installed through Julia's package manager:","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Pkg.add(\"EarthOrientation\")","category":"page"},{"location":"#Quickstart-1","page":"Home","title":"Quickstart","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"Fetch the latest [IERS][iers-link] tables:","category":"page"},{"location":"#","page":"Home","title":"Home","text":"using EarthOrientation\nEarthOrientation.update()","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Get the current Earth orientation parameters, e.g. for polar motion:","category":"page"},{"location":"#","page":"Home","title":"Home","text":"xp, yp = polarmotion(now()) # arcseconds","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Or the current difference between UT1 and UTC and the associated prediction error:","category":"page"},{"location":"#","page":"Home","title":"Home","text":"ΔUT1 = getΔUT1(now()) # seconds\nΔUT1_err = getΔUT1_err(now()) # seconds","category":"page"},{"location":"#Available-data-1","page":"Home","title":"Available data","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"Polar motion:\nx-coordinate of Earth's north pole: getxp\ny-coordinate of Earth's north pole: getyp\nboth: polarmotion\nEarth rotation\nDifference between UT1 and UTC: getΔUT1\nDifference between UT1 and TAI: getΔUT1_TAI\nExcess length of day: getlod\nPrecession and nutation based on the 1980 IAU conventions\nCorrection to the nutation of the ecliptic: getdψ\nCorrection to the obliquity of the ecliptic: getdϵ\nboth: precession_nutation80\nPrecession and nutation based on the 2000 IAU conventions\nCorrection to the celestial pole's x-coordinate: getdx\nCorrection to the celestial pole's y-coordinate: getdy\nboth: precession_nutation00","category":"page"},{"location":"#","page":"Home","title":"Home","text":"There is an associated function that returns the prediction error for each data type, e.g. getxp_err.","category":"page"},{"location":"#Manual-Data-Management-1","page":"Home","title":"Manual Data Management","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"By default the files downloaded by EarthOrientation.update() will be used. It is also possible to pass different finals.all and finals2000A.all files in CSV format.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"using EarthOrientation\n\npush!(EOP_DATA, \"finals.csv\", \"finals2000A.csv\")","category":"page"},{"location":"internals/#Internals-1","page":"Internals","title":"Internals","text":"","category":"section"},{"location":"internals/#","page":"Internals","title":"Internals","text":"Modules = [EarthOrientation]\nPublic = false","category":"page"},{"location":"internals/#EarthOrientation.getdate-Tuple{Any}","page":"Internals","title":"EarthOrientation.getdate","text":"getdate(data)\n\nDetermine the creation date of an IERS table by finding the last entry which is marked as \"final\".\n\n\n\n\n\n","category":"method"},{"location":"internals/#EarthOrientation.update-Tuple{}","page":"Internals","title":"EarthOrientation.update","text":"update(; force=false)\n\nDownload weekly EOP data from the IERS servers if newer files are available or no data has been downloaded previously. If the keyword force is true, then all the files will be downloaded again.\n\n\n\n\n\n","category":"method"},{"location":"tutorial/#Tutorial-1","page":"Tutorial","title":"Tutorial","text":"","category":"section"},{"location":"tutorial/#","page":"Tutorial","title":"Tutorial","text":"EarthOrientation.jl downloads, parses, and interpolates weekly-updated tables from the IERS that contain the following Earth Orientation Parameters (EOP):","category":"page"},{"location":"tutorial/#","page":"Tutorial","title":"Tutorial","text":"Polar motion:\nx-coordinate of Earth's north pole: x_p\ny-coordinate of Earth's north pole: y_p\nEarth rotation\nDifference between UT1 and UTC: Delta UT1\nExcess length of day: LOD\nPrecession and nutation based on the 1980 IAU conventions\nCorrection to the nutation of the ecliptic: dpsi\nCorrection to the obliquity of the ecliptic: depsilon\nPrecession and nutation based on the 2000 IAU conventions\nCorrection to the celestial pole's x-coordinate: dx\nCorrection to the celestial pole's y-coordinate: dy","category":"page"},{"location":"tutorial/#","page":"Tutorial","title":"Tutorial","text":"These parameters are required for precise transformations between quasi-inertial and rotating terrestrial reference frames.","category":"page"},{"location":"tutorial/#Getting-Earth-Orientation-Data-1","page":"Tutorial","title":"Getting Earth Orientation Data","text":"","category":"section"},{"location":"tutorial/#","page":"Tutorial","title":"Tutorial","text":"When the package is imported for the first time the required data will be automatically downloaded from the IERS servers. After that the data needs to be updated manually like shown below.","category":"page"},{"location":"tutorial/#","page":"Tutorial","title":"Tutorial","text":"using EarthOrientation\nEarthOrientation.update()","category":"page"},{"location":"tutorial/#Loading-Earth-Orientation-Data-1","page":"Tutorial","title":"Loading Earth Orientation Data","text":"","category":"section"},{"location":"tutorial/#","page":"Tutorial","title":"Tutorial","text":"The downloaded data is parsed into an EOParams object:","category":"page"},{"location":"tutorial/#","page":"Tutorial","title":"Tutorial","text":"eop = EOParams()","category":"page"},{"location":"tutorial/#","page":"Tutorial","title":"Tutorial","text":"By default the files downloaded by EarthOrientation.update() will be used. It is also possible to manually pass the required finals.all and finals2000A.all files in CSV format.","category":"page"},{"location":"tutorial/#","page":"Tutorial","title":"Tutorial","text":"eop = EOParams(\"finals.csv\", \"finals2000A.csv\")","category":"page"},{"location":"tutorial/#","page":"Tutorial","title":"Tutorial","text":"This is useful if the data should not be managed by EarthOrientation.jl but by a different system instead.","category":"page"},{"location":"tutorial/#Interpolating-Earth-Orientation-Data-1","page":"Tutorial","title":"Interpolating Earth Orientation Data","text":"","category":"section"},{"location":"tutorial/#","page":"Tutorial","title":"Tutorial","text":"Get the current Earth orientation parameters, e.g. for polar motion:","category":"page"},{"location":"tutorial/#","page":"Tutorial","title":"Tutorial","text":"xp, yp = polarmotion(eop, now()) # arcseconds","category":"page"},{"location":"tutorial/#","page":"Tutorial","title":"Tutorial","text":"Or the current difference between UT1 and UTC and the associated prediction error:","category":"page"},{"location":"tutorial/#","page":"Tutorial","title":"Tutorial","text":"ΔUT1 = getΔUT1(eop, now()) # seconds\nΔUT1_err = getΔUT1_err(eop, now()) # milliseconds","category":"page"}]
}
