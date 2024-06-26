import type { AdminAnalyticsGetFileResponse, AdminAppsActivitiesListResponse, AdminAppsApprovedListResponse, AdminAppsApproveResponse, AdminAppsClearResolutionResponse, AdminAppsConfigLookupResponse, AdminAppsConfigSetResponse, AdminAppsRequestsCancelResponse, AdminAppsRequestsListResponse, AdminAppsRestrictedListResponse, AdminAppsRestrictResponse, AdminAppsUninstallResponse, AdminAuthPolicyAssignEntitiesResponse, AdminAuthPolicyGetEntitiesResponse, AdminAuthPolicyRemoveEntitiesResponse, AdminBarriersCreateResponse, AdminBarriersDeleteResponse, AdminBarriersListResponse, AdminBarriersUpdateResponse, AdminConversationsArchiveResponse, AdminConversationsBulkArchiveResponse, AdminConversationsBulkDeleteResponse, AdminConversationsBulkMoveResponse, AdminConversationsConvertToPrivateResponse, AdminConversationsConvertToPublicResponse, AdminConversationsCreateResponse, AdminConversationsDeleteResponse, AdminConversationsDisconnectSharedResponse, AdminConversationsEkmListOriginalConnectedChannelInfoResponse, AdminConversationsGetConversationPrefsResponse, AdminConversationsGetCustomRetentionResponse, AdminConversationsGetTeamsResponse, AdminConversationsInviteResponse, AdminConversationsLookupResponse, AdminConversationsRemoveCustomRetentionResponse, AdminConversationsRenameResponse, AdminConversationsRestrictAccessAddGroupResponse, AdminConversationsRestrictAccessListGroupsResponse, AdminConversationsRestrictAccessRemoveGroupResponse, AdminConversationsSearchResponse, AdminConversationsSetConversationPrefsResponse, AdminConversationsSetCustomRetentionResponse, AdminConversationsSetTeamsResponse, AdminConversationsUnarchiveResponse, AdminEmojiAddAliasResponse, AdminEmojiAddResponse, AdminEmojiListResponse, AdminEmojiRemoveResponse, AdminEmojiRenameResponse, AdminFunctionsListResponse, AdminFunctionsPermissionsLookupResponse, AdminFunctionsPermissionsSetResponse, AdminInviteRequestsApprovedListResponse, AdminInviteRequestsApproveResponse, AdminInviteRequestsDeniedListResponse, AdminInviteRequestsDenyResponse, AdminInviteRequestsListResponse, AdminRolesAddAssignmentsResponse, AdminRolesListAssignmentsResponse, AdminRolesRemoveAssignmentsResponse, AdminTeamsAdminsListResponse, AdminTeamsCreateResponse, AdminTeamsListResponse, AdminTeamsOwnersListResponse, AdminTeamsSettingsInfoResponse, AdminTeamsSettingsSetDefaultChannelsResponse, AdminTeamsSettingsSetDescriptionResponse, AdminTeamsSettingsSetDiscoverabilityResponse, AdminTeamsSettingsSetIconResponse, AdminTeamsSettingsSetNameResponse, AdminUsergroupsAddChannelsResponse, AdminUsergroupsAddTeamsResponse, AdminUsergroupsListChannelsResponse, AdminUsergroupsRemoveChannelsResponse, AdminUsersAssignResponse, AdminUsersInviteResponse, AdminUsersListResponse, AdminUsersRemoveResponse, AdminUsersSessionClearSettingsResponse, AdminUsersSessionGetSettingsResponse, AdminUsersSessionInvalidateResponse, AdminUsersSessionListResponse, AdminUsersSessionResetBulkResponse, AdminUsersSessionResetResponse, AdminUsersSessionSetSettingsResponse, AdminUsersSetAdminResponse, AdminUsersSetExpirationResponse, AdminUsersSetOwnerResponse, AdminUsersSetRegularResponse, AdminUsersUnsupportedVersionsExportResponse, AdminWorkflowsCollaboratorsAddResponse, AdminWorkflowsCollaboratorsRemoveResponse, AdminWorkflowsPermissionsLookupResponse, AdminWorkflowsSearchResponse, AdminWorkflowsUnpublishResponse, ApiTestResponse, AppsConnectionsOpenResponse, AppsEventAuthorizationsListResponse, AppsManifestCreateResponse, AppsManifestDeleteResponse, AppsManifestExportResponse, AppsManifestUpdateResponse, AppsManifestValidateResponse, AppsUninstallResponse, AuthRevokeResponse, AuthTeamsListResponse, AuthTestResponse, BookmarksAddResponse, BookmarksEditResponse, BookmarksListResponse, BookmarksRemoveResponse, BotsInfoResponse, CallsAddResponse, CallsEndResponse, CallsInfoResponse, CallsParticipantsAddResponse, CallsParticipantsRemoveResponse, CallsUpdateResponse, ChatDeleteResponse, ChatDeleteScheduledMessageResponse, ChatGetPermalinkResponse, ChatMeMessageResponse, ChatPostEphemeralResponse, ChatPostMessageResponse, ChatScheduledMessagesListResponse, ChatScheduleMessageResponse, ChatUnfurlResponse, ChatUpdateResponse, ConversationsAcceptSharedInviteResponse, ConversationsApproveSharedInviteResponse, ConversationsArchiveResponse, ConversationsCloseResponse, ConversationsCreateResponse, ConversationsDeclineSharedInviteResponse, ConversationsHistoryResponse, ConversationsInfoResponse, ConversationsInviteResponse, ConversationsInviteSharedResponse, ConversationsJoinResponse, ConversationsKickResponse, ConversationsLeaveResponse, ConversationsListConnectInvitesResponse, ConversationsListResponse, ConversationsMarkResponse, ConversationsMembersResponse, ConversationsOpenResponse, ConversationsRenameResponse, ConversationsRepliesResponse, ConversationsSetPurposeResponse, ConversationsSetTopicResponse, ConversationsUnarchiveResponse, DialogOpenResponse, DndEndDndResponse, DndEndSnoozeResponse, DndInfoResponse, DndSetSnoozeResponse, DndTeamInfoResponse, EmojiListResponse, FilesCommentsDeleteResponse, FilesCompleteUploadExternalResponse, FilesDeleteResponse, FilesGetUploadURLExternalResponse, FilesInfoResponse, FilesListResponse, FilesRemoteAddResponse, FilesRemoteInfoResponse, FilesRemoteListResponse, FilesRemoteRemoveResponse, FilesRemoteShareResponse, FilesRemoteUpdateResponse, FilesRevokePublicURLResponse, FilesSharedPublicURLResponse, FilesUploadResponse, FunctionsCompleteErrorResponse, FunctionsCompleteSuccessResponse, MigrationExchangeResponse, OauthAccessResponse, OauthV2AccessResponse, OauthV2ExchangeResponse, OpenIDConnectTokenResponse, OpenIDConnectUserInfoResponse, PinsAddResponse, PinsListResponse, PinsRemoveResponse, ReactionsAddResponse, ReactionsGetResponse, ReactionsListResponse, ReactionsRemoveResponse, RemindersAddResponse, RemindersCompleteResponse, RemindersDeleteResponse, RemindersInfoResponse, RemindersListResponse, RtmConnectResponse, RtmStartResponse, SearchAllResponse, SearchFilesResponse, SearchMessagesResponse, StarsAddResponse, StarsListResponse, StarsRemoveResponse, TeamAccessLogsResponse, TeamBillableInfoResponse, TeamBillingInfoResponse, TeamInfoResponse, TeamIntegrationLogsResponse, TeamPreferencesListResponse, TeamProfileGetResponse, ToolingTokensRotateResponse, UsergroupsCreateResponse, UsergroupsDisableResponse, UsergroupsEnableResponse, UsergroupsListResponse, UsergroupsUpdateResponse, UsergroupsUsersListResponse, UsergroupsUsersUpdateResponse, UsersConversationsResponse, UsersDeletePhotoResponse, UsersGetPresenceResponse, UsersIdentityResponse, UsersInfoResponse, UsersListResponse, UsersLookupByEmailResponse, UsersProfileGetResponse, UsersProfileSetResponse, UsersSetPhotoResponse, UsersSetPresenceResponse, ViewsOpenResponse, ViewsPublishResponse, ViewsPushResponse, ViewsUpdateResponse, WorkflowsStepCompletedResponse, WorkflowsStepFailedResponse, WorkflowsUpdateStepResponse } from "@slack/web-api";
import type { AdminAnalyticsGetFileArguments, AdminAppsActivitiesListArguments, AdminAppsApproveArguments, AdminAppsApprovedListArguments, AdminAppsClearResolutionArguments, AdminAppsConfigLookupArguments, AdminAppsConfigSetArguments, AdminAppsRequestsCancelArguments, AdminAppsRequestsListArguments, AdminAppsRestrictArguments, AdminAppsRestrictedListArguments, AdminAppsUninstallArguments, AdminAuthPolicyAssignEntitiesArguments, AdminAuthPolicyGetEntitiesArguments, AdminAuthPolicyRemoveEntitiesArguments, AdminBarriersCreateArguments, AdminBarriersDeleteArguments, AdminBarriersListArguments, AdminBarriersUpdateArguments, AdminConversationsArchiveArguments, AdminConversationsBulkArchiveArguments, AdminConversationsBulkDeleteArguments, AdminConversationsBulkMoveArguments, AdminConversationsConvertToPrivateArguments, AdminConversationsConvertToPublicArguments, AdminConversationsCreateArguments, AdminConversationsDeleteArguments, AdminConversationsDisconnectSharedArguments, AdminConversationsEKMListOriginalConnectedChannelInfoArguments, AdminConversationsGetConversationPrefsArguments, AdminConversationsGetCustomRetentionArguments, AdminConversationsGetTeamsArguments, AdminConversationsInviteArguments, AdminConversationsLookupArguments, AdminConversationsRemoveCustomRetentionArguments, AdminConversationsRenameArguments, AdminConversationsRestrictAccessAddGroupArguments, AdminConversationsRestrictAccessListGroupsArguments, AdminConversationsRestrictAccessRemoveGroupArguments, AdminConversationsSearchArguments, AdminConversationsSetConversationPrefsArguments, AdminConversationsSetCustomRetentionArguments, AdminConversationsSetTeamsArguments, AdminConversationsUnarchiveArguments, AdminEmojiAddAliasArguments, AdminEmojiAddArguments, AdminEmojiListArguments, AdminEmojiRemoveArguments, AdminEmojiRenameArguments, AdminFunctionsListArguments, AdminFunctionsPermissionsLookupArguments, AdminFunctionsPermissionsSetArguments, AdminInviteRequestsApproveArguments, AdminInviteRequestsApprovedListArguments, AdminInviteRequestsDeniedListArguments, AdminInviteRequestsDenyArguments, AdminInviteRequestsListArguments, AdminRolesAddAssignmentsArguments, AdminRolesListAssignmentsArguments, AdminRolesRemoveAssignmentsArguments, AdminTeamsAdminsListArguments, AdminTeamsCreateArguments, AdminTeamsListArguments, AdminTeamsOwnersListArguments, AdminTeamsSettingsInfoArguments, AdminTeamsSettingsSetDefaultChannelsArguments, AdminTeamsSettingsSetDescriptionArguments, AdminTeamsSettingsSetDiscoverabilityArguments, AdminTeamsSettingsSetIconArguments, AdminTeamsSettingsSetNameArguments, AdminUsergroupsAddChannelsArguments, AdminUsergroupsAddTeamsArguments, AdminUsergroupsListChannelsArguments, AdminUsergroupsRemoveChannelsArguments, AdminUsersAssignArguments, AdminUsersInviteArguments, AdminUsersListArguments, AdminUsersRemoveArguments, AdminUsersSessionClearSettingsArguments, AdminUsersSessionGetSettingsArguments, AdminUsersSessionInvalidateArguments, AdminUsersSessionListArguments, AdminUsersSessionResetArguments, AdminUsersSessionResetBulkArguments, AdminUsersSessionSetSettingsArguments, AdminUsersSetAdminArguments, AdminUsersSetExpirationArguments, AdminUsersSetOwnerArguments, AdminUsersSetRegularArguments, AdminUsersUnsupportedVersionsExportArguments, AdminWorkflowsCollaboratorsAddArguments, AdminWorkflowsCollaboratorsRemoveArguments, AdminWorkflowsPermissionsLookupArguments, AdminWorkflowsSearchArguments, AdminWorkflowsUnpublishArguments, APITestArguments, AppsConnectionsOpenArguments, AppsEventAuthorizationsListArguments, AppsManifestCreateArguments, AppsManifestDeleteArguments, AppsManifestExportArguments, AppsManifestUpdateArguments, AppsManifestValidateArguments, AppsUninstallArguments, AuthRevokeArguments, AuthTeamsListArguments, AuthTestArguments, BookmarksAddArguments, BookmarksEditArguments, BookmarksListArguments, BookmarksRemoveArguments, BotsInfoArguments, CallsAddArguments, CallsEndArguments, CallsInfoArguments, CallsParticipantsAddArguments, CallsParticipantsRemoveArguments, CallsUpdateArguments, ChatDeleteArguments, ChatDeleteScheduledMessageArguments, ChatGetPermalinkArguments, ChatMeMessageArguments, ChatPostEphemeralArguments, ChatPostMessageArguments, ChatScheduledMessagesListArguments, ChatScheduleMessageArguments, ChatUnfurlArguments, ChatUpdateArguments, ConversationsAcceptSharedInviteArguments, ConversationsApproveSharedInviteArguments, ConversationsArchiveArguments, ConversationsCloseArguments, ConversationsCreateArguments, ConversationsDeclineSharedInviteArguments, ConversationsHistoryArguments, ConversationsInfoArguments, ConversationsInviteArguments, ConversationsInviteSharedArguments, ConversationsJoinArguments, ConversationsKickArguments, ConversationsLeaveArguments, ConversationsListArguments, ConversationsListConnectInvitesArguments, ConversationsMarkArguments, ConversationsMembersArguments, ConversationsOpenArguments, ConversationsRenameArguments, ConversationsRepliesArguments, ConversationsSetPurposeArguments, ConversationsSetTopicArguments, ConversationsUnarchiveArguments, DialogOpenArguments, DndEndDndArguments, DndEndSnoozeArguments, DndInfoArguments, DndSetSnoozeArguments, DndTeamInfoArguments, EmojiListArguments, FilesCommentsDeleteArguments, FilesCompleteUploadExternalArguments, FilesDeleteArguments, FilesGetUploadURLExternalArguments, FilesInfoArguments, FilesListArguments, FilesRemoteAddArguments, FilesRemoteInfoArguments, FilesRemoteListArguments, FilesRemoteRemoveArguments, FilesRemoteShareArguments, FilesRemoteUpdateArguments, FilesRevokePublicURLArguments, FilesSharedPublicURLArguments, FilesUploadArguments, FilesUploadV2Arguments, FunctionsCompleteErrorArguments, FunctionsCompleteSuccessArguments, MigrationExchangeArguments, OAuthAccessArguments, OAuthV2AccessArguments, OAuthV2ExchangeArguments, OpenIDConnectTokenArguments, OpenIDConnectUserInfoArguments, PinsAddArguments, PinsListArguments, PinsRemoveArguments, ReactionsAddArguments, ReactionsGetArguments, ReactionsListArguments, ReactionsRemoveArguments, RemindersAddArguments, RemindersCompleteArguments, RemindersDeleteArguments, RemindersInfoArguments, RemindersListArguments, RTMConnectArguments, RTMStartArguments, SearchAllArguments, SearchFilesArguments, SearchMessagesArguments, StarsAddRemoveArguments, StarsListArguments, TeamAccessLogsArguments, TeamBillableInfoArguments, TeamBillingInfoArguments, TeamInfoArguments, TeamIntegrationLogsArguments, TeamPreferencesListArguments, TeamProfileGetArguments, ToolingTokensRotateArguments, UsergroupsCreateArguments, UsergroupsDisableArguments, UsergroupsEnableArguments, UsergroupsListArguments, UsergroupsUpdateArguments, UsergroupsUsersListArguments, UsergroupsUsersUpdateArguments, UsersConversationsArguments, UsersDeletePhotoArguments, UsersGetPresenceArguments, UsersIdentityArguments, UsersInfoArguments, UsersListArguments, UsersLookupByEmailArguments, UsersProfileGetArguments, UsersProfileSetArguments, UsersSetPhotoArguments, UsersSetPresenceArguments, ViewsOpenArguments, ViewsPublishArguments, ViewsPushArguments, ViewsUpdateArguments, WorkflowsStepCompletedArguments, WorkflowsStepFailedArguments, WorkflowsUpdateStepArguments } from "@slack/web-api";
import type { WebAPICallResult, WebClientEvent } from "@slack/web-api";
import { EventEmitter } from "eventemitter3";
/**
 * Generic method definition
 */
export default interface Method<MethodArguments, MethodResult extends WebAPICallResult = WebAPICallResult> {
    (options: MethodArguments): MethodResult;
}
/**
 * A class that defines all Web API methods, their arguments type, their response type, and binds those methods to the
 * `apiCall` class method.
 */
export declare abstract class Methods extends EventEmitter<WebClientEvent> {
    protected constructor();
    abstract apiCall(method: string, options?: Record<string, unknown>): WebAPICallResult;
    abstract filesUploadV2(options: FilesUploadV2Arguments): Promise<WebAPICallResult>;
    readonly admin: {
        analytics: {
            /**
             * @description Retrieve analytics data for a given date, presented as a compressed JSON file.
             * @see {@link https://api.slack.com/methods/api.test `api.test` API reference}.
             */
            getFile: Method<AdminAnalyticsGetFileArguments, AdminAnalyticsGetFileResponse>;
        };
        apps: {
            activities: {
                /**
                 * @description Get logs for a specified team/org.
                 * @see {@link https://api.slack.com/methods/admin.apps.activities.list `admin.apps.activities.list` API reference}.
                 */
                list: Method<AdminAppsActivitiesListArguments, AdminAppsActivitiesListResponse>;
            };
            /**
             * @description Approve an app for installation on a workspace.
             * @see {@link https://api.slack.com/methods/admin.apps.approve `admin.apps.approve` API reference}.
             */
            approve: Method<AdminAppsApproveArguments, AdminAppsApproveResponse>;
            approved: {
                /**
                 * @description List approved apps for an org or workspace.
                 * @see {@link https://api.slack.com/methods/admin.apps.approved.list `admin.apps.approved.list` API reference}.
                 */
                list: Method<AdminAppsApprovedListArguments, AdminAppsApprovedListResponse>;
            };
            /**
             * @description Clear an app resolution.
             * @see {@link https://api.slack.com/methods/admin.apps.clearResolution `admin.apps.clearResolution` API reference}.
             */
            clearResolution: Method<AdminAppsClearResolutionArguments, AdminAppsClearResolutionResponse>;
            config: {
                /**
                 * @description Look up the app config for connectors by their IDs.
                 * @see {@link https://api.slack.com/methods/admin.apps.config.lookup `admin.apps.config.lookup` API reference}.
                 */
                lookup: Method<AdminAppsConfigLookupArguments, AdminAppsConfigLookupResponse>;
                /**
                 * @description Set the app config for a connector.
                 * @see {@link https://api.slack.com/methods/admin.apps.config.set `admin.apps.config.set` API reference}.
                 */
                set: Method<AdminAppsConfigSetArguments, AdminAppsConfigSetResponse>;
            };
            requests: {
                /**
                 * @description Cancel app request for team.
                 * @see {@link https://api.slack.com/methods/admin.apps.requests.cancel `admin.apps.requests.cancel` API reference}.
                 */
                cancel: Method<AdminAppsRequestsCancelArguments, AdminAppsRequestsCancelResponse>;
                /**
                 * @description List app requests for a team/workspace.
                 * @see {@link https://api.slack.com/methods/admin.apps.requests.list `admin.apps.requests.list` API reference}.
                 */
                list: Method<AdminAppsRequestsListArguments, AdminAppsRequestsListResponse>;
            };
            /**
             * @description Restrict an app for installation on a workspace.
             * @see {@link https://api.slack.com/methods/admin.apps.restrict `admin.apps.restrict` API reference}.
             */
            restrict: Method<AdminAppsRestrictArguments, AdminAppsRestrictResponse>;
            restricted: {
                /**
                 * @description List restricted apps for an org or workspace.
                 * @see {@link https://api.slack.com/methods/admin.apps.restricted.list `admin.apps.restricted.list` API reference}.
                 */
                list: Method<AdminAppsRestrictedListArguments, AdminAppsRestrictedListResponse>;
            };
            /**
             * @description Uninstall an app from one or many workspaces, or an entire enterprise organization.
             * @see {@link https://api.slack.com/methods/admin.apps.uninstall `admin.apps.uninstall` API reference}.
             */
            uninstall: Method<AdminAppsUninstallArguments, AdminAppsUninstallResponse>;
        };
        auth: {
            policy: {
                /**
                 * @description Assign entities to a particular authentication policy.
                 * @see {@link https://api.slack.com/methods/admin.auth.policy.assignEntities `admin.auth.policy.assignEntities` API reference}.
                 */
                assignEntities: Method<AdminAuthPolicyAssignEntitiesArguments, AdminAuthPolicyAssignEntitiesResponse>;
                /**
                 * @description Fetch all the entities assigned to a particular authentication policy by name.
                 * @see {@link https://api.slack.com/methods/admin.auth.policy.getEntities `admin.auth.policy.getEntities` API reference}.
                 */
                getEntities: Method<AdminAuthPolicyGetEntitiesArguments, AdminAuthPolicyGetEntitiesResponse>;
                /**
                 * @description Remove specified entities from a specified authentication policy.
                 * @see {@link https://api.slack.com/methods/admin.auth.policy.removeEntities `admin.auth.policy.removeEntities` API reference}.
                 */
                removeEntities: Method<AdminAuthPolicyRemoveEntitiesArguments, AdminAuthPolicyRemoveEntitiesResponse>;
            };
        };
        barriers: {
            /**
             * @description Create an Information Barrier.
             * @see {@link https://api.slack.com/methods/admin.barriers.create `admin.barriers.create` API reference}.
             */
            create: Method<AdminBarriersCreateArguments, AdminBarriersCreateResponse>;
            /**
             * @description Delete an existing Information Barrier.
             * @see {@link https://api.slack.com/methods/admin.barriers.delete `admin.barriers.delete` API reference}.
             */
            delete: Method<AdminBarriersDeleteArguments, AdminBarriersDeleteResponse>;
            /**
             * @description Get all Information Barriers for your organization.
             * @see {@link https://api.slack.com/methods/admin.barriers.list `admin.barriers.list` API reference}.
             */
            list: Method<AdminBarriersListArguments, AdminBarriersListResponse>;
            /**
             * @description Update an existing Information Barrier.
             * @see {@link https://api.slack.com/methods/admin.barriers.update `admin.barriers.update` API reference}.
             */
            update: Method<AdminBarriersUpdateArguments, AdminBarriersUpdateResponse>;
        };
        conversations: {
            /**
             * @description Archive a public or private channel.
             * @see {@link https://api.slack.com/methods/admin.conversations.archive `admin.conversations.archive` API reference}.
             */
            archive: Method<AdminConversationsArchiveArguments, AdminConversationsArchiveResponse>;
            /**
             * @description Archive public or private channels in bulk.
             * @see {@link https://api.slack.com/methods/admin.conversations.bulkArchive `admin.conversations.bulkArchive` API reference}.
             */
            bulkArchive: Method<AdminConversationsBulkArchiveArguments, AdminConversationsBulkArchiveResponse>;
            /**
             * @description Delete public or private channels in bulk.
             * @see {@link https://api.slack.com/methods/admin.conversations.bulkDelet `admin.conversations.bulkDelete` API reference}.
             */
            bulkDelete: Method<AdminConversationsBulkDeleteArguments, AdminConversationsBulkDeleteResponse>;
            /**
             * @description Move public or private channels in bulk.
             * @see {@link https://api.slack.com/methods/admin.conversations.bulkMove `admin.conversations.bulkMove` API reference}.
             */
            bulkMove: Method<AdminConversationsBulkMoveArguments, AdminConversationsBulkMoveResponse>;
            /**
             * @description Convert a public channel to a private channel.
             * @see {@link https://api.slack.com/methods/admin.conversations.convertToPrivate `admin.conversations.convertToPrivate` API reference}.
             */
            convertToPrivate: Method<AdminConversationsConvertToPrivateArguments, AdminConversationsConvertToPrivateResponse>;
            /**
             * @description Convert a private channel to a public channel.
             * @see {@link https://api.slack.com/methods/admin.conversations.convertToPublic `admin.conversations.convertToPublic` API reference}.
             */
            convertToPublic: Method<AdminConversationsConvertToPublicArguments, AdminConversationsConvertToPublicResponse>;
            /**
             * @description Create a public or private channel-based conversation.
             * @see {@link https://api.slack.com/methods/admin.conversations.create `admin.conversations.create` API reference}.
             */
            create: Method<AdminConversationsCreateArguments, AdminConversationsCreateResponse>;
            /**
             * @description Delete a public or private channel.
             * @see {@link https://api.slack.com/methods/admin.conversations.delete `admin.conversations.delete` API reference}.
             */
            delete: Method<AdminConversationsDeleteArguments, AdminConversationsDeleteResponse>;
            /**
             * @description Disconnect a connected channel from one or more workspaces.
             * @see {@link https://api.slack.com/methods/admin.conversations.disconnectShared `admin.conversations.disconnectShared` API reference}.
             */
            disconnectShared: Method<AdminConversationsDisconnectSharedArguments, AdminConversationsDisconnectSharedResponse>;
            ekm: {
                /**
                 * @description List all disconnected channels — i.e., channels that were once connected to other workspaces
                 * and then disconnected — and the corresponding original channel IDs for key revocation with EKM.
                 * @see {@link https://api.slack.com/methods/admin.conversations.ekm.listOriginalConnectedChannelInfo `admin.conversations.ekm.listOriginalConnectedChannelInfo` API reference}.
                 */
                listOriginalConnectedChannelInfo: Method<AdminConversationsEKMListOriginalConnectedChannelInfoArguments, AdminConversationsEkmListOriginalConnectedChannelInfoResponse>;
            };
            /**
             * @description Get conversation preferences for a public or private channel.
             * @see {@link https://api.slack.com/methods/admin.conversations.getConversationPrefs `admin.conversations.getConversationPrefs` API reference}.
             */
            getConversationPrefs: Method<AdminConversationsGetConversationPrefsArguments, AdminConversationsGetConversationPrefsResponse>;
            /**
             * @description Get a conversation's retention policy.
             * @see {@link https://api.slack.com/methods/admin.conversations.getCustomRetention `admin.conversations.getCustomRetention` API reference}.
             */
            getCustomRetention: Method<AdminConversationsGetCustomRetentionArguments, AdminConversationsGetCustomRetentionResponse>;
            /**
             * @description Get all the workspaces a given public or private channel is connected to within
             * this Enterprise org.
             * @see {@link https://api.slack.com/methods/admin.conversations.getTeams `admin.conversations.getTeams` API reference}.
             */
            getTeams: Method<AdminConversationsGetTeamsArguments, AdminConversationsGetTeamsResponse>;
            /**
             * @description Invite a user to a public or private channel.
             * @see {@link https://api.slack.com/methods/admin.conversations.invite `admin.conversations.invite` API reference}.
             */
            invite: Method<AdminConversationsInviteArguments, AdminConversationsInviteResponse>;
            /**
             * @description Returns channels on the given team using the filters.
             * @see {@link https://api.slack.com/methods/admin.conversations.lookup `admin.conversations.lookup` API reference}.
             */
            lookup: Method<AdminConversationsLookupArguments, AdminConversationsLookupResponse>;
            /**
             * @description Remove a conversation's retention policy.
             * @see {@link https://api.slack.com/methods/admin.conversations.removeCustomRetention `admin.conversations.removeCustomRetention` API reference}.
             */
            removeCustomRetention: Method<AdminConversationsRemoveCustomRetentionArguments, AdminConversationsRemoveCustomRetentionResponse>;
            /**
             * @description Rename a public or private channel.
             * @see {@link https://api.slack.com/methods/admin.conversations.rename `admin.conversations.rename` API reference}.
             */
            rename: Method<AdminConversationsRenameArguments, AdminConversationsRenameResponse>;
            restrictAccess: {
                /**
                 * @description Add an allowlist of IDP groups for accessing a channel.
                 * @see {@link https://api.slack.com/methods/admin.conversations.restrictAccess.addGroup `admin.conversations.restrictAccess.addGroup` API reference}.
                 */
                addGroup: Method<AdminConversationsRestrictAccessAddGroupArguments, AdminConversationsRestrictAccessAddGroupResponse>;
                /**
                 * @description List all IDP Groups linked to a channel.
                 * @see {@link https://api.slack.com/methods/admin.conversations.restrictAccess.listGroups `admin.conversations.restrictAccess.listGroups` API reference}.
                 */
                listGroups: Method<AdminConversationsRestrictAccessListGroupsArguments, AdminConversationsRestrictAccessListGroupsResponse>;
                /**
                 * @description Remove a linked IDP group linked from a private channel.
                 * @see {@link https://api.slack.com/methods/admin.conversations.restrictAccess.removeGroup `admin.conversations.restrictAccess.removeGroup` API reference}.
                 */
                removeGroup: Method<AdminConversationsRestrictAccessRemoveGroupArguments, AdminConversationsRestrictAccessRemoveGroupResponse>;
            };
            /**
             * @description Search for public or private channels in an Enterprise organization.
             * @see {@link https://api.slack.com/methods/admin.conversations.search `admin.conversations.search` API reference}.
             */
            search: Method<AdminConversationsSearchArguments, AdminConversationsSearchResponse>;
            /**
             * @description Set the posting permissions for a public or private channel.
             * @see {@link https://api.slack.com/methods/admin.conversations.setConversationPrefs `admin.conversations.setConversationPrefs` API reference}.
             */
            setConversationPrefs: Method<AdminConversationsSetConversationPrefsArguments, AdminConversationsSetConversationPrefsResponse>;
            /**
             * @description Set a conversation's retention policy.
             * @see {@link https://api.slack.com/methods/admin.conversations.setCustomRetention `admin.conversations.setCustomRetention` API reference}.
             */
            setCustomRetention: Method<AdminConversationsSetCustomRetentionArguments, AdminConversationsSetCustomRetentionResponse>;
            /**
             * @description Set the workspaces in an Enterprise grid org that connect to a public or private channel.
             * @see {@link https://api.slack.com/methods/admin.conversations.setTeams `admin.conversations.setTeams` API reference}.
             */
            setTeams: Method<AdminConversationsSetTeamsArguments, AdminConversationsSetTeamsResponse>;
            /**
             * @description Unarchive a public or private channel.
             * @see {@link https://api.slack.com/methods/admin.conversations.unarchive `admin.conversations.unarchive` API reference}.
             */
            unarchive: Method<AdminConversationsUnarchiveArguments, AdminConversationsUnarchiveResponse>;
        };
        emoji: {
            /**
             * @description Add an emoji.
             * @see {@link https://api.slack.com/methods/admin.emoji.add `admin.emoji.add` API reference}.
             */
            add: Method<AdminEmojiAddArguments, AdminEmojiAddResponse>;
            /**
             * @description Add an emoji alias.
             * @see {@link https://api.slack.com/methods/admin.emoji.addAlias `admin.emoji.addAlias` API reference}.
             */
            addAlias: Method<AdminEmojiAddAliasArguments, AdminEmojiAddAliasResponse>;
            /**
             * @description List emoji for an Enterprise Grid organization.
             * @see {@link https://api.slack.com/methods/admin.emoji.list `admin.emoji.list` API reference}.
             */
            list: Method<AdminEmojiListArguments, AdminEmojiListResponse>;
            /**
             * @description Remove an emoji across an Enterprise Grid organization.
             * @see {@link https://api.slack.com/methods/admin.emoji.remove `admin.emoji.remove` API reference}.
             */
            remove: Method<AdminEmojiRemoveArguments, AdminEmojiRemoveResponse>;
            /**
             * @description Rename an emoji.
             * @see {@link https://api.slack.com/methods/admin.emoji.rename `admin.emoji.rename` API reference}.
             */
            rename: Method<AdminEmojiRenameArguments, AdminEmojiRenameResponse>;
        };
        functions: {
            /**
             * @description Look up functions by a set of apps.
             * @see {@link https://api.slack.com/methods/admin.functions.list `admin.functions.list` API reference}.
             */
            list: Method<AdminFunctionsListArguments, AdminFunctionsListResponse>;
            permissions: {
                /**
                 * @description Lookup the visibility of multiple Slack functions and include the users if
                 * it is limited to particular named entities.
                 * @see {@link https://api.slack.com/methods/admin.functions.permissions.lookup `admin.functions.permissions.lookup` API reference}.
                 */
                lookup: Method<AdminFunctionsPermissionsLookupArguments, AdminFunctionsPermissionsLookupResponse>;
                /**
                 * @description Set the visibility of a Slack function and define the users or workspaces if
                 * it is set to named_entities.
                 * @see {@link https://api.slack.com/methods/admin.functions.permissions.set `admin.functions.permissions.set` API reference}.
                 */
                set: Method<AdminFunctionsPermissionsSetArguments, AdminFunctionsPermissionsSetResponse>;
            };
        };
        inviteRequests: {
            /**
             * @description Approve a workspace invite request.
             * @see {@link https://api.slack.com/methods/admin.inviteRequests.approve `admin.inviteRequests.approve` API reference}.
             */
            approve: Method<AdminInviteRequestsApproveArguments, AdminInviteRequestsApproveResponse>;
            approved: {
                /**
                 * @description List all approved workspace invite requests.
                 * @see {@link https://api.slack.com/methods/admin.inviteRequests.approved.list `admin.inviteRequests.approved.list` API reference}.
                 */
                list: Method<AdminInviteRequestsApprovedListArguments, AdminInviteRequestsApprovedListResponse>;
            };
            denied: {
                /**
                 * @description List all denied workspace invite requests.
                 * @see {@link https://api.slack.com/methods/admin.inviteRequests.denied.list `admin.inviteRequests.denied.list` API reference}.
                 */
                list: Method<AdminInviteRequestsDeniedListArguments, AdminInviteRequestsDeniedListResponse>;
            };
            /**
             * @description Deny a workspace invite request.
             * @see {@link https://api.slack.com/methods/admin.inviteRequests.deny `admin.inviteRequests.deny` API reference}.
             */
            deny: Method<AdminInviteRequestsDenyArguments, AdminInviteRequestsDenyResponse>;
            /**
             * @description List all pending workspace invite requests.
             * @see {@link https://api.slack.com/methods/admin.inviteRequests.list `admin.inviteRequests.list` API reference}.
             */
            list: Method<AdminInviteRequestsListArguments, AdminInviteRequestsListResponse>;
        };
        roles: {
            /**
             * @description Adds members to the specified role with the specified scopes.
             * @see {@link https://api.slack.com/methods/admin.roles.addAssignments `admin.roles.addAssignments` API reference}.
             */
            addAssignments: Method<AdminRolesAddAssignmentsArguments, AdminRolesAddAssignmentsResponse>;
            /**
             * @description Lists assignments for all roles across entities.
             * Options to scope results by any combination of roles or entities.
             * @see {@link https://api.slack.com/methods/admin.roles.listAssignments `admin.roles.listAssignments` API reference}.
             */
            listAssignments: Method<AdminRolesListAssignmentsArguments, AdminRolesListAssignmentsResponse>;
            /**
             * @description Removes a set of users from a role for the given scopes and entities.
             * @see {@link https://api.slack.com/methods/admin.roles.removeAssignments `admin.roles.removeAssignments` API reference}.
             */
            removeAssignments: Method<AdminRolesRemoveAssignmentsArguments, AdminRolesRemoveAssignmentsResponse>;
        };
        teams: {
            admins: {
                /**
                 * @description List all of the admins on a given workspace.
                 * @see {@link https://api.slack.com/methods/admin.teams.admins.list `admin.teams.admins.list` API reference}.
                 */
                list: Method<AdminTeamsAdminsListArguments, AdminTeamsAdminsListResponse>;
            };
            /**
             * @description Create an Enterprise team.
             * @see {@link https://api.slack.com/methods/admin.teams.create `admin.teams.create` API reference}.
             */
            create: Method<AdminTeamsCreateArguments, AdminTeamsCreateResponse>;
            /**
             * @description List all teams on an Enterprise organization.
             * @see {@link https://api.slack.com/methods/admin.teams.list `admin.teams.list` API reference}.
             */
            list: Method<AdminTeamsListArguments, AdminTeamsListResponse>;
            owners: {
                /**
                 * @description List all of the owners on a given workspace.
                 * @see {@link https://api.slack.com/methods/admin.teams.owners.list `admin.teams.owners.list` API reference}.
                 */
                list: Method<AdminTeamsOwnersListArguments, AdminTeamsOwnersListResponse>;
            };
            settings: {
                /**
                 * @description Fetch information about settings in a workspace.
                 * @see {@link https://api.slack.com/methods/admin.teams.owners.list `admin.teams.owners.list` API reference}.
                 */
                info: Method<AdminTeamsSettingsInfoArguments, AdminTeamsSettingsInfoResponse>;
                /**
                 * @description Set the default channels of a workspace.
                 * @see {@link https://api.slack.com/methods/admin.teams.settings.setDefaultChannels `admin.teams.settings.setDefaultChannels` API reference}.
                 */
                setDefaultChannels: Method<AdminTeamsSettingsSetDefaultChannelsArguments, AdminTeamsSettingsSetDefaultChannelsResponse>;
                /**
                 * @description Set the description of a given workspace.
                 * @see {@link https://api.slack.com/methods/admin.teams.settings.setDescription `admin.teams.settings.setDescription` API reference}.
                 */
                setDescription: Method<AdminTeamsSettingsSetDescriptionArguments, AdminTeamsSettingsSetDescriptionResponse>;
                /**
                 * @description Set the discoverability of a given workspace.
                 * @see {@link https://api.slack.com/methods/admin.teams.settings.setDiscoverability `admin.teams.settings.setDiscoverability` API reference}.
                 */
                setDiscoverability: Method<AdminTeamsSettingsSetDiscoverabilityArguments, AdminTeamsSettingsSetDiscoverabilityResponse>;
                /**
                 * @description Sets the icon of a workspace.
                 * @see {@link https://api.slack.com/methods/admin.teams.settings.setIcon `admin.teams.settings.setIcon` API reference}.
                 */
                setIcon: Method<AdminTeamsSettingsSetIconArguments, AdminTeamsSettingsSetIconResponse>;
                /**
                 * @description Set the name of a given workspace.
                 * @see {@link https://api.slack.com/methods/admin.teams.settings.setName `admin.teams.settings.setName` API reference}.
                 */
                setName: Method<AdminTeamsSettingsSetNameArguments, AdminTeamsSettingsSetNameResponse>;
            };
        };
        usergroups: {
            /**
             * @description Add up to one hundred default channels to an IDP group.
             * @see {@link https://api.slack.com/methods/admin.usergroups.addChannels `admin.teams.usergroups.addChannels` API reference}.
             */
            addChannels: Method<AdminUsergroupsAddChannelsArguments, AdminUsergroupsAddChannelsResponse>;
            /**
             * @description Associate one or more default workspaces with an organization-wide IDP group.
             * @see {@link https://api.slack.com/methods/admin.usergroups.addTeams `admin.teams.usergroups.addTeams` API reference}.
             */
            addTeams: Method<AdminUsergroupsAddTeamsArguments, AdminUsergroupsAddTeamsResponse>;
            /**
             * @description List the channels linked to an org-level IDP group (user group).
             * @see {@link https://api.slack.com/methods/admin.usergroups.listChannels `admin.teams.usergroups.listChannels` API reference}.
             */
            listChannels: Method<AdminUsergroupsListChannelsArguments, AdminUsergroupsListChannelsResponse>;
            /**
             * @description Remove one or more default channels from an org-level IDP group (user group).
             * @see {@link https://api.slack.com/methods/admin.usergroups.removeChannels `admin.teams.usergroups.removeChannels` API reference}.
             */
            removeChannels: Method<AdminUsergroupsRemoveChannelsArguments, AdminUsergroupsRemoveChannelsResponse>;
        };
        users: {
            /**
             * @description Add an Enterprise user to a workspace.
             * @see {@link https://api.slack.com/methods/admin.users.assign `admin.users.assign` API reference}.
             */
            assign: Method<AdminUsersAssignArguments, AdminUsersAssignResponse>;
            /**
             * @description Invite a user to a workspace.
             * @see {@link https://api.slack.com/methods/admin.users.invite `admin.users.invite` API reference}.
             */
            invite: Method<AdminUsersInviteArguments, AdminUsersInviteResponse>;
            /**
             * @description List users on a workspace.
             * @see {@link https://api.slack.com/methods/admin.users.list `admin.users.list` API reference}.
             */
            list: Method<AdminUsersListArguments, AdminUsersListResponse>;
            /**
             * @description Remove a user from a workspace.
             * @see {@link https://api.slack.com/methods/admin.users.remove `admin.users.remove` API reference}.
             */
            remove: Method<AdminUsersRemoveArguments, AdminUsersRemoveResponse>;
            session: {
                /**
                 * @description Clear user-specific session settings—the session duration and what happens when the client
                 * closes—for a list of users.
                 * @see {@link https://api.slack.com/methods/admin.users.session.clearSettings `admin.users.session.clearSettings` API reference}.
                 */
                clearSettings: Method<AdminUsersSessionClearSettingsArguments, AdminUsersSessionClearSettingsResponse>;
                /**
                 * @description Get user-specific session settings—the session duration and what happens when the client
                 * closes—given a list of users.
                 * @see {@link https://api.slack.com/methods/admin.users.session.getSettings `admin.users.session.getSettings` API reference}.
                 */
                getSettings: Method<AdminUsersSessionGetSettingsArguments, AdminUsersSessionGetSettingsResponse>;
                /**
                 * @description Revoke a single session for a user. The user will be forced to login to Slack.
                 * @see {@link https://api.slack.com/methods/admin.users.session.invalidate `admin.users.session.invalidate` API reference}.
                 */
                invalidate: Method<AdminUsersSessionInvalidateArguments, AdminUsersSessionInvalidateResponse>;
                /**
                 * @description List active user sessions for an organization.
                 * @see {@link https://api.slack.com/methods/admin.users.session.list `admin.users.session.list` API reference}.
                 */
                list: Method<AdminUsersSessionListArguments, AdminUsersSessionListResponse>;
                /**
                 * @description Wipes all valid sessions on all devices for a given user.
                 * @see {@link https://api.slack.com/methods/admin.users.session.reset `admin.users.session.reset` API reference}.
                 */
                reset: Method<AdminUsersSessionResetArguments, AdminUsersSessionResetResponse>;
                /**
                 * @description Enqueues an asynchronous job to wipe all valid sessions on all devices for a given user list.
                 * @see {@link https://api.slack.com/methods/admin.users.session.resetBulk `admin.users.session.resetBulk` API reference}.
                 */
                resetBulk: Method<AdminUsersSessionResetBulkArguments, AdminUsersSessionResetBulkResponse>;
                /**
                 * @description Configure the user-level session settings—the session duration and what happens when the client
                 * closes—for one or more users.
                 * @see {@link https://api.slack.com/methods/admin.users.session.setSettings `admin.users.session.setSettings` API reference}.
                 */
                setSettings: Method<AdminUsersSessionSetSettingsArguments, AdminUsersSessionSetSettingsResponse>;
            };
            /**
             * @description Set an existing guest, regular user, or owner to be an admin user.
             * @see {@link https://api.slack.com/methods/admin.users.setAdmin `admin.users.setAdmin` API reference}.
             */
            setAdmin: Method<AdminUsersSetAdminArguments, AdminUsersSetAdminResponse>;
            /**
             * @description Set an expiration for a guest user.
             * @see {@link https://api.slack.com/methods/admin.users.setExpiration `admin.users.setExpiration` API reference}.
             */
            setExpiration: Method<AdminUsersSetExpirationArguments, AdminUsersSetExpirationResponse>;
            /**
             * @description Set an existing guest, regular user, or admin user to be a workspace owner.
             * @see {@link https://api.slack.com/methods/admin.users.setOwner `admin.users.setOwner` API reference}.
             */
            setOwner: Method<AdminUsersSetOwnerArguments, AdminUsersSetOwnerResponse>;
            /**
             * @description Set an existing guest user, admin user, or owner to be a regular user.
             * @see {@link https://api.slack.com/methods/admin.users.setRegular `admin.users.setRegular` API reference}.
             */
            setRegular: Method<AdminUsersSetRegularArguments, AdminUsersSetRegularResponse>;
            unsupportedVersions: {
                /**
                 * @description Ask Slackbot to send you an export listing all workspace members using unsupported software,
                 * presented as a zipped CSV file.
                 * @see {@link https://api.slack.com/methods/admin.users.unsupportedVersions.export `admin.users.unsupportedVersions.export` API reference}.
                 */
                export: Method<AdminUsersUnsupportedVersionsExportArguments, AdminUsersUnsupportedVersionsExportResponse>;
            };
        };
        workflows: {
            collaborators: {
                /**
                 * @description Add collaborators to workflows within the team or enterprise.
                 * @see {@link https://api.slack.com/methods/admin.workflows.collaborators.add `admin.workflows.collaborators.add` API reference}.
                 */
                add: Method<AdminWorkflowsCollaboratorsAddArguments, AdminWorkflowsCollaboratorsAddResponse>;
                /**
                 * @description Remove collaborators from workflows within the team or enterprise.
                 * @see {@link https://api.slack.com/methods/admin.workflows.collaborators.remove `admin.workflows.collaborators.remove` API reference}.
                 */
                remove: Method<AdminWorkflowsCollaboratorsRemoveArguments, AdminWorkflowsCollaboratorsRemoveResponse>;
            };
            permissions: {
                /**
                 * @description Look up the permissions for a set of workflows.
                 * @see {@link https://api.slack.com/methods/admin.workflows.permissions.lookup `admin.workflows.permissions.lookup` API reference}.
                 */
                lookup: Method<AdminWorkflowsPermissionsLookupArguments, AdminWorkflowsPermissionsLookupResponse>;
            };
            /**
             * @description Search workflows within the team or enterprise.
             * @see {@link https://api.slack.com/methods/admin.workflows.search `admin.workflows.search` API reference}.
             */
            search: Method<AdminWorkflowsSearchArguments, AdminWorkflowsSearchResponse>;
            /**
             * @description Unpublish workflows within the team or enterprise.
             * @see {@link https://api.slack.com/methods/admin.workflows.unpublish `admin.workflows.unpublish` API reference}.
             */
            unpublish: Method<AdminWorkflowsUnpublishArguments, AdminWorkflowsUnpublishResponse>;
        };
    };
    readonly api: {
        /**
         * @description Checks API calling code.
         * @see {@link https://api.slack.com/methods/api.test `api.test` API reference}.
         */
        test: Method<APITestArguments, ApiTestResponse>;
    };
    readonly apps: {
        connections: {
            /**
             * @description Generate a temporary Socket Mode WebSocket URL that your app can connect to in order to receive
             * events and interactive payloads over.
             * @see {@link https://api.slack.com/methods/apps.connections.open `apps.connections.open` API reference}.
             */
            open: Method<AppsConnectionsOpenArguments, AppsConnectionsOpenResponse>;
        };
        event: {
            authorizations: {
                /**
                 * @description Get a list of authorizations for the given event context.
                 * Each authorization represents an app installation that the event is visible to.
                 * @see {@link https://api.slack.com/methods/apps.event.authorizations.list `apps.event.authorizations.list` API reference}.
                 */
                list: Method<AppsEventAuthorizationsListArguments, AppsEventAuthorizationsListResponse>;
            };
        };
        manifest: {
            /**
             * @description Create an app from an app manifest.
             * @see {@link https://api.slack.com/methods/apps.manifest.create `apps.manifest.create` API reference}.
             */
            create: Method<AppsManifestCreateArguments, AppsManifestCreateResponse>;
            /**
             * @description Permanently deletes an app created through app manifests.
             * @see {@link https://api.slack.com/methods/apps.manifest.delete `apps.manifest.delete` API reference}.
             */
            delete: Method<AppsManifestDeleteArguments, AppsManifestDeleteResponse>;
            /**
             * @description Export an app manifest from an existing app.
             * @see {@link https://api.slack.com/methods/apps.manifest.export `apps.manifest.export` API reference}.
             */
            export: Method<AppsManifestExportArguments, AppsManifestExportResponse>;
            /**
             * @description Update an app from an app manifest.
             * @see {@link https://api.slack.com/methods/apps.manifest.update `apps.manifest.update` API reference}.
             */
            update: Method<AppsManifestUpdateArguments, AppsManifestUpdateResponse>;
            /**
             * @description Validate an app manifest.
             * @see {@link https://api.slack.com/methods/apps.manifest.validate `apps.manifest.validate` API reference}.
             */
            validate: Method<AppsManifestValidateArguments, AppsManifestValidateResponse>;
        };
        /**
         * @description Uninstalls your app from a workspace.
         * @see {@link https://api.slack.com/methods/apps.uninstall `apps.uninstall` API reference}.
         */
        uninstall: Method<AppsUninstallArguments, AppsUninstallResponse>;
    };
    readonly auth: {
        /**
         * @description Revokes a token.
         * @see {@link https://api.slack.com/methods/auth.revoke `auth.revoke` API reference}.
         */
        revoke: Method<AuthRevokeArguments, AuthRevokeResponse>;
        teams: {
            /**
             * @description Obtain a full list of workspaces your org-wide app has been approved for.
             * @see {@link https://api.slack.com/methods/auth.teams.list `auth.teams.list` API reference}.
             */
            list: Method<AuthTeamsListArguments, AuthTeamsListResponse>;
        };
        test: Method<AuthTestArguments, AuthTestResponse>;
    };
    readonly bookmarks: {
        /**
         * @description Add bookmark to a channel.
         * @see {@link https://api.slack.com/methods/bookmarks.add `bookmarks.add` API reference}.
         */
        add: Method<BookmarksAddArguments, BookmarksAddResponse>;
        /**
         * @description Edit bookmark.
         * @see {@link https://api.slack.com/methods/bookmarks.edit `bookmarks.edit` API reference}.
         */
        edit: Method<BookmarksEditArguments, BookmarksEditResponse>;
        /**
         * @description List bookmarks for a channel.
         * @see {@link https://api.slack.com/methods/bookmarks.list `bookmarks.list` API reference}.
         */
        list: Method<BookmarksListArguments, BookmarksListResponse>;
        /**
         * @description Remove bookmark from a channel.
         * @see {@link https://api.slack.com/methods/bookmarks.remove `bookmarks.remove` API reference}.
         */
        remove: Method<BookmarksRemoveArguments, BookmarksRemoveResponse>;
    };
    readonly bots: {
        /**
         * @description Gets information about a bot user.
         * @see {@link https://api.slack.com/methods/bots.info `bots.info` API reference}.
         */
        info: Method<BotsInfoArguments, BotsInfoResponse>;
    };
    readonly calls: {
        /**
         * @description Registers a new Call.
         * @see {@link https://api.slack.com/methods/calls.add `calls.add` API reference}.
         */
        add: Method<CallsAddArguments, CallsAddResponse>;
        /**
         * @description Ends a Call.
         * @see {@link https://api.slack.com/methods/calls.end `calls.end` API reference}.
         */
        end: Method<CallsEndArguments, CallsEndResponse>;
        /**
         * @description Returns information about a Call.
         * @see {@link https://api.slack.com/methods/calls.info `calls.info` API reference}.
         */
        info: Method<CallsInfoArguments, CallsInfoResponse>;
        /**
         * @description Updates information about a Call.
         * @see {@link https://api.slack.com/methods/calls.info `calls.info` API reference}.
         */
        update: Method<CallsUpdateArguments, CallsUpdateResponse>;
        participants: {
            /**
             * @description Registers new participants added to a Call.
             * @see {@link https://api.slack.com/methods/calls.participants.add `calls.participants.add` API reference}.
             */
            add: Method<CallsParticipantsAddArguments, CallsParticipantsAddResponse>;
            remove: Method<CallsParticipantsRemoveArguments, CallsParticipantsRemoveResponse>;
        };
    };
    readonly chat: {
        /**
         * @description Deletes a message.
         * @see {@link https://api.slack.com/methods/chat.delete `chat.delete` API reference}.
         */
        delete: Method<ChatDeleteArguments, ChatDeleteResponse>;
        /**
         * @description Deletes a pending scheduled message from the queue.
         * @see {@link https://api.slack.com/methods/chat.deleteScheduledMessage `chat.deleteScheduledMessage` API reference}.
         */
        deleteScheduledMessage: Method<ChatDeleteScheduledMessageArguments, ChatDeleteScheduledMessageResponse>;
        /**
         * @description Retrieve a permalink URL for a specific extant message.
         * @see {@link https://api.slack.com/methods/chat.getPermalink `chat.getPermalink` API reference}.
         */
        getPermalink: Method<ChatGetPermalinkArguments, ChatGetPermalinkResponse>;
        /**
         * @description Share a me message into a channel.
         * @see {@link https://api.slack.com/methods/chat.meMessage `chat.meMessage` API reference}.
         */
        meMessage: Method<ChatMeMessageArguments, ChatMeMessageResponse>;
        /**
         * @description Sends an ephemeral message to a user in a channel.
         * @see {@link https://api.slack.com/methods/chat.postEphemeral `chat.postEphemeral` API reference}.
         */
        postEphemeral: Method<ChatPostEphemeralArguments, ChatPostEphemeralResponse>;
        /**
         * @description Sends a message to a channel.
         * @see {@link https://api.slack.com/methods/chat.postMessage `chat.postMessage` API reference}.
         */
        postMessage: Method<ChatPostMessageArguments, ChatPostMessageResponse>;
        /**
         * @description Schedules a message to be sent to a channel.
         * @see {@link https://api.slack.com/methods/chat.scheduleMessage `chat.scheduleMessage` API reference}.
         */
        scheduleMessage: Method<ChatScheduleMessageArguments, ChatScheduleMessageResponse>;
        scheduledMessages: {
            /**
             * @description Returns a list of scheduled messages.
             * @see {@link https://api.slack.com/methods/chat.scheduledMessages.list `chat.scheduledMessages.list` API reference}.
             */
            list: Method<ChatScheduledMessagesListArguments, ChatScheduledMessagesListResponse>;
        };
        /**
         * @description Provide custom unfurl behavior for user-posted URLs.
         * @see {@link https://api.slack.com/methods/chat.unfurl `chat.unfurl` API reference}.
         */
        unfurl: Method<ChatUnfurlArguments, ChatUnfurlResponse>;
        /**
         * @description Updates a message.
         * @see {@link https://api.slack.com/methods/chat.update `chat.update` API reference}.
         */
        update: Method<ChatUpdateArguments, ChatUpdateResponse>;
    };
    readonly conversations: {
        /**
         * @description Accepts an invitation to a Slack Connect channel.
         * @see {@link https://api.slack.com/methods/conversations.acceptSharedInvite `conversations.acceptSharedInvite` API reference}.
         */
        acceptSharedInvite: Method<ConversationsAcceptSharedInviteArguments, ConversationsAcceptSharedInviteResponse>;
        /**
         * @description Approves an invitation to a Slack Connect channel.
         * @see {@link https://api.slack.com/methods/conversations.approveSharedInvite `conversations.approveSharedInvite` API reference}.
         */
        approveSharedInvite: Method<ConversationsApproveSharedInviteArguments, ConversationsApproveSharedInviteResponse>;
        /**
         * @description Archives a conversation.
         * @see {@link https://api.slack.com/methods/conversations.archive `conversations.archive` API reference}.
         */
        archive: Method<ConversationsArchiveArguments, ConversationsArchiveResponse>;
        /**
         * @description Closes a direct message or multi-person direct message.
         * @see {@link https://api.slack.com/methods/conversations.close `conversations.close` API reference}.
         */
        close: Method<ConversationsCloseArguments, ConversationsCloseResponse>;
        /**
         * @description Initiates a public or private channel-based conversation.
         * @see {@link https://api.slack.com/methods/conversations.create `conversations.create` API reference}.
         */
        create: Method<ConversationsCreateArguments, ConversationsCreateResponse>;
        /**
         * @description Declines an invitation to a Slack Connect channel.
         * @see {@link https://api.slack.com/methods/conversations.declineSharedInvite `conversations.declineSharedInvite` API reference}.
         */
        declineSharedInvite: Method<ConversationsDeclineSharedInviteArguments, ConversationsDeclineSharedInviteResponse>;
        /**
         * @description Fetches a conversation's history of messages and events.
         * @see {@link https://api.slack.com/methods/conversations.history `conversations.history` API reference}.
         */
        history: Method<ConversationsHistoryArguments, ConversationsHistoryResponse>;
        /**
         * @description Retrieve information about a conversation.
         * @see {@link https://api.slack.com/methods/conversations.info `conversations.info` API reference}.
         */
        info: Method<ConversationsInfoArguments, ConversationsInfoResponse>;
        /**
         * @description Invites users to a channel.
         * @see {@link https://api.slack.com/methods/conversations.invite `conversations.invite` API reference}.
         */
        invite: Method<ConversationsInviteArguments, ConversationsInviteResponse>;
        /**
         * @description Sends an invitation to a Slack Connect channel.
         * @see {@link https://api.slack.com/methods/conversations.inviteShared `conversations.inviteShared` API reference}.
         */
        inviteShared: Method<ConversationsInviteSharedArguments, ConversationsInviteSharedResponse>;
        /**
         * @description Joins an existing conversation.
         * @see {@link https://api.slack.com/methods/conversations.join `conversations.join` API reference}.
         */
        join: Method<ConversationsJoinArguments, ConversationsJoinResponse>;
        /**
         * @description Removes a user from a conversation.
         * @see {@link https://api.slack.com/methods/conversations.kick `conversations.kick` API reference}.
         */
        kick: Method<ConversationsKickArguments, ConversationsKickResponse>;
        /**
         * @description Leaves a conversation.
         * @see {@link https://api.slack.com/methods/conversations.leave `conversations.leave` API reference}.
         */
        leave: Method<ConversationsLeaveArguments, ConversationsLeaveResponse>;
        /**
         * @description List all channels in a Slack team.
         * @see {@link https://api.slack.com/methods/conversations.list `conversations.list` API reference}.
         */
        list: Method<ConversationsListArguments, ConversationsListResponse>;
        /**
         * @description Lists shared channel invites that have been generated or received but have not been approved by
         * all parties.
         * @see {@link https://api.slack.com/methods/conversations.listConnectInvites `conversations.listConnectInvites` API reference}.
         */
        listConnectInvites: Method<ConversationsListConnectInvitesArguments, ConversationsListConnectInvitesResponse>;
        /**
         * @description Sets the read cursor in a channel.
         * @see {@link https://api.slack.com/methods/conversations.mark `conversations.mark` API reference}.
         */
        mark: Method<ConversationsMarkArguments, ConversationsMarkResponse>;
        /**
         * @description Retrieve members of a conversation.
         * @see {@link https://api.slack.com/methods/conversations.members `conversations.members` API reference}.
         */
        members: Method<ConversationsMembersArguments, ConversationsMembersResponse>;
        /**
         * @description Opens or resumes a direct message or multi-person direct message.
         * @see {@link https://api.slack.com/methods/conversations.open `conversations.open` API reference}.
         */
        open: Method<ConversationsOpenArguments, ConversationsOpenResponse>;
        /**
         * @description Renames a conversation.
         * @see {@link https://api.slack.com/methods/conversations.rename `conversations.rename` API reference}.
         */
        rename: Method<ConversationsRenameArguments, ConversationsRenameResponse>;
        /**
         * @description Retrieve a thread of messages posted to a conversation.
         * @see {@link https://api.slack.com/methods/conversations.replies `conversations.replies` API reference}.
         */
        replies: Method<ConversationsRepliesArguments, ConversationsRepliesResponse>;
        /**
         * @description Sets the purpose for a conversation.
         * @see {@link https://api.slack.com/methods/conversations.setPurpose `conversations.setPurpose` API reference}.
         */
        setPurpose: Method<ConversationsSetPurposeArguments, ConversationsSetPurposeResponse>;
        /**
         * @description Sets the topic for a conversation.
         * @see {@link https://api.slack.com/methods/conversations.setTopic `conversations.setTopic` API reference}.
         */
        setTopic: Method<ConversationsSetTopicArguments, ConversationsSetTopicResponse>;
        /**
         * @description Reverses conversation archival.
         * @see {@link https://api.slack.com/methods/conversations.unarchive `conversations.unarchive` API reference}.
         */
        unarchive: Method<ConversationsUnarchiveArguments, ConversationsUnarchiveResponse>;
    };
    readonly dialog: {
        /**
         * @description Open a dialog with a user.
         * @see {@link https://api.slack.com/methods/dialog.open `dialog.open` API reference}.
         */
        open: Method<DialogOpenArguments, DialogOpenResponse>;
    };
    readonly dnd: {
        /**
         * @description Ends the current user's Do Not Disturb session immediately.
         * @see {@link https://api.slack.com/methods/dnd.endDnd `dnd.endDnd` API reference}.
         */
        endDnd: Method<DndEndDndArguments, DndEndDndResponse>;
        /**
         * @description Ends the current user's snooze mode immediately.
         * @see {@link https://api.slack.com/methods/dnd.endSnooze `dnd.endSnooze` API reference}.
         */
        endSnooze: Method<DndEndSnoozeArguments, DndEndSnoozeResponse>;
        /**
         * @description Retrieves a user's current Do Not Disturb status.
         * @see {@link https://api.slack.com/methods/dnd.info `dnd.info` API reference}.
         */
        info: Method<DndInfoArguments, DndInfoResponse>;
        /**
         * @description Turns on Do Not Disturb mode for the current user, or changes its duration.
         * @see {@link https://api.slack.com/methods/dnd.setSnooze `dnd.setSnooze` API reference}.
         */
        setSnooze: Method<DndSetSnoozeArguments, DndSetSnoozeResponse>;
        /**
         * @description Retrieves the Do Not Disturb status for up to 50 users on a team.
         * @see {@link https://api.slack.com/methods/dnd.teamInfo `dnd.teamInfo` API reference}.
         */
        teamInfo: Method<DndTeamInfoArguments, DndTeamInfoResponse>;
    };
    readonly emoji: {
        /**
         * @description Lists custom emoji for a team.
         * @see {@link https://api.slack.com/methods/emoji.list `emoji.list` API reference}.
         */
        list: Method<EmojiListArguments, EmojiListResponse>;
    };
    readonly files: {
        /**
         * @description Finishes an upload started with {@link https://api.slack.com/methods/files.getUploadURLExternal `files.getUploadURLExternal`}.
         * @see {@link https://api.slack.com/methods/files.completeUploadExternal `files.completeUploadExternal` API reference}.
         */
        completeUploadExternal: Method<FilesCompleteUploadExternalArguments, FilesCompleteUploadExternalResponse>;
        /**
         * @description Deletes a file.
         * @see {@link https://api.slack.com/methods/files.delete `files.delete` API reference}.
         */
        delete: Method<FilesDeleteArguments, FilesDeleteResponse>;
        /**
         * @description Gets a URL for an edge external file upload.
         * @see {@link https://api.slack.com/methods/files.getUploadURLExternal `files.getUploadURLExternal` API reference}.
         */
        getUploadURLExternal: Method<FilesGetUploadURLExternalArguments, FilesGetUploadURLExternalResponse>;
        /**
         * @description Gets information about a file.
         * @see {@link https://api.slack.com/methods/files.info `files.info` API reference}.
         */
        info: Method<FilesInfoArguments, FilesInfoResponse>;
        /**
         * @description List files for a team, in a channel, or from a user with applied filters.
         * @see {@link https://api.slack.com/methods/files.list `files.list` API reference}.
         */
        list: Method<FilesListArguments, FilesListResponse>;
        /**
         * @description Revokes public/external sharing access for a file.
         * @see {@link https://api.slack.com/methods/files.revokePublicURL `files.revokePublicURL` API reference}.
         */
        revokePublicURL: Method<FilesRevokePublicURLArguments, FilesRevokePublicURLResponse>;
        /**
         * @description Enables a file for public/external sharing.
         * @see {@link https://api.slack.com/methods/files.revokePublicURL `files.revokePublicURL` API reference}.
         */
        sharedPublicURL: Method<FilesSharedPublicURLArguments, FilesSharedPublicURLResponse>;
        /**
         * @description Uploads or creates a file.
         * @deprecated Use `uploadV2` instead. See {@link https://api.slack.com/changelog/2024-04-a-better-way-to-upload-files-is-here-to-stay our post on retiring `files.upload`}.
         * @see {@link https://api.slack.com/methods/files.upload `files.upload` API reference}.
         */
        upload: Method<FilesUploadArguments, FilesUploadResponse>;
        /**
         * @description Custom method to support a new way of uploading files to Slack.
         * Supports a single file upload
         * Supply:
         * - (required) single file or content
         * - (optional) channel, alt_text, snippet_type,
         * Supports multiple file uploads
         * Supply:
         * - multiple upload_files
         * Will try to honor both single file or content data supplied as well
         * as multiple file uploads property.
         * @see {@link https://slack.dev/node-slack-sdk/web-api#upload-a-file `@slack/web-api` Upload a file documentation}.
         */
        uploadV2: Method<FilesUploadV2Arguments, WebAPICallResult>;
        comments: {
            /**
             * @description Deletes an existing comment on a file.
             * @see {@link https://api.slack.com/methods/files.comments.delete `files.comments.delete` API reference}.
             */
            delete: Method<FilesCommentsDeleteArguments, FilesCommentsDeleteResponse>;
        };
        remote: {
            /**
             * @description Adds a file from a remote service.
             * @see {@link https://api.slack.com/methods/files.remote.add `files.remote.add` API reference}.
             */
            add: Method<FilesRemoteAddArguments, FilesRemoteAddResponse>;
            /**
             * @description Retrieve information about a remote file added to Slack.
             * @see {@link https://api.slack.com/methods/files.remote.info `files.remote.info` API reference}.
             */
            info: Method<FilesRemoteInfoArguments, FilesRemoteInfoResponse>;
            /**
             * @description List remote files added to Slack.
             * @see {@link https://api.slack.com/methods/files.remote.list `files.remote.list` API reference}.
             */
            list: Method<FilesRemoteListArguments, FilesRemoteListResponse>;
            /**
             * @description Remove a remote file.
             * @see {@link https://api.slack.com/methods/files.remote.remove `files.remote.remove` API reference}.
             */
            remove: Method<FilesRemoteRemoveArguments, FilesRemoteRemoveResponse>;
            /**
             * @description Share a remote file into a channel.
             * @see {@link https://api.slack.com/methods/files.remote.share `files.remote.share` API reference}.
             */
            share: Method<FilesRemoteShareArguments, FilesRemoteShareResponse>;
            /**
             * @description Updates an existing remote file.
             * @see {@link https://api.slack.com/methods/files.remote.update `files.remote.update` API reference}.
             */
            update: Method<FilesRemoteUpdateArguments, FilesRemoteUpdateResponse>;
        };
    };
    readonly functions: {
        /**
         * @description Signal the failure to execute a Custom Function.
         * @see {@link https://api.slack.com/methods/functions.completeError `functions.completeError` API reference}.
         */
        completeError: Method<FunctionsCompleteErrorArguments, FunctionsCompleteErrorResponse>;
        /**
         * @description Signal the successful completion of a Custom Function.
         * @see {@link https://api.slack.com/methods/functions.completeSuccess `functions.completeSuccess` API reference}.
         */
        completeSuccess: Method<FunctionsCompleteSuccessArguments, FunctionsCompleteSuccessResponse>;
    };
    readonly migration: {
        /**
         * @description For Enterprise Grid workspaces, map local user IDs to global user IDs.
         * @see {@link https://api.slack.com/methods/migration.exchange `migration.exchange` API reference}.
         */
        exchange: Method<MigrationExchangeArguments, MigrationExchangeResponse>;
    };
    readonly oauth: {
        /**
         * @description Exchanges a temporary OAuth verifier code for an access token.
         * @deprecated This is a legacy method only used by classic Slack apps. Use `oauth.v2.access` for new Slack apps.
         * @see {@link https://api.slack.com/methods/oauth.access `oauth.access` API reference}.
         */
        access: Method<OAuthAccessArguments, OauthAccessResponse>;
        v2: {
            /**
             * @description Exchanges a temporary OAuth verifier code for an access token.
             * @see {@link https://api.slack.com/methods/oauth.v2.access `oauth.v2.access` API reference}.
             */
            access: Method<OAuthV2AccessArguments, OauthV2AccessResponse>;
            /**
             * @description Exchanges a legacy access token for a new expiring access token and refresh token.
             * @see {@link https://api.slack.com/methods/oauth.v2.exchange `oauth.v2.exchange` API reference}.
             */
            exchange: Method<OAuthV2ExchangeArguments, OauthV2ExchangeResponse>;
        };
    };
    readonly openid: {
        connect: {
            /**
             * @description Exchanges a temporary OAuth verifier code for an access token for {@link https://api.slack.com/authentication/sign-in-with-slack Sign in with Slack}.
             * @see {@link https://api.slack.com/methods/openid.connect.token `openid.connect.token` API reference}.
             */
            token: Method<OpenIDConnectTokenArguments, OpenIDConnectTokenResponse>;
            /**
             * @description Get the identity of a user who has authorized {@link https://api.slack.com/authentication/sign-in-with-slack Sign in with Slack}.
             * @see {@link https://api.slack.com/methods/openid.connect.userInfo `openid.connect.userInfo` API reference}.
             */
            userInfo: Method<OpenIDConnectUserInfoArguments, OpenIDConnectUserInfoResponse>;
        };
    };
    readonly pins: {
        /**
         * @description Pins an item to a channel.
         * @see {@link https://api.slack.com/methods/pins.add `pins.add` API reference}.
         */
        add: Method<PinsAddArguments, PinsAddResponse>;
        /**
         * @description Lists items pinned to a channel.
         * @see {@link https://api.slack.com/methods/pins.list `pins.list` API reference}.
         */
        list: Method<PinsListArguments, PinsListResponse>;
        /**
         * @description Un-pins an item from a channel.
         * @see {@link https://api.slack.com/methods/pins.remove `pins.remove` API reference}.
         */
        remove: Method<PinsRemoveArguments, PinsRemoveResponse>;
    };
    readonly reactions: {
        /**
         * @description Adds a reaction to an item.
         * @see {@link https://api.slack.com/methods/reactions.add `reactions.add` API reference}.
         */
        add: Method<ReactionsAddArguments, ReactionsAddResponse>;
        /**
         * @description Gets reactions for an item.
         * @see {@link https://api.slack.com/methods/reactions.get `reactions.get` API reference}.
         */
        get: Method<ReactionsGetArguments, ReactionsGetResponse>;
        /**
         * @description List reactions made by a user.
         * @see {@link https://api.slack.com/methods/reactions.list `reactions.list` API reference}.
         */
        list: Method<ReactionsListArguments, ReactionsListResponse>;
        /**
         * @description Removes a reaction from an item.
         * @see {@link https://api.slack.com/methods/reactions.remove `reactions.remove` API reference}.
         */
        remove: Method<ReactionsRemoveArguments, ReactionsRemoveResponse>;
    };
    readonly reminders: {
        /**
         * @description Creates a reminder.
         * @see {@link https://api.slack.com/methods/reminders.add `reminders.add` API reference}.
         */
        add: Method<RemindersAddArguments, RemindersAddResponse>;
        /**
         * @description Marks a reminder as complete.
         * @see {@link https://api.slack.com/methods/reminders.complete `reminders.complete` API reference}.
         */
        complete: Method<RemindersCompleteArguments, RemindersCompleteResponse>;
        /**
         * @description Deletes a reminder.
         * @see {@link https://api.slack.com/methods/reminders.delete `reminders.delete` API reference}.
         */
        delete: Method<RemindersDeleteArguments, RemindersDeleteResponse>;
        /**
         * @description Gets information about a reminder.
         * @see {@link https://api.slack.com/methods/reminders.info `reminders.info` API reference}.
         */
        info: Method<RemindersInfoArguments, RemindersInfoResponse>;
        /**
         * @description Lists all reminders created by or for a given user.
         * @see {@link https://api.slack.com/methods/reminders.list `reminders.list` API reference}.
         */
        list: Method<RemindersListArguments, RemindersListResponse>;
    };
    readonly rtm: {
        /**
         * @description Starts a Real Time Messaging session.
         * @see {@link https://api.slack.com/methods/rtm.connect `rtm.connect` API reference}.
         */
        connect: Method<RTMConnectArguments, RtmConnectResponse>;
        /**
         * @description Starts a Real Time Messaging session.
         * @deprecated Use `rtm.connect` instead. See {@link https://api.slack.com/changelog/2021-10-rtm-start-to-stop our post on retiring `rtm.start`}.
         * @see {@link https://api.slack.com/methods/rtm.start `rtm.start` API reference}.
         */
        start: Method<RTMStartArguments, RtmStartResponse>;
    };
    readonly search: {
        /**
         * @description Searches for messages and files matching a query.
         * @see {@link https://api.slack.com/methods/search.all search.all` API reference}.
         */
        all: Method<SearchAllArguments, SearchAllResponse>;
        /**
         * @description Searches for files matching a query.
         * @see {@link https://api.slack.com/methods/search.files search.files` API reference}.
         */
        files: Method<SearchFilesArguments, SearchFilesResponse>;
        /**
         * @description Searches for messages matching a query.
         * @see {@link https://api.slack.com/methods/search.messages search.messages` API reference}.
         */
        messages: Method<SearchMessagesArguments, SearchMessagesResponse>;
    };
    readonly team: {
        /**
         * @description Gets the access logs for the current team.
         * @see {@link https://api.slack.com/methods/team.accessLogs `team.accessLogs` API reference}.
         */
        accessLogs: Method<TeamAccessLogsArguments, TeamAccessLogsResponse>;
        /**
         * @description Gets billable users information for the current team.
         * @see {@link https://api.slack.com/methods/team.billableInfo `team.billableInfo` API reference}.
         */
        billableInfo: Method<TeamBillableInfoArguments, TeamBillableInfoResponse>;
        billing: {
            /**
             * @description Reads a workspace's billing plan information.
             * @see {@link https://api.slack.com/methods/team.billing.info `team.billing.info` API reference}.
             */
            info: Method<TeamBillingInfoArguments, TeamBillingInfoResponse>;
        };
        /**
         * @description Gets information about the current team.
         * @see {@link https://api.slack.com/methods/team.info `team.info` API reference}.
         */
        info: Method<TeamInfoArguments, TeamInfoResponse>;
        /**
         * @description Gets the integration logs for the current team.
         * @see {@link https://api.slack.com/methods/team.integrationLogs `team.integrationLogs` API reference}.
         */
        integrationLogs: Method<TeamIntegrationLogsArguments, TeamIntegrationLogsResponse>;
        preferences: {
            /**
             * @description Retrieve a list of a workspace's team preferences.
             * @see {@link https://api.slack.com/methods/team.preferences.list `team.preferences.list` API reference}.
             */
            list: Method<TeamPreferencesListArguments, TeamPreferencesListResponse>;
        };
        profile: {
            /**
             * @description Retrieve a team's profile.
             * @see {@link https://api.slack.com/methods/team.profile.get `team.profile.get` API reference}.
             */
            get: Method<TeamProfileGetArguments, TeamProfileGetResponse>;
        };
    };
    readonly tooling: {
        tokens: {
            /**
             * @description Exchanges a refresh token for a new app configuration token.
             * @see {@link https://api.slack.com/methods/tooling.tokens.rotate `tooling.tokens.rotate` API reference}.
             */
            rotate: Method<ToolingTokensRotateArguments, ToolingTokensRotateResponse>;
        };
    };
    readonly usergroups: {
        /**
         * @description Create a User Group.
         * @see {@link https://api.slack.com/methods/usergroups.create `usergroups.create` API reference}.
         */
        create: Method<UsergroupsCreateArguments, UsergroupsCreateResponse>;
        /**
         * @description Disable an existing User Group.
         * @see {@link https://api.slack.com/methods/usergroups.disable `usergroups.disable` API reference}.
         */
        disable: Method<UsergroupsDisableArguments, UsergroupsDisableResponse>;
        /**
         * @description Enable an existing User Group.
         * @see {@link https://api.slack.com/methods/usergroups.enable `usergroups.enable` API reference}.
         */
        enable: Method<UsergroupsEnableArguments, UsergroupsEnableResponse>;
        /**
         * @description List all User Groups for a team.
         * @see {@link https://api.slack.com/methods/usergroups.list `usergroups.list` API reference}.
         */
        list: Method<UsergroupsListArguments, UsergroupsListResponse>;
        /**
         * @description Update an existing User Group.
         * @see {@link https://api.slack.com/methods/usergroups.update `usergroups.update` API reference}.
         */
        update: Method<UsergroupsUpdateArguments, UsergroupsUpdateResponse>;
        users: {
            /**
             * @description List all users in a User Group.
             * @see {@link https://api.slack.com/methods/usergroups.users.list `usergroups.users.list` API reference}.
             */
            list: Method<UsergroupsUsersListArguments, UsergroupsUsersListResponse>;
            /**
             * @description Update the list of users in a User Group.
             * @see {@link https://api.slack.com/methods/usergroups.users.update `usergroups.users.update` API reference}.
             */
            update: Method<UsergroupsUsersUpdateArguments, UsergroupsUsersUpdateResponse>;
        };
    };
    readonly users: {
        /**
         * @description List conversations the calling user may access.
         * @see {@link https://api.slack.com/methods/users.conversations `users.conversations` API reference}.
         */
        conversations: Method<UsersConversationsArguments, UsersConversationsResponse>;
        /**
         * @description Delete the user profile photo.
         * @see {@link https://api.slack.com/methods/users.deletePhoto `users.deletePhoto` API reference}.
         */
        deletePhoto: Method<UsersDeletePhotoArguments, UsersDeletePhotoResponse>;
        /**
         * @description Gets user presence information.
         * @see {@link https://api.slack.com/methods/users.getPresence `users.getPresence` API reference}.
         */
        getPresence: Method<UsersGetPresenceArguments, UsersGetPresenceResponse>;
        /**
         * @description Get a user's identity.
         * @see {@link https://api.slack.com/methods/users.identity `users.identity` API reference}.
         */
        identity: Method<UsersIdentityArguments, UsersIdentityResponse>;
        /**
         * @description Gets information about a user.
         * @see {@link https://api.slack.com/methods/users.info `users.info` API reference}.
         */
        info: Method<UsersInfoArguments, UsersInfoResponse>;
        /**
         * @description Lists all users in a Slack team.
         * @see {@link https://api.slack.com/methods/users.list `users.list` API reference}.
         */
        list: Method<UsersListArguments, UsersListResponse>;
        /**
         * @description Find a user with an email address.
         * @see {@link https://api.slack.com/methods/users.lookupByEmail `users.lookupByEmail` API reference}.
         */
        lookupByEmail: Method<UsersLookupByEmailArguments, UsersLookupByEmailResponse>;
        /**
         * @description Set the user profile photo.
         * @see {@link https://api.slack.com/methods/users.setPhoto `users.setPhoto` API reference}.
         */
        setPhoto: Method<UsersSetPhotoArguments, UsersSetPhotoResponse>;
        /**
         * @description Manually sets user presence.
         * @see {@link https://api.slack.com/methods/users.setPresence `users.setPresence` API reference}.
         */
        setPresence: Method<UsersSetPresenceArguments, UsersSetPresenceResponse>;
        profile: {
            /**
             * @description Retrieve a user's profile information, including their custom status.
             * @see {@link https://api.slack.com/methods/users.profile.get `users.profile.get` API reference}.
             */
            get: Method<UsersProfileGetArguments, UsersProfileGetResponse>;
            /**
             * @description Set a user's profile information, including custom status.
             * @see {@link https://api.slack.com/methods/users.profile.set `users.profile.set` API reference}.
             */
            set: Method<UsersProfileSetArguments, UsersProfileSetResponse>;
        };
    };
    readonly views: {
        /**
         * @description Open a view for a user.
         * @see {@link https://api.slack.com/methods/views.open `views.open` API reference}.
         */
        open: Method<ViewsOpenArguments, ViewsOpenResponse>;
        /**
         * @description Publish a static view for a user.
         * @see {@link https://api.slack.com/methods/views.publish `views.publish` API reference}.
         */
        publish: Method<ViewsPublishArguments, ViewsPublishResponse>;
        /**
         * @description Push a view onto the stack of a root view.
         * @see {@link https://api.slack.com/methods/views.push `views.push` API reference}.
         */
        push: Method<ViewsPushArguments, ViewsPushResponse>;
        /**
         * @description Update an existing view.
         * @see {@link https://api.slack.com/methods/views.update `views.update` API reference}.
         */
        update: Method<ViewsUpdateArguments, ViewsUpdateResponse>;
    };
    readonly stars: {
        /**
         * @description Save an item for later. Formerly known as adding a star.
         * @deprecated Stars can still be added but they can no longer be viewed or interacted with by end-users.
         * See {@link https://api.slack.com/changelog/2023-07-its-later-already-for-stars-and-reminders our post on stars and the Later list}.
         * @see {@link https://api.slack.com/methods/stars.add `stars.add` API reference}.
         */
        add: Method<StarsAddRemoveArguments, StarsAddResponse>;
        /**
         * @description List a user's saved items, formerly known as stars.
         * @deprecated Stars can still be listed but they can no longer be viewed or interacted with by end-users.
         * See {@link https://api.slack.com/changelog/2023-07-its-later-already-for-stars-and-reminders our post on stars and the Later list}.
         * @see {@link https://api.slack.com/methods/stars.list `stars.list` API reference}.
         */
        list: Method<StarsListArguments, StarsListResponse>;
        /**
         * @description Remove a saved item from a user's saved items, formerly known as stars.
         * @deprecated Stars can still be removed but they can no longer be viewed or interacted with by end-users.
         * See {@link https://api.slack.com/changelog/2023-07-its-later-already-for-stars-and-reminders our post on stars and the Later list}.
         * @see {@link https://api.slack.com/methods/stars.remove `stars.remove` API reference}.
         */
        remove: Method<StarsAddRemoveArguments, StarsRemoveResponse>;
    };
    readonly workflows: {
        /**
         * @description Indicate that an app's step in a workflow completed execution.
         * @deprecated Steps from Apps is deprecated.
         * We're retiring all Slack app functionality around Steps from Apps in September 2024.
         * See {@link https://api.slack.com/changelog/2023-08-workflow-steps-from-apps-step-back our post on deprecating Steps from Apps}.
         * @see {@link https://api.slack.com/methods/workflows.stepCompleted `workflows.stepCompleted` API reference}.
         */
        stepCompleted: Method<WorkflowsStepCompletedArguments, WorkflowsStepCompletedResponse>;
        /**
         * @description Indicate that an app's step in a workflow failed to execute.
         * @deprecated Steps from Apps is deprecated.
         * We're retiring all Slack app functionality around Steps from Apps in September 2024.
         * See {@link https://api.slack.com/changelog/2023-08-workflow-steps-from-apps-step-back our post on deprecating Steps from Apps}.
         * @see {@link https://api.slack.com/methods/workflows.stepFailed `workflows.stepFailed` API reference}.
         */
        stepFailed: Method<WorkflowsStepFailedArguments, WorkflowsStepFailedResponse>;
        /**
         * @description Update the configuration for a workflow step.
         * @deprecated Steps from Apps is deprecated.
         * We're retiring all Slack app functionality around Steps from Apps in September 2024.
         * See {@link https://api.slack.com/changelog/2023-08-workflow-steps-from-apps-step-back our post on deprecating Steps from Apps}.
         * @see {@link https://api.slack.com/methods/workflows.updateStep `workflows.updateStep` API reference}.
         */
        updateStep: Method<WorkflowsUpdateStepArguments, WorkflowsUpdateStepResponse>;
    };
}
