--------------------------------------
Readme for Vimeo Editor:
LAIT ApS 2017
--------------------------------------

Vimeo editor, is build and tested for umbraco 7.5.4.
It is part of the umbraco grid, and works by supplying
a Vimeo.com video link like: https://vimeo.com/183539690
and a thumbnail image which will be uploaded to umbraco.

in the view, jquery creates the vimeo player from the link, 
and when pressing the thumbnail, a modal window appear, with 
a Vimeo video player. 

The video will pause, when closing the modal window. 



Install:

notes::: (Dansk)
 - Overfør filer, til de tilsvarende mapper. 
 - App_Plugins -> Vimeo -> "package.manifest", tilpas Alias til projekt navn.(%SolutionName%)
 - Controller -> "VideoSurfaceController.cs", tilpas namespace samt using. (%SolutionName%) 
 - Tilføj flg. links til master page: (tilpas hvis nødvendigt)

			<script src="https://player.vimeo.com/api/player.js"></script>
            <script src="~/scripts/typings/Custom/Modals/VimeoPause.js"></script>

 note::: (English)
 - Transfer files, to corresponding folders.
 - App_Plugins -> Vimeo -> "package.manifest", adapt Alias to your project name (%SolutionName%)
 - Controller -> "VideoSurfaceController.cs", adapt namespace and using. (%SolutionName%)
 - Add the following links to the master page: ( adapt if needed)

 			<script src="https://player.vimeo.com/api/player.js"></script>
            <script src="~/scripts/typings/Custom/Modals/VimeoPause.js"></script>