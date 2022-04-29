<template>   

    <div class="side-bar">
        <div class="logo">
            <img src="./../../assets/images/logo.svg" />
            <p>School Project</p>
        </div>

        <ul>
            <li>
                <router-link to="/dashboard/">
                    <p>Home</p>
                </router-link>
            </li>

            <li>
                <router-link to="/teacher/">
                    <p>Teachers</p>
                </router-link>
            </li>

            <li>
                <router-link to="/student/">
                    <p>Students</p>
                </router-link>
            </li>

            <li>
                <router-link to="/parrent/">
                    <p>Parents</p>
                </router-link>
            </li>

            <li>
                <router-link to="/staff/">
                    <p>Staff</p>
                </router-link>
            </li>
        </ul>

        <div class="user">
            <div class="current-user">
                <img src="./../../assets/images/platform-skill.jpg">
            </div>

            <div class="content">
                <h2>Jon Doe</h2>
                <p>Teacher</p>
            </div>            
        </div>
    </div>

    <router-view></router-view>

</template>

<script>
export default {

}
</script>

<style>

#app {width: 100%; height: 100vh; overflow: hidden;}

.side-bar {    width: 250px;
    height: 100%;
    overflow: hidden;
    float: left;
    background-color: #4b3c99;}
.side-bar .logo {    width: 100%;
    height: 120px;
    margin-bottom: 25px;
    text-align: center;}
.side-bar .logo img {    width: 115px;
    margin-top: 30px;}
.side-bar .logo p {    font-size: 14pt;
    color: #fff;
    line-height: 24pt;}

.side-bar ul {    width: 100%;
    height: calc(100% - (145px + 95px + 30px));
    padding: 15px 0;}
.side-bar ul li {    width: auto;
    height: auto;
    padding: 10px;
    padding-left: 15px;
    border-bottom: 1px solid #453a7f;
    color: #fff;}
    .side-bar ul li a {
        text-decoration: none;
        color: #fff;
    }
.side-bar ul li p {    font-size: 12pt;
    letter-spacing: 0.25px;}

.side-bar .user {    width: calc(100% - 30px);
    height: 65px;
    margin-top: 10px;
    padding: 15px;}
.side-bar .user .current-user {    width: 45px;
    height: 45px;
    border-radius: 50%;
    overflow: hidden;
    float: left;
    margin-right: 15px;}
.side-bar .user .current-user img {    width: 100%;
    height: 100%;
    object-fit: cover;}

    .side-bar .user .content {    width: calc(100% - 60px);
    height: auto;
    float: left;}
    .side-bar .user .content h2 {    font-size: 12pt;
    color: #fff;
    line-height: 20pt;
    font-weight: bold;}
    .side-bar .user .content p {    font-size: 10pt;
    color: #998ae6;
    line-height: 9pt;}

</style>