const i18n = {
    currentLang: localStorage.getItem('lang') || 'en',
    
    translations: {
        en: {
            // Navigation
            "nav.wireguard_clients": "Wireguard Clients",
            "nav.wireguard_server": "Wireguard Server",
            "nav.global_settings": "Global Settings",
            "nav.users_settings": "Users Settings",
            "nav.status": "Status",
            "nav.wol_hosts": "WoL Hosts",
            "nav.about": "About",
            "nav.logout": "Logout",
            "nav.main": "MAIN",
            "nav.settings": "SETTINGS",
            "nav.utilities": "UTILITIES",
            "nav.about_section": "ABOUT",
            
            // Common buttons
            "btn.new_client": "New Client",
            "btn.apply_config": "Apply Config",
            "btn.cancel": "Cancel",
            "btn.save": "Save",
            "btn.submit": "Submit",
            "btn.send": "Send",
            "btn.close": "Close",
            "btn.generate": "Generate",
            "btn.apply": "Apply",
            "btn.update": "Update",
            "btn.edit": "Edit",
            "btn.delete": "Delete",
            "btn.disable": "Disable",
            "btn.download": "Download",
            "btn.qr_code": "QR code",
            "btn.email": "Email",
            "btn.telegram": "Telegram",
            "btn.more": "More",
            "btn.wake_on": "Wake On",
            "btn.remove": "Remove",
            "btn.show": "Show",
            "btn.hide": "Hide",
            "btn.suggest": "Suggest",
            "btn.use_selected_ip": "Use selected IP address",
            
            // Login page
            "login.sign_in": "Sign in to start your session",
            "login.username": "Username",
            "login.password": "Password",
            "login.remember": "Remember Me",
            "login.sign_in_btn": "Sign In",
            
            // Client page
            "client.title": "Wireguard Clients",
            "client.email_config": "Email Configuration",
            "client.email_address": "Email address",
            "client.qr_code": "QR Code",
            "client.telegram_config": "Telegram Configuration",
            "client.telegram_userid": "Telegram userid",
            "client.edit_client": "Edit Client",
            "client.name": "Name",
            "client.email": "Email",
            "client.subnet_range": "Subnet range",
            "client.ip_allocation": "IP Allocation",
            "client.allowed_ips": "Allowed IPs",
            "client.extra_allowed_ips": "Extra Allowed IPs",
            "client.endpoint": "Endpoint",
            "client.use_server_dns": "Use server DNS",
            "client.enable_this_client": "Enable this client",
            "client.public_preshared_keys": "Public and Preshared Keys",
            "client.public_key": "Public Key",
            "client.preshared_key": "Preshared Key",
            "client.additional_config": "Additional configuration",
            "client.telegram_userid_label": "Telegram userid",
            "client.notes": "Notes",
            "client.disable_title": "Disable",
            "client.remove_title": "Remove",
            "client.disable_confirm": "You are about to disable client",
            "client.remove_confirm": "You are about to remove client",
            "client.dns_enabled": "DNS enabled",
            "client.dns_disabled": "DNS disabled",
            "client.search_placeholder": "Search",
            "client.status_all": "All",
            "client.status_enabled": "Enabled",
            "client.status_disabled": "Disabled",
            "client.status_connected": "Connected",
            "client.status_disconnected": "Disconnected",
            "client.select_subnet": "Select a subnet range",
            "client.any": "Any",
            "client.created_success": "Created new client successfully",
            "client.updated_success": "Updated client successfully",
            "client.removed_success": "Removed client successfully",
            "client.applied_success": "Applied config successfully",
            "client.email_sent_success": "Sent email successfully",
            "client.telegram_sent_success": "Sent telegram successfully",
            
            // Server page
            "server.title": "Wireguard Server",
            "server.settings": "Wireguard Server Settings",
            "server.interface": "Interface",
            "server.server_interface_addresses": "Server Interface Addresses",
            "server.listen_port": "Listen Port",
            "server.post_up_script": "Post Up Script",
            "server.pre_down_script": "Pre Down Script",
            "server.post_down_script": "Post Down Script",
            "server.key_pair": "Key Pair",
            "server.private_key": "Private Key",
            "server.public_key": "Public Key",
            "server.keypair_generation": "KeyPair Generation",
            "server.keypair_confirm": "Are you sure to generate a new key pair for the Wireguard server? The existing Client's peer public key need to be updated to keep the connection working.",
            "server.interface_success": "Updated Wireguard server interface addresses successfully",
            "server.keypair_success": "Generate new key pair successfully",
            
            // Global Settings page
            "global.title": "Global Settings",
            "global.wireguard_global_settings": "Wireguard Global Settings",
            "global.endpoint_address": "Endpoint Address",
            "global.dns_servers": "DNS Servers",
            "global.mtu": "MTU",
            "global.persistent_keepalive": "Persistent Keepalive",
            "global.firewall_mark": "Firewall Mark",
            "global.table": "Table",
            "global.config_file_path": "Wireguard Config File Path",
            "global.help": "Help",
            "global.help_endpoint": "The public IP address of your Wireguard server that the client will connect to. Click on Suggest button to auto detect the public IP address of your server.",
            "global.help_dns": "The DNS servers will be set to client config.",
            "global.help_mtu": "The MTU will be set to server and client config. By default it is 1450. You might want to adjust the MTU size if your connection (e.g PPPoE, 3G, satellite network, etc) has a low MTU. Leave blank to omit this setting in the configs.",
            "global.help_keepalive": "By default, WireGuard peers remain silent while they do not need to communicate, so peers located behind a NAT and/or firewall may be unreachable from other peers until they reach out to other peers themselves. Adding PersistentKeepalive can ensure that the connection remains open. Leave blank to omit this setting in the Client config.",
            "global.help_firewall": "Add a matching fwmark on all packets going out of a WireGuard non-default-route tunnel. Default value: 0xca6c",
            "global.help_table": "Value for the Table setting in the wg conf file. Default value: auto",
            "global.help_config_path": "The path of your Wireguard server config file. Please make sure the parent directory exists and is writable.",
            "global.endpoint_suggestion": "Endpoint Address Suggestion",
            "global.ip_suggestion": "Following is the list of public and local IP addresses for your consideration.",
            "global.select_ip": "Select an IP address",
            "global.update_success": "Update global settings successfully",
            
            // Profile page
            "profile.title": "Profile",
            "profile.update_info": "Update user information",
            "profile.username": "Username",
            "profile.password": "Password",
            "profile.password_hint": "Leave empty to keep the password unchanged",
            "profile.update_success": "Updated user information successfully",
            
            // Users Settings page
            "users.title": "Users Settings",
            "users.edit_user": "Edit User",
            "users.add_user": "Add new user",
            "users.name": "Name",
            "users.password": "Password",
            "users.password_hint": "Leave empty to keep the password unchanged",
            "users.admin": "Admin",
            "users.remove_confirm": "You are about to remove user",
            "users.remove_success": "Removed user successfully",
            "users.update_success": "Updated user information successfully",
            "users.create_success": "Created user successfully",
            "users.new_user": "New User",
            "users.remove_title": "Remove",
            "users.batch_import": "Batch Import Users",
            "users.batch_import_btn": "Import",
            "users.batch_import_format": "Import Format (JSON):",
            "users.batch_import_hint": "Enter JSON array: [{\"username\":\"user1\",\"password\":\"pass1\",\"admin\":false}]",
            "users.batch_import_error_empty": "Please enter user data",
            "users.batch_import_error_format": "Invalid JSON format",
            
            // Status page
            "status.title": "Connected Peers",
            "status.peers_list": "List of connected peers for device with device.name",
            "status.name": "Name",
            "status.email": "Email",
            "status.allocated_ips": "Allocated IPs",
            "status.endpoint": "Endpoint",
            "status.public_key": "Public Key",
            "status.received": "Received",
            "status.transmitted": "Transmitted",
            "status.connected": "Connected (Approximation)",
            "status.last_handshake": "Last Handshake",
            
            // Wake on LAN page
            "wol.title": "Wake On Lan Hosts",
            "wol.new_host": "New Wake On Lan Host",
            "wol.name": "Name",
            "wol.mac_address": "Mac Address",
            "wol.remove_title": "Remove",
            "wol.unused": "Unused",
            
            // About page
            "about.title": "About",
            "about.about_wireguard": "About Wireguard-UI",
            "about.current_version": "Current version",
            "about.git_commit": "git commit hash",
            "about.version_release_date": "Current version release date",
            "about.latest_release": "Latest release",
            "about.latest_release_date": "Latest release date",
            "about.author": "Author",
            "about.contributors": "Contributors",
            "about.version_outdated": "Current version is out of date",
            "about.cannot_find_version": "Could not find this version on GitHub.com",
            "about.cannot_connect": "Could not connect to GitHub.com",
            
            // Modal apply config
            "modal.apply_config_title": "Apply Config",
            "modal.apply_config_confirm": "Do you want to write config file and restart WireGuard server?",
            
            // Validation messages
            "validation.enter_name": "Please enter a name",
            "validation.enter_email": "Please enter an email",
            "validation.enter_username": "Please enter a username",
            "validation.enter_password": "Please input a password",
            "validation.enter_port": "Please enter a port",
            "validation.port_must_be_int": "Port must be an integer",
            "validation.port_range": "Port must be in range 1..65535",
            "validation.mtu_must_be_int": "MTU must be an integer",
            "validation.mtu_range": "MTU must be in range 68..65535",
            "validation.keepalive_must_be_int": "Persistent keepalive must be an integer",
            "validation.enter_config_path": "Please enter WireGuard config file path",
            "validation.telegram_userid": "Please enter a telegram userid",
            "validation.valid_telegram_userid": "Please enter a valid telegram userid",
            
            // Language
            "lang.switch": "Language",
            "lang.english": "English",
            "lang.chinese": "中文",
        },
        zh: {
            // Navigation
            "nav.wireguard_clients": "WireGuard 客户端",
            "nav.wireguard_server": "WireGuard 服务器",
            "nav.global_settings": "全局设置",
            "nav.users_settings": "用户设置",
            "nav.status": "状态",
            "nav.wol_hosts": "唤醒主机",
            "nav.about": "关于",
            "nav.logout": "退出",
            "nav.main": "主要",
            "nav.settings": "设置",
            "nav.utilities": "工具",
            "nav.about_section": "关于",
            
            // Common buttons
            "btn.new_client": "新建客户端",
            "btn.apply_config": "应用配置",
            "btn.cancel": "取消",
            "btn.save": "保存",
            "btn.submit": "提交",
            "btn.send": "发送",
            "btn.close": "关闭",
            "btn.generate": "生成",
            "btn.apply": "应用",
            "btn.update": "更新",
            "btn.edit": "编辑",
            "btn.delete": "删除",
            "btn.disable": "禁用",
            "btn.download": "下载",
            "btn.qr_code": "二维码",
            "btn.email": "邮件",
            "btn.telegram": "Telegram",
            "btn.more": "更多",
            "btn.wake_on": "唤醒",
            "btn.remove": "移除",
            "btn.show": "显示",
            "btn.hide": "隐藏",
            "btn.suggest": "建议",
            "btn.use_selected_ip": "使用选定的IP地址",
            
            // Login page
            "login.sign_in": "登录以开始会话",
            "login.username": "用户名",
            "login.password": "密码",
            "login.remember": "记住我",
            "login.sign_in_btn": "登录",
            
            // Client page
            "client.title": "WireGuard 客户端",
            "client.email_config": "邮件配置",
            "client.email_address": "邮箱地址",
            "client.qr_code": "二维码",
            "client.telegram_config": "Telegram 配置",
            "client.telegram_userid": "Telegram 用户ID",
            "client.edit_client": "编辑客户端",
            "client.name": "名称",
            "client.email": "邮箱",
            "client.subnet_range": "子网范围",
            "client.extra_allowed_ips": "额外允许的 IP",
            "client.endpoint": "终点",
            "client.use_server_dns": "使用服务器 DNS",
            "client.enable_this_client": "启用此客户端",
            "client.public_preshared_keys": "公钥和预共享密钥",
            "client.public_key": "公钥",
            "client.preshared_key": "预共享密钥",
            "client.additional_config": "附加配置",
            "client.telegram_userid_label": "Telegram 用户ID",
            "client.notes": "备注",
            "client.disable_title": "禁用",
            "client.remove_title": "移除",
            "client.disable_confirm": "您即将禁用客户端",
            "client.remove_confirm": "您即将删除客户端",
            "client.dns_enabled": "DNS 已启用",
            "client.dns_disabled": "DNS 已禁用",
            "client.search_placeholder": "搜索",
            "client.status_all": "全部",
            "client.status_enabled": "已启用",
            "client.status_disabled": "已禁用",
            "client.status_connected": "已连接",
            "client.status_disconnected": "已断开",
            "client.select_subnet": "选择子网范围",
            "client.any": "任意",
            "client.created_success": "成功创建新客户端",
            "client.updated_success": "成功更新客户端",
            "client.removed_success": "成功删除客户端",
            "client.applied_success": "成功应用配置",
            "client.email_sent_success": "成功发送邮件",
            "client.telegram_sent_success": "成功发送Telegram",
            
            // Server page
            "server.title": "WireGuard 服务器",
            "server.settings": "WireGuard 服务器设置",
            "server.interface": "接口",
            "server.server_interface_addresses": "服务器接口地址",
            "server.listen_port": "监听端口",
            "server.post_up_script": "启动后脚本",
            "server.pre_down_script": "停止前脚本",
            "server.post_down_script": "停止后脚本",
            "server.key_pair": "密钥对",
            "server.private_key": "私钥",
            "server.public_key": "公钥",
            "server.keypair_generation": "密钥对生成",
            "server.keypair_confirm": "您确定要生成新的 WireGuard 服务器密钥对吗？现有客户端的对等公钥需要更新才能保持连接工作。",
            "server.interface_success": "成功更新 WireGuard 服务器接口地址",
            "server.keypair_success": "成功生成新密钥对",
            
            // Global Settings page
            "global.title": "全局设置",
            "global.wireguard_global_settings": "WireGuard 全局设置",
            "global.endpoint_address": "终点地址",
            "global.dns_servers": "DNS 服务器",
            "global.mtu": "MTU",
            "global.persistent_keepalive": "持续保活",
            "global.firewall_mark": "防火墙标记",
            "global.table": "表格",
            "global.config_file_path": "WireGuard 配置文件路径",
            "global.help": "帮助",
            "global.help_endpoint": "客户端将连接的 WireGuard 服务器的公网 IP。点击「建议」按钮可自动检测服务器的公网 IP 地址。",
            "global.help_dns": "DNS 服务器将设置到客户端配置中。",
            "global.help_mtu": "MTU 将设置到服务器和客户端配置中。默认为 1450。如果您的连接（如 PPPoE、3G、卫星网络等）MTU 较低，您可能需要调整 MTU 大小。留空以省略此设置。",
            "global.help_keepalive": "默认情况下，WireGuard 对等端在不需要通信时保持沉默，因此位于 NAT 和/或防火墙后面的对等端可能无法从其他对等端访问，直到它们主动联系其他对等端。添加 PersistentKeepalive 可确保连接保持打开状态。留空以在客户端配置中省略此设置。",
            "global.help_firewall": "在所有通过 WireGuard 非默认路由隧道的出站数据包上添加匹配的 fwmark。默认值：0xca6c",
            "global.help_table": "wg 配置文件中的 Table 设置值。默认值：auto",
            "global.help_config_path": "WireGuard 服务器配置文件路径。请确保父目录存在且可写。",
            "global.endpoint_suggestion": "终点地址建议",
            "global.ip_suggestion": "以下是供您考虑的公网和本地 IP 地址列表。",
            "global.select_ip": "选择 IP 地址",
            "global.update_success": "成功更新全局设置",
            
            // Profile page
            "profile.title": "个人资料",
            "profile.update_info": "更新用户信息",
            "profile.username": "用户名",
            "profile.password": "密码",
            "profile.password_hint": "留空以保持密码不变",
            "profile.update_success": "成功更新用户信息",
            
            // Users Settings page
            "users.title": "用户设置",
            "users.edit_user": "编辑用户",
            "users.add_user": "添加新用户",
            "users.name": "名称",
            "users.password": "密码",
            "users.password_hint": "留空以保持密码不变",
            "users.admin": "管理员",
            "users.remove_confirm": "您即将删除用户",
            "users.remove_success": "成功删除用户",
            "users.update_success": "成功更新用户信息",
            "users.create_success": "成功创建用户",
            "users.new_user": "新建用户",
            "users.remove_title": "移除",
            "users.batch_import": "批量导入用户",
            "users.batch_import_btn": "导入",
            "users.batch_import_format": "导入格式 (JSON):",
            "users.batch_import_hint": "输入 JSON 数组格式: [{\"username\":\"user1\",\"password\":\"pass1\",\"admin\":false}]",
            "users.batch_import_error_empty": "请输入用户数据",
            "users.batch_import_error_format": "JSON 格式无效",
            
            // Status page
            "status.title": "已连接的对等端",
            "status.peers_list": "设备的对等端列表",
            "status.name": "名称",
            "status.email": "邮箱",
            "status.allocated_ips": "分配的 IP",
            "status.endpoint": "终点",
            "status.public_key": "公钥",
            "status.received": "接收",
            "status.transmitted": "发送",
            "status.connected": "已连接（近似）",
            "status.last_handshake": "最后握手",
            
            // Wake on LAN page
            "wol.title": "网络唤醒主机",
            "wol.new_host": "新建网络唤醒主机",
            "wol.name": "名称",
            "wol.mac_address": "MAC 地址",
            "wol.remove_title": "移除",
            "wol.unused": "未使用",
            
            // About page
            "about.title": "关于",
            "about.about_wireguard": "关于 Wireguard-UI",
            "about.current_version": "当前版本",
            "about.git_commit": "git 提交哈希",
            "about.version_release_date": "当前版本发布日期",
            "about.latest_release": "最新版本",
            "about.latest_release_date": "最新发布日期",
            "about.author": "作者",
            "about.contributors": "贡献者",
            "about.version_outdated": "当前版本已过期",
            "about.cannot_find_version": "无法在 GitHub.com 上找到此版本",
            "about.cannot_connect": "无法连接到 GitHub.com",
            
            // Modal apply config
            "modal.apply_config_title": "应用配置",
            "modal.apply_config_confirm": "您是否要写入配置文件并重启 WireGuard 服务器？",
            
            // Validation messages
            "validation.enter_name": "请输入名称",
            "validation.enter_email": "请输入邮箱",
            "validation.enter_username": "请输入用户名",
            "validation.enter_password": "请输入密码",
            "validation.enter_port": "请输入端口",
            "validation.port_must_be_int": "端口必须是整数",
            "validation.port_range": "端口必须在 1..65535 范围内",
            "validation.mtu_must_be_int": "MTU 必须是整数",
            "validation.mtu_range": "MTU 必须在 68..65535 范围内",
            "validation.keepalive_must_be_int": "持续保活必须是整数",
            "validation.enter_config_path": "请输入 WireGuard 配置文件路径",
            "validation.telegram_userid": "请输入 Telegram 用户ID",
            "validation.valid_telegram_userid": "请输入有效的 Telegram 用户ID",
            
            // Language
            "lang.switch": "语言",
            "lang.english": "English",
            "lang.chinese": "中文",
        }
    },
    
    t: function(key) {
        const lang = this.translations[this.currentLang];
        return lang[key] || this.translations['en'][key] || key;
    },
    
    setLang: function(lang) {
        if (this.translations[lang]) {
            this.currentLang = lang;
            localStorage.setItem('lang', lang);
            this.applyTranslations();
            this.updateLanguageSelector();
        }
    },
    
    getLang: function() {
        return this.currentLang;
    },
    
    applyTranslations: function() {
        const self = this;
        document.querySelectorAll('[data-i18n]').forEach(function(el) {
            const key = el.getAttribute('data-i18n');
            el.textContent = self.t(key);
        });
        document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el) {
            const key = el.getAttribute('data-i18n-placeholder');
            el.placeholder = self.t(key);
        });
        document.querySelectorAll('[data-i18n-title]').forEach(function(el) {
            const key = el.getAttribute('data-i18n-title');
            el.title = self.t(key);
        });
    },
    
    updateLanguageSelector: function() {
        const selector = document.getElementById('language-selector');
        if (selector) {
            selector.value = this.currentLang;
        }
    },
    
    init: function() {
        this.applyTranslations();
    }
};

function t(key) {
    return i18n.t(key);
}

document.addEventListener('DOMContentLoaded', function() {
    i18n.init();
});
