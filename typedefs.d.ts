export { }

declare global {

    export interface Data {
        user: User;
        range: Range;
        days: Day[];
    }

    export interface Day {
        categories: Category[];
        date: string;
        dependencies: Category[];
        editors: Category[];
        grand_total: GrandTotal;
        languages: Category[];
        machines: Category[];
        operating_systems: Category[];
        projects: Project[];
        ai_additions?: number;
        ai_deletions?: number;
        human_additions?: number;
        human_deletions?: number;
    }

    export interface Category {
        decimal: string;
        digital: string;
        hours: number;
        minutes: number;
        name: string;
        percent: number;
        seconds: number;
        text: string;
        total_seconds: string;
        machine_name_id?: string;
    }

    export interface GrandTotal {
        ai_additions: number;
        ai_deletions: number;
        decimal: string;
        digital: string;
        hours: number;
        human_additions: number;
        human_deletions: number;
        minutes: number;
        text: string;
        total_seconds: string;
        percent?: number;
    }

    export interface Project {
        branches: Category[];
        categories: Category[];
        dependencies: Category[];
        editors: Category[];
        entities: Entity[];
        grand_total: GrandTotal;
        languages: Category[];
        machines: Category[];
        name: string;
        operating_systems: Category[];
    }

    export interface Entity {
        ai_additions: number;
        ai_deletions: number;
        decimal: string;
        digital: string;
        hours: number;
        human_additions: number;
        human_deletions: number;
        minutes: number;
        name: string;
        percent: number;
        project_root_count: number | null;
        seconds: number;
        text: string;
        total_seconds: string;
        type: Type;
    }

    export enum Type {
        File = "file",
    }

    export interface Range {
        end: number;
        start: number;
    }

    export interface User {
        bio: string;
        categories_used_public: boolean;
        city: City;
        color_scheme: string;
        created_at: string;
        date_format: string;
        default_dashboard_range: string;
        display_name: string;
        durations_slice_by: string;
        editors_used_public: boolean;
        email: string;
        full_name: string;
        github_username: string;
        has_basic_features: boolean;
        has_premium_features: boolean;
        human_readable_website: string;
        id: string;
        invoice_counter: number;
        invoice_id_format: string;
        is_email_confirmed: boolean;
        is_email_public: boolean;
        is_hireable: boolean;
        is_onboarding_finished: boolean;
        languages_used_public: boolean;
        last_branch: null;
        last_heartbeat_at: string;
        last_language: string;
        last_plugin: string;
        last_plugin_name: string;
        last_project: string;
        linkedin_username: string;
        location: null;
        logged_time_public: boolean;
        modified_at: string;
        needs_payment_method: boolean;
        os_used_public: boolean;
        photo: string;
        photo_public: boolean;
        plan: string;
        profile_url: string;
        profile_url_escaped: string;
        public_email: null;
        public_profile_time_range: string;
        share_all_time_badge: boolean;
        share_last_year_days: boolean;
        show_machine_name_ip: boolean;
        suggest_dangling_branches: boolean;
        time_format_24hr: boolean;
        time_format_display: string;
        timeout: number;
        timezone: string;
        twitter_username: string;
        username: string;
        website: string;
        weekday_start: number;
        wonderfuldev_username: null;
        writes_only: boolean;
    }

    export interface City {
        ascii_name: string;
        ascii_state: string;
        country: string;
        country_code: string;
        id: string;
        name: string;
        population: number;
        short_title: string;
        state: string;
        timezone: string;
        title: string;
    }


}