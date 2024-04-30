// Code generated by protoc-gen-go. DO NOT EDIT.
// source: broker.proto

package protocol

import (
	fmt "fmt"
	math "math"

	proto "github.com/golang/protobuf/proto"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion3 // please upgrade the proto package

type MessageType int32

const (
	MessageType_UNKNOWN_MESSAGE_TYPE MessageType = 0
	MessageType_WELCOME              MessageType = 1
	MessageType_CONNECT              MessageType = 2
	MessageType_WEBRTC_OFFER         MessageType = 3
	MessageType_WEBRTC_ANSWER        MessageType = 4
	MessageType_WEBRTC_ICE_CANDIDATE MessageType = 5
	MessageType_PING                 MessageType = 6
	MessageType_SUBSCRIPTION         MessageType = 7
	MessageType_AUTH                 MessageType = 8
	MessageType_TOPIC                MessageType = 9
	MessageType_TOPIC_FW             MessageType = 10
	MessageType_TOPIC_IDENTITY       MessageType = 11
	MessageType_TOPIC_IDENTITY_FW    MessageType = 12
	MessageType_CONNECTION_REFUSED   MessageType = 13
	MessageType_ERROR                MessageType = 14
)

var MessageType_name = map[int32]string{
	0:  "UNKNOWN_MESSAGE_TYPE",
	1:  "WELCOME",
	2:  "CONNECT",
	3:  "WEBRTC_OFFER",
	4:  "WEBRTC_ANSWER",
	5:  "WEBRTC_ICE_CANDIDATE",
	6:  "PING",
	7:  "SUBSCRIPTION",
	8:  "AUTH",
	9:  "TOPIC",
	10: "TOPIC_FW",
	11: "TOPIC_IDENTITY",
	12: "TOPIC_IDENTITY_FW",
	13: "CONNECTION_REFUSED",
	14: "ERROR",
}

var MessageType_value = map[string]int32{
	"UNKNOWN_MESSAGE_TYPE": 0,
	"WELCOME":              1,
	"CONNECT":              2,
	"WEBRTC_OFFER":         3,
	"WEBRTC_ANSWER":        4,
	"WEBRTC_ICE_CANDIDATE": 5,
	"PING":                 6,
	"SUBSCRIPTION":         7,
	"AUTH":                 8,
	"TOPIC":                9,
	"TOPIC_FW":             10,
	"TOPIC_IDENTITY":       11,
	"TOPIC_IDENTITY_FW":    12,
	"CONNECTION_REFUSED":   13,
	"ERROR":                14,
}

func (x MessageType) String() string {
	return proto.EnumName(MessageType_name, int32(x))
}

func (MessageType) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_f209535e190f2bed, []int{0}
}

type Role int32

const (
	Role_UNKNOWN_ROLE             Role = 0
	Role_CLIENT                   Role = 1
	Role_COMMUNICATION_SERVER     Role = 2
	Role_COMMUNICATION_SERVER_HUB Role = 3
)

var Role_name = map[int32]string{
	0: "UNKNOWN_ROLE",
	1: "CLIENT",
	2: "COMMUNICATION_SERVER",
	3: "COMMUNICATION_SERVER_HUB",
}

var Role_value = map[string]int32{
	"UNKNOWN_ROLE":             0,
	"CLIENT":                   1,
	"COMMUNICATION_SERVER":     2,
	"COMMUNICATION_SERVER_HUB": 3,
}

func (x Role) String() string {
	return proto.EnumName(Role_name, int32(x))
}

func (Role) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_f209535e190f2bed, []int{1}
}

type Format int32

const (
	Format_UNKNOWN_FORMAT Format = 0
	Format_PLAIN          Format = 1
	Format_GZIP           Format = 2
)

var Format_name = map[int32]string{
	0: "UNKNOWN_FORMAT",
	1: "PLAIN",
	2: "GZIP",
}

var Format_value = map[string]int32{
	"UNKNOWN_FORMAT": 0,
	"PLAIN":          1,
	"GZIP":           2,
}

func (x Format) String() string {
	return proto.EnumName(Format_name, int32(x))
}

func (Format) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_f209535e190f2bed, []int{2}
}

type ConnectionRefusedReason int32

const (
	ConnectionRefusedReason_UNKNOWN_REASON ConnectionRefusedReason = 0
	ConnectionRefusedReason_SERVER_FULL    ConnectionRefusedReason = 1
	ConnectionRefusedReason_AUTH_FAILED    ConnectionRefusedReason = 2
)

var ConnectionRefusedReason_name = map[int32]string{
	0: "UNKNOWN_REASON",
	1: "SERVER_FULL",
	2: "AUTH_FAILED",
}

var ConnectionRefusedReason_value = map[string]int32{
	"UNKNOWN_REASON": 0,
	"SERVER_FULL":    1,
	"AUTH_FAILED":    2,
}

func (x ConnectionRefusedReason) String() string {
	return proto.EnumName(ConnectionRefusedReason_name, int32(x))
}

func (ConnectionRefusedReason) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_f209535e190f2bed, []int{3}
}

type CoordinatorMessage struct {
	Type                 MessageType `protobuf:"varint,1,opt,name=type,proto3,enum=protocol.MessageType" json:"type,omitempty"`
	XXX_NoUnkeyedLiteral struct{}    `json:"-"`
	XXX_unrecognized     []byte      `json:"-"`
	XXX_sizecache        int32       `json:"-"`
}

func (m *CoordinatorMessage) Reset()         { *m = CoordinatorMessage{} }
func (m *CoordinatorMessage) String() string { return proto.CompactTextString(m) }
func (*CoordinatorMessage) ProtoMessage()    {}
func (*CoordinatorMessage) Descriptor() ([]byte, []int) {
	return fileDescriptor_f209535e190f2bed, []int{0}
}

func (m *CoordinatorMessage) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_CoordinatorMessage.Unmarshal(m, b)
}
func (m *CoordinatorMessage) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_CoordinatorMessage.Marshal(b, m, deterministic)
}
func (m *CoordinatorMessage) XXX_Merge(src proto.Message) {
	xxx_messageInfo_CoordinatorMessage.Merge(m, src)
}
func (m *CoordinatorMessage) XXX_Size() int {
	return xxx_messageInfo_CoordinatorMessage.Size(m)
}
func (m *CoordinatorMessage) XXX_DiscardUnknown() {
	xxx_messageInfo_CoordinatorMessage.DiscardUnknown(m)
}

var xxx_messageInfo_CoordinatorMessage proto.InternalMessageInfo

func (m *CoordinatorMessage) GetType() MessageType {
	if m != nil {
		return m.Type
	}
	return MessageType_UNKNOWN_MESSAGE_TYPE
}

type WelcomeMessage struct {
	Type                 MessageType `protobuf:"varint,1,opt,name=type,proto3,enum=protocol.MessageType" json:"type,omitempty"`
	Alias                uint64      `protobuf:"varint,2,opt,name=alias,proto3" json:"alias,omitempty"`
	AvailableServers     []uint64    `protobuf:"varint,3,rep,packed,name=available_servers,json=availableServers,proto3" json:"available_servers,omitempty"`
	XXX_NoUnkeyedLiteral struct{}    `json:"-"`
	XXX_unrecognized     []byte      `json:"-"`
	XXX_sizecache        int32       `json:"-"`
}

func (m *WelcomeMessage) Reset()         { *m = WelcomeMessage{} }
func (m *WelcomeMessage) String() string { return proto.CompactTextString(m) }
func (*WelcomeMessage) ProtoMessage()    {}
func (*WelcomeMessage) Descriptor() ([]byte, []int) {
	return fileDescriptor_f209535e190f2bed, []int{1}
}

func (m *WelcomeMessage) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_WelcomeMessage.Unmarshal(m, b)
}
func (m *WelcomeMessage) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_WelcomeMessage.Marshal(b, m, deterministic)
}
func (m *WelcomeMessage) XXX_Merge(src proto.Message) {
	xxx_messageInfo_WelcomeMessage.Merge(m, src)
}
func (m *WelcomeMessage) XXX_Size() int {
	return xxx_messageInfo_WelcomeMessage.Size(m)
}
func (m *WelcomeMessage) XXX_DiscardUnknown() {
	xxx_messageInfo_WelcomeMessage.DiscardUnknown(m)
}

var xxx_messageInfo_WelcomeMessage proto.InternalMessageInfo

func (m *WelcomeMessage) GetType() MessageType {
	if m != nil {
		return m.Type
	}
	return MessageType_UNKNOWN_MESSAGE_TYPE
}

func (m *WelcomeMessage) GetAlias() uint64 {
	if m != nil {
		return m.Alias
	}
	return 0
}

func (m *WelcomeMessage) GetAvailableServers() []uint64 {
	if m != nil {
		return m.AvailableServers
	}
	return nil
}

type ConnectMessage struct {
	Type                 MessageType `protobuf:"varint,1,opt,name=type,proto3,enum=protocol.MessageType" json:"type,omitempty"`
	FromAlias            uint64      `protobuf:"varint,2,opt,name=from_alias,json=fromAlias,proto3" json:"from_alias,omitempty"`
	ToAlias              uint64      `protobuf:"varint,3,opt,name=to_alias,json=toAlias,proto3" json:"to_alias,omitempty"`
	XXX_NoUnkeyedLiteral struct{}    `json:"-"`
	XXX_unrecognized     []byte      `json:"-"`
	XXX_sizecache        int32       `json:"-"`
}

func (m *ConnectMessage) Reset()         { *m = ConnectMessage{} }
func (m *ConnectMessage) String() string { return proto.CompactTextString(m) }
func (*ConnectMessage) ProtoMessage()    {}
func (*ConnectMessage) Descriptor() ([]byte, []int) {
	return fileDescriptor_f209535e190f2bed, []int{2}
}

func (m *ConnectMessage) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ConnectMessage.Unmarshal(m, b)
}
func (m *ConnectMessage) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ConnectMessage.Marshal(b, m, deterministic)
}
func (m *ConnectMessage) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ConnectMessage.Merge(m, src)
}
func (m *ConnectMessage) XXX_Size() int {
	return xxx_messageInfo_ConnectMessage.Size(m)
}
func (m *ConnectMessage) XXX_DiscardUnknown() {
	xxx_messageInfo_ConnectMessage.DiscardUnknown(m)
}

var xxx_messageInfo_ConnectMessage proto.InternalMessageInfo

func (m *ConnectMessage) GetType() MessageType {
	if m != nil {
		return m.Type
	}
	return MessageType_UNKNOWN_MESSAGE_TYPE
}

func (m *ConnectMessage) GetFromAlias() uint64 {
	if m != nil {
		return m.FromAlias
	}
	return 0
}

func (m *ConnectMessage) GetToAlias() uint64 {
	if m != nil {
		return m.ToAlias
	}
	return 0
}

type WebRtcMessage struct {
	Type                 MessageType `protobuf:"varint,1,opt,name=type,proto3,enum=protocol.MessageType" json:"type,omitempty"`
	FromAlias            uint64      `protobuf:"varint,2,opt,name=from_alias,json=fromAlias,proto3" json:"from_alias,omitempty"`
	ToAlias              uint64      `protobuf:"varint,3,opt,name=to_alias,json=toAlias,proto3" json:"to_alias,omitempty"`
	Data                 []byte      `protobuf:"bytes,4,opt,name=data,proto3" json:"data,omitempty"`
	XXX_NoUnkeyedLiteral struct{}    `json:"-"`
	XXX_unrecognized     []byte      `json:"-"`
	XXX_sizecache        int32       `json:"-"`
}

func (m *WebRtcMessage) Reset()         { *m = WebRtcMessage{} }
func (m *WebRtcMessage) String() string { return proto.CompactTextString(m) }
func (*WebRtcMessage) ProtoMessage()    {}
func (*WebRtcMessage) Descriptor() ([]byte, []int) {
	return fileDescriptor_f209535e190f2bed, []int{3}
}

func (m *WebRtcMessage) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_WebRtcMessage.Unmarshal(m, b)
}
func (m *WebRtcMessage) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_WebRtcMessage.Marshal(b, m, deterministic)
}
func (m *WebRtcMessage) XXX_Merge(src proto.Message) {
	xxx_messageInfo_WebRtcMessage.Merge(m, src)
}
func (m *WebRtcMessage) XXX_Size() int {
	return xxx_messageInfo_WebRtcMessage.Size(m)
}
func (m *WebRtcMessage) XXX_DiscardUnknown() {
	xxx_messageInfo_WebRtcMessage.DiscardUnknown(m)
}

var xxx_messageInfo_WebRtcMessage proto.InternalMessageInfo

func (m *WebRtcMessage) GetType() MessageType {
	if m != nil {
		return m.Type
	}
	return MessageType_UNKNOWN_MESSAGE_TYPE
}

func (m *WebRtcMessage) GetFromAlias() uint64 {
	if m != nil {
		return m.FromAlias
	}
	return 0
}

func (m *WebRtcMessage) GetToAlias() uint64 {
	if m != nil {
		return m.ToAlias
	}
	return 0
}

func (m *WebRtcMessage) GetData() []byte {
	if m != nil {
		return m.Data
	}
	return nil
}

type ConnectionRefusedMessage struct {
	Type                 MessageType             `protobuf:"varint,1,opt,name=type,proto3,enum=protocol.MessageType" json:"type,omitempty"`
	FromAlias            uint64                  `protobuf:"varint,2,opt,name=from_alias,json=fromAlias,proto3" json:"from_alias,omitempty"`
	ToAlias              uint64                  `protobuf:"varint,3,opt,name=to_alias,json=toAlias,proto3" json:"to_alias,omitempty"`
	Reason               ConnectionRefusedReason `protobuf:"varint,4,opt,name=reason,proto3,enum=protocol.ConnectionRefusedReason" json:"reason,omitempty"`
	Data                 []byte                  `protobuf:"bytes,5,opt,name=data,proto3" json:"data,omitempty"`
	XXX_NoUnkeyedLiteral struct{}                `json:"-"`
	XXX_unrecognized     []byte                  `json:"-"`
	XXX_sizecache        int32                   `json:"-"`
}

func (m *ConnectionRefusedMessage) Reset()         { *m = ConnectionRefusedMessage{} }
func (m *ConnectionRefusedMessage) String() string { return proto.CompactTextString(m) }
func (*ConnectionRefusedMessage) ProtoMessage()    {}
func (*ConnectionRefusedMessage) Descriptor() ([]byte, []int) {
	return fileDescriptor_f209535e190f2bed, []int{4}
}

func (m *ConnectionRefusedMessage) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ConnectionRefusedMessage.Unmarshal(m, b)
}
func (m *ConnectionRefusedMessage) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ConnectionRefusedMessage.Marshal(b, m, deterministic)
}
func (m *ConnectionRefusedMessage) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ConnectionRefusedMessage.Merge(m, src)
}
func (m *ConnectionRefusedMessage) XXX_Size() int {
	return xxx_messageInfo_ConnectionRefusedMessage.Size(m)
}
func (m *ConnectionRefusedMessage) XXX_DiscardUnknown() {
	xxx_messageInfo_ConnectionRefusedMessage.DiscardUnknown(m)
}

var xxx_messageInfo_ConnectionRefusedMessage proto.InternalMessageInfo

func (m *ConnectionRefusedMessage) GetType() MessageType {
	if m != nil {
		return m.Type
	}
	return MessageType_UNKNOWN_MESSAGE_TYPE
}

func (m *ConnectionRefusedMessage) GetFromAlias() uint64 {
	if m != nil {
		return m.FromAlias
	}
	return 0
}

func (m *ConnectionRefusedMessage) GetToAlias() uint64 {
	if m != nil {
		return m.ToAlias
	}
	return 0
}

func (m *ConnectionRefusedMessage) GetReason() ConnectionRefusedReason {
	if m != nil {
		return m.Reason
	}
	return ConnectionRefusedReason_UNKNOWN_REASON
}

func (m *ConnectionRefusedMessage) GetData() []byte {
	if m != nil {
		return m.Data
	}
	return nil
}

type MessageHeader struct {
	Type                 MessageType `protobuf:"varint,1,opt,name=type,proto3,enum=protocol.MessageType" json:"type,omitempty"`
	XXX_NoUnkeyedLiteral struct{}    `json:"-"`
	XXX_unrecognized     []byte      `json:"-"`
	XXX_sizecache        int32       `json:"-"`
}

func (m *MessageHeader) Reset()         { *m = MessageHeader{} }
func (m *MessageHeader) String() string { return proto.CompactTextString(m) }
func (*MessageHeader) ProtoMessage()    {}
func (*MessageHeader) Descriptor() ([]byte, []int) {
	return fileDescriptor_f209535e190f2bed, []int{5}
}

func (m *MessageHeader) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_MessageHeader.Unmarshal(m, b)
}
func (m *MessageHeader) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_MessageHeader.Marshal(b, m, deterministic)
}
func (m *MessageHeader) XXX_Merge(src proto.Message) {
	xxx_messageInfo_MessageHeader.Merge(m, src)
}
func (m *MessageHeader) XXX_Size() int {
	return xxx_messageInfo_MessageHeader.Size(m)
}
func (m *MessageHeader) XXX_DiscardUnknown() {
	xxx_messageInfo_MessageHeader.DiscardUnknown(m)
}

var xxx_messageInfo_MessageHeader proto.InternalMessageInfo

func (m *MessageHeader) GetType() MessageType {
	if m != nil {
		return m.Type
	}
	return MessageType_UNKNOWN_MESSAGE_TYPE
}

type PingMessage struct {
	Type                 MessageType `protobuf:"varint,1,opt,name=type,proto3,enum=protocol.MessageType" json:"type,omitempty"`
	Time                 float64     `protobuf:"fixed64,2,opt,name=time,proto3" json:"time,omitempty"`
	XXX_NoUnkeyedLiteral struct{}    `json:"-"`
	XXX_unrecognized     []byte      `json:"-"`
	XXX_sizecache        int32       `json:"-"`
}

func (m *PingMessage) Reset()         { *m = PingMessage{} }
func (m *PingMessage) String() string { return proto.CompactTextString(m) }
func (*PingMessage) ProtoMessage()    {}
func (*PingMessage) Descriptor() ([]byte, []int) {
	return fileDescriptor_f209535e190f2bed, []int{6}
}

func (m *PingMessage) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_PingMessage.Unmarshal(m, b)
}
func (m *PingMessage) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_PingMessage.Marshal(b, m, deterministic)
}
func (m *PingMessage) XXX_Merge(src proto.Message) {
	xxx_messageInfo_PingMessage.Merge(m, src)
}
func (m *PingMessage) XXX_Size() int {
	return xxx_messageInfo_PingMessage.Size(m)
}
func (m *PingMessage) XXX_DiscardUnknown() {
	xxx_messageInfo_PingMessage.DiscardUnknown(m)
}

var xxx_messageInfo_PingMessage proto.InternalMessageInfo

func (m *PingMessage) GetType() MessageType {
	if m != nil {
		return m.Type
	}
	return MessageType_UNKNOWN_MESSAGE_TYPE
}

func (m *PingMessage) GetTime() float64 {
	if m != nil {
		return m.Time
	}
	return 0
}

// NOTE: topics is a space separated string in the format specified by Format
type SubscriptionMessage struct {
	Type                 MessageType `protobuf:"varint,1,opt,name=type,proto3,enum=protocol.MessageType" json:"type,omitempty"`
	Format               Format      `protobuf:"varint,2,opt,name=format,proto3,enum=protocol.Format" json:"format,omitempty"`
	Topics               []byte      `protobuf:"bytes,3,opt,name=topics,proto3" json:"topics,omitempty"`
	XXX_NoUnkeyedLiteral struct{}    `json:"-"`
	XXX_unrecognized     []byte      `json:"-"`
	XXX_sizecache        int32       `json:"-"`
}

func (m *SubscriptionMessage) Reset()         { *m = SubscriptionMessage{} }
func (m *SubscriptionMessage) String() string { return proto.CompactTextString(m) }
func (*SubscriptionMessage) ProtoMessage()    {}
func (*SubscriptionMessage) Descriptor() ([]byte, []int) {
	return fileDescriptor_f209535e190f2bed, []int{7}
}

func (m *SubscriptionMessage) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_SubscriptionMessage.Unmarshal(m, b)
}
func (m *SubscriptionMessage) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_SubscriptionMessage.Marshal(b, m, deterministic)
}
func (m *SubscriptionMessage) XXX_Merge(src proto.Message) {
	xxx_messageInfo_SubscriptionMessage.Merge(m, src)
}
func (m *SubscriptionMessage) XXX_Size() int {
	return xxx_messageInfo_SubscriptionMessage.Size(m)
}
func (m *SubscriptionMessage) XXX_DiscardUnknown() {
	xxx_messageInfo_SubscriptionMessage.DiscardUnknown(m)
}

var xxx_messageInfo_SubscriptionMessage proto.InternalMessageInfo

func (m *SubscriptionMessage) GetType() MessageType {
	if m != nil {
		return m.Type
	}
	return MessageType_UNKNOWN_MESSAGE_TYPE
}

func (m *SubscriptionMessage) GetFormat() Format {
	if m != nil {
		return m.Format
	}
	return Format_UNKNOWN_FORMAT
}

func (m *SubscriptionMessage) GetTopics() []byte {
	if m != nil {
		return m.Topics
	}
	return nil
}

type AuthMessage struct {
	Type                 MessageType `protobuf:"varint,1,opt,name=type,proto3,enum=protocol.MessageType" json:"type,omitempty"`
	Role                 Role        `protobuf:"varint,2,opt,name=role,proto3,enum=protocol.Role" json:"role,omitempty"`
	Body                 []byte      `protobuf:"bytes,3,opt,name=body,proto3" json:"body,omitempty"`
	XXX_NoUnkeyedLiteral struct{}    `json:"-"`
	XXX_unrecognized     []byte      `json:"-"`
	XXX_sizecache        int32       `json:"-"`
}

func (m *AuthMessage) Reset()         { *m = AuthMessage{} }
func (m *AuthMessage) String() string { return proto.CompactTextString(m) }
func (*AuthMessage) ProtoMessage()    {}
func (*AuthMessage) Descriptor() ([]byte, []int) {
	return fileDescriptor_f209535e190f2bed, []int{8}
}

func (m *AuthMessage) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_AuthMessage.Unmarshal(m, b)
}
func (m *AuthMessage) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_AuthMessage.Marshal(b, m, deterministic)
}
func (m *AuthMessage) XXX_Merge(src proto.Message) {
	xxx_messageInfo_AuthMessage.Merge(m, src)
}
func (m *AuthMessage) XXX_Size() int {
	return xxx_messageInfo_AuthMessage.Size(m)
}
func (m *AuthMessage) XXX_DiscardUnknown() {
	xxx_messageInfo_AuthMessage.DiscardUnknown(m)
}

var xxx_messageInfo_AuthMessage proto.InternalMessageInfo

func (m *AuthMessage) GetType() MessageType {
	if m != nil {
		return m.Type
	}
	return MessageType_UNKNOWN_MESSAGE_TYPE
}

func (m *AuthMessage) GetRole() Role {
	if m != nil {
		return m.Role
	}
	return Role_UNKNOWN_ROLE
}

func (m *AuthMessage) GetBody() []byte {
	if m != nil {
		return m.Body
	}
	return nil
}

type TopicMessage struct {
	Type                 MessageType `protobuf:"varint,1,opt,name=type,proto3,enum=protocol.MessageType" json:"type,omitempty"`
	FromAlias            uint64      `protobuf:"varint,2,opt,name=from_alias,json=fromAlias,proto3" json:"from_alias,omitempty"`
	Topic                string      `protobuf:"bytes,3,opt,name=topic,proto3" json:"topic,omitempty"`
	Body                 []byte      `protobuf:"bytes,4,opt,name=body,proto3" json:"body,omitempty"`
	XXX_NoUnkeyedLiteral struct{}    `json:"-"`
	XXX_unrecognized     []byte      `json:"-"`
	XXX_sizecache        int32       `json:"-"`
}

func (m *TopicMessage) Reset()         { *m = TopicMessage{} }
func (m *TopicMessage) String() string { return proto.CompactTextString(m) }
func (*TopicMessage) ProtoMessage()    {}
func (*TopicMessage) Descriptor() ([]byte, []int) {
	return fileDescriptor_f209535e190f2bed, []int{9}
}

func (m *TopicMessage) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_TopicMessage.Unmarshal(m, b)
}
func (m *TopicMessage) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_TopicMessage.Marshal(b, m, deterministic)
}
func (m *TopicMessage) XXX_Merge(src proto.Message) {
	xxx_messageInfo_TopicMessage.Merge(m, src)
}
func (m *TopicMessage) XXX_Size() int {
	return xxx_messageInfo_TopicMessage.Size(m)
}
func (m *TopicMessage) XXX_DiscardUnknown() {
	xxx_messageInfo_TopicMessage.DiscardUnknown(m)
}

var xxx_messageInfo_TopicMessage proto.InternalMessageInfo

func (m *TopicMessage) GetType() MessageType {
	if m != nil {
		return m.Type
	}
	return MessageType_UNKNOWN_MESSAGE_TYPE
}

func (m *TopicMessage) GetFromAlias() uint64 {
	if m != nil {
		return m.FromAlias
	}
	return 0
}

func (m *TopicMessage) GetTopic() string {
	if m != nil {
		return m.Topic
	}
	return ""
}

func (m *TopicMessage) GetBody() []byte {
	if m != nil {
		return m.Body
	}
	return nil
}

type TopicFWMessage struct {
	Type                 MessageType `protobuf:"varint,1,opt,name=type,proto3,enum=protocol.MessageType" json:"type,omitempty"`
	FromAlias            uint64      `protobuf:"varint,2,opt,name=from_alias,json=fromAlias,proto3" json:"from_alias,omitempty"`
	Body                 []byte      `protobuf:"bytes,3,opt,name=body,proto3" json:"body,omitempty"`
	XXX_NoUnkeyedLiteral struct{}    `json:"-"`
	XXX_unrecognized     []byte      `json:"-"`
	XXX_sizecache        int32       `json:"-"`
}

func (m *TopicFWMessage) Reset()         { *m = TopicFWMessage{} }
func (m *TopicFWMessage) String() string { return proto.CompactTextString(m) }
func (*TopicFWMessage) ProtoMessage()    {}
func (*TopicFWMessage) Descriptor() ([]byte, []int) {
	return fileDescriptor_f209535e190f2bed, []int{10}
}

func (m *TopicFWMessage) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_TopicFWMessage.Unmarshal(m, b)
}
func (m *TopicFWMessage) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_TopicFWMessage.Marshal(b, m, deterministic)
}
func (m *TopicFWMessage) XXX_Merge(src proto.Message) {
	xxx_messageInfo_TopicFWMessage.Merge(m, src)
}
func (m *TopicFWMessage) XXX_Size() int {
	return xxx_messageInfo_TopicFWMessage.Size(m)
}
func (m *TopicFWMessage) XXX_DiscardUnknown() {
	xxx_messageInfo_TopicFWMessage.DiscardUnknown(m)
}

var xxx_messageInfo_TopicFWMessage proto.InternalMessageInfo

func (m *TopicFWMessage) GetType() MessageType {
	if m != nil {
		return m.Type
	}
	return MessageType_UNKNOWN_MESSAGE_TYPE
}

func (m *TopicFWMessage) GetFromAlias() uint64 {
	if m != nil {
		return m.FromAlias
	}
	return 0
}

func (m *TopicFWMessage) GetBody() []byte {
	if m != nil {
		return m.Body
	}
	return nil
}

type TopicIdentityMessage struct {
	Type                 MessageType `protobuf:"varint,1,opt,name=type,proto3,enum=protocol.MessageType" json:"type,omitempty"`
	FromAlias            uint64      `protobuf:"varint,2,opt,name=from_alias,json=fromAlias,proto3" json:"from_alias,omitempty"`
	Topic                string      `protobuf:"bytes,3,opt,name=topic,proto3" json:"topic,omitempty"`
	Identity             []byte      `protobuf:"bytes,4,opt,name=identity,proto3" json:"identity,omitempty"`
	Role                 Role        `protobuf:"varint,5,opt,name=role,proto3,enum=protocol.Role" json:"role,omitempty"`
	Body                 []byte      `protobuf:"bytes,6,opt,name=body,proto3" json:"body,omitempty"`
	XXX_NoUnkeyedLiteral struct{}    `json:"-"`
	XXX_unrecognized     []byte      `json:"-"`
	XXX_sizecache        int32       `json:"-"`
}

func (m *TopicIdentityMessage) Reset()         { *m = TopicIdentityMessage{} }
func (m *TopicIdentityMessage) String() string { return proto.CompactTextString(m) }
func (*TopicIdentityMessage) ProtoMessage()    {}
func (*TopicIdentityMessage) Descriptor() ([]byte, []int) {
	return fileDescriptor_f209535e190f2bed, []int{11}
}

func (m *TopicIdentityMessage) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_TopicIdentityMessage.Unmarshal(m, b)
}
func (m *TopicIdentityMessage) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_TopicIdentityMessage.Marshal(b, m, deterministic)
}
func (m *TopicIdentityMessage) XXX_Merge(src proto.Message) {
	xxx_messageInfo_TopicIdentityMessage.Merge(m, src)
}
func (m *TopicIdentityMessage) XXX_Size() int {
	return xxx_messageInfo_TopicIdentityMessage.Size(m)
}
func (m *TopicIdentityMessage) XXX_DiscardUnknown() {
	xxx_messageInfo_TopicIdentityMessage.DiscardUnknown(m)
}

var xxx_messageInfo_TopicIdentityMessage proto.InternalMessageInfo

func (m *TopicIdentityMessage) GetType() MessageType {
	if m != nil {
		return m.Type
	}
	return MessageType_UNKNOWN_MESSAGE_TYPE
}

func (m *TopicIdentityMessage) GetFromAlias() uint64 {
	if m != nil {
		return m.FromAlias
	}
	return 0
}

func (m *TopicIdentityMessage) GetTopic() string {
	if m != nil {
		return m.Topic
	}
	return ""
}

func (m *TopicIdentityMessage) GetIdentity() []byte {
	if m != nil {
		return m.Identity
	}
	return nil
}

func (m *TopicIdentityMessage) GetRole() Role {
	if m != nil {
		return m.Role
	}
	return Role_UNKNOWN_ROLE
}

func (m *TopicIdentityMessage) GetBody() []byte {
	if m != nil {
		return m.Body
	}
	return nil
}

type TopicIdentityFWMessage struct {
	Type                 MessageType `protobuf:"varint,1,opt,name=type,proto3,enum=protocol.MessageType" json:"type,omitempty"`
	FromAlias            uint64      `protobuf:"varint,2,opt,name=from_alias,json=fromAlias,proto3" json:"from_alias,omitempty"`
	Identity             []byte      `protobuf:"bytes,3,opt,name=identity,proto3" json:"identity,omitempty"`
	Role                 Role        `protobuf:"varint,4,opt,name=role,proto3,enum=protocol.Role" json:"role,omitempty"`
	Body                 []byte      `protobuf:"bytes,5,opt,name=body,proto3" json:"body,omitempty"`
	XXX_NoUnkeyedLiteral struct{}    `json:"-"`
	XXX_unrecognized     []byte      `json:"-"`
	XXX_sizecache        int32       `json:"-"`
}

func (m *TopicIdentityFWMessage) Reset()         { *m = TopicIdentityFWMessage{} }
func (m *TopicIdentityFWMessage) String() string { return proto.CompactTextString(m) }
func (*TopicIdentityFWMessage) ProtoMessage()    {}
func (*TopicIdentityFWMessage) Descriptor() ([]byte, []int) {
	return fileDescriptor_f209535e190f2bed, []int{12}
}

func (m *TopicIdentityFWMessage) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_TopicIdentityFWMessage.Unmarshal(m, b)
}
func (m *TopicIdentityFWMessage) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_TopicIdentityFWMessage.Marshal(b, m, deterministic)
}
func (m *TopicIdentityFWMessage) XXX_Merge(src proto.Message) {
	xxx_messageInfo_TopicIdentityFWMessage.Merge(m, src)
}
func (m *TopicIdentityFWMessage) XXX_Size() int {
	return xxx_messageInfo_TopicIdentityFWMessage.Size(m)
}
func (m *TopicIdentityFWMessage) XXX_DiscardUnknown() {
	xxx_messageInfo_TopicIdentityFWMessage.DiscardUnknown(m)
}

var xxx_messageInfo_TopicIdentityFWMessage proto.InternalMessageInfo

func (m *TopicIdentityFWMessage) GetType() MessageType {
	if m != nil {
		return m.Type
	}
	return MessageType_UNKNOWN_MESSAGE_TYPE
}

func (m *TopicIdentityFWMessage) GetFromAlias() uint64 {
	if m != nil {
		return m.FromAlias
	}
	return 0
}

func (m *TopicIdentityFWMessage) GetIdentity() []byte {
	if m != nil {
		return m.Identity
	}
	return nil
}

func (m *TopicIdentityFWMessage) GetRole() Role {
	if m != nil {
		return m.Role
	}
	return Role_UNKNOWN_ROLE
}

func (m *TopicIdentityFWMessage) GetBody() []byte {
	if m != nil {
		return m.Body
	}
	return nil
}

func init() {
	proto.RegisterEnum("protocol.MessageType", MessageType_name, MessageType_value)
	proto.RegisterEnum("protocol.Role", Role_name, Role_value)
	proto.RegisterEnum("protocol.Format", Format_name, Format_value)
	proto.RegisterEnum("protocol.ConnectionRefusedReason", ConnectionRefusedReason_name, ConnectionRefusedReason_value)
	proto.RegisterType((*CoordinatorMessage)(nil), "protocol.CoordinatorMessage")
	proto.RegisterType((*WelcomeMessage)(nil), "protocol.WelcomeMessage")
	proto.RegisterType((*ConnectMessage)(nil), "protocol.ConnectMessage")
	proto.RegisterType((*WebRtcMessage)(nil), "protocol.WebRtcMessage")
	proto.RegisterType((*ConnectionRefusedMessage)(nil), "protocol.ConnectionRefusedMessage")
	proto.RegisterType((*MessageHeader)(nil), "protocol.MessageHeader")
	proto.RegisterType((*PingMessage)(nil), "protocol.PingMessage")
	proto.RegisterType((*SubscriptionMessage)(nil), "protocol.SubscriptionMessage")
	proto.RegisterType((*AuthMessage)(nil), "protocol.AuthMessage")
	proto.RegisterType((*TopicMessage)(nil), "protocol.TopicMessage")
	proto.RegisterType((*TopicFWMessage)(nil), "protocol.TopicFWMessage")
	proto.RegisterType((*TopicIdentityMessage)(nil), "protocol.TopicIdentityMessage")
	proto.RegisterType((*TopicIdentityFWMessage)(nil), "protocol.TopicIdentityFWMessage")
}

func init() { proto.RegisterFile("broker.proto", fileDescriptor_f209535e190f2bed) }

var fileDescriptor_f209535e190f2bed = []byte{
	// 788 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xbc, 0x94, 0x4f, 0x6f, 0xe3, 0x44,
	0x18, 0xc6, 0xeb, 0xc4, 0x71, 0xd3, 0x37, 0x89, 0x99, 0x0e, 0xd9, 0x12, 0x10, 0x48, 0xc1, 0xa7,
	0x10, 0xa4, 0x4a, 0x94, 0x13, 0x5c, 0x90, 0xeb, 0x8c, 0x5b, 0x0b, 0xc7, 0x8e, 0xc6, 0x0e, 0xd6,
	0x22, 0x24, 0xcb, 0x49, 0xa6, 0x8b, 0x45, 0xe2, 0x89, 0x6c, 0x67, 0xa5, 0x5c, 0x38, 0x70, 0xe2,
	0xc2, 0xd7, 0xe1, 0x43, 0x70, 0xe0, 0x33, 0xa1, 0x99, 0xb8, 0x49, 0x56, 0xec, 0x4a, 0xbb, 0xd1,
	0x6e, 0x4f, 0x9e, 0xf7, 0x8f, 0xdf, 0xe7, 0xf7, 0xbc, 0x1e, 0x19, 0xda, 0xb3, 0x9c, 0xff, 0xc6,
	0xf2, 0xeb, 0x75, 0xce, 0x4b, 0x8e, 0x9b, 0xf2, 0x31, 0xe7, 0x4b, 0xe3, 0x07, 0xc0, 0x16, 0xe7,
	0xf9, 0x22, 0xcd, 0x92, 0x92, 0xe7, 0x63, 0x56, 0x14, 0xc9, 0x0b, 0x86, 0xbf, 0x02, 0xb5, 0xdc,
	0xae, 0x59, 0x4f, 0xe9, 0x2b, 0x03, 0xfd, 0xe6, 0xd9, 0xf5, 0x63, 0xfb, 0x75, 0xd5, 0x10, 0x6e,
	0xd7, 0x8c, 0xca, 0x16, 0xe3, 0x77, 0xd0, 0x23, 0xb6, 0x9c, 0xf3, 0x15, 0x7b, 0xf7, 0x97, 0x71,
	0x17, 0x1a, 0xc9, 0x32, 0x4d, 0x8a, 0x5e, 0xad, 0xaf, 0x0c, 0x54, 0xba, 0x0b, 0xf0, 0xd7, 0x70,
	0x99, 0xbc, 0x4c, 0xd2, 0x65, 0x32, 0x5b, 0xb2, 0xb8, 0x60, 0xf9, 0x4b, 0x96, 0x17, 0xbd, 0x7a,
	0xbf, 0x3e, 0x50, 0x29, 0xda, 0x17, 0x82, 0x5d, 0xde, 0xd8, 0x80, 0x6e, 0xf1, 0x2c, 0x63, 0xf3,
	0xf2, 0x04, 0xfd, 0x2f, 0x00, 0x1e, 0x72, 0xbe, 0x8a, 0x8f, 0x21, 0x2e, 0x44, 0xc6, 0x94, 0x20,
	0x9f, 0x42, 0xb3, 0xe4, 0x55, 0xb1, 0x2e, 0x8b, 0xe7, 0x25, 0x97, 0x25, 0xe3, 0x4f, 0x05, 0x3a,
	0x11, 0x9b, 0xd1, 0x72, 0xfe, 0x94, 0xb2, 0x18, 0x83, 0xba, 0x48, 0xca, 0xa4, 0xa7, 0xf6, 0x95,
	0x41, 0x9b, 0xca, 0xb3, 0xf1, 0xaf, 0x02, 0xbd, 0x6a, 0x05, 0x29, 0xcf, 0x28, 0x7b, 0xd8, 0x14,
	0x6c, 0xf1, 0xa4, 0x54, 0xdf, 0x81, 0x96, 0xb3, 0xa4, 0xe0, 0x99, 0xe4, 0xd2, 0x6f, 0xbe, 0x3c,
	0xc8, 0xfc, 0x0f, 0x8c, 0xca, 0x46, 0x5a, 0xbd, 0xb0, 0x37, 0xd4, 0x38, 0x32, 0xf4, 0x3d, 0x74,
	0x2a, 0xba, 0x7b, 0x96, 0x2c, 0x58, 0xfe, 0x2e, 0xd7, 0xd1, 0x85, 0xd6, 0x24, 0xcd, 0x5e, 0x9c,
	0x60, 0x1f, 0x83, 0x5a, 0xa6, 0x2b, 0x26, 0x8d, 0x2b, 0x54, 0x9e, 0x8d, 0x3f, 0x14, 0xf8, 0x38,
	0xd8, 0xcc, 0x8a, 0x79, 0x9e, 0xae, 0x85, 0x87, 0x13, 0xc6, 0x0e, 0x40, 0x7b, 0xe0, 0xf9, 0x2a,
	0x29, 0xe5, 0x60, 0xfd, 0x06, 0x1d, 0x9a, 0x6d, 0x99, 0xa7, 0x55, 0x1d, 0x5f, 0x81, 0x56, 0xf2,
	0x75, 0x3a, 0xdf, 0xad, 0xb7, 0x4d, 0xab, 0xc8, 0x58, 0x43, 0xcb, 0xdc, 0x94, 0xbf, 0x9e, 0xa0,
	0x6d, 0x80, 0x9a, 0xf3, 0x25, 0xab, 0x94, 0xf5, 0x43, 0x2b, 0xe5, 0x4b, 0x46, 0x65, 0x4d, 0xd8,
	0x9e, 0xf1, 0xc5, 0xb6, 0xd2, 0x94, 0x67, 0x61, 0xbb, 0x1d, 0x0a, 0xf1, 0xf7, 0x7f, 0x8b, 0xba,
	0xd0, 0x90, 0xb6, 0xa4, 0xde, 0x05, 0xdd, 0x05, 0x7b, 0x08, 0xf5, 0x08, 0x22, 0x03, 0x5d, 0x32,
	0xd8, 0xd1, 0xfb, 0xa7, 0x78, 0x9d, 0xe9, 0x7f, 0x14, 0xe8, 0x4a, 0x41, 0x67, 0xc1, 0xb2, 0x32,
	0x2d, 0xb7, 0x4f, 0x65, 0xfe, 0x33, 0x68, 0xa6, 0x95, 0x64, 0xb5, 0x80, 0x7d, 0xbc, 0xff, 0x82,
	0x8d, 0xb7, 0xf8, 0x82, 0xda, 0x91, 0x99, 0xbf, 0x15, 0xb8, 0x7a, 0xc5, 0xcc, 0x87, 0xd8, 0xe2,
	0x31, 0x78, 0xfd, 0x0d, 0xe0, 0xea, 0x5b, 0x80, 0x37, 0x0e, 0xe0, 0xc3, 0xbf, 0x6a, 0xd0, 0x3a,
	0x02, 0xc1, 0x3d, 0xe8, 0x4e, 0xbd, 0x1f, 0x3d, 0x3f, 0xf2, 0xe2, 0x31, 0x09, 0x02, 0xf3, 0x8e,
	0xc4, 0xe1, 0xf3, 0x09, 0x41, 0x67, 0xb8, 0x05, 0xe7, 0x11, 0x71, 0x2d, 0x7f, 0x4c, 0x90, 0x22,
	0x02, 0xcb, 0xf7, 0x3c, 0x62, 0x85, 0xa8, 0x86, 0x11, 0xb4, 0x23, 0x72, 0x4b, 0x43, 0x2b, 0xf6,
	0x6d, 0x9b, 0x50, 0x54, 0xc7, 0x97, 0xd0, 0xa9, 0x32, 0xa6, 0x17, 0x44, 0x84, 0x22, 0x55, 0x0c,
	0xae, 0x52, 0x8e, 0x45, 0x62, 0xcb, 0xf4, 0x46, 0xce, 0xc8, 0x0c, 0x09, 0x6a, 0xe0, 0x26, 0xa8,
	0x13, 0xc7, 0xbb, 0x43, 0x9a, 0x18, 0x14, 0x4c, 0x6f, 0x03, 0x8b, 0x3a, 0x93, 0xd0, 0xf1, 0x3d,
	0x74, 0x2e, 0x6a, 0xe6, 0x34, 0xbc, 0x47, 0x4d, 0x7c, 0x01, 0x8d, 0xd0, 0x9f, 0x38, 0x16, 0xba,
	0xc0, 0x6d, 0x68, 0xca, 0x63, 0x6c, 0x47, 0x08, 0x30, 0x06, 0x7d, 0x17, 0x39, 0x23, 0xe2, 0x85,
	0x4e, 0xf8, 0x1c, 0xb5, 0xf0, 0x33, 0xb8, 0x7c, 0x35, 0x27, 0x5a, 0xdb, 0xf8, 0x0a, 0x70, 0x45,
	0xed, 0xf8, 0x5e, 0x4c, 0x89, 0x3d, 0x0d, 0xc8, 0x08, 0x75, 0xc4, 0x6c, 0x42, 0xa9, 0x4f, 0x91,
	0x3e, 0xfc, 0x05, 0x54, 0xb1, 0x31, 0x81, 0xf2, 0xb8, 0x07, 0xea, 0xbb, 0xc2, 0x3f, 0x80, 0x66,
	0xb9, 0x0e, 0xf1, 0x42, 0xa4, 0x08, 0x33, 0x96, 0x3f, 0x1e, 0x4f, 0x3d, 0xc7, 0x32, 0xe5, 0xac,
	0x80, 0xd0, 0x9f, 0x08, 0x45, 0x35, 0xfc, 0x39, 0xf4, 0x5e, 0x57, 0x89, 0xef, 0xa7, 0xb7, 0xa8,
	0x3e, 0xfc, 0x06, 0xb4, 0xdd, 0x4f, 0x48, 0x50, 0x3f, 0xce, 0xb7, 0x7d, 0x3a, 0x36, 0x43, 0x74,
	0x26, 0x30, 0x26, 0xae, 0xe9, 0x78, 0x48, 0x11, 0xbe, 0xef, 0x7e, 0x76, 0x26, 0xa8, 0x36, 0xf4,
	0xe1, 0x93, 0x37, 0xfc, 0xd3, 0x8f, 0x67, 0x50, 0x62, 0x06, 0xbe, 0x87, 0xce, 0xf0, 0x47, 0xd0,
	0xaa, 0x14, 0xed, 0xa9, 0xeb, 0x22, 0x45, 0x24, 0xc4, 0x06, 0x63, 0xdb, 0x74, 0x5c, 0x32, 0x42,
	0xb5, 0x99, 0x26, 0xaf, 0xc6, 0xb7, 0xff, 0x05, 0x00, 0x00, 0xff, 0xff, 0x3d, 0xe5, 0x73, 0x58,
	0xa2, 0x08, 0x00, 0x00,
}